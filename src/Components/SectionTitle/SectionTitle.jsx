import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <h2 className='border-y-4 w-1/3 mx-auto border-[#152475] text-black text-center text-2xl py-2 my-10 font-bold'>{title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.node
}

export default SectionTitle;