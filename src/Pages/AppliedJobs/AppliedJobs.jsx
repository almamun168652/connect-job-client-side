import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AppliedTbRow from "../../Components/AppliedTbRow/AppliedTbRow";
// import { Link } from "react-router-dom";
import { usePDF } from 'react-to-pdf';
import { Helmet } from "react-helmet";


const AppliedJobs = () => {
    const { user, loading } = useContext(AuthContext);
    const [optionJob, setOptionJob] = useState('');

    const [category, setCategory] = useState([]);

    const lowerOption = optionJob.toLowerCase();

    const { toPDF, targetRef } = usePDF({ filename: 'Applied-Summary.pdf' });

    const { data = [], isLoading } = useQuery({
        queryKey: ['myApplied'],
        queryFn: async () => {
            if (user?.email) {
                const data = await fetch(`https://connect-job-681f5.web.app/applied/${user?.email}`)
                return await data.json();

            }
        },
        enabled: !loading && !!user?.email
    })



    const handleOptionChange = async (event) => {
        setOptionJob(event.target.value);
    };

    useEffect(() => {

        const filterCategory = data?.filter(item => item.jobCategory.toLowerCase().includes(lowerOption));
        setCategory(filterCategory);

    }, [data , lowerOption]);

    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[40vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }




    // jobCategory

    return (
        <div className="max-w-[1200px] mx-auto px-4 my-14">

            <Helmet>
                <title>Connet-Job | Applied-Jobs</title>
            </Helmet>

            <div className="flex justify-between items-center mb-6">
                <form className="flex flex-col md:flex-row gap-2 items-center">
                    <label className="text-[#152475] font-bold text-xl">Find Job By Category</label>
                    <select className="p-[6px] text-black rounded border-2 border-[#152475]" value={optionJob} onChange={handleOptionChange}>
                        <option value={''}>All Job</option>
                        <option value="On Site">On Site</option>
                        <option value="Remote">Remote</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </form>
                <div>
                    <button onClick={() => toPDF()} className="bg-green-700 px-8 py-2 rounded-md cursor-pointer text-white">Download Summary</button>
                </div>

            </div>

            <div ref={targetRef}>
                <div className="overflow-x-auto shadow-md sm:rounded-lg">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#152475] text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Company Logo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Resume Link
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Banner
                                </th>
                                <th scope="col" className="px-10 py-3">
                                    Posting Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Application Deadline
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Applicant Number
                                </th>
                                <th scope="col" className="px-10 py-3">
                                    Name of Applicant
                                </th>
                                <th scope="col" className="px-14 py-3">
                                    Sallery Range
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Advertiser Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Applicant Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name of Advertiser
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Job Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category?.map(oneTr => <AppliedTbRow key={oneTr._id} oneTr={oneTr}></AppliedTbRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default AppliedJobs;