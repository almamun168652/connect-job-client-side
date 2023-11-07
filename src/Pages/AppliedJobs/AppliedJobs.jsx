import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AppliedTbRow from "../../Components/AppliedTbRow/AppliedTbRow";
// import { Link } from "react-router-dom";

const AppliedJobs = () => {
    const { user, loading } = useContext(AuthContext);

    const { data = [], isLoading } = useQuery({
        queryKey: ['myApplied'],
        queryFn: async () => {
            if (user?.email) {
                const data = await fetch(`http://localhost:5000/applied/${user?.email}`)
                return await data.json();
            }
        },
        enabled: !loading && !!user?.email
    })


    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[40vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }

    // appliedResume,postBanner,postTitle,companyLogo,postUsername,jobCategory,salleryStart,salleryEnd,postDescription,postingDate,deadline,applicantNumber,postEmail

    return (
        <div className="max-w-[1200px] mx-auto px-4 my-14">
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
                            data.map(oneTr => <AppliedTbRow key={oneTr._id} oneTr={oneTr}></AppliedTbRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;