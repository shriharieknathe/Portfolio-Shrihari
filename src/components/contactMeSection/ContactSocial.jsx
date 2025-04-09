import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/shriharieknathe/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/shriharieknathe" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/shrihari999/" Icon={SiLeetcode} />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
