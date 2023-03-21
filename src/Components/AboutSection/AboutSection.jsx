import React from "react";
import "./AboutSection.scss";
import headshot from "./AboutPic.png";
import signature from "./Signature.svg";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={headshot} className="about-pic" alt="Portrait of Melvin" />
        <div className="text-box">
          <p className="bio">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. <br />
            Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
            amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis
            eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed
            ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.
            Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
            vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu
            mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula
            vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam
            eget mi in purus lobortis eleifend sed.
          </p>
          <img src={signature} className="signature" alt="Melvin Signature" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
