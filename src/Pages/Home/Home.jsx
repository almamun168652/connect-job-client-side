import Banner from "../../Components/Banner/Banner";
import JobByCategory from "../../Components/JobByCategory/JobByCategory";



const Home = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4">
            <Banner></Banner>
            <JobByCategory></JobByCategory>
        </div>
    );
};

export default Home;