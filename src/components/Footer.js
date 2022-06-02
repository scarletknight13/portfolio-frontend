
import { BsGithub, BsLinkedin } from "react-icons/bs";
import '../styles/Footer.css'
function Footer(props){
    return (
        <div className="Footer">
            <div className="container">
                <p>Copyright Jesse Broxton</p>
                <a target="_blank" href="https://github.com/scarletknight13"><BsGithub /></a>
                <a target="_blank" href="https://www.linkedin.com/in/jesse-broxton/"><BsLinkedin /></a>
            </div>
        </div>
    )
}
export default Footer;