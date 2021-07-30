import React from "react";
// import Card from "../Card/index.js";
import "./styles.css";

const AboutMe = () => {
  return (
    <div>
      <div className=" container2">
        <div className=" whoIam flex-container">Who Am I ?</div>
      </div>
      <div>
        <div className="bGround flex-container">
          <div className="aboutMe ">
            {/* <img className="devIcon" src={devIcon4} alt="Logo" /> */}

            <p className="myBio">
              I am a proud first generation American who was brought up by a
              strong grandfather. I am a proud husband and father. My wife
              Autumn has been my North Star in life. We are working hard to
              teach our children to leave the world a better place than they
              found it. As much as I enjoy rearing other people’s biographies,
              resumes have always seemed like an odd format as I do NOT like
              talking about myself, but I believe I was taught the value of a
              strong work ethic, loyalty, and it is easy for me to get along
              with people as I like people very much. I am also a good learner
              yet not always the quickest one. My biggest weakness, I think, is
              focussing on one thing with too much intensity and missing the big
              picture at times and I also tend to have little patience for
              unnecessary corporate bureaucracy though I have learned to deal
              with it effectively. I hope to earn your trust and I will work
              tirelessly to become a valuable member of your team. I am willing
              and able to relocate anywhere in the continental United States and
              am legally authorized to work in the US for any employer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
