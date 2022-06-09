import { VscFiles, VscGithubAlt, VscCode, VscBook } from "react-icons/vsc";
const Menu = () => {
  return (
    <div className="menu__container">
      <ul>
        <li>
          <VscFiles size={30} />
        </li>
        <li>
          <VscGithubAlt size={30} />
        </li>
        <li>
          <VscCode size={30} />
        </li>
        <li>
          <VscBook size={30} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
