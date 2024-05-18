'use client';
import { comforta, lobster } from '../font';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Plane from '../components/Plane';
import Train from '../components/Train';
import Voiture from '../components/Voiture';
import Helico from '../components/Helico';

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
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center tracking-wide">
        <div className="w-full mt-[90px] lg:w-full max-w-4xl space-y-8 p-4">
          <div className="mt-5 ml-5 text-slate-600">
            <h1 className={`${lobster.className} text-3xl mb-1 `}>
              Chalet Remy
            </h1>
            <hr />
            <p className={`${comforta.className} text-[10px] mt-3`}>
              520 route des communailles
            </p>
            <p className={`${comforta.className} text-[10px] mt-1`}>
              74170 Saint Gervais les Bains
            </p>
          </div>
          <div className="bg-white p-4 flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2">
              <img
                src="/plan.png"
                alt="Form Image"
                className="w-full h-auto rounded-sm"
              />
              {/* <Map address={address} /> */}
            </div>
            <div className="mt-10 md:w-1/2 md:mt-auto">
              <form
                className="space-y-6 text-[12px] md:text-[13px] "
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className={`${comforta.className} block font-medium text-yellow-700`}
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
                    className={`${comforta.className} mt-1 p-2 w-full border border-yellow-700 rounded-sm shadow-sm sm: text-yellow-700`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`${comforta.className} block  font-medium text-yellow-700`}
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
                    className={`${comforta.className} mt-1 p-2 w-full border border-yellow-700 rounded-sm shadow-sm sm: text-yellow-700`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`${comforta.className} block font-medium text-yellow-700`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${comforta.className} mt-1 p-2 w-full border border-yellow-700 rounded-sm shadow-sm sm: text-yellow-700`}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className={`${comforta.className} w-full flex justify-center py-2 px-4  rounded-sm shadow-sm  font-medium text-yellow-800 border-[1px] border-yellow-700`}
                  >
                    Envoyer
                  </button>
                </div>
                {status && (
                  <p className=" text-white  p-3  rounded-sm  bg-pink-600">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="w-[90%] mx-auto  ">
            <Plane />
            <Train />
            <Voiture />
            <Helico />
          </div>
        </div>
      </div>
    </>
  );
}
