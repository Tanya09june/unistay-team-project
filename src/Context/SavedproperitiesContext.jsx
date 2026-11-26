import { createContext, useContext, useState, useEffect } from 'react';
import { properties, demoUser } from '../data/properties';

const SavedPropertiesContext = createContext();

export function SavedPropertiesProvider({ children }) {
    const [savedIds, setSavedIds] = useState(() => {
        const saved = localStorage.getItem('unistay_saved_properties');
        return saved ? JSON.parse(saved) : demoUser.savedIds;
    });

    useEffect(() => {
        localStorage.setItem(
            'unistay_saved_properties',
            JSON.stringify(savedIds)
        );
    }, [savedIds]);

    function toggleSave(id) {
        if (savedIds.includes(id)) {
            setSavedIds(savedIds.filter((item) => item !== id));
        } else {
            setSavedIds([...savedIds, id]);
        }
    }

    function isSaved(id) {
        return savedIds.includes(id);
    }

    const savedProperties = properties.filter((property) =>
        savedIds.includes(property.id)
    );

    return (
        <SavedPropertiesContext.Provider
            value={{
                savedIds,
                savedProperties,
                savedCount: savedIds.length,
                toggleSave,
                isSaved,
            }}
        >
            {children}
        </SavedPropertiesContext.Provider>
    );
}

export function useSavedProperties() {
    return useContext(SavedPropertiesContext);
}