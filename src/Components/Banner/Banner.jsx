import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col-reverse gap-10 h-full w-full lg:flex-row bg-gradient-to-r from-[#24aca5c6] to-rose-500">
                    <div data-aos="fade-up" data-aos-duration="1000" className="text-center w-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-bold text-black"><span>Visit Our</span> Edu Think Website</h1>
                        <p className="text-md md:text-lg my-6 text-black">Educational conferences foster knowledge exchange, networking, and innovation, enhancing professional growth and advancing education`s quality and impact.</p>
                        <span className="text-black hover:bg-white transition-all border px-6 py-2"><Link>Get Started</Link></span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/TWkywcC/banner-asdf-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;