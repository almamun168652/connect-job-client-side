
import PropTypes from 'prop-types';
import JobCatCard from '../JobCatCard/JobCatCard';

const CategoryCard = ({ items }) => {

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                items.map(item => <JobCatCard key={item._id} item={item}></JobCatCard>)
            }
        </div>
    );
};

CategoryCard.propTypes = {
    items: PropTypes.array,
}

export default CategoryCard;