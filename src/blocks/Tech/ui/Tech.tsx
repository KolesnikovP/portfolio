import React from "react";
import { technologies } from "../../../shared/const/content";
import { BallCanvas } from "../../../widgets/BallsCanvas";
import { SectionWrapper } from "../../../shared/lib/components/SectionWrapper";

const Tech = () => {
  return (
  <div className="flex flex-row flex-wrap gap-10">
    {technologies.map((tech) => (
      <div className="w-28 h-28" key={tech.name}>
          <BallCanvas 
            icon={tech.icon}
          />
      </div>
    ))}
  </div>
  );
};

export default SectionWrapper(Tech, 'tech') ;
