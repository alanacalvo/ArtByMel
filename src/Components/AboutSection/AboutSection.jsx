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
            Hi! I’m Melvin, but most call me Mel. Born and raised in Puerto
            Rico, I moved to Florida at the age of 14. As a young boy I would
            pick up a pen and doodle away on every surface, floor, table, paper,
            anything I could think of as my personal canvas. Creating with my
            hands was, and still is, my specialty. From then on I’ve developed
            my art skills; making ideas come to life! I went to Howard W. Blake
            High School where I gained a deeper passion for body paint and
            makeup. I fell in love with theater where I learned SFX and body
            paint. Being a part of shows like “Into the Woods'' and “The Wizard
            of Oz” where the characters had fun and colorful looks has been
            great exposure. Working behind the scenes as a makeup/theater artist
            in school plays inspired me to pursue my career in SFX makeup. As I
            was learning about the transformation of makeup, I had the
            opportunity to work in cosmetic retail where my development and
            passion for beauty surfaced. I witnessed how the power of makeup can
            bring out the best of someone which brought me to Glam. Working
            weddings and photoshoots all across the state of Florida, I’ve seen
            how confident a client becomes as a result. My goal is to help you
            feel the most empowered that you can feel. I want to bring out the
            best of you through your inner beauty. Makeup enhances a side of us
            we didn’t know we had. An alter-ego; a mysterious and exciting new
            persona. In my decade of learning and growing I was given the chance
            to work in independent films and pageants across the state of
            Florida which have motivated me to become the artist I am today.
            From paper to canvas to a complexion on a bride; art has many
            mediums and ways to be exposed. Here I am!
          </p>
          <img src={signature} className="signature" alt="Melvin Signature" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
