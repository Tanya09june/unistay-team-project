
import React, { useState } from "react";

const locations = [
  {name:"Otaniemi Timber Studio A2",city:"Espoo",price:510,area:"Otaniemi",distance:"3 min to Metro",lat:"60.185",lng:"24.827"},
  {name:"Kallio Bohemian Loft Room",city:"Helsinki",price:420,area:"Kallio",distance:"5 min to Metro",lat:"60.187",lng:"24.950"},
  {name:"Tikkurila Bright Student Loft",city:"Vantaa",price:480,area:"Tikkurila",distance:"2 min to Train",lat:"60.293",lng:"25.041"},
  {name:"Kamppi Quiet Courtyard Studio",city:"Helsinki",price:620,area:"Kamppi",distance:"4 min to Tram",lat:"60.169",lng:"24.932"},
  {name:"Tapiola Garden Quarter Flat",city:"Espoo",price:390,area:"Tapiola",distance:"6 min to Aalto Campus",lat:"60.178",lng:"24.804"},
  {name:"Myyrmäki Campus Residence Studio",city:"Vantaa",price:440,area:"Myyrmäki",distance:"400m to Metropolia",lat:"60.258",lng:"24.850"}
];

export default function ExploreMap() {
  const [city,setCity] = useState("All Cities");
  const [selected,setSelected] = useState(null);

  const filtered = locations.filter(x=>city==="All Cities"||x.city===city);

  return (
    <div style={{background:"#faf8f0",minHeight:"100vh",padding:"25px 4%",fontFamily:"Arial",color:"#20351a"}}>
      <header style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:15}}>
        <h2>🟩 UniStay</h2>
        <nav style={{display:"flex",gap:20}}>
          <a href="/explore">Explore</a>
          <b>Explore Map</b>
          <a href="/housing-guide">Housing Guide</a>
        </nav>
      </header>

      <h1 style={{fontSize:38,marginTop:35}}>Explore Homes on Map</h1>
      <p>Find student accommodation near your university and transport connections.</p>

      <div style={{display:"flex",gap:10,margin:"25px 0",flexWrap:"wrap"}}>
        {["All Cities","Helsinki","Espoo","Vantaa"].map(c=>
          <button key={c} onClick={()=>{setCity(c);setSelected(null)}} style={{padding:"12px 22px",border:0,borderRadius:25,background:city===c?"#304a25":"#eeeade",color:city===c?"white":"#20351a"}}>{c}</button>
        )}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
        <div style={{background:"#e8eadf",borderRadius:16,padding:20,minHeight:450}}>
          <h2>📍 Finland Housing Map</h2>
          <div style={{background:"#d8e3d0",borderRadius:12,minHeight:340,padding:20,position:"relative",overflow:"hidden"}}>
            <div style={{textAlign:"center",paddingTop:30}}>
              <h2>Helsinki Region</h2>
              <p>Explore accommodation locations</p>
            </div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:15,marginTop:50}}>
              {filtered.map((item,index)=>
                <button key={item.name} onClick={()=>setSelected(item)} style={{background:selected?.name===item.name?"#a44c00":"#304a25",color:"white",border:0,borderRadius:25,padding:12,cursor:"pointer"}}>
                  📍 {item.area}
                </button>
              )}
            </div>
            <p style={{textAlign:"center",marginTop:55}}>Helsinki • Espoo • Vantaa</p>
          </div>
          <small>Illustrative location view. Connect a map provider for real geographic pins.</small>
        </div>

        <div>
          <h2>{filtered.length} Available Properties</h2>
          {filtered.map(item=>
            <div key={item.name} onClick={()=>setSelected(item)} style={{background:"white",padding:18,borderRadius:12,marginBottom:12,cursor:"pointer",border:selected?.name===item.name?"2px solid #304a25":"1px solid #eee"}}>
              <h3>{item.name}</h3>
              <p>📍 {item.city} • {item.area}</p>
              <p>🚆 {item.distance}</p>
              <h2>€{item.price} / month</h2>
              <button style={{background:"#304a25",color:"white",border:0,padding:10,borderRadius:7}}>Select Location</button>
            </div>
          )}
        </div>
      </div>

      {selected && <div style={{background:"white",padding:20,borderRadius:12,marginTop:20}}>
        <h2>Selected Property</h2>
        <h3>{selected.name}</h3>
        <p>{selected.city} • {selected.area}</p>
        <p>Monthly Rent: €{selected.price}</p>
        <button onClick={()=>setSelected(null)}>Close</button>
      </div>}
    </div>
  );
}
