import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const CardDetails = () => {

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
        _id,
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
                                <Link to={`/details/${_id}`}>
                                    <button className='bg-[#152475] px-6 py-2 mt-1 rounded-md cursor-pointer text-white'>Apply Now</button>
                                </Link>
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