import { createContext, ReactNode } from "react";
//--- INTERFACE
interface ContextProps {
  children: ReactNode;
}
export const ContextData = createContext<unknown>({});

const ContextProvider = (props: ContextProps) => {
  return (
    <ContextData.Provider value={{}}>{props.children}</ContextData.Provider>
  );
};

export default ContextProvider;
