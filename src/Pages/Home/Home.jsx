import Banner from "../../Components/Banner/Banner";
import HowWork from "../../Components/HowWork/HowWork";
import JobByCategory from "../../Components/JobByCategory/JobByCategory";




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

        </div>
    );
};

export default Home;