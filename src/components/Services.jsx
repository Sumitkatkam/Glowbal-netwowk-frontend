import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FaMobileAlt, FaCode, FaSync, FaLightbulb, FaTools, FaCogs, FaCloud } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { AiOutlineSolution } from "react-icons/ai";



const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const icons = {
    "Mobile App Development": <FaMobileAlt className="text-3xl text-white mb-4" />,
    "Web Development": <FaLaptopCode className="text-3xl text-white mb-4" />,
    "UI/UX Design": <MdOutlineDesignServices className="text-3xl text-white mb-4" />,
    "Blockchain Development": <SiHiveBlockchain className="text-3xl text-white mb-4" />,
    "AI/ML Solution": <AiOutlineSolution className="text-3xl text-white mb-4" />,
  };

  return (
    <section className="px-6 md:px-20 py-20 bg-black w-full">
      <h2 className="text-4xl md:text-5xl font-semibold text-left mb-12 text-white">
        Navigate The Digital Frontier With <br /> Our Engineering Excellence
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-[#111] text-white min-h-[280px] p-10 md:p-8 flex flex-col justify-between border border-transparent hover:border-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
            <CardHeader>
              <div>{icons[service.title] || <FaTools className="text-3xl text-white mb-4" />}</div>
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">{service.description}</p>
            </CardContent>
          </Card>
        ))}

        {/* CTA Card */}
        <Card className="bg-blue-600 text-white flex justify-center items-center cursor-pointer">
          <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 font-medium">
            Our Services <MdOutlineArrowForward />
          </button>
        </Card>
      </div>
    </section>
  );
};

export default Services;
