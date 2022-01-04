import React from "react";
import "./About.css";
import {AboutContainer} from "./style";

const About = (props: any) => {
    console.log(props);
    return (
        <AboutContainer>
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is
        granted, all else follows.”
      </span>
            <span>− George Orwell, 1984</span>
        </AboutContainer>
    );
}

export default About;