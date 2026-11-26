
import { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Tooltip
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./map.css";

const cities = [
    { name: "Helsinki", position: [60.1699, 24.9384] },
    { name: "Espoo", position: [60.2055, 24.6559] },
    { name: "Vantaa", position: [60.2934, 25.0378] }
];

export default function MapView({
                                    properties = [],
                                    onSelectProperty
                                }) {
    const [selectedProperty, setSelectedProperty] = useState(null);

    return (
        <div className="map-view-container">
            <MapContainer
                center={[60.23, 24.82]}
                zoom={10}
                scrollWheelZoom={true}
                className="leaflet-map"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Labels for the three cities */}
                {cities.map((city) => (
                    <Marker key={city.name} position={city.position}>
                        <Tooltip>{city.name}</Tooltip>
                        <Popup>
                            <strong>{city.name}</strong>
                            <p>Student housing in {city.name}</p>
                        </Popup>
                    </Marker>
                ))}

                {/* Housing markers using real coordinates */}
                {properties.map((property) => {
                    const lat = Number(property.latitude ?? property.lat);
                    const lng = Number(
                        property.longitude ?? property.lng
                    );

                    if (!Number.isFinite(lat) ||
                        !Number.isFinite(lng)) {
                        return null;
                    }

                    return (
                        <Marker
                            key={property.id}
                            position={[lat, lng]}
                            eventHandlers={{
                                click: () => {
                                    setSelectedProperty(property);
                                    onSelectProperty?.(property);
                                }
                            }}
                        >
                            <Popup>
                                <strong>{property.title}</strong>
                                <p>{property.city}</p>
                                <p>€{property.price} / month</p>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            {/* Existing UniStay property preview */}
            {selectedProperty && (
                <div className="map-preview-popup">
                    <button
                        type="button"
                        className="popup-close"
                        onClick={() => setSelectedProperty(null)}
                        aria-label="Close preview"
                    >
                        ×
                    </button>

                    <h3 className="popup-title">
                        {selectedProperty.title}
                    </h3>

                    <p>{selectedProperty.city}</p>

                    <p className="popup-price">
                        €{selectedProperty.price} / month
                    </p>
                </div>
            )}
        </div>
    );
}
