import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import amazonLogo from '../public/assets/images/amazon-logo.png';
import enFlag from "../public/assets/images/en-flag.png";


const Footer = () => {
    
    return ( 
        <div className="flex flex-col w-full mx-auto">
            <Link href="#">
                <div className="flex bg-[#37475a] hover:bg-[#485769] justify-center">
                    <p className="text-white text-xs py-4">Back to top</p>
                </div> 
            </Link>

            <div className="grid grid-cols-2 lg:grid-cols-4  md:px-32 gap-4 px-5 bg-amazon-blue_light justify-center py-10 md:space-x-16 border-b border-slate-600">

                <div className="link-footer">
                    <h5>Get to Know Us</h5>
                    <ul>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">About Martvox</Link></li>
                        <li><Link href="/">Investor Relations</Link></li>
                        <li><Link href="/">Martvox Devices</Link></li>
                        <li><Link href="/">Martvox Science</Link></li>
                    </ul>
                </div>

                <div className="link-footer">
                    <h5>Make Money with Us</h5>
                    <ul>
                        <li><Link href="/">Sell products on Martvox</Link></li>
                        <li><Link href="/">Sell on Martvox Business</Link></li>
                        <li><Link href="/">Sell apps on Martvox</Link></li>
                        <li><Link href="/">Become an Affiliate</Link></li>
                        <li><Link href="/">Advertise Your Products</Link></li>
                        <li><Link href="/">Self-Publish with Us</Link></li>
                        <li><Link href="/">Host a Martvox Hub</Link></li>
                        <li><Link href="/">See More Make Money with Us</Link></li>
                    </ul>
                </div>

                <div className="link-footer">
                    <h5>Martvox Payment Products</h5>
                    <ul>
                        <li><Link href="/">Martvox Business Card</Link></li>
                        <li><Link href="/">Shop with Points</Link></li>
                        <li><Link href="/">Investor Relations</Link></li>
                        <li><Link href="/">Reload Your Balance</Link></li>
                        <li><Link href="/">Martvox Currency Converter</Link></li>
                    </ul>
                </div>

                <div className="link-footer">
                    <h5>Let Us Help You</h5>
                    <ul>
                        <li><Link href="/">Martvox and COVID-19</Link></li>
                        <li><Link href="/">Your Account</Link></li>
                        <li><Link href="/">Your Orders</Link></li>
                        <li><Link href="/">Shipping Rates & Policies</Link></li>
                        <li><Link href="/">Returns & Replacements</Link></li>
                        <li><Link href="/">Manage Your Content and Devices</Link></li>
                        <li><Link href="/">Martvox Assistant</Link></li>
                        <li><Link href="/">Help</Link></li>
                    </ul>
                </div>

            </div>

            <div className="flex max-md:flex-col items-center bg-amazon-blue_light justify-center py-1">
                <Image src={amazonLogo} alt="amazon-logo" className="object-contain w-20 h-20 md:mr-20" />

                <div className="flex items-center space-x-2 max-md:mb-4">
                    <div className="flex space-around border rounded border-slate-400 px-2 py-2 text-xs text-slate-100 cursor-pointer">
                        <GlobeAltIcon className="h-4 mr-3" />
                        <span>English</span>
                    </div>
                    <div className="flex border rounded border-slate-400 px-2 py-2 text-xs text-slate-100 cursor-pointer">
                        <span className="text-slate-100 mr-3">$</span>
                        <span>USD - U.S. Dollar</span>
                    </div>
                    <div className="flex items-center border rounded border-slate-400 px-2 py-2 text-xs text-slate-100 cursor-pointer">
                        <Image
                            src={enFlag}
                            alt="flag-country"
                            className="object-contain h-4 mr-3"
                        />
                        <span>United States</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-8 bg-[#131A22] items-center">

                <div className="mb-8">
                    <ul className="footer-link-services grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8">
                        <li>
                            <Link href="">
                                <b>Martvox Music</b>
                                <p>Stream millions of songs</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Global</b>
                                <p>Ship Orders Internationally</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Home Services</b>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>PillPack</b>
                                <p>Pharmacy Simplified</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Music</b>
                                <p>Stream millions of songs</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Global</b>
                                <p>Ship Orders Internationally</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Home Services</b>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>PillPack</b>
                                <p>Pharmacy Simplified</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Music</b>
                                <p>Stream millions of songs</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Global</b>
                                <p>Ship Orders Internationally</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Home Services</b>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>PillPack</b>
                                <p>Pharmacy Simplified</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Music</b>
                                <p>Stream millions of songs</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Global</b>
                                <p>Ship Orders Internationally</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Home Services</b>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </Link>
                        </li>               
                        <li>
                            <Link href="">
                                <b>Martvox Global</b>
                                <p>Ship Orders Internationally</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Home Services</b>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>PillPack</b>
                                <p>Pharmacy Simplified</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Martvox Global</b>
                                <p>Ship Orders Internationally</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <b>Home Services</b>
                                <p>Experienced Pros Happiness Guarantee</p>
                            </Link>
                        </li>
                    </ul> 
                </div>

                <div className="flex flex-col items-center">
                    <ul className="flex whitespace-nowrap max-md:flex-col items-center text-xs text-slate-300 space-x-4 max-md:space-y-2">
                        <li className="hover:underline">
                            <Link href="">Conditions of Use</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="">Privacy Notice</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="">Your Ads Privacy Choices</Link>
                        </li>
                    </ul>
                    <h6 className="text-xs text-slate-300 mt-1">
                        © 1996-2023, Martvox.com, Inc. or its affiliates
                    </h6>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;
