import React from 'react';
import { Link } from 'react-router-dom';
import { demoUser } from '../data/properties';
import { useSavedProperties } from '../context/SavedPropertiesContext';

export default function Profile() {

    const { savedCount, savedProperties } = useSavedProperties();

    return (
        <div className="page-wrapper">

            {/* Profile Header */}
            <div className="placeholder-card">
                <h1>{demoUser.name}</h1>
                <p>{demoUser.email}</p>
                <p>{demoUser.degree} - {demoUser.university}</p>
                <span>Verified Student</span>

                <Link to="/saved-places">
                    Saved Places ({savedCount})
                </Link>
            </div>

            {/* Student Information */}
            <div className="placeholder-card">
                <h3>UniStay Resident Dossier</h3>
                <p>HAKA University Account: Active</p>
                <p>Enrollment Certificate: Verified</p>
                <p>Deposit: Pre-Approved</p>
            </div>

            {/* Budget */}
            <div className="placeholder-card">
                <h3>Affordability Baseline</h3>
                <h2>{demoUser.safeRentRange}</h2>
                <p>Target Safe Rent Range / month</p>

                <Link to="/calculator">
                    Recalculate Budget
                </Link>
            </div>

            {/* Housing Preferences */}
            <div className="placeholder-card">
                <h3>Active Housing Criteria</h3>
                <p>Target Regions: Espoo and Helsinki</p>
                <p>Accommodation: Studio or Shared Flat</p>
                <p>Maximum Commute: 20 minutes</p>
            </div>

            {/* Saved Properties */}
            <div className="placeholder-card">
                <h3>Saved Places ({savedCount})</h3>

                {savedProperties.slice(0, 2).map((property) => (
                    <div key={property.id}>
                        <h4>{property.title}</h4>
                        <p>{property.city}</p>
                        <p>€{property.price}</p>
                    </div>
                ))}

                <Link to="/saved-places">View All</Link>
            </div>

        </div>
    );
}