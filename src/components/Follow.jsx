import gallary1 from '../images/cups/Rectangle 9.png';
import gallary2 from '../images/cups/Rectangle 10.png';
import gallary3 from '../images/cups/Rectangle 11.png';
import gallary4 from '../images/cups/Rectangle 12.png';
import gallary5 from '../images/cups/Rectangle 13.png';
import gallary6 from '../images/cups/Rectangle 14.png';
import gallary7 from '../images/cups/Rectangle 15.png';
import gallary8 from '../images/cups/Rectangle 16.png';

const Follow = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-10 p-4'>
            <div className="text-center mb-10">
                <h4 className='text-[#331A15]'>Follow Us Now</h4>
                <h2 className="text-4xl font-bold my-2">Follow on Instagram</h2>
            </div>
            <div className='md:grid grid-cols-4 gap-4'>
                <img className='mt-2' src={gallary1} alt="" />
                <img className='mt-2' src={gallary2} alt="" />
                <img className='mt-2' src={gallary3} alt="" />
                <img className='mt-2' src={gallary4} alt="" />
            </div>
            <div className='md:grid grid-cols-4 gap-4 md:mt-4'>
                <img className='mt-2' src={gallary5} alt="" />
                <img className='mt-2' src={gallary6} alt="" />
                <img className='mt-2' src={gallary7} alt="" />
                <img className='mt-2' src={gallary8} alt="" />
            </div>
        </div>
    );
};

export default Follow;