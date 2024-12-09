import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
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
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Left Content Section */}
                    <div className="bg-blue-600 text-white p-8">
                        <h2 className="text-2xl font-bold mb-4">Our Solutions</h2>
                        <ul className="text-sm space-y-3">
                            <li><strong>Software Development</strong>: ERP, Accounting, HR Solutions, Vision Applications</li>
                            <li><strong>Document Processing</strong>: Python AI Models, Image Processing</li>
                            <li><strong>Web & Mobile Apps</strong>: Engaging and scalable solutions</li>
                            <li><strong>Custom Solutions</strong>: Tailored to your business needs</li>
                        </ul>
                        <h3 className="text-xl font-semibold mt-6">Why Choose TECFIQ?</h3>
                        <ul className="text-sm space-y-2 mt-2">
                            <li>Versatile Tech Expertise</li>
                            <li>Proven Track Record</li>
                            <li>Client-Centric Approach</li>
                            <li>Collaboration and Confidentiality</li>
                        </ul>
                    </div>

                    {/* Right Form Section */}
                    <div className="col-span-2 p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
                        <p className="text-gray-600 mb-6">
                            Have a vision for a software development project, app, or website design? Let’s bring it to life together!
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
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

export default ContactUs;
