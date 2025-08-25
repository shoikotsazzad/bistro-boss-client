import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import contactImg from '../../assets/contact/banner.jpg'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        
        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return (
        <div>
            <Helmet>
                <title>Bistro | Contact</title>
            </Helmet>
            <Cover img={contactImg} title="Contact Us" ></Cover>
            
            {/* Location Cards */}
            <SectionTitle subHeading="visit us" heading="our location"></SectionTitle>
            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Phone Card */}
                    <div className="bg-gray-800 dark:bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4">
                            <div className="text-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <h3 className="text-lg font-semibold">PHONE</h3>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <p className="text-orange-400 mb-2">Main Office</p>
                            <p className="font-semibold text-lg text-white">+1 (555) 123-4567</p>
                            <p className="text-orange-400 mt-2">Customer Service</p>
                            <p className="font-semibold text-white">+1 (555) 987-6543</p>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-gray-800 dark:bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4">
                            <div className="text-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h3 className="text-lg font-semibold">ADDRESS</h3>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <p className="text-orange-400 mb-2">Main Location</p>
                            <p className="font-semibold text-white">123 Bistro Street</p>
                            <p className="font-semibold text-white">Downtown District</p>
                            <p className="font-semibold text-white">New York, NY 10001</p>
                            <p className="text-orange-400 mt-2">United States</p>
                        </div>
                    </div>

                    {/* Working Hours Card */}
                    <div className="bg-gray-800 dark:bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-gray-700">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-4">
                            <div className="text-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg font-semibold">WORKING HOURS</h3>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-orange-400">Mon - Thu:</span>
                                    <span className="font-semibold text-white">08:00 - 22:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-orange-400">Fri - Sat:</span>
                                    <span className="font-semibold text-white">10:00 - 23:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-orange-400">Sunday:</span>
                                    <span className="font-semibold text-white">10:00 - 21:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <SectionTitle subHeading="send us a message" heading="Contact form"></SectionTitle>
            <div className="max-w-4xl mx-auto px-4 pb-16">
                <div className="bg-gray-800 dark:bg-gray-900 rounded-lg p-8 shadow-2xl border border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-orange-400 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-orange-400 mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-orange-400 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-orange-400 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows="6"
                                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-vertical"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;