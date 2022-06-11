//--- CONTEXT
import { createContext, ReactNode, useState } from "react"
//--- DATABASE
import { mastering, learning } from "./database/tools"
import { listTop, listBottom } from "./database/menu"
import { list } from "./database/explorer"
import { projects } from "./database/projects"

//--- INTERFACE
interface ContextProps {
  children: ReactNode
}

//--- CONTEXT
export const ContextData = createContext<any>({})

const ContextProvider = (props: ContextProps) => {
  //--- STATES
  const [isExpanded, setisExpanded] = useState<boolean>(false)

  //--- SET ACCORDION STATE
  const handleAccordion = () => setisExpanded(!isExpanded)

  return (
    <ContextData.Provider
      value={{
        isExpanded,
        handleAccordion,
        mastering,
        learning,
        listTop,
        listBottom,
        list,
        projects,
      }}
    >
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
