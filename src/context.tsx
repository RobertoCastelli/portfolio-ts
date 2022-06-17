//--- CONTEXT
import { createContext, ReactNode, useState, useEffect } from "react";
//--- DATABASE
import { mastering, learning } from "./database/tools";
import { listTop, listBottom } from "./database/menu";
import { list } from "./database/explorer";
import { projects } from "./database/projects";
import { posts } from "./database/posts";

//--- INTERFACE
interface ContextProps {
  children: ReactNode;
}

interface BreadCrumbs {
  tech: string;
}

//--- CONTEXT
export const ContextData = createContext<any>({});

const ContextProvider = (props: ContextProps) => {
  //--- STATES
  const [isExpanded, setisExpanded] = useState(false);
  const [breadCrumbs, setBreadCrumbs] = useState<BreadCrumbs[]>([]);

  //--- SET ACCORDION OPEN/CLOSE
  const handleAccordion = () => setisExpanded(!isExpanded);

  //--- GET BREADCRUMBS (project tech array)
  useEffect(() => {
    let test = projects.map((project: BreadCrumbs) => {
      return project.tech;
    });
  }, []);

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
        posts,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

export default ContextProvider;
