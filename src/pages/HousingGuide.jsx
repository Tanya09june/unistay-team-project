
import React, { useState } from "react";

const guides = [
  {
    title:"Finding Student Accommodation",
    icon:"🏠",
    description:"Learn how to find affordable accommodation in Finland.",
    points:["Search in Helsinki, Espoo and Vantaa.","Compare monthly rents and transport connections.","Check whether utilities are included.","Visit the apartment before signing if possible."]
  },
  {
    title:"HOAS Student Housing",
    icon:"🎓",
    description:"Understand the student housing application process.",
    points:["Check HOAS eligibility requirements.","Create an account on the official HOAS website.","Submit your housing application.","Wait for an apartment offer and review its terms."]
  },
  {
    title:"Rental Agreement",
    icon:"📄",
    description:"Understand your rights and responsibilities as a tenant.",
    points:["Read the agreement carefully.","Check the notice period.","Understand maintenance responsibilities.","Keep a copy of your signed agreement."]
  },
  {
    title:"Deposit and Monthly Costs",
    icon:"💶",
    description:"Plan your student housing budget.",
    points:["Check the required security deposit.","Calculate electricity and internet costs.","Check water and heating charges.","Keep money for moving expenses."]
  },
  {
    title:"Kela Housing Support",
    icon:"🏦",
    description:"Learn about student housing benefits and eligibility.",
    points:["Check current student benefit rules.","Review the housing supplement eligibility.","Check income and housing requirements.","Apply through the official Kela service if eligible."]
  },
  {
    title:"Moving to a New Home",
    icon:"📦",
    description:"Prepare for a smooth move into your new apartment.",
    points:["Arrange electricity and internet.","Complete the move-in inspection.","Register your move with the relevant authorities.","Keep important housing documents safely."]
  }
];

export default function HousingGuide() {
  const [active,setActive] = useState(null);

  return (
    <div style={{background:"#faf8f0",minHeight:"100vh",padding:"25px 5%",fontFamily:"Arial,sans-serif",color:"#20351a"}}>
      <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:15}}>
        <h2>🟩 UniStay</h2>
        <nav style={{display:"flex",gap:20,flexWrap:"wrap"}}>
          <a href="/explore">Explore</a>
          <a href="/explore-map">Explore Map</a>
          <b>Housing Guide</b>
          <a href="/calculator">Affordability Calculator</a>
        </nav>
      </header>

      <section style={{textAlign:"center",padding:"55px 10px"}}>
        <span style={{background:"#d9eb9c",padding:10,borderRadius:20}}>🇫🇮 Student Living in Finland</span>
        <h1 style={{fontSize:"clamp(32px,5vw,48px)"}}>Your Complete Finland Housing Guide</h1>
        <p style={{fontSize:18,maxWidth:700,margin:"auto",lineHeight:1.7}}>
          Everything you need to know about finding, renting and managing student accommodation in Finland.
        </p>
      </section>

      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:20}}>
        {guides.map((guide,index)=>
          <div key={guide.title} style={{background:"white",padding:24,borderRadius:15,boxShadow:"0 3px 10px #ddd"}}>
            <div style={{fontSize:35}}>{guide.icon}</div>
            <h2>{guide.title}</h2>
            <p style={{lineHeight:1.6}}>{guide.description}</p>
            <button onClick={()=>setActive(active===index?null:index)} style={{background:"#304a25",color:"white",border:0,padding:"12px 18px",borderRadius:8,cursor:"pointer"}}>
              {active===index?"Close Guide":"Read Guide →"}
            </button>
            {active===index && <div style={{marginTop:20,lineHeight:1.8}}>
              <h3>Important Steps</h3>
              <ul>{guide.points.map(point=><li key={point}>{point}</li>)}</ul>
            </div>}
          </div>
        )}
      </section>

      <section style={{background:"#304a25",color:"white",padding:30,borderRadius:15,marginTop:40,textAlign:"center"}}>
        <h2>Ready to Find Your Student Home?</h2>
        <p>Explore accommodation options across the Helsinki capital region.</p>
        <a href="/explore" style={{display:"inline-block",background:"#f2e9d7",color:"#20351a",padding:"13px 24px",borderRadius:8,textDecoration:"none"}}>Explore Properties →</a>
      </section>

      <footer style={{textAlign:"center",padding:30,marginTop:20}}>
        UniStay Finland • Student Housing Guide
      </footer>
    </div>
  );
}
