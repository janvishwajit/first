import React, { useState } from 'react';
import './App.css';

function Branch({ title, children, additionalInfo }) {
  const [showInfo, setShowInfo] = useState(false);

  const isLeafBranch = !children; 

  return (
    <div className={`branch p-3  text-center ${isLeafBranch ? 'bg-light' : ''}`} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
      <div className="branch-title">{title}</div>
      {showInfo && <div className="additional-info mt-2 text-primary">{additionalInfo}</div>}
      {children && <div className="branch-children mt-3 text-success">{children}</div>}
    </div>
  );
}

function App() {
  return (
    <div style={{backgroundColor:"lightblue"}}>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="flowchart">
            <div className='main text-center fw-bold'>
              <h1 style={{color:""}}>🎀 Car Project 🎀</h1>
            </div>
            <Branch title="">
              <Branch title="1️⃣ Research">
                <Branch title="External" additionalInfo="External research involves studying market trends, competitor analysis, and consumer behavior." />
                <Branch title="Internal" additionalInfo="Internal research involves studying the organization's capabilities, resources, and potential constraints." />
              </Branch>
              <Branch title="2️⃣ Planning">
                <Branch title="PRD" additionalInfo="PRD (Product Requirements Document) outlines the product's features, functionalities, and user requirements." />
                <Branch title="Specs" additionalInfo="Specs (Specifications) define technical specifications and requirements for the product." />
              </Branch>
              <Branch title="3️⃣ Designing">
                <Branch title="Hardware" additionalInfo="Hardware design involves designing the physical components of the product, such as chassis, engine, and sensors." />
                <Branch title="Software" additionalInfo="Software design involves developing the software architecture, algorithms, and user interfaces for the product." />
              </Branch>
              <Branch title="4️⃣ Manufacturing">
                <Branch title="Material" additionalInfo="Material procurement and management to ensure availability of required resources for manufacturing." />
                <Branch title="Production" additionalInfo="Production process management to ensure efficient assembly and quality control." />
              </Branch>
              <Branch title="5️⃣ Sales/Marketing">
                <Branch title="Online" additionalInfo="Online marketing strategies include digital advertising, social media marketing, and search engine optimization." />
                <Branch title="Dealership" additionalInfo="Dealership involves partnering with dealers and distributors to reach customers through physical retail outlets." />
              </Branch>
            </Branch>
          </div>
        </div>
      </div>
    </div>
    <div className='footer'>
    <p>Submitted By : Vishwajeet Shinde</p>
    <p>Email : vashinde42@gmail.com</p>
  </div></div>

  );
}

export default App;
