
import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyjobTr = ({ item, refetch }) => {


    const hanldeDelete = async (_id) => {

        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete it?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {

                    try {
                        const response = await fetch(`https://connect-job-server.vercel.app/jobs/${_id}`, {
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
                }
            })

        } catch (error) {
            console.log(error);
        }

    }





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
            <td>
                <Link to={`/update/${item._id}`}>
                    <button className='bg-green-700 px-4 py-1 mt-1 rounded md cursor-pointer text-white'>Update</button>
                </Link>
            </td>
            <td scope="row" className="px-6 py-4 text-gray-900">
                {/* AiFillDelete */}
                <AiFillDelete onClick={() => hanldeDelete(item._id)} className='mx-auto cursor-pointer text-3xl text-red-700'></AiFillDelete>

            </td>
        </tr>
    );
};


MyjobTr.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}

export default MyjobTr;

