import React from "react";
import "./AboutSection.scss";

import signature from "./Signature.svg";
import bioImg from "../ReusableComponents/homePageImages/melvin-bio.JPEG";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={bioImg} className="about-pic" alt="Portrait of Melvin" />
        <div className="text-box">
          <p className="bio">
            Professional makeup artist with over 10 years of experience in
            cosmetics, theatre, and artistry. Born in Puerto Rico, I’ve been
            painting since I could hold a brush. Painting has been my hobby ever
            since I was just a child and now it’s turned into my passion which I
            want to share with the world. My FX work is heavily inspired by
            Disney and theatre. I first started doing FX makeup for stage back
            in high school and has slowly progressed to film and commercial work
            around the state of FL. A few years into makeup, I started to
            broaden my horizons and practiced beauty makeup and fell in love
            with it. I’ve been a glam makeup artist for 6 years now traveling
            for weddings, photoshoots, and pageants, also around the state of
            FL. My goal is to bring out that confidence and beauty through
            makeup from a soft bridal look to a full face with sparkle and
            strong lash whether it’s for your very first photoshoot or saying “I
            do” at the altar, I am here for your makeup needs.
          </p>
          <img src={signature} className="signature" alt="Melvin Signature" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
