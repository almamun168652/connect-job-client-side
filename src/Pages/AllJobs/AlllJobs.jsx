import { Link } from "react-router-dom";
import useJobs from "../../hooks/useJobs";
import { FiSearch } from 'react-icons/fi';
import { useEffect, useState } from "react";

const AlllJobs = () => {


    const { data, isLoading } = useJobs();

    const [inputValue, setInputValue] = useState('');
    const [isTrueBtn, setIsTrueBtn] = useState(false);

    const lowerInputValue = inputValue.toLowerCase();

    const [searchData, setSearchData] = useState([]);


    useEffect(() => {

        const filterSearchItems = data?.filter(item => item.title.toLowerCase().includes(lowerInputValue));
        setSearchData(filterSearchItems);

    }, [data, lowerInputValue]);

    console.log(searchData)

    if (isLoading == true) {
        return <div className="flex justify-center items-center h-[40vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }



    const handleSearch = (e) => {
        e.preventDefault();
        setInputValue(e.target.search.value);
        e.target.search.value = '';
        setIsTrueBtn(true);
    }

    

    return (
        <div className="max-w-[1200px] mx-auto px-4 my-14">

            <form onSubmit={handleSearch} className="relative flex items-center md:w-1/3 mx-auto mb-4">
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

            <div className="overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase bg-[#152475] text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
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
                                See Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isTrueBtn ? searchData.map(item => <tr key={item._id} className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">
                                <td scope="row" className="px-6 py-4 text-gray-900">
                                    {item.username}
                                </td>
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
                                <td className="px-6 py-4 ">
                                    <Link to={`/job/${item._id}`}>
                                        <button className='bg-[#152475] px-4 py-1 mt-1 rounded md cursor-pointer text-white'>View Details</button>
                                    </Link>
                                </td>
                            </tr>) :
                                data.map(item => <tr key={item._id} className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">
                                    <td scope="row" className="px-6 py-4 text-gray-900">
                                        {item.username}
                                    </td>
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
                                    <td className="px-6 py-4 ">
                                        <Link to={`/job/${item._id}`}>
                                            <button className='bg-[#152475] px-4 py-1 mt-1 rounded md cursor-pointer text-white'>View Details</button>
                                        </Link>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AlllJobs;