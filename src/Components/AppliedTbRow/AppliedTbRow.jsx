
import PropTypes from 'prop-types';

const AppliedTbRow = ({ oneTr }) => {

    const { appliedUsername, appliedEmail, appliedResume, postBanner, postTitle, companyLogo, postUsername, jobCategory, salleryStart, salleryEnd, postDescription, postingDate, deadline, applicantNumber, postEmail } = oneTr || {}



    return (
        <tr className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">
            <td scope="row" className="px-6 py-4 text-gray-900">
                <img className='w-12' src={companyLogo} alt="" />
            </td>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {appliedResume}
            </td>
            <th className="px-6 py-4 text-gray-900">
                {postTitle}
            </th>
            <td className="px-6 py-4 text-gray-900">
                {jobCategory}
            </td>
            <td className="px-6 py-4 text-gray-900">
                <img className='border object-cover border-white' src={postBanner} alt="" />
            </td>
            <td className="px-6 py-4 text-gray-900">
                {postingDate.slice(0,10)}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {deadline.slice(0,10)}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {applicantNumber}
            </td>
            <th className="px-6 py-4 text-gray-900">
                {appliedUsername}
            </th>
            <td className="px-6 py-4 text-gray-900">
                {`${salleryStart} $ - ${salleryEnd} $`}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {postEmail}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {appliedEmail}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {postUsername}
            </td>
            <td className="px-6 py-4 text-gray-900">
                {`${postDescription.slice(0,30)}...`}
            </td>
        </tr>
    );
};

AppliedTbRow.propTypes = {
    oneTr: PropTypes.object.isRequired,
}

export default AppliedTbRow;