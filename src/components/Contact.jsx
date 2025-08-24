import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFileDownload, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
//bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900
const darkComponent = "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
const lightComponent = "bg-gradient-to-br from-blue-50 to-indigo-100 from-gray-800 to-gray-900"


const Contact = ({darkMode}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="Contact"
      className={`flex justify-center items-center px-6 py-20 ${darkMode ? darkComponent : lightComponent}  min-h-screen`}
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Get in Touch</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-full">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">Email</p>
                <p className="text-blue-600 dark:text-blue-400">suyashmehare04@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="p-3 bg-green-100 dark:bg-green-800 rounded-full">
                <FaPhone className="text-green-600 dark:text-green-400 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">Phone</p>
                <p className="text-green-600 dark:text-green-400">8999942176</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="p-3 bg-purple-100 dark:bg-purple-800 rounded-full">
                <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-300">Location</p>
                <p className="text-purple-600 dark:text-purple-400">Amravati, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/suyash-mehare/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
            </a>
            <a
              href="https://github.com/SuyashMehare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub className="text-gray-700 dark:text-gray-300 text-xl" />
            </a>
          </div>

          <div className="text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-md"
            >
              <FaFileDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Enter your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
            >
              <FaPaperPlane />
              <span>{isSubmitted ? 'Message Sent!' : 'Send Message'}</span>
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;