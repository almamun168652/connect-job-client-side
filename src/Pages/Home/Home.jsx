import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import HowWork from "../../Components/HowWork/HowWork";
import JobByCategory from "../../Components/JobByCategory/JobByCategory";
import OurSponser from "../../Components/OurSponser/OurSponser";



const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4">

    

            <Banner></Banner>
            <div className="my-20">
                <JobByCategory></JobByCategory>
            </div>

            <div className="mb-20">
                <HowWork></HowWork>
            </div>
            <div className="mb-20 mt-10">
                <OurSponser></OurSponser>
            </div>

            <Helmet>
                <title>Connet-Job</title>
            </Helmet>

        </div>
    );
};

export default Home;