import "./footer.css";
import SocialLink from "../SocialLink/SocialLink";

import vk from './vk.svg';
import gitHub from './gitHub.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="copyright">
                        <p>© 2024 OlympiadGames</p>
                    </div>
                    <ul className="social">
                        <li className="social_item">
                            <SocialLink NameImage={gitHub} Link={"https://github.com/ntlifee"} Width={"20px"} />
                        </li>
                        <li className="social_item">
                            <SocialLink NameImage={gitHub} Link={"https://github.com/CsharpMaster37"} Width={"20px"} />
                        </li>
                        <li className="social_item">
                            <SocialLink NameImage={vk} Link={"https://vk.com/id273271929"} Width={"20px"} />
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}

export default Footer;