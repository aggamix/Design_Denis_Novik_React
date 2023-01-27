import "./style.css";
import IN from './Image/IN.svg';
import INSTA from './Image/INSTA.svg';
import BE from './Image/BE.svg';
import DR from './Image/DR.svg';

const Contacts = () => {
  return (
    <div className="conteiner">
      <div className="contacts-content" id="Contacts">
        <h2 className="title-2">Contacts</h2>
        <p className="main__p">
          Want to know more or just chat?
          <br />
          You are welcome!
        </p>
        <button className="contacts__btn">
          <a href="#" className="contacts__link">
            <p className="btn__p">Send message</p>
          </a>
        </button>
        <div className="contacts__items">
          <a href="#">
            <img src={IN} alt="" />
          </a>
          <a href="#">
            <img src={INSTA} alt="" />
          </a>
          <a href="#">
            <img src={BE} alt="" />
          </a>
          <a href="#">
            <img src={DR} alt="" />
          </a>
        </div>
        <p className="contacts__p">
          Like me on <br />
          LinkedIn, Instagram, Behance, Dribble
        </p>
      </div>
    </div>
  );
};

export default Contacts;
