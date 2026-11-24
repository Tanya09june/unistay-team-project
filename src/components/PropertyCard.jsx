import React from 'react';
import SaveButton from './SaveButton';
import './PropertyCard.css';

function PropertyCard({ property, onSelect }) {

    if (!property) {
        return null;
    }

    function handleCardClick() {
        if (onSelect) {
            onSelect(property);
        }
    }

    function handleApply(event) {
        event.stopPropagation();
        alert(`Application started for ${property.title}.`);
    }

    function handleDetails(event) {
        event.stopPropagation();

        if (onSelect) {
            onSelect(property);
        } else {
            alert(`Viewing details for ${property.title}`);
        }
    }

    return (
        <article className="property-card" onClick={handleCardClick}>

            {/* Property Image */}
            <div className="property-image-container">

                <img
                    src={property.imageUrl}
                    alt={property.title}
                    className="property-image"
                    loading="lazy"
                />

                <div className="property-image-overlay">

                    {property.verified && (
                        <span className="pill-badge badge-verified">
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                verified
              </span>
              Verified UniStay
            </span>
                    )}

                    <SaveButton propertyId={property.id} />

                </div>
            </div>

            {/* Property Information */}
            <div className="property-content">

                {/* Price */}
                <div className="property-price-row">

                    <div className="property-price">
                        <span>{property.currency}{property.price}</span>
                        <span className="property-period">{property.period}</span>
                    </div>

                    {property.allInclusive && (
                        <span className="property-all-inclusive">
              All bills included
            </span>
                    )}

                </div>

                {/* Title */}
                <h3 className="property-title">
                    {property.title}
                </h3>

                {/* Address */}
                <p className="property-address">
          <span className="material-symbols-outlined">
            location_on
          </span>
                    {property.address}
                </p>

                {/* Transport */}
                {property.transit && (
                    <div className="property-transit-badge">
            <span className="material-symbols-outlined">
              directions_subway
            </span>
                        <span>
              {property.transit.line} · {property.transit.time}
            </span>
                    </div>
                )}

                {/* Property Details */}
                <div className="property-specs-grid">

                    <div className="spec-item">
                        <span className="spec-label">Area</span>
                        <span className="spec-value">{property.size}</span>
                    </div>

                    <div className="spec-item">
                        <span className="spec-label">Type</span>
                        <span className="spec-value">{property.type}</span>
                    </div>

                    <div className="spec-item">
                        <span className="spec-label">Zone</span>
                        <span className="spec-value">{property.zone}</span>
                    </div>

                </div>

                {/* Buttons */}
                <div className="property-actions">

                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleApply}
                    >
                        Apply Now

                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              arrow_forward
            </span>
                    </button>

                    <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={handleDetails}
                    >
                        Details
                    </button>

                </div>

            </div>
        </article>
    );
}

export default PropertyCard;