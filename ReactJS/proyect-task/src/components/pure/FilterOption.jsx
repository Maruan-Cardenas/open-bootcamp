import React from 'react'
import PropTypes from 'prop-types';
import FilterContainer from '../container/FilterContainer';

const FilterOption = () => {
  return (
    <div className="filters">
      {/* Filter Container */}
      <FilterContainer filter='SHOW_ALL'>
        All
      </FilterContainer>
      <FilterContainer filter='SHOW-ACTIVE'>
        ACTIVE
      </FilterContainer>
      <FilterContainer filter='SHOW_COMPLETED'>
        COMPLETED
      </FilterContainer>
    </div>
  );
}

FilterOption.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick:  PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default FilterOption;
