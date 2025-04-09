import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const experiences = [
  {
    title: "Front-End Developer Intern",
    company: "Mindstix Software Labs, Pune",
    duration: "Jan 2023 – Jul 2023",
    responsibilities: [
      "Worked with the team to build visually appealing, responsive web interfaces",
      "Followed UI/UX best practices to enhance user engagement",
      "Contributed to front-end features and ensured consistency across components",
      "Actively participated in code reviews and collaborated using Git-based workflows",
    ],
  },
  {
    title: "Member of Technical Staff",
    company: "Mindstix Software Labs, Pune",
    duration: "Jul 2023 – Present",
    responsibilities: [
      "Contributed to a major enterprise project: AMWAY.COM",
      "Participated in all 7 phases of the Software Development Life Cycle (SDLC)",
      "Translated design patterns into scalable and maintainable application architectures",
      "Collaborated closely with stakeholders to bring ideas and features to life",
      "Followed best practices: peer code reviews, unit testing, and detailed documentation",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between gap-12">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
