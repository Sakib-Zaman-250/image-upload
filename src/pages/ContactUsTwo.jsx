import React, { useState } from 'react';

const ContactUsTwo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-hidden border border-gray-300 relative">
                {/* Decorative Envelope Border */}
                <div className="absolute inset-0 -z-10">
                    <svg
                        className="w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 100"
                    >
                        <path fill="#d1e7ff" d="M0 0h100v100H0z" />
                        <path fill="#b7d5f8" d="M0 0l100 100V0H0z" opacity="0.2" />
                    </svg>
                </div>

                <div className="flex flex-wrap">
                    {/* Left Content */}
                    <div className="w-full md:w-1/3 bg-blue-100 p-4">
                        <h2 className="text-xl font-bold text-blue-700 mb-3">Get in Touch</h2>
                        <p className="text-gray-700 mb-3 text-sm">
                            We'd love to hear from you. Fill out the form, and we'll get back to you as soon as we can.
                        </p>
                        <ul className="text-gray-600 text-sm">
                            <li>📧 Email: support@example.com</li>
                            <li>📞 Phone: +123 456 789</li>
                            <li>🏢 Address: 123 Main Street, City, Country</li>
                        </ul>
                    </div>

                    {/* Right Form Section */}
                    <div className="w-full md:w-2/3 p-6">
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex gap-3 mb-4">
                                <div className="w-1/2">
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="website" className="block text-sm font-semibold text-gray-600">Website</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                    placeholder="Website"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                    rows="4"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsTwo;
