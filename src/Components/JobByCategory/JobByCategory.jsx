
import useJobs from "../../hooks/useJobs";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import CategoryCard from "../CategoryCard/CategoryCard";


const JobByCategory = () => {

    const { data, isLoading  } = useJobs();


    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[40vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }

    const onSite = data.filter(item => item.jobCategory == "On Site");
    const remote = data.filter(item => item.jobCategory == "Remote");
    const partTime = data.filter(item => item.jobCategory == "Part Time");
    const hyBrid = data.filter(item => item.jobCategory == "Hybrid");



    return (
        <div>

            {/* title */}
            <SectionTitle title='Job By Category'></SectionTitle>

            <Tabs >
                <TabList className='text-center text-xs mb-10 text-[#152475] border-b border-gray-300 font-semibold md:text-lg'>
                    <Tab>All Jobs</Tab>
                    <Tab>On Site</Tab>
                    <Tab>Remote</Tab>
                    <Tab>Part Time</Tab>
                    <Tab>Hybrid</Tab>
                </TabList>

                <TabPanel>
                    <CategoryCard items={data}/>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={onSite}/>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={remote}/>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={partTime}/>
                </TabPanel>
                <TabPanel>
                    <CategoryCard items={hyBrid}/>
                </TabPanel>
               
            </Tabs>
        </div>
    );
};

export default JobByCategory;