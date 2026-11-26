
import { useState } from "react";
import MapView from "../components/MapView";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function ExploreMap() {
    const [viewMode, setViewMode] = useState("split");
    const [selectedProperty, setSelectedProperty] = useState(null);

    // Update selected property when a card or marker is clicked
    const handlePropertySelect = (property) => {
        setSelectedProperty(property);
    };

    return (
        <div className="page-wrapper">

            {/* Page heading */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "24px"
                }}
            >
                <div>
          <span className="pill-badge badge-orange">
            Interactive Housing Map
          </span>

                    <h1 className="display-title">
                        Explore Student Housing on the Map
                    </h1>

                    <p className="section-subtitle">
                        Explore student housing across Helsinki, Espoo and
                        Vantaa using our interactive Leaflet map.
                    </p>
                </div>

                {/* Buttons to change map view */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        padding: "4px",
                        borderRadius: "12px",
                        backgroundColor: "var(--color-surface-low, #f1f1ec)"
                    }}
                >
                    <button
                        type="button"
                        className={`btn ${
                            viewMode === "split" ? "btn-primary" : "btn-ghost"
                        }`}
                        onClick={() => setViewMode("split")}
                    >
                        Split View
                    </button>

                    <button
                        type="button"
                        className={`btn ${
                            viewMode === "map" ? "btn-primary" : "btn-ghost"
                        }`}
                        onClick={() => setViewMode("map")}
                    >
                        Map Only
                    </button>

                    <button
                        type="button"
                        className={`btn ${
                            viewMode === "list" ? "btn-primary" : "btn-ghost"
                        }`}
                        onClick={() => setViewMode("list")}
                    >
                        List Only
                    </button>
                </div>
            </div>

            {/* Properties and map layout */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        viewMode === "split"
                            ? "repeat(auto-fit, minmax(min(100%, 350px), 1fr))"
                            : "minmax(0, 1fr)",
                    gap: "24px",
                    alignItems: "start"
                }}
            >

                {/* Property list */}
                {(viewMode === "split" || viewMode === "list") && (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            minWidth: 0,
                            maxHeight: viewMode === "split" ? "560px" : "none",
                            overflowY: viewMode === "split" ? "auto" : "visible"
                        }}
                    >
                        <h3 style={{ color: "var(--color-primary)" }}>
                            Student Accommodations ({properties.length})
                        </h3>

                        {properties.map((property) => (
                            <div
                                key={property.id}
                                style={{
                                    outline:
                                        selectedProperty?.id === property.id
                                            ? "2px solid #E57A2E"
                                            : "none",
                                    borderRadius: "12px"
                                }}
                            >
                                <PropertyCard
                                    property={property}
                                    onSelect={handlePropertySelect}
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Combined Leaflet map */}
                {(viewMode === "split" || viewMode === "map") && (
                    <div style={{ width: "100%", minWidth: 0 }}>
                        <MapView
                            properties={properties}
                            onSelectProperty={handlePropertySelect}
                        />
                    </div>
                )}
            </div>

            {/* Information section */}
            <div
                className="placeholder-card"
                style={{ marginTop: "32px" }}
            >
                <h3 className="section-title">
                    Explore Housing Across Three Cities
                </h3>

                <p className="section-subtitle">
                    Use the interactive map to explore student
                    accommodation options in Helsinki, Espoo and Vantaa.
                    You can zoom, move around the map and click on
                    property markers for more information.
                </p>

                <div className="placeholder-features">
                    <div className="feature-box">
                        <h4>Helsinki</h4>
                        <p>
                            Explore accommodation near universities
                            and public transport.
                        </p>
                    </div>

                    <div className="feature-box">
                        <h4>Espoo</h4>
                        <p>
                            Discover student housing around Otaniemi,
                            Tapiola and nearby neighborhoods.
                        </p>
                    </div>

                    <div className="feature-box">
                        <h4>Vantaa</h4>
                        <p>
                            Find accommodation around Tikkurila
                            and other residential areas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
