import { createContext, ReactNode, useState } from "react"
//--- INTERFACE
interface ContextProps {
  children: ReactNode
}

export const ContextData = createContext<any>({})

const ContextProvider = (props: ContextProps) => {
  //--- STATES
  const [isExpanded, setisExpanded] = useState<boolean>(false)

  //--- SET ACCORDION STATE
  const handleAccordion = () => setisExpanded(!isExpanded)

  return (
    <ContextData.Provider value={{ isExpanded, handleAccordion }}>
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
