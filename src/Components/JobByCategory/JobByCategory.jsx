
import useJobs from "../../hooks/useJobs";



const JobByCategory = () => {
    
    const { data, isLoading } = useJobs();

    
    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[40vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }
    
    // data.map(item => console.log(item.jobCategory))
    // const remote = data.filter(item => )

    const remote = data.filter(item => item.jobCategory == "Remote");

    console.log(remote);

    return (
        <div>

        </div>
    );
};

export default JobByCategory;