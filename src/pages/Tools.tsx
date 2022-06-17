//--- CONTEXT
import { useContext } from "react";
import { ContextData } from "../context";
//--- INTERFACE
import { List } from "../database/tools";

const Tools = () => {
  const { mastering, learning } = useContext(ContextData);

  return (
    <div className="tools__container">
      <div className="tools__content">
        {/* eslint-disable-next-line */}
        <h1>// tools</h1>
        <ul>
          <li>&nbsp;1 &nbsp;.mastering {"{"}</li>
          {mastering.map((elem: List) => {
            return (
              <li key={elem.num}>
                &nbsp;{elem.num}{" "}
                <span>
                  &nbsp;&nbsp;
                  <img src={elem.icon} alt="icon" /> {elem.tool}
                </span>
              </li>
            );
          })}
          <li>&nbsp;9 &nbsp;{"}"}</li>
          <li>10</li>
          <li>11 &nbsp;.learning {"{"}</li>
          {learning.map((elem: List) => {
            return (
              <li key={elem.num}>
                {elem.num}{" "}
                <span>
                  &nbsp;&nbsp;
                  <img src={elem.icon} alt="icon" /> {elem.tool}
                </span>
              </li>
            );
          })}
          <li>13 &nbsp;{"}"}</li>
          <li>14</li>
          <li>15</li>
        </ul>
      </div>
    </div>
  );
};

export default Tools;
