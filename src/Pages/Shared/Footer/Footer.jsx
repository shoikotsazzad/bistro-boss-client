import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Restaurant Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-full">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="fill-white">
                                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.88-6.88 1.27-1.27z"/>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                                    Bistro Boss
                                </h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Experience fine dining with authentic flavors and exceptional service. 
                                Creating memorable moments since 1992.
                            </p>
                            <div className="flex items-center space-x-2 text-orange-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">123 Bistro Street, Downtown District</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-400/30 pb-2">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:pl-2 inline-block">Home</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:pl-2 inline-block">Menu</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:pl-2 inline-block">About Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:pl-2 inline-block">Contact</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 hover:pl-2 inline-block">Reservations</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-400/30 pb-2">
                                Contact Info
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-orange-500/20 p-2 rounded-lg">
                                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                                        <p className="text-gray-400 text-xs">24/7 Support</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-orange-500/20 p-2 rounded-lg">
                                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">info@bistroboss.com</p>
                                        <p className="text-gray-400 text-xs">Email Us</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-orange-500/20 p-2 rounded-lg">
                                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Mon-Sun: 11:00 - 23:00</p>
                                        <p className="text-gray-400 text-xs">Opening Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-orange-400 border-b border-orange-400/30 pb-2">
                                Follow Us
                            </h3>
                            <p className="text-gray-300 text-sm mb-4">
                                Stay connected for updates and special offers
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="group">
                                    <div className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 p-3 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-gray-300 group-hover:text-white">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="group">
                                    <div className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 p-3 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-gray-300 group-hover:text-white">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="group">
                                    <div className="bg-gray-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 p-3 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-gray-300 group-hover:text-white">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#" className="group">
                                    <div className="bg-gray-800 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-700 p-3 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            className="fill-current text-gray-300 group-hover:text-white">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-2">
                                <p className="text-gray-400 text-sm">
                                    © 2024 Bistro Boss. All rights reserved.
                                </p>
                            </div>
                            <div className="flex items-center space-x-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Privacy Policy</a>
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Terms of Service</a>
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;