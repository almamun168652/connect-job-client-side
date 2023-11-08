import { FiSearch } from "react-icons/fi";


const Banner = () => {
    return (
        <div className="max-w-screen-xl px-4 mx-auto my-10">
            <div className="bg-[url(https://i.ibb.co/VD1C31N/banner.jpg)] bg-no-repeat bg-cover bg-center">
                <section className=" bg-[#000000b1] flex items-center min-h-[80vh]">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                        <h1 className="mb-4 text-xl md:text-4xl font-extrabold tracking-tight leading-none  lg:text-5xl text-white">Find Your Job With US</h1>
                        <p className="my-8 text-sm md:text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 ">Take the 3 personality tests to become more self-aware. These tests will help you better understand how you think and career, and what matters to you in a job</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                            <form className="relative flex items-center md:w-1/3 mx-auto mb-4">
                                <input
                                    type="text"
                                    name="search"
                                    className="w-full h-14 pl-4 pr-10 bg-white text-gray-800   focus:outline-none focus:ring focus:border-[#152475] rounded-none border border-[#152475]"
                                    placeholder="Find Jobs..."
                                />
                                <button type="submit" className="absolute right-2 bg-[#152475] text-white h-10 w-10 flex items-center justify-center">
                                    <FiSearch className="w-6 h-6" />
                                </button>
                            </form>


                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;