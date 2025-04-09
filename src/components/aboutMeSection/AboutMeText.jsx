import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m a Frontend Developer with a passion for building clean, responsive,
        and interactive web experiences. I specialize in React, TypeScript, and
        modern web technologies, and I enjoy turning complex ideas into smooth,
        user-friendly interfaces. From crafting AI-powered chat applications to
        developing real-time collaborative tools, I love working on projects
        that blend creativity with functionality. I’m constantly exploring new
        tools, solving DSA challenges, and pushing my skills to create
        meaningful digital solutions. When I’m not coding, I’m usually
        experimenting with GenAI, learning something new, or refining designs to
        deliver the best user experience possible.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
