// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import photo from "../../public/images/Swiggy-logo2.webp"
// import play_store from "../../public/images/play_store.png"
// import app_store from "../../public/images/app_store.png"

// const Footer = () => {
//     return (
//         <footer className="bg-[#F7F8FA] border-t border-gray-200 mt-10">
//             <div className="max-w-[1050px] mx-auto px-6 py-10 ">
//                 {/* Top App Download Section */}
//                 <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//                     <h3 className="text-lg text-[23px] text-[rgba(2,6,12,0.75)] font-semibold mb-4 md:mb-0">
//                         For better experience, download the  Swiggy app now
//                     </h3>
//                     <div className="flex gap-4">
//                         {/* Playstore Image */}
//                         <img
//                             src={play_store}
//                             alt="Google Play"
//                             className="h-[64px] w-[208px] cursor-pointer"
//                         />
//                         {/* App Store Image */}
//                         <img
//                             src={app_store}
//                             alt="App Store"
//                             className="h-[64px] w-[208px] cursor-pointer"
//                         />
//                     </div>
//                 </div>

//                 {/* Bottom Links Section */}
//                 <div className=" max-w-[950px] mx-auto mt-20 grid grid-cols-2 md:grid-cols-5 gap-4">
//                     {/* Logo Section */}
//                     <div >
//                         <img src={photo} alt="Your Logo" className="h-[40px]  w-auto mb-4" />
//                         <p className="text-sm  font-semibold-[20px] text-gray-600">© 2025 Swiggy Limited</p>
//                     </div>

//                     {/* Company */}
//                     <div className=" ml-20">
//                         <h4 className="font-semibold mb-3 text-[18px]">Company</h4>
//                         <ul className="space-y-2 text-sm text-gray-700 text-[15px] leading-[21px] cursor-pointer">
//                             <li>About Us</li>
//                             <li>Careers</li>
//                             <li>Team</li>
//                             <li>Corporate</li>
//                             <li>Swiggy One</li>
//                             <li>Swiggy Instamart</li>
//                             <li>Swiggy Dineout</li>
//                             <li>Swiggy Genie</li>
//                             <li>Minis</li>
//                             <li>Pyng</li>
//                         </ul>
//                     </div>

//                     {/* Contact */}
//                     <div className=" ml-10">
//                         <h4 className="font-semibold mb-3 text-[18px]">Contact us</h4>
//                         <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
//                             <li>Help & Support</li>
//                             <li>Partner with us</li>
//                             <li>Ride with us</li>
//                         </ul>
//                     </div>

//                     {/* Available In */}
//                     <div className=" ml-10">
//                         <h4 className="font-semibold mb-3 text-[18px]">Available in:</h4>
//                         <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
//                             <li>Bangalore</li>
//                             <li>Delhi</li>
//                             <li>Mumbai</li>
//                             <li>Hyderabad</li>
//                             <li>Pune</li>
//                             <li>
//                                 <select className="border border-gray-300 rounded px-2 py-1 text-sm">
//                                     <option>679 Cities</option>
//                                 </select>
//                             </li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h4 className="font-semibold mb-3 text-[18px]">Life At Swiggy</h4>
//                         <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
//                             <li>Explore with Swiggy</li>
//                             <li>Swiggy News</li>
//                             <li>Snackables</li>
//                         </ul>
//                     </div>

//                     <div>
//                         <h4 className="font-semibold mb-3 text-[18px]">legal</h4>
//                         <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
//                             <li>Terms And Conditions</li>
//                             <li>Cookie Policy</li>
//                             <li>Privacy Policy</li>
//                             <li>Investor Relations</li>
//                         </ul>
//                     </div>

//                     {/* Social Links */}
//                     <div>
//                         <h4 className="font-semibold mb-3 text-[18px]">Follow Us</h4>
//                         <div className="flex gap-4 text-gray-600 text-xl">
//                             <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
//                             <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
//                             <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//                             <a href="#"><FaLinkedin className="hover:text-blue-700" /></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;





import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import photo from "../../public/images/Swiggy-logo2.webp"
import play_store from "../../public/images/play_store.png"
import app_store from "../../public/images/app_store.png"

const Footer = () => {
    return (
        <footer className="bg-[#F7F8FA] border-t border-gray-200 mt-10">
            <div className="max-w-[1050px] mx-auto px-6 py-10 ">
                {/* Top App Download Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h3 className="  text-lg md:text-lg lg:text-lg text-[15px] md:text-[23px] lg:text-[23px] text-[rgba(2,6,12,0.75)] font-semibold mb-4 md:mb-0">
                        For better experience, download the  Swiggy app now
                    </h3>
                    <div className="flex gap-4">
                        {/* Playstore Image */}
                        <img
                            src={play_store}
                            alt="Google Play"
                            className="h-[45px] md:h-[64px] lg:h-[64px] w-[140px] md:w-[208px] lg:w-[208px] cursor-pointer"
                        />
                        {/* App Store Image */}
                        <img
                            src={app_store}
                            alt="App Store"
                            className=" h-[45px] md:h-[64px] lg:h-[64px] w-[140px] md:w-[208px] lg:w-[208px]cursor-pointer"
                        />
                    </div>
                </div>

                {/* Bottom Links Section */}
                {/* <div className=" max-w-[950px] mx-auto mt-20 grid grid-cols-2 md:grid-cols-5 gap-4">
                    
                    <div >
                        <img src={photo} alt="Your Logo" className="h-[40px]  w-auto mb-4" />
                        <p className="text-sm  font-semibold-[20px] text-gray-600">© 2025 Swiggy Limited</p>
                    </div>

                    
                    <div className=" ml-20">
                        <h4 className="font-semibold mb-3 text-[18px]">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-700 text-[15px] leading-[21px] cursor-pointer">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Corporate</li>
                            <li>Swiggy One</li>
                            <li>Swiggy Instamart</li>
                            <li>Swiggy Dineout</li>
                            <li>Swiggy Genie</li>
                            <li>Minis</li>
                            <li>Pyng</li>
                        </ul>
                    </div>

            
                    <div className=" ml-10">
                        <h4 className="font-semibold mb-3 text-[18px]">Contact us</h4>
                        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </ul>
                    </div>

                    
                    <div className=" ml-10">
                        <h4 className="font-semibold mb-3 text-[18px]">Available in:</h4>
                        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
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

                    <div>
                        <h4 className="font-semibold mb-3 text-[18px]">Life At Swiggy</h4>
                        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
                            <li>Explore with Swiggy</li>
                            <li>Swiggy News</li>
                            <li>Snackables</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-[18px]">legal</h4>
                        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer">
                            <li>Terms And Conditions</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>Investor Relations</li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="font-semibold mb-3 text-[18px]">Follow Us</h4>
                        <div className="flex gap-4 text-gray-600 text-xl">
                            <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
                            <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
                            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
                            <a href="#"><FaLinkedin className="hover:text-blue-700" /></a>
                        </div>
                    </div>
                </div> */}
                
                <div className="max-w-[950px] mx-auto mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 px-4 md:px-0">
    {/* Logo Section */}
    <div className="text-center md:text-left">
        <img src={photo} alt="Your Logo" className="h-[32px] md:h-[40px] w-auto mb-4 mx-auto md:mx-0" />
        <p className="text-sm font-semibold text-gray-600">© 2025 Swiggy Limited</p>
    </div>

    {/* Company */}
    <div className="md:ml-20">
        <h4 className="font-semibold mb-3 text-[16px] md:text-[18px] text-center md:text-left">Company</h4>
        <ul className="space-y-2 text-sm text-gray-700 text-[14px] md:text-[15px] leading-[21px] cursor-pointer text-center md:text-left">
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Corporate</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Dineout</li>
            <li>Swiggy Genie</li>
            <li>Minis</li>
            <li>Pyng</li>
        </ul>
    </div>

    {/* Contact */}
    <div className="md:ml-10">
        <h4 className="font-semibold mb-3 text-[16px] md:text-[18px] text-center md:text-left">Contact us</h4>
        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer text-center md:text-left">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
        </ul>
    </div>

    {/* Available In */}
    <div className="md:ml-10">
        <h4 className="font-semibold mb-3 text-[16px] md:text-[18px] text-center md:text-left">Available in:</h4>
        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer text-center md:text-left">
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Pune</li>
            <li className="flex justify-center md:justify-start">
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>679 Cities</option>
                </select>
            </li>
        </ul>
    </div>

    {/* Life At Swiggy */}
    <div>
        <h4 className="font-semibold mb-3 text-[16px] md:text-[18px] text-center md:text-left">Life At Swiggy</h4>
        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer text-center md:text-left">
            <li>Explore with Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
        </ul>
    </div>

    {/* Legal */}
    <div>
        <h4 className="font-semibold mb-3 text-[16px] md:text-[18px] text-center md:text-left">Legal</h4>
        <ul className="space-y-2 text-sm text-gray-700 leading-[21px] cursor-pointer text-center md:text-left">
            <li>Terms And Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relations</li>
        </ul>
    </div>

    {/* Social Links */}
    <div className="col-span-2 md:col-span-1">
        <h4 className="font-semibold mb-3 text-[16px] md:text-[18px] text-center md:text-left">Follow Us</h4>
        <div className="flex gap-4 text-gray-600 text-xl justify-center md:justify-start">
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