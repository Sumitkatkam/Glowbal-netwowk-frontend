import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D25] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-2xl mb-4">Services</h4>
          <ul className="space-y-2 text-lg">
            <li>Mobile App Development</li>
            <li>Web Development</li>
            <li>UI/UX Development</li>
            <li>Blockchain Development</li>
            <li>AI & ML Solutions</li>
            <li><a href="#">more ...</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-4">Industries</h4>
          <ul className="space-y-2 text-lg">
            <li>Healthcare</li>
            <li>Education</li>
            <li>Saas</li>
            <li>Ecommerce</li>
            <li>Finance</li>
            <li><a href="#">more ...</a></li>
          </ul>
        </div> 
        <div>
          <h4 className="font-bold text-2xl mb-4">Technologies</h4>
          <ul className="space-y-2 text-lg">
            <li>Blockchain</li>
            <li>Artificial Intelligence</li>
            <li>AR and VR</li>
            <li>Cloud Computing</li>
            <li>Internet of Things</li>
            <li><a href="#">more ...</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-2xl mb-4">Company</h4>
          <ul className="space-y-2 text-lg">
            <li>IKEA</li>
            <li>Domino's</li>
            <li>KPMG</li>
            <li>Bajaj Allianz</li>
            <li>Vodafone</li>
            <li><a href="#">more ...</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


