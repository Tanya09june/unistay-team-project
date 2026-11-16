import React from 'react';
import { cities } from '../data/properties';
import './filter.css';

export default function CityFilter({ selectedCity, onSelectCity }) {
    return (
        <div className="city-filter-container" role="tablist" aria-label="Filter by city">
            {cities.map((city) => {
                const isActive = selectedCity === city.id;
                return (
                    <button
                        key={city.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`city-chip ${isActive ? 'is-active' : ''}`}
                        onClick={() => onSelectCity(city.id)}
                    >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              {city.id === 'all'
                  ? 'domain'
                  : city.id === 'Espoo'
                      ? 'school'
                      : city.id === 'Helsinki'
                          ? 'tram'
                          : 'directions_subway'}
            </span>
                        {city.label}
                    </button>
                );
            })}
        </div>
    );
}
