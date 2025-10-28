import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import phone2 from "../images/Carousel/samsung.png";
import phone1 from "../images/Carousel/apple.png";
import Headphones from "../images/Carousel/headphones.png";
import Watches from "../images/Carousel/smart-watch.png";
import Laptop from "../images/Carousel/laptop.png";
import Gaming from "../images/Carousel/games.png";
import Accessories from "../images/Carousel/usb-c-cable.png";
import SmartTV from "../images/Carousel/smart-tv.png";
import Camera from "../images/Carousel/camera.png";
import Desksetup from "../images/Carousel/desksetup.png";

// Map logos to category routes
const logos = [
  { src: phone1, name: "Phones", link: "/category/phones" },
  { src: phone2, name: "Phones", link: "/category/phones" },
  { src: Headphones, name: "Headphones", link: "/category/headphones" },
  { src: Watches, name: "Watches", link: "/category/watches" },
  { src: Laptop, name: "Laptops", link: "/category/laptops" },
  { src: Gaming, name: "Gaming", link: "/category/gaming" },
  { src: Accessories, name: "Accessories", link: "/category/accessories" },
  { src: SmartTV, name: "Smart TV", link: "/category/smartlife" },
  { src: Camera, name: "Cameras", link: "/category/cameras" },
  { src: Desksetup, name: "Desk Setup", link: "/category/accessories" },
];

export default function AnimatedLogoCarousel() {
  return (
    <div className="overflow-hidden py-24 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-20 text-gray-800">
        Tech Categories
      </h2>

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {/* Duplicate logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <Link key={index} to={logo.link}>
            <motion.div
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
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
