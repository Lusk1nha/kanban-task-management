import { FieldValues, Control } from "react-hook-form";
import { IFieldValue, MFieldArrayPath, useMFieldArray } from "../model/forms";


interface FormFilesFieldProps<TFieldValues extends FieldValues, TFieldArrayName> {
  control: Control<TFieldValues>;
  name: TFieldArrayName;
}

export function FieldsGenerator<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends MFieldArrayPath<TFieldValues, IFieldValue> = MFieldArrayPath<TFieldValues, IFieldValue>
>({ control, name }: FormFilesFieldProps<TFieldValues, TFieldArrayName>) {
  const { fields, append, remove } = useMFieldArray<
    IFieldValue,
    TFieldValues,
    TFieldArrayName
  >({
    name,
    control
  });

  const handleAdd = () => {
    append({
      Title: "Teste"
    });
  };

  return (
    <div>
      {fields.map((field, iField) => {
        return <div key={field.id} style={{ display: 'flex' }}>
          <div>{field.Title}</div>
          <button
            type="button"
            onClick={() => {
              remove(iField);
            }}
          >
            X
          </button>
        </div>;
      })}
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}
