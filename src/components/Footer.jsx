import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-light_grey text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Navigation</h4>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/searched-hospitals" className="hover:underline">
                Hospitals
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon sx={{fontSize: '30px', color: '#0A73B0'}}/> <span>https://facebook.com</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{fontSize: '30px', color: '#0A73B0'}} /> <span>https://twitter.com</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{fontSize: '30px', color: '#0A73B0'}} /> <span>https://instagram.com</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{fontSize: '30px', color: '#0A73B0'}} /> <span>https://linkedin.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">
            <span className="font-semibold">Address:</span> East Legon, Accra, Ghana
          </p>
          <p className="mb-2">
            <span className="font-semibold">Phone:</span> +233 852 456 890
          </p>
          <p className="mb-2">
            <span className="font-semibold">Email:</span> medopinions@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Medopinions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
