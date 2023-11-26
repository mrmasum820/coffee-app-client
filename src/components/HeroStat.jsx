import icon1 from '../images/icons/1.png';
import icon2 from '../images/icons/2.png';
import icon3 from '../images/icons/3.png';
import icon4 from '../images/icons/4.png';

const HeroStat = () => {
    return (
        <div className="bg-[#ECEAE3] py-10">
            <div className='lg:flex max-w-screen-lg mx-auto'>
                <div className="card lg:w-1/4">
                    <img className='w-[70px] pl-8' src={icon1} alt="" />
                    <div className="card-body pt-4">
                        <h2 className="card-title">Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
                <div className="card lg:w-1/4">
                    <img className='w-[70px] pl-8' src={icon2} alt="" />
                    <div className="card-body pt-4">
                        <h2 className="card-title">High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                </div>
                <div className="card lg:w-1/4">
                    <img className='w-[70px] pl-8' src={icon3} alt="" />
                    <div className="card-body pt-4">
                        <h2 className="card-title">Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                </div>
                <div className="card lg:w-1/4">
                    <img className='w-[70px] pl-8' src={icon4} alt="" />
                    <div className="card-body pt-4">
                        <h2 className="card-title">Proper Roosting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroStat;