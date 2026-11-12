import React, { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function Calculator() {

    // Income
    const [studyGrant, setStudyGrant] = useState(300);
    const [housingAllowance, setHousingAllowance] = useState(380);
    const [studentLoan, setStudentLoan] = useState(450);
    const [jobIncome, setJobIncome] = useState(220);

    // Expenses
    const [groceries, setGroceries] = useState(280);
    const [transitPass, setTransitPass] = useState(42);
    const [personalExp, setPersonalExp] = useState(150);

    // Calculations
    const totalIncome = studyGrant + housingAllowance + studentLoan + jobIncome;
    const totalLivingExpenses = groceries + transitPass + personalExp;
    const availableForRent = Math.max(0, totalIncome - totalLivingExpenses);

    const safeRentMin = Math.round(availableForRent * 0.85);
    const safeRentMax = Math.round(availableForRent);

    // Preset options
    const applyPreset = (type) => {
        if (type === 'grant') {
            setStudyGrant(300);
            setHousingAllowance(380);
            setStudentLoan(270);
            setJobIncome(0);
        } else if (type === 'standard') {
            setStudyGrant(300);
            setHousingAllowance(380);
            setStudentLoan(450);
            setJobIncome(220);
        } else {
            setStudyGrant(300);
            setHousingAllowance(350);
            setStudentLoan(300);
            setJobIncome(850);
        }
    };

    // Matching properties
    const matchingProperties = properties.filter(
        (property) => property.price <= safeRentMax + 50
    );

    // Slider design
    const sliderStyle = {
        width: '100%',
        accentColor: 'var(--color-primary-container)'
    };

    // Reusable slider
    const renderSlider = (title, value, setValue, min, max, step = 10) => (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '4px'
            }}>
                <span>{title}</span>
                <span>€{value}</span>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                style={sliderStyle}
            />
        </div>
    );

    return (
        <div className="page-wrapper">

            {/* Header */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div className="pill-badge badge-orange">
                    <span className="material-symbols-outlined">calculate</span>
                    Nordic Student Budget Planner
                </div>

                <h1 className="display-title">
                    Student Rent Affordability Calculator
                </h1>

                <p className="section-subtitle">
                    Calculate your safe rental budget based on income and expenses.
                </p>

                {/* Presets */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                    <button className="btn btn-tonal" onClick={() => applyPreset('grant')}>
                        Grant Only (€950)
                    </button>

                    <button className="btn btn-tonal" onClick={() => applyPreset('standard')}>
                        Standard Student (€1,350)
                    </button>

                    <button className="btn btn-tonal" onClick={() => applyPreset('job')}>
                        Part-time Job (€1,800)
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'var(--spacing-xl)',
                alignItems: 'start'
            }}>

                {/* Left Side - Inputs */}
                <div className="placeholder-card" style={{ marginTop: 0 }}>

                    <h3>Monthly Income (€)</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {renderSlider('Kela Study Grant', studyGrant, setStudyGrant, 0, 600)}
                        {renderSlider('Kela Housing Allowance', housingAllowance, setHousingAllowance, 0, 600)}
                        {renderSlider('Student Loan / Family Support', studentLoan, setStudentLoan, 0, 1000, 50)}
                        {renderSlider('Part-Time Job / Other Earnings', jobIncome, setJobIncome, 0, 1500, 50)}

                    </div>

                    <hr style={{ margin: '20px 0' }} />

                    <h3>Living Expenses (€)</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                        {renderSlider('Groceries & Daily Living', groceries, setGroceries, 150, 600)}
                        {renderSlider('HSL Student Transit Pass', transitPass, setTransitPass, 0, 100, 2)}
                        {renderSlider('Personal & Subscriptions', personalExp, setPersonalExp, 50, 400)}

                    </div>
                </div>

                {/* Right Side - Results */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>

                    <div className="placeholder-card"
                         style={{
                             marginTop: 0,
                             backgroundColor: 'var(--color-primary-container)',
                             color: '#ffffff'
                         }}>

                        <span>RECOMMENDED SAFE RENT RANGE</span>

                        <h1 style={{ fontSize: '38px', color: '#ffffff' }}>
                            €{safeRentMin} – €{safeRentMax} / month
                        </h1>

                        <p>
                            Monthly income: €{totalIncome}
                            <br />
                            Living expenses: €{totalLivingExpenses}
                        </p>

                        {/* Affordability Gauge */}
                        <div style={{
                            marginTop: '16px',
                            padding: '12px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            <strong>Affordability Health: Optimal</strong>

                            <div style={{
                                height: '8px',
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                borderRadius: 'var(--radius-full)',
                                marginTop: '8px'
                            }}>
                                <div style={{
                                    width: '70%',
                                    height: '100%',
                                    backgroundColor: 'var(--color-primary-fixed)'
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Budget Summary */}
                    <div className="feature-box">
                        <h4>Budget Summary</h4>

                        <p>Total Monthly Income: €{totalIncome}</p>
                        <p>Living Expenses: €{totalLivingExpenses}</p>
                        <strong>Available for Rent: €{availableForRent}</strong>
                    </div>

                </div>
            </div>

            {/* Matching Properties */}
            <div style={{ marginTop: 'var(--spacing-2xl)' }}>

                <h3 className="section-title">
                    Properties Within Your Budget (≤ €{safeRentMax + 50})
                </h3>

                <p className="section-subtitle">
                    Student accommodations matching your budget.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 'var(--spacing-lg)'
                }}>
                    {matchingProperties.slice(0, 3).map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>

            {/* Screen Information */}
            <div className="placeholder-card" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div className="placeholder-header">
                    <div className="placeholder-icon">
                        <span className="material-symbols-outlined">tune</span>
                    </div>

                    <div>
                        <span className="pill-badge badge-olive">Screen 4 Spec</span>
                        <h3 className="section-title">UniStay Affordability Calculator</h3>
                        <p className="section-subtitle">
                            Calculates student income, expenses and safe rent.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}