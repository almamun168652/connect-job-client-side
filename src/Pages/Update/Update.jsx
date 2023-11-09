import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Swal from "sweetalert2";

const Update = () => {



    const { id } = useParams();
    const navigate = useNavigate();


    const { data, refetch, isLoading } = useQuery({
        queryKey: ['updateData'],
        queryFn: async () => {
            const data = await fetch(`https://connect-job-681f5.web.app/job/${id}`);
            return await data.json();
        }
    })

    console.log(data);

    const [updateDeadline, setUpdateDeadline] = useState(new Date());
    const [optionJob, setOptionJob] = useState(data?.jobCategory);

    const handleCategoryUpdate = async (event) => {
        setOptionJob(event.target.value);
    };


    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[80vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }

    const {
        banner,
        title,
        logo,
        salleryStart,
        salleryEnd,
        description,
    } = data || {}


    const handleUpdateJob = async (event) => {

        event.preventDefault();
        const form = event.target;
        const banner = form.banner.value;
        const title = form.title.value;
        const logo = form.logo.value;
        const salleryStart = form.salleryStart.value;
        const salleryEnd = form.salleryEnd.value;
        const description = form.description.value;

        const updatedObj = {
            banner,
            title,
            logo,
            jobCategory: optionJob,
            salleryStart,
            salleryEnd,
            description,
            deadline: updateDeadline,
        }

        try {
            const response = await fetch(`https://connect-job-681f5.web.app/jobs/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedObj),
            }
            );
            const result = await response.json();
            console.log(result);

            if (result.acknowledged) {
                Swal.fire("Updated", "Updated Successfully", "success");
                refetch();
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="max-w-[800px] mx-auto px-4 my-10">

            <div className="border shadow-xl rounded-md p-4 my-6">
                <h3 className="font-bold text-xl text-center text-[#152475]">Update Job Info</h3>
                <form onSubmit={handleUpdateJob}>
                    <div className="my-2">
                        <label className="text-gray-700">Picture URL for the Job Banner</label><br />
                        <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={banner} type="text" name="banner" id="" />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Job Title</label><br />
                        <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={title} type="text" name="title" id="" />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Company Logo</label><br />
                        <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={logo} type="text" name="logo" id="" />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Job Category</label><br />
                        <select className="p-[6px] text-black rounded w-full border border-gray-500" value={optionJob} onChange={handleCategoryUpdate}>
                            <option selected>Choose Job Category</option>
                            <option value="On Site">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="my-2">
                        <label className="text-gray-700">Sallery Range</label><br />
                        <label className="flex items-center">
                            <input
                                type="text"
                                name="salleryStart"
                                placeholder="000 $"
                                className="p-[6px] text-black rounded w-full border border-gray-500"
                                defaultValue={salleryStart}
                            />
                            <span className="text-xl text-black font-semibold mx-4">To</span>
                            <input
                                type="text"
                                name="salleryEnd"
                                placeholder="000 $"
                                className="p-[6px] text-black rounded w-full border border-gray-500"
                                defaultValue={salleryEnd}
                            />
                        </label>
                    </div>

                    <div className="my-2">
                        <label className="text-gray-700">Application Deadline</label><br />

                        <DatePicker className="p-[6px] text-black rounded border border-gray-500" selected={updateDeadline} onChange={(date) => setUpdateDeadline(date)} />
                    </div>


                    <div className="my-2">
                        <label className="text-gray-700">Job Description</label><br />
                        <label className="">
                            <textarea name="description" className="p-[6px] w-full text-black rounded border border-gray-500" placeholder="Job Description" defaultValue={description}></textarea>
                        </label>

                    </div>




                    <div method="dialog" className="flex justify-end">
                        <button type="submit" className="bg-[#152475] px-8 py-2 mt-1 rounded-md cursor-pointer text-white">
                            Update
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Update;