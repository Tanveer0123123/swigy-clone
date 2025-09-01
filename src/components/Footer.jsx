import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import photo from "../../public/images/Swiggy-logo.png"
import play_store from "../../public/images/play_store.png"
import app_store from "../../public/images/app_store.png"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top App Download Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h3 className="text-lg font-medium mb-4 md:mb-0">
            For better experience, download the app now
          </h3>
          <div className="flex gap-4">
            {/* Playstore Image */}
            <img
              src={play_store}
              alt="Google Play"
              className="h-12 w-auto cursor-pointer"
            />
            {/* App Store Image */}
            <img
              src={app_store}
              alt="App Store"
              className="h-12 w-auto cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <img src={photo} alt="Your Logo" className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-600">© 2025 Your Company Ltd</p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>About Us</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Corporate</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact us</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>

          {/* Available In */}
          <div>
            <h4 className="font-semibold mb-3">Available in:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Bangalore</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Hyderabad</li>
              <li>Pune</li>
              <li>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>679 Cities</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-gray-600 text-xl">
              <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
              <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
              <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
              <a href="#"><FaLinkedin className="hover:text-blue-700" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
