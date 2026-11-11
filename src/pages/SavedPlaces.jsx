import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { useSavedProperties } from '../context/SavedPropertiesContext';

export default function SavedPlaces() {
    const { savedProperties, savedCount } = useSavedProperties();
    const [forceEmptyState, setForceEmptyState] = useState(false);

    // Calculate rent
    const totalRent = savedProperties.reduce(
        (sum, property) => sum + property.price, 0
    );

    const avgRent = savedCount > 0
        ? Math.round(totalRent / savedCount)
        : 0;

    const kelaBenefit = Math.round(avgRent * 0.45);
    const showEmpty = forceEmptyState || savedCount === 0;

    return (
        <div className="page-wrapper">

            <h1 className="display-title">Tanya's Saved Places</h1>
            <p className="section-subtitle">
                Compare your saved student accommodations.
            </p>

            {/* Buttons */}
            <button onClick={() => setForceEmptyState(false)}>
                Saved Places ({savedCount})
            </button>

            <button onClick={() => setForceEmptyState(true)}>
                Empty State Preview
            </button>

            {!showEmpty ? (
                <>
                    {/* Rent Summary */}
                    <div className="feature-box">
                        <h3>Saved Homes: {savedCount}</h3>
                        <h3>Average Rent: €{avgRent}</h3>
                        <h3>Kela Benefit: €{kelaBenefit}</h3>
                        <h3>Net Expense: €{avgRent - kelaBenefit}</h3>
                    </div>

                    {/* Property Cards */}
                    <div className="property-grid">
                        {savedProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))}
                    </div>
                </>
            ) : (
                // Empty State
                <div className="placeholder-card">
                    <h2>No saved places yet!</h2>
                    <p>Save your favourite student accommodations here.</p>

                    <Link to="/" className="btn btn-secondary">
                        Explore Accommodations
                    </Link>
                </div>
            )}

        </div>
    );
}