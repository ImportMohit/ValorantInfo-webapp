
import facebookIcon from "../../images/socials/facebook.png"
import LinkedinIcon from "../../images/socials/linkedin.png"
import WhatsappIcon from "../../images/socials/whatsapp.png"
import InstagramIcon from "../../images/socials/instagram.png"
import GithubIcon from "../../images/socials/github.png"
/********Footer**********/
const Footer = () => {
 
  return (
    <footer className="footer">
      <div class="footer-content">
        <h3>Developed By Mohit 🙂</h3>
        <p> Java / Javascript Developer / Software Engineer / Gamer</p>
        <ul className="socials">
      
    <li><a href="/"><img src={facebookIcon}/></a></li>
    <li><a href="/"><img src={WhatsappIcon}/></a></li>
    <li><a href="/"><img src={LinkedinIcon}/></a></li>
    <li><a href="/"><img src={GithubIcon}/></a></li>
    <li><a href="https://www.linkedin.com/in/mohit-kumar-85b44519a/"><img src={InstagramIcon}/></a></li>
 </ul>
 <div class="footer-bottom">
 <p>copyright &copy;2023 <a href="#">Mohit kumar</a>  </p>
 </div>
      </div>
    </footer>
  );
};

export default Footer;
