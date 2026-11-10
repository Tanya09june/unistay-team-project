
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMenus = () => {
        setProfileOpen(false);
        setMobileMenuOpen(false);
    };

    const navItems = [
        { name: 'Explore', path: '/' },
        { name: 'Explore Map', path: '/explore-map' },
        { name: 'Housing Guide', path: '/housing-guide' },
        { name: 'Affordability Calculator', path: '/calculator' },
        { name: "Tanya's Saved Places", path: '/saved-places' }
    ];

    return (
        <header className="navbar">
            <div className="navbar-inner">

                {/* UniStay logo */}
                <Link to="/" className="brand-logo" onClick={closeMenus}>
                    <span className="brand-glyph">U</span>
                    <span className="brand-name">UniStay</span>
                </Link>

                {/* Main navigation */}
                <nav className="navbar-nav" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Currency and student profile */}
                <div className="navbar-right">
                    <div className="currency-badge">
                        <span className="material-symbols-outlined">euro</span>
                        EUR
                    </div>

                    <button
                        type="button"
                        className="profile-trigger-btn"
                        onClick={() => setProfileOpen(!profileOpen)}
                        aria-expanded={profileOpen}
                    >
                        <span className="profile-avatar">T</span>
                        <span className="profile-name">Tanya</span>
                        <span className="material-symbols-outlined">
              expand_more
            </span>
                    </button>

                    {profileOpen && (
                        <div className="profile-dropdown">
                            <Link to="/profile" onClick={closeMenus}>
                                My Profile
                            </Link>
                            <Link to="/saved-places" onClick={closeMenus}>
                                Saved Places
                            </Link>
                            <Link to="/login" onClick={closeMenus}>
                                Sign In
                            </Link>
                        </div>
                    )}

                    {/* Mobile navigation button */}
                    <button
                        type="button"
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
                    </button>
                </div>
            </div>

            {/* Mobile navigation */}
            {mobileMenuOpen && (
                <nav className="mobile-nav-drawer">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            onClick={closeMenus}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default Navbar;
