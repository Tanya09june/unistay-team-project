import React from "react";
import './searchBar.css';
function SearchBar({
                       value,
                       onChange,
                       onClear,
                       placeholder = 'Search UniStay student homes in Helsinki, Espoo, Vantaa...',
                       className = ''
                   }) {
    return (
        <div className={`search-bar ${className}`}>

            {/* Search icon */}
            <span className="material-symbols-outlined search-bar-icon">
        search
      </span>

            {/* Search input */}
            <input
                type="text"
                className="search-bar-input"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                aria-label="Search accommodations"
            />

            {/* Show clear button only when search has text */}
            {value && (
                <button
                    type="button"
                    className="search-bar-clear"
                    onClick={onClear}
                    aria-label="Clear search"
                >
          <span
              className="material-symbols-outlined"
              style={{ fontSize: '18px' }}
          >
            close
          </span>
                </button>
            )}

        </div>
    );
}

export default SearchBar;
