import React from 'react'
import './searchBox.css'
const SearchBox = (props) => {
    const { placeholder, onChange, value } = props
    return (
        <div className='search-box'>
            <input type='search' placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export default SearchBox
export { SearchBox }