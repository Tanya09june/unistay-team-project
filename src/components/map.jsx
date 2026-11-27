import { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import SaveButton from "./SaveButton";

// Configure default Leaflet icon URLs for Vite bundler compatibility
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// City centers across the capital region
const CITIES = [
    { id: "helsinki", name: "Helsinki", position: [60.1699, 24.9384] },
    { id: "espoo", name: "Espoo", position: [60.2055, 24.6559] },
    { id: "vantaa", name: "Vantaa", position: [60.2934, 25.0378] }
];

// Helper to create custom styled DivIcon for property price pills
function createPropertyDivIcon(price, currency = "€", isSelected = false) {
    return L.divIcon({
        className: "custom-leaflet-marker",
        html: `
            <div class="map-price-pill ${isSelected ? "is-selected" : ""}">
                <div class="price-bubble">${currency}${price}</div>
                <div class="pill-tail"></div>
            </div>
        `,
        iconSize: [68, 30],
        iconAnchor: [34, 30],
        popupAnchor: [0, -30],
    });
}

// Helper to create custom styled DivIcon for labeled city center markers
function createCityDivIcon(cityName) {
    return L.divIcon({
        className: "custom-city-marker",
        html: `
            <div class="map-city-badge">
                <span class="city-dot"></span>
                <span>${cityName}</span>
            </div>
        `,
        iconSize: [76, 24],
        iconAnchor: [38, 12],
        popupAnchor: [0, -14],
    });
}

// MapController: handles resize invalidation on viewMode change and smooth panning
function MapController({ viewMode, selectedCoords }) {
    const map = useMap();

    useEffect(() => {
        // Reflow Leaflet tiles whenever switching between Split View, Map Only, etc.
        const timer = setTimeout(() => {
            map.invalidateSize();
        }, 150);
        return () => clearTimeout(timer);
    }, [viewMode, map]);

    useEffect(() => {
        if (selectedCoords && typeof selectedCoords.lat === "number" && typeof selectedCoords.lng === "number") {
            map.panTo([selectedCoords.lat, selectedCoords.lng], {
                animate: true,
                duration: 0.6,
            });
        }
    }, [selectedCoords, map]);

    return null;
}

export default function MapView({
    properties = [],
    selectedProperty = null,
    onSelectProperty,
    viewMode = "split"
}) {
    const [activeProperty, setActiveProperty] = useState(selectedProperty || null);

    // Keep activeProperty synced with parent selection
    useEffect(() => {
        if (selectedProperty) {
            setActiveProperty(selectedProperty);
        }
    }, [selectedProperty]);

    // Combined geographic center and zoom covering Helsinki, Espoo and Vantaa
    const initialCenter = [60.21, 24.88];
    const initialZoom = 11;

    // Filter properties that have valid numeric coordinates
    const validProperties = properties.filter((property) => {
        const lat = Number(property.coordinates?.lat ?? property.latitude ?? property.lat);
        const lng = Number(property.coordinates?.lng ?? property.longitude ?? property.lng);
        return Number.isFinite(lat) && Number.isFinite(lng);
    });

    const handlePinClick = (property) => {
        setActiveProperty(property);
        onSelectProperty?.(property);
    };

    return (
        <div className="map-view-container">
            {/* Legend & Controls Overlay */}
            <div className="map-controls-overlay">
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span className="map-legend-dot legend-prop"></span>
                    Accommodation
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span className="map-legend-dot legend-selected"></span>
                    Selected
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span className="map-legend-dot legend-city"></span>
                    City Center
                </span>
            </div>

            {/* Interactive Leaflet Map with OpenStreetMap tiles */}
            <MapContainer
                center={initialCenter}
                zoom={initialZoom}
                scrollWheelZoom={true}
                zoomControl={true}
                className="leaflet-map"
                style={{ width: "100%", height: "100%" }}
            >
                <MapController
                    viewMode={viewMode}
                    selectedCoords={
                        activeProperty
                            ? {
                                  lat: Number(activeProperty.coordinates?.lat ?? activeProperty.latitude ?? activeProperty.lat),
                                  lng: Number(activeProperty.coordinates?.lng ?? activeProperty.longitude ?? activeProperty.lng),
                              }
                            : null
                    }
                />

                {/* OpenStreetMap TileLayer with visible attribution */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maxZoom={19}
                />

                {/* Labeled City Markers for Helsinki, Espoo and Vantaa */}
                {CITIES.map((city) => (
                    <Marker
                        key={city.id}
                        position={city.position}
                        icon={createCityDivIcon(city.name)}
                    >
                        <Popup>
                            <div style={{ padding: "2px", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                                <strong style={{ color: "#223416" }}>{city.name}</strong>
                                <p style={{ margin: "2px 0 0", fontSize: "11px", color: "#44483f" }}>
                                    Capital Region Municipal Center
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                {/* Housing Markers using actual coordinates */}
                {validProperties.map((property) => {
                    const lat = Number(property.coordinates?.lat ?? property.latitude ?? property.lat);
                    const lng = Number(property.coordinates?.lng ?? property.longitude ?? property.lng);
                    const isSelected = activeProperty?.id === property.id;

                    return (
                        <Marker
                            key={property.id}
                            position={[lat, lng]}
                            icon={createPropertyDivIcon(property.price, property.currency ?? "€", isSelected)}
                            eventHandlers={{
                                click: () => handlePinClick(property),
                            }}
                        >
                            <Popup>
                                <div style={{ minWidth: "150px", fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                                    <span style={{ fontSize: "10px", textTransform: "uppercase", color: "#6b7a3e", fontWeight: 700 }}>
                                        {property.city} {property.zone ? `· ${property.zone}` : ""}
                                    </span>
                                    <div style={{ fontWeight: 700, color: "#223416", fontSize: "13px", margin: "2px 0" }}>
                                        {property.title}
                                    </div>
                                    <div style={{ fontWeight: 800, color: "#e57a2e", fontSize: "14px" }}>
                                        {property.currency ?? "€"}{property.price}{" "}
                                        <span style={{ fontSize: "11px", fontWeight: 500, color: "#666" }}>
                                            {property.period ?? "/ month"}
                                        </span>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>

            {/* Existing UniStay Property Preview Card */}
            {activeProperty && (
                <div className="map-preview-popup">
                    <div className="popup-header">
                        <div>
                            <span className="pill-badge badge-olive" style={{ marginBottom: "4px", display: "inline-block" }}>
                                {activeProperty.city} {activeProperty.zone ? `· ${activeProperty.zone}` : ""}
                            </span>
                            <h4 className="popup-title">{activeProperty.title}</h4>
                        </div>
                        <button
                            type="button"
                            className="popup-close"
                            onClick={() => setActiveProperty(null)}
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                    </div>

                    <div className="popup-price">
                        {activeProperty.currency ?? "€"}{activeProperty.price} {activeProperty.period ?? "/ month"}
                    </div>

                    {activeProperty.transit && (
                        <p style={{ fontSize: "12px", color: "var(--color-on-surface-variant, #44483f)", margin: "4px 0" }}>
                            {activeProperty.transit.line} · {activeProperty.transit.time}
                        </p>
                    )}

                    <div className="popup-actions">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => alert(`Application started for ${activeProperty.title}`)}
                        >
                            Apply Now
                        </button>
                        <SaveButton propertyId={activeProperty.id} showLabel />
                    </div>
                </div>
            )}
        </div>
    );
}
