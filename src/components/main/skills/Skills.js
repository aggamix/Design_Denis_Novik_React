import "./style.css";
import AdobePS from "./Image/PS.png";
import AdobeAI from "./Image/AI.png";
import AdobeAE from "./Image/AE.png";
import Figma from "./Image/Figma.png";
import Star from "./Image/Star.svg";
import Star1 from "./Image/Star-1.svg";

const Skills = () => {
  return (
    <div className="conteiner">
      <div className="skills-content" id="Skills">
        <h2 className="title-2">Skills</h2>
        <div className="skills__text">
          <p className="main__p">I work in such programs as</p>
        </div>
        <div className="skills__desc">
          <div className="skills__card">
            <img src={AdobePS} alt="" />
            <p className="skills__p">Adobe Phoposhop</p>
            <div className="skills__stars">
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star1} alt="" />
            </div>
          </div>
          <div className="skills__card">
            <img src={AdobeAI} alt="" />
            <p className="skills__p">Adobe Illustrator</p>
            <div className="skills__stars">
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star1} alt="" />
              <img className="star" src={Star1} alt="" />
            </div>
          </div>
          <div className="skills__card">
            <img src={AdobeAE} alt="" />
            <p className="skills__p">Adobe After Effects</p>
            <div className="skills__stars">
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star1} alt="" />
            </div>
          </div>
          <div className="skills__card">
            <img src={Figma} alt="" />
            <p className="skills__p">Figma</p>
            <div className="skills__stars">
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star} alt="" />
              <img className="star" src={Star1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
