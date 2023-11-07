import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MdPostAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Provider/AuthProvider';
import './jobCard.css';

const JobCatCard = ({ item }) => {

    const {user} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleDetailsGo = (_id) => {

        if(!user){
            swal({
                title: "Sorry",
                text: "Must Log In First to See Details",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        navigate('/login');
                    }
                });
        }else{
            navigate(`/job/${_id}`);
            
        }
    }

    const {
        title,
        username,
        _id,
        salleryStart,
        salleryEnd,

        postingDate,
        deadline,
        applicantNumber } = item || {}

    console.log(_id)

    return (
        <div>
            <div className='p-4 border shadow rounded-lg space-y-2'>
                <div className='flex justify-between items-center'>
                    <p className='text-lg font-semibold text-black flex items-center gap-1'><MdPostAdd />{username}</p>
                    <p className='text-sm font-semibold text-[#152475]'> Applicants Number: {applicantNumber}</p>
                </div>

                <h1 className='text-2xl font-bold text-[#152475]'>{title}</h1>

                <div>
                    <span className='text-lg font-semibold text-[[#152475]]'>Salary range: {`${salleryStart} $ - ${salleryEnd} $`}</span>
                </div>

                <div className=''>
                    <p className='font-semibold'>Posting Date: {postingDate.slice(0, 10)}</p>
                    <p className='font-semibold'>Application Deadline: {deadline.slice(0, 10)}</p>
                </div>

                <div className='w-full text-right'>
                    {/* <Link to={`/job/${_id}`}> */}
                    <button onClick={()=> handleDetailsGo(_id)} className='bg-[#152475] px-4 py-1 mt-1 rounded-md cursor-pointer text-white'>View Details</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

JobCatCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default JobCatCard;