//--- ICONS
import {
  VscSourceControl,
  VscFeedback,
  VscWarning,
  VscBell,
  VscError,
  VscSync,
  VscCheckAll,
  VscBroadcast,
  VscJson,
} from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="footer__terminal">
        <ul>
          <li>PROBLEMS</li>
          <li>OUTPUT</li>
          <li>
            <span className="footer__terminal--underline">TERMINAL</span>
          </li>
          <li>DEBUG CONSOLE</li>
        </ul>
      </section>

      <section className="footer__http">
        <div className="footer__http-local">Local:</div>
        <div className="footer__http-local--host">
          http://localhost:<b>3000</b>
        </div>
        <div className="footer__http-network">On Your Network:</div>
        <div className="footer__http-network--host">
          http://127.0.0.1:<b>3000</b>
        </div>
      </section>
      <br />

      <section className="footer__copyright">
        Copyright &copy; 2022 <span>Roberto Castelli</span>.
      </section>
      <br />

      <section className="footer__webpack">
        <div className="footer__webpack--successfully">
          webpack compiled <span>successfully</span>
        </div>
        <div className="footer__webpack--issues">No issues found.</div>
      </section>
      <br />

      <section className="footer__icons">
        <ul>
          <li>
            <VscSourceControl size={16} />
          </li>
          <li>master*</li>
          <li>
            <VscSync size={16} />
          </li>
          <li>
            <VscError size={16} />
            &nbsp;0
          </li>
          <li>
            <VscWarning size={16} />
            &nbsp;0
          </li>
        </ul>

        <ul>
          <li>
            <VscJson size={16} />
            &nbsp;Typescript React
          </li>
          <li>
            <VscBroadcast size={16} />
            &nbsp;Go live
          </li>
          <li>
            <VscCheckAll size={16} />
            &nbsp;Prettier
          </li>
          <li>
            <VscFeedback size={16} />
          </li>
          <li>
            <VscBell size={16} />
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
