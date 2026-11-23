import { Link } from 'react-router-dom';
import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Column 1: Brand & Purpose */}
                <div className="footer-brand">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
                style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-primary-container)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '16px'
                }}
            >
              U
            </span>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)' }}>
              UniStay
            </span>
                    </div>
                    <p className="footer-desc">
                        Nordic student housing finder and tenancy guide for the Helsinki Metropolitan Region
                        (Helsinki, Espoo, Vantaa). Verified student apartments, zero hidden fees, and transparent rental contracts.
                    </p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600 }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              security
            </span>
                        Protected by Finnish Escrow &amp; Tenancy Protection
                    </div>
                </div>

                {/* Column 2: Navigation & Tools */}
                <div>
                    <h4 className="footer-title">Explore &amp; Tools</h4>
                    <ul className="footer-links">
                        <li><Link to="/" className="footer-link">All Accommodations</Link></li>
                        <li><Link to="/explore-map" className="footer-link">Interactive Zone Map (A/B)</Link></li>
                        <li><Link to="/calculator" className="footer-link">Rent Affordability Calculator</Link></li>
                        <li><Link to="/saved-places" className="footer-link">Tanya's Saved Places</Link></li>
                    </ul>
                </div>

                {/* Column 3: Housing Guide */}
                <div>
                    <h4 className="footer-title">Student Housing Guide</h4>
                    <ul className="footer-links">
                        <li><Link to="/housing-guide" className="footer-link">Rental Search Timeline</Link></li>
                        <li><Link to="/housing-guide" className="footer-link">Indefinite vs Fixed Lease</Link></li>
                        <li><Link to="/housing-guide" className="footer-link">Mandatory Home Insurance</Link></li>
                        <li><Link to="/housing-guide" className="footer-link">Move-in Photo Audit (6-pt)</Link></li>
                        <li><Link to="/housing-guide" className="footer-link">Scam Radar &amp; Shield</Link></li>
                    </ul>
                </div>

                {/* Column 4: University Federation */}
                <div>
                    <h4 className="footer-title">Academic SSO Federation</h4>
                    <p style={{ fontSize: '12px', color: 'var(--color-on-surface-variant)', marginBottom: '8px' }}>
                        Instant student identity verification via Finnish University HAKA SSO:
                    </p>
                    <div className="partner-chips">
                        <span className="partner-chip">HAKA Federation</span>
                        <span className="partner-chip">Aalto University</span>
                        <span className="partner-chip">University of Helsinki</span>
                        <span className="partner-chip">Metropolia UAS</span>
                        <span className="partner-chip">Haaga-Helia</span>
                        <span className="partner-chip">Uniarts Helsinki</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div>
                    © {new Date().getFullYear()} UniStay Finland. Designed for higher education scholars in the Capital Region.
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <span>Demo Account: Tanya</span>
                    <span>Currency: EUR (€)</span>
                    <span>Nordic Living Standard</span>
                </div>
            </div>
        </footer>
    );
}
