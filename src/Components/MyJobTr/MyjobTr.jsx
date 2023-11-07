
import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillDelete, AiOutlineCloseCircle } from 'react-icons/ai';
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2';


const MyjobTr = ({ item, refetch }) => {

    const [updateDeadline, setUpdateDeadline] = useState(new Date());
    const [optionJob, setOptionJob] = useState(item.jobCategory);




    const handleCategoryUpdate = async (event) => {
        setOptionJob(event.target.value);
    };

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

        console.log(updatedObj);

        try {
            const response = await fetch(`http://localhost:5000/jobs/${item._id}`, {
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
            }
        } catch (error) {
            console.log(error);
        }

    }

    const handleDeleteJob = async (_id) => {
        try {
            const response = await fetch(`http://localhost:5000/jobs/${_id}`, {
                method: "DELETE",
            });
            const result = await response.json();
            if (result.deletedCount > 0) {
                Swal.fire("Delete", "Successfully Delete", "success");
                refetch();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <tr key={item._id} className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">

            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.title}
            </th>
            <td className="px-6 py-4 text-gray-900">
                {item.postingDate.slice(0, 10)}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {item.deadline.slice(0, 10)}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {`${item.salleryStart} - ${item.salleryEnd} $`}
            </td>
            <td className="px-6 py-4">
                <label htmlFor="updateModal" className='bg-green-700 px-4 py-1 mt-1 rounded md cursor-pointer text-white '>Update</label>


                <input type="checkbox" id="updateModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <label htmlFor="updateModal" className="flex justify-end">
                            <AiOutlineCloseCircle className="text-4xl text-black"></AiOutlineCloseCircle>
                        </label>

                        <h3 className="font-bold text-xl text-center text-[#152475]">Update Job Info</h3>
                        <form onSubmit={handleUpdateJob}>
                            <div className="my-2">
                                <label className="text-gray-700">Picture URL for the Job Banner</label><br />
                                <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={item.banner} type="text" name="banner" id="" />
                            </div>
                            <div className="my-2">
                                <label className="text-gray-700">Job Title</label><br />
                                <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={item.title} type="text" name="title" id="" />
                            </div>
                            <div className="my-2">
                                <label className="text-gray-700">Company Logo</label><br />
                                <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={item.logo} type="text" name="logo" id="" />
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
                                        defaultValue={item.salleryStart}
                                    />
                                    <span className="text-xl text-black font-semibold mx-4">To</span>
                                    <input
                                        type="text"
                                        name="salleryEnd"
                                        placeholder="000 $"
                                        className="p-[6px] text-black rounded w-full border border-gray-500"
                                        defaultValue={item.salleryEnd}
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
                                    <textarea name="description" className="p-[6px] w-full text-black rounded border border-gray-500" placeholder="Job Description" defaultValue={item.description}></textarea>
                                </label>

                            </div>





                            <div method="dialog" className="flex justify-end">
                                <button type="submit" className="mt-4">
                                    <label className="bg-[#152475] px-8 py-2 rounded-md cursor-pointer text-white" htmlFor="updateModal">Update</label>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>

            </td>
            <td scope="row" className="px-6 py-4 text-gray-900">
                {/* AiFillDelete */}
                <AiFillDelete onClick={() => handleDeleteJob(item._id)} className='mx-auto cursor-pointer text-3xl text-red-700'></AiFillDelete>

            </td>
        </tr>
    );
};


MyjobTr.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}

export default MyjobTr;

