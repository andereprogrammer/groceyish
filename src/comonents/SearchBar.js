import React from 'react';
import './SearchBar.scss'

function SearchBar() {
  return (
    <div className='search'>
        <div className="search_wrapper">
            <select>
                <option value="catgories">All Categories</option>
            </select>
            <input type="search" name="search-item" id="search" />
            <div className="search_btn">
                <img src="/images/search.svg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default SearchBar