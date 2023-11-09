import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MyjobTr from "../../Components/MyJobTr/MyjobTr";
import { Helmet } from "react-helmet";

const MyJobs = () => {

    // const [optionBrand, setOptionBrand] = useState();

    const { user, loading } = useContext(AuthContext);

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['myJobs'],
        queryFn: async () => {
            if (user?.email) {
                const data = await fetch(`https://connect-job-681f5.web.app/jobs/${user?.email}`)
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





    return (
        <div className="max-w-[1200px] mx-auto px-4 my-20">

            <Helmet>
                <title>Connet-Job | My-Jobs</title>
            </Helmet>

            <SectionTitle title='My Jobs'></SectionTitle>

            <div className="overflow-x-auto">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase bg-[#152475] text-white">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Job Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Posting Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Application Deadline
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sallery Range
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Update Job
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Delete Job
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <MyjobTr refetch={refetch} key={item._id} item={item}></MyjobTr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyJobs;