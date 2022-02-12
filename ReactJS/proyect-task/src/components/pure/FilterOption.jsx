import React from 'react'
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

export default FilterOption;
