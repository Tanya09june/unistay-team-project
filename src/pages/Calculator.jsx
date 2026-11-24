import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

function Calculator() {
    const [studyGrant, setStudyGrant] = useState(300);
    const [housingAllowance, setHousingAllowance] = useState(380);
    const [studentLoan, setStudentLoan] = useState(450);
    const [jobIncome, setJobIncome] = useState(220);

    const [groceries, setGroceries] = useState(280);
    const [transitPass, setTransitPass] = useState(42);
    const [personalExp, setPersonalExp] = useState(150);

    const totalIncome =
        studyGrant + housingAllowance + studentLoan + jobIncome;

    const totalExpenses = groceries + transitPass + personalExp;

    const availableForRent = Math.max(0, totalIncome - totalExpenses);

    const safeRentMin = Math.round(availableForRent * 0.85);
    const safeRentMax = Math.round(availableForRent);

    const matchingProperties = properties.filter(
        (property) => property.price <= safeRentMax + 50
    );

    function applyPreset(type) {
        if (type === "grant") {
            setStudyGrant(300);
            setHousingAllowance(380);
            setStudentLoan(270);
            setJobIncome(0);
        } else if (type === "standard") {
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
    }

    function renderSlider(title, value, setValue, min, max) {
        return (
            <div>
                <label>
                    {title}: €{value}
                </label>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
            </div>
        );
    }

    return (
        <div className="calculator-page">
            <h1>Student Budget Calculator</h1>
            <p>Calculate how much rent you can afford.</p>

            <div>
                <button onClick={() => applyPreset("grant")}>Grant Only</button>
                <button onClick={() => applyPreset("standard")}>Standard Student</button>
                <button onClick={() => applyPreset("job")}>Part-time Job</button>
            </div>

            <div className="calculator-grid">
                <div className="input-card">
                    <h2>Monthly Income</h2>

                    {renderSlider("Study Grant", studyGrant, setStudyGrant, 0, 700)}
                    {renderSlider("Housing Allowance", housingAllowance, setHousingAllowance, 0, 700)}
                    {renderSlider("Student Loan", studentLoan, setStudentLoan, 0, 850)}
                    {renderSlider("Job Income", jobIncome, setJobIncome, 0, 1500)}

                    <h2>Monthly Expenses</h2>

                    {renderSlider("Groceries", groceries, setGroceries, 0, 600)}
                    {renderSlider("Transport", transitPass, setTransitPass, 0, 200)}
                    {renderSlider("Personal Expenses", personalExp, setPersonalExp, 0, 500)}
                </div>

                <div className="results-card">
                    <h2>Your Budget</h2>

                    <h3>Safe Rent Range</h3>
                    <h2>€{safeRentMin} - €{safeRentMax}</h2>

                    <p>Total Income: €{totalIncome}</p>
                    <p>Total Expenses: €{totalExpenses}</p>
                    <p>Available for Rent: €{availableForRent}</p>
                </div>
            </div>

            <h2>Matching Properties</h2>

            <div className="property-list">
                {matchingProperties.slice(0, 3).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}

export default Calculator;