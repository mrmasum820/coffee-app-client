import { Link } from 'react-router-dom';
import footerLogo from '../images/more/logo1.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="footer max-w-screen-lg mx-auto p-4 my-8">
                <aside>
                    <img className='w-[75px]' src={footerLogo} alt="" />
                    <h3 className='text-[#331A15] font-bold text-2xl'>Expresso Emporium</h3>
                    <p>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="#">
                            <FaFacebook className='text-2xl' />
                        </Link>
                        <Link to="#">
                            <FaTwitter className='text-2xl' />
                        </Link>
                        <Link to="#">
                            <FaInstagram className='text-2xl' />
                        </Link>
                        <Link to="#">
                            <FaLinkedin className='text-2xl' />
                        </Link>
                    </div>
                </aside>
                <nav>
                    <h3 className='text-[#331A15] font-bold text-2xl'>Connect With Us</h3>
                    <form>
                        <input type="text" placeholder="Name" className="input form-control input-sm" />
                        <input type="email" placeholder="Email" className="form-control input input-sm my-2" />
                        <textarea className="textarea form-control" placeholder="Message"></textarea>
                        <input className='btn btn-outline btn-sm' type="submit" value="Send Message" />
                    </form>
                </nav>
            </footer>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/QFSFvfr/24.jpg)' }} className="lg:flex justify-center text-white p-4">
                <h2>Copyright Espresso Emporium ! All Rights Reserved</h2>
            </div>
        </>
    );
};

export default Footer;