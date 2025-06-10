import React, { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const Partners = () => {
  const [partners, setPartners] = useState([]);

  const imageMap = {
    "IKEA": "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ikea-logo-color.svg",
    "DOMINO'S": "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/domin-logo-color.svg",
    "BAJAJ": "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/bajaj-allianz-logo-color.svg",
    "KPMG": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png",
    "VODAFONE":"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Vodafone_2017_logo.svg/2560px-Vodafone_2017_logo.svg.png",
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/partners"
    )
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <section className="px-10 md:px-20 pt-14 pb-20 bg-black w-full">
      <h2 className="text-4xl md:text-5xl font-semibold text-left mb-12 text-white -mt-2">
        Our Partnerships Have Transformed How <br /> You Experience These Global Leaders
      </h2>

      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max gap-12 p-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="min-w-[200px] text-center text-white px-6 py-4 rounded-lg flex flex-col items-center justify-center gap-4"
            >
              {imageMap[partner.name?.toUpperCase()] ? (
                <img
                  src={imageMap[partner.name.toUpperCase()]}
                  alt={partner.name}
                  className="h-[32px] filter grayscale brightness-75 object-contain"
                />
              ) : (
                <div className="h-12 flex items-center justify-center text-sm text-gray-400">
                  No Logo
                </div>
              )}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default Partners;


 