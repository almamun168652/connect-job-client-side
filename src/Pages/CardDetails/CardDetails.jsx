import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import swal from "sweetalert";

const CardDetails = () => {

    const today = new Date();
    const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [currentYear, currentMonth, currentDay] = currentDate.split('-').map(Number);


    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const { data, isLoading , isFetching } = useQuery({
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
        _id,
        banner,
        title,
        logo,
        username,
        jobCategory,
        salleryStart,
        salleryEnd,
        description,
        postingDate,
        deadline,
        applicantNumber,
        email,
    } = data || {}



    const applyDeadline = deadline.slice(0, 10);
    const [deadlineYear, deadlineMonth, deadlineDay] = applyDeadline.split('-').map(Number);





    const hanldemodalsubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const modalUsername = form.modalUsername.value;
        const modalEmail = form.modalEmail.value;
        const modalResume = form.modalResume.value;



        const appliedInfo = {
            appliedUsername: modalUsername,
            appliedEmail: modalEmail,
            appliedResume: modalResume,
            postBanner: banner,
            postTitle: title,
            companyLogo: logo,
            postUsername: username,
            jobCategory,
            salleryStart,
            salleryEnd,
            postDescription: description,
            postingDate,
            deadline,
            applicantNumber,
            postEmail: email
        }

        // validation

        // if (email === modalEmail) {
        //     swal('Sorry', "You Can't apply your own job.", "warning");
        //     return;
        // }

        // (year1 < year2 || (year1 === year2 && (month1 < month2 || (month1 === month2 && day1 < day2))))

        if (currentYear < deadlineYear || (currentYear === deadlineYear) && (currentMonth < deadlineMonth || (currentMonth === deadlineMonth && currentDay < deadlineDay))) {
            try {
                const response = await fetch("http://localhost:5000/applied", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(appliedInfo),
                });
                const result = await response.json();


                if (result.acknowledged) {
                    swal('done', "Job Applied Successfully", "success");

                    // updated number of applicant

                    

                    try{
                        fetch(`http://localhost:5000/jobs/${_id}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        // body: JSON.stringify({applicantNumber}),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                        });
                    }catch(error){
                        console.log(error);
                    }
                    
                }

            } catch (error) {
                console.log(error);
            }

            form.reset('');
            return;
        } else {
            swal('Sorry', "Deadline has been expired.", "error");
            return;
        }



    }


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
                                <label htmlFor="applyJobModal" className='bg-[#152475] px-6 py-2 mt-1 rounded-md cursor-pointer text-white'>Apply Now</label>

                                {/* modal start */}

                                {/* The button to open modal */}


                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="applyJobModal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <label htmlFor="applyJobModal" className="flex justify-end">
                                            <AiOutlineCloseCircle className="text-4xl"></AiOutlineCloseCircle>
                                        </label>

                                        <h3 className="font-bold text-xl text-center">Apply To The Job</h3>
                                        <form onSubmit={hanldemodalsubmit}>
                                            <div className="my-2">
                                                <label className="text-gray-700">Your Username</label><br />
                                                <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={user.displayName} type="text" name="modalUsername" id="" />
                                            </div>
                                            <div className="my-2">
                                                <label className="text-gray-700">Your Email</label><br />
                                                <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={user.email} type="text" name="modalEmail" id="" />
                                            </div>
                                            <div className="my-2">
                                                <label className="text-gray-700">Your Resume Link</label><br />
                                                <input placeholder="Your resume link" className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="modalResume" id="" autoFocus />
                                            </div>
                                            <div method="dialog" className="flex justify-end">
                                                <button type="submit" className="mt-4">
                                                    <label className="bg-[#152475] px-8 py-2 rounded-md cursor-pointer text-white" htmlFor="applyJobModal">Submit</label>
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>


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