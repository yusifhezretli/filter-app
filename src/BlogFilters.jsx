import React from 'react';

const BlogFilters = ({ activeFilter, onFilterChange }) => {
    // Filtrlərin təyin olunduğu array
    const filters = [
        { value: '*', label: 'All' },
        { value: '.filter-smm', label: 'Marketing' },
        { value: '.filter-seo', label: 'Seo' },
        { value: '.filter-web', label: 'Web' }
    ];

    return (
        <ul className="blog_filters">
            {filters.map(filter => (
                <li
                    key={filter.value}
                    data-filter={filter.value}
                    className={activeFilter === filter.value ? 'filter_active' : ''} //Aktiv filtr üçün styleni dəyis
                    onClick={() => onFilterChange(filter.value)}
                >

                    {/*  Filtr etiketini göstərir */}
                    {filter.label} 
                </li>
            ))}
        </ul>
    );
};

export default BlogFilters;
