// import React, { useEffect, useState } from "react";

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/80 shadow-md backdrop" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
//         <img
//           src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg"
//           className="h-8"
//           alt="Appinventiv Logo"
//         />
//         <nav className="hidden md:flex gap-10 text-white items-center">
//           <a href="#">SERVICES</a>
//           <a href="#">INDUSTRIES</a>
//           <a href="#">WORK</a>
//           <a href="#">COMPANY</a>
//           <a href="#">INSIGHTS</a>
//           <a href="#">
//             <button
//               className="px-[40px] py-[8px] rounded-lg font-semibold transition-colors duration-300 ease-in-out text-white cursor-pointer"
//               style={{ backgroundColor: "#126BFB" }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.color = "#000000";
//                 e.target.style.border = "black"; 
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = "#1163FB";
//                 e.target.style.color = "#ffffff";
//                 e.target.style.border = "none"; 
//               }}
//             >
//               CONTACT US
//             </button>
//           </a>
//         </nav> 
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-md backdrop" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appinventiv-mob-wht-logo.svg"
          className="h-8"
          alt="Appinventiv Logo"
        />
        <nav className="hidden md:flex gap-10 text-white items-center">
          {["SERVICES", "INDUSTRIES", "WORK", "COMPANY", "INSIGHTS"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#126BFB] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <a href="#">
            <button
              className="px-[40px] py-[8px] rounded-lg font-semibold transition-colors duration-300 ease-in-out text-white cursor-pointer"
              style={{ backgroundColor: "#126BFB" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.color = "#000000";
                e.target.style.border = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#1163FB";
                e.target.style.color = "#ffffff";
                e.target.style.border = "none";
              }}
            >
              CONTACT US
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
