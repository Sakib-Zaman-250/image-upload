import React, { useState } from 'react';

const ContactUsThree = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        organization: '',
        email: '',
        phoneNumber: '',
        services: [],
        message: '',
    });

    const servicesOptions = [
        'Software Development',
        'Data Capture Service',
        'Document Digitization',
        'Consultancy',
        'Physical Records Management System',
        'Intelligent Document Processing (IDP)',
        'Document Management System (DMS)',
        'Business Process Management',
        'Data Collection Platform',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                services: checked
                    ? [...prev.services, value]
                    : prev.services.filter((service) => service !== value),
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div className="flex flex-wrap items-center min-h-screen bg-blue-50">
            {/* Left Side */}
            <div className="w-full md:w-1/2 p-6 border-r border-gray-300 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">Get In Touch</h2>
                <p className="text-gray-600 text-sm mb-4 text-center">
                    Reach us via call or email. We're here to assist you!
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                        <strong>📍 Location:</strong>
                        <p>Malek Tower, Farmgate, Dhaka, Bangladesh.</p>
                    </li>
                    <li>
                        <strong>📞 Call Us:</strong>
                        <p>+880 2410-24442, +880 1750-524851</p>
                    </li>
                    <li>
                        <strong>📧 Mail Us:</strong>
                        <p>info@divobd.com, sales@divobd.com</p>
                    </li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 p-4">
                <h1 className="text-xl font-bold text-gray-800 mb-4 text-center">We will be in touch shortly</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-600">Full Name *</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                                placeholder="Your Full Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="organization" className="block text-sm font-semibold text-gray-600">Organization *</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                                placeholder="Your Organization"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Work Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-600">Phone Number *</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                                placeholder="+880"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-600">Services Interested *</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            {servicesOptions.map((service, index) => (
                                <label key={index} className="flex items-center text-sm">
                                    <input
                                        type="checkbox"
                                        name="services"
                                        value={service}
                                        checked={formData.services.includes(service)}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                            rows="3"
                            placeholder="Let us know how we can help."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsThree;
