'use client';
import { comforta, lobster } from '../font';
import { useState } from 'react';
import Navbar from '../components/Navbar-contact';
import Array from '../components/Array';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setStatus(result.message);
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full mt-[90px] lg:w-full max-w-4xl space-y-8 p-4">
        <div className="mt-5">
          <h1 className={`${lobster.className} text-3xl mb-1`}>Chalet Remy</h1>
          <hr />
          <p className={`${comforta.className} text-sm mt-3`}>
            520 route des communailles
          </p>
          <p className={`${comforta.className} text-sm mt-1`}>
            74170 Saint Gervais les Bains
          </p>
        </div>
        <div className="bg-white p-4 flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="/plan.png"
              alt="Form Image"
              className="w-full h-auto rounded-md"
            />
            {/* <Map address={address} /> */}
          </div>
          <div className="md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className={`${comforta.className} block text-sm font-medium text-gray-700`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`${comforta.className} block text-sm font-medium text-gray-700`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`${comforta.className} block text-sm font-medium text-gray-700`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className={`${comforta.className} w-full flex justify-center py-2 px-4  rounded-md shadow-sm text-sm font-medium text-yellow-800 border-[1px] border-yellow-700`}
                >
                  Envoyer
                </button>
              </div>
              {status && <p className="text-sm text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <h4 className="uppercase text-[25px]">en avion </h4>
          <Array />
        </div>
      </div>
    </div>
  );
}