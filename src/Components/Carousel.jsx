import { motion } from "framer-motion";
import Samsung from "../images/Carousel/samsung.png";
import Apple from "../images/Carousel/apple.png";
import Headphones from "../images/Carousel/headphones.png";
import Watches from "../images/Carousel/smart-watch.png";
import Laptop from "../images/Carousel/laptop.png";
import Gaming from "../images/Carousel/games.png";
import Accessories from "../images/Carousel/usb-c-cable.png";
import SmartTV from "../images/Carousel/smart-tv.png";
import Camera from "../images/Carousel/camera.png";
import Desksetup from "../images/Carousel/desksetup.png";

// Replace these with your own tech logos
const logos = [
  { src: Apple, name: "Apple" },
  { src: Samsung, name: "Samsung" }, 
  { src: Headphones, name: "Headphones" }, 
  {src: Watches, name: "Watches",}, 
  { src: Laptop, name: "Computer", }, 
  { src: Gaming, name: "Gaming", }, 
  { src: Accessories, name: "Accessories", }, 
  { src: SmartTV, name: "SmartTV", }, 
  { src: Camera, name: "Cameras", }, 
  { src: Desksetup, name: "Desksetup", }, 
  
 
];

export default function AnimatedLogoCarousel() {
  return (
    <div className="overflow-hidden py-24 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-20 text-gray-800">
        Tech Categories
      </h2>

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }} // will be improved below
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // adjust speed
        }}
      >
        {/* Duplicate logos twice for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 2.15 }}
            className="flex flex-col items-center mx-6 cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <p className="mt-4 text-sm font-medium text-gray-700">{logo.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
