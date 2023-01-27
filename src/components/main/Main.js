import AboutMe from "./aboutMe/AboutMe";
import Contacts from "./portfolio/contacts/Contacts";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";

const Main = () => {
    return ( 
        <>
            <AboutMe />
            <Skills />
            <Portfolio />
            <Contacts />
        </>
     );
}
 
export default Main;