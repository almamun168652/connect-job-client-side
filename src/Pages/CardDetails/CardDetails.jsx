import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const CardDetails = () => {

    const { user } = useContext(AuthContext);

    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ['jobsDetails'],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/jobs/details/${id}`);
            return await data.json();
        }
    })

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
        applicantNumber
    } = data || {}



    return (
        <div>
            <div>
                <div>
                    <div className="max-w-6xl rounded-md shadow-md my-10 px-4 md:px-10 py-6 mx-auto bg-gray-50 border">
                        {" "}
                        <a className="rounded">
                            <img
                                className="object-cover w-full shadow-sm max-h-[450px] rounded"
                                src={banner}
                            />
                        </a>
                        <div className="flex flex-col md:flex-row gap-4 justify-between mt-8 mb-4">
                            <a
                                href="#"
                                className="px-2 py-1 font-bold text-[#152475]  text-lg mr-4"
                            >
                                Sallery Range: {`${salleryStart} $ - ${salleryEnd} $`}
                            </a>
                            <a
                                href="#"
                                className="px-2 py-1 font-bold text-lg text-[#152475] mr-4"
                            >
                                Number of Applicants: {applicantNumber}
                            </a>
                        </div>

                        <div className="mt-2 flex gap-2 items-center">
                            <img className="w-16" src={logo} alt="" />
                            <h2 className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#152475]">
                                {title}
                            </h2>
                        </div>


                        <div className="my-3 text-gray-600">
                            {
                                description
                            }
                        </div>

                        <div className="mt-2">
                            <div className="flex justify-end items-center mt-2">
                                <button onClick={() => document.getElementById('submitResume').showModal()} className='bg-[#152475] px-6 py-2 mt-1 rounded-md cursor-pointer text-white'>Apply Now</button>

                                {/* modal start */}

                                <dialog id="submitResume" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-xl text-center">Apply To The Job</h3>
                                        <div className="my-2">
                                            <label className="text-gray-700">Your Username</label><br />
                                            <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={user.displayName} type="text" name="username" id="" />
                                        </div>
                                        <div className="my-2">
                                            <label className="text-gray-700">Your Email</label><br />
                                            <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={user.email} type="text" name="username" id="" />
                                        </div>
                                        <div className="my-2">
                                            <label className="text-gray-700">Your Resume Link</label><br />
                                            <input placeholder="Your resume link" className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="username" id="" autoFocus/>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className='bg-[#152475] px-4 py-1 mt-1 rounded-md cursor-pointer text-white'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>


                                {/* modal end */}


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

CardDetails.propTypes = {
    user: PropTypes.object.isRequired,
}

export default CardDetails;