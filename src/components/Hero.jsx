

const Hero = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/FXxGwmK/3.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-5">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn btn-warning btn-sm">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;