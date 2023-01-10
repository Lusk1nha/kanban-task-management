import { Primitive, FieldValues, Control, FieldArrayMethodProps, UseFieldArrayProps, useFieldArray } from "react-hook-form";

export type MIsTuple<T extends ReadonlyArray<any>> =
  number extends T['length'] ? false : true;

export type MTupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

export type MArrayKey = number;

export type MArrayPathImpl<K extends string | number, V, TV> =
  V extends Primitive
  ? never
  : V extends ReadonlyArray<infer U>
  ? U extends Primitive
  ? never
  /** Here I added this check to ensure that value extends TV */
  : (U extends TV ? `${K}` : never)
  | `${K}.${MArrayPath<V, TV>}`
  : `${K}.${MArrayPath<V, TV>}`;

export type MArrayPath<T, TV> =
  T extends ReadonlyArray<infer V>
  ? MIsTuple<T> extends true
  ? {
    [K in MTupleKey<T>]-?: MArrayPathImpl<K & string, T[K], TV>;
  }[MTupleKey<T>]
  : MArrayPathImpl<MArrayKey, V, TV>
  : {
    [K in keyof T]-?: MArrayPathImpl<K & string, T[K], TV>;
  }[keyof T];

export type MFieldArrayPath<TFieldValues extends FieldValues, TValueType> =
  MArrayPath<TFieldValues, TValueType>;

export type MFieldArrayItem<T> = T & {
  id: string;
}

export interface FormFilesFieldProps<TFieldValues extends FieldValues, TFieldArrayName extends MFieldArrayPath<TFieldValues, any> = MFieldArrayPath<TFieldValues, any>> {
  control: Control<TFieldValues>;
  name: TFieldArrayName;
}

export function useMFieldArray<
  TValueType = any,
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends MFieldArrayPath<TFieldValues, TValueType> = MFieldArrayPath<TFieldValues, TValueType>
>(props: UseFieldArrayProps<
  TFieldValues,
  /** @ts-ignore*/
  TFieldArrayName
>) {
  const { fields, append, update, ...other } = useFieldArray(props as any);
  return {
    ...other,
    append: append as unknown as (value: TValueType, options?: FieldArrayMethodProps) => void,
    update: update as unknown as (index: number, value: unknown) => void,
    fields: fields as unknown as MFieldArrayItem<TValueType>[]
  };
}

export interface IFieldValue {
  Title: string;
}

export interface IFormFields {
  files: IFieldValue[];
  numbers: { n: number }[];
}