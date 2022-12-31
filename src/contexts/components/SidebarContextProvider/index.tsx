import { createContext, useEffect, useState } from "react";
import { SidebarContextProviderProps } from "./SidebarContextProviderProps";
import { SidebarContextProps } from './SidebarContextProps';

const isSidebarOpenLocalStorage = localStorage.getItem('isSidebarOpen');
const defaultValue = (isSidebarOpenLocalStorage === 'true')

export const SidebarContext = createContext<SidebarContextProps>(({ on: defaultValue, onChange: () => {}}));


export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
  const [on, setOn] = useState<boolean>(defaultValue);
  
  useEffect(() => {
    localStorage.setItem('isSidebarOpen', (on).toString())
  }, [on])
  
  const onChange = () => setOn(!on)

  return (
    <SidebarContext.Provider value={{ on, onChange}}>
      {children}
    </SidebarContext.Provider>
  )
}