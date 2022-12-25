import React from 'react';
import LandingPage from './Components/LandingPage';
import Branches from './Components/Branches';
import Services from "./Components/Services"
import Explore from './Components/Explore';
import './HomePage.css';


export default function HomePage() {
  return (
    <div className="Main">
      <LandingPage />
      <Branches />
      <Services />
      <Explore />
    </div>
  );
}
