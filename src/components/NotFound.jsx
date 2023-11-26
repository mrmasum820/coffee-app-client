import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotFoundImg from '../images/404/404.gif'

const NotFound = () => {
    return (
        <div className="max-w-screen-lg mx-auto my-10">
            <Link to="/" className="flex items-center"><FaArrowLeft /><h3>Back to home</h3></Link>
            <div className="md:flex justify-center items-center">
                <img src={NotFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;