import logoVscode from "../images/vscode_icon.svg";
import {
  VscChromeClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";

const Title = () => {
  return (
    <div className="title__container">
      <div className="title__content">
        <span>
          <ul className="title__ul">
            <li>
              <img className="title__logo" src={logoVscode} alt="logo-vscode" />
            </li>
            <li>File</li>
            <li>Edit</li>
            <li>View</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
        </span>
      </div>

      <div className="title__content">
        <span>Roberto Castelli - Visual Studio Code</span>
      </div>

      <div className="title__content">
        <span>
          <VscChromeMinimize />
          <VscChromeMaximize />
          <VscChromeClose />
        </span>
      </div>
    </div>
  );
};

export default Title;
