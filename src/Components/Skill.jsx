import "../Scss/skill.scss";
import { IoLogoJavascript, IoLogoCss3,IoLogoHtml5,IoLogoSass,IoLogoWordpress} from "react-icons/io";
import { BiLogoReact } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";
import { BsGithub } from "react-icons/bs";
import { SiMongoosedotws } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className="contentSkill">
        <IoLogoCss3 className="iconSkill" />
        <IoLogoJavascript className="iconSkill" />
        <IoLogoHtml5 className="iconSkill" />
        <BiLogoReact className="iconSkill" />
        <IoLogoSass className="iconSkill" />
        <IoLogoWordpress className="iconSkill" />
        <LiaNode className="iconSkill" />
        <BsGithub className="iconSkill" />
        <SiMongoosedotws className="iconSkill" />
      </div>
    </>
  );
};

export default Skill;
