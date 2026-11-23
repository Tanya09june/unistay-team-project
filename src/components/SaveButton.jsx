import React from 'react';
import { useSavedProperties } from '../context/SavedPropertiesContext';

function SaveButton({ propertyId, className = '', showLabel = false }) {

    const { isSaved, toggleSave } = useSavedProperties();

    const saved = isSaved(propertyId);

    function handleClick(event) {
        event.preventDefault();
        event.stopPropagation();

        toggleSave(propertyId);
    }

    return (
        <button
            type="button"
            className={`save-btn ${saved ? 'is-saved' : ''} ${className}`}
            onClick={handleClick}
            aria-label={saved ? 'Remove from saved places' : 'Save to favorites'}
            title={saved ? 'Remove from saved places' : 'Save to favorites'}
        >

      <span className="material-symbols-outlined">
        favorite
      </span>

            {showLabel && (
                <span className="save-btn-label">
          {saved ? 'Saved' : 'Save'}
        </span>
            )}

        </button>
    );
}

export default SaveButton;