import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-sm mt-2">
              Empowering businesses with cutting-edge solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6 text-gray-500 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-0.885 0.389-1.83 0.654-2.825 0.775 1.014-0.609 1.794-1.574 2.163-2.723-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.956-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 0.39 0.045 0.765 0.127 1.126-4.087-0.205-7.713-2.165-10.141-5.144-0.423 0.722-0.666 1.562-0.666 2.457 0 1.697 0.864 3.195 2.179 4.073-0.802-0.026-1.556-0.248-2.217-0.616v0.061c0 2.37 1.685 4.343 3.918 4.789-0.41 0.111-0.84 0.171-1.285 0.171-0.314 0-0.615-0.03-0.916-0.086 0.631 1.956 2.445 3.379 4.6 3.419-1.682 1.319-3.808 2.105-6.102 2.105-0.398 0-0.79-0.023-1.175-0.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14.002-7.497 14.002-13.986 0-0.213-0.005-0.425-0.014-0.636 0.962-0.69 1.797-1.56 2.457-2.549z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6 text-gray-500 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.876v-6.985h-2.54v-2.891h2.54v-2.205c0-2.506 1.492-3.89 3.777-3.89 1.095 0 2.239 0.195 2.239 0.195v2.461h-1.261c-1.242 0-1.629 0.771-1.629 1.562v1.877h2.773l-0.443 2.891h-2.33v6.985c4.781-0.748 8.438-4.885 8.438-9.876z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
