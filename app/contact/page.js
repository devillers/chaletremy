'use client';
import { comforta, lobster, Cabine } from '../font';
import { useState } from 'react';

import ArrowDown from '../components/ArrowDown';

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
      <section className="relative rounded-sm h-screen bg-cover bg-center flex flex-col justify-center items-center bg-chalet-app">
        {/* Video only visible on mobile */}

        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-40 bg-blend-difference"></div>
        <div className="relative flex flex-col items-center justify-center h-full w-full mx-auto">
          <div className="text-center mt-20">
            <h2 className={`${Cabine.className} text-[40px] mb-4 text-white`}>
              contactez nous
            </h2>
            <p
              className={`${comforta.className} text-[15px] mb-8 font-poppin text-white`}
            ></p>
            <ArrowDown />
          </div>
        </div>
      </section>
      <div id="about" className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center tracking-wide">
          <div className="w-full lg:w-full max-w-4xl space-y-8 p-4">
            <div className="mt-5  text-slate-600">
              <h1 className={`${Cabine.className} text-3xl mb-1`}>
                Chalet Remy
              </h1>
              <hr />
              <p className={`${comforta.className} text-[10px] mt-3`}>
                520 route des communailles
              </p>
              <p className={`${comforta.className} text-[10px] mt-1`}>
                74170 Saint Gervais les Bains
              </p>
              <p
                className={`${comforta.className} text-[10px] mt-8 leading-4 text-center `}
              >
                Merci de bien vouloir compléter le formulaire ci-dessous pour
                préciser votre demande. Nous vous répondrons dans les plus brefs
                délais
              </p>
            </div>
            <section className="bg-white p-4 flex flex-col md:flex-row md:space-x-8">
              <div className="mt-4 md:w-1/2 md:mt-auto">
                <form
                  className="space-y-6 text-[12px] md:text-[13px]"
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
                      className={`${comforta.className} mt-1 p-2 w-full border border-yellow-700 rounded-sm shadow-sm text-yellow-700`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`${comforta.className} block font-medium text-yellow-700`}
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
                      className={`${comforta.className} mt-1 p-2 w-full border border-yellow-700 rounded-sm shadow-sm text-yellow-700`}
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
                      className={`${comforta.className} mt-1 p-2 w-full border border-yellow-700 rounded-sm shadow-sm text-yellow-700`}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`${comforta.className} w-full flex justify-center py-2 px-4 rounded-sm shadow-sm font-medium text-yellow-800 border-[1px] border-yellow-700`}
                    >
                      Envoyer
                    </button>
                  </div>
                  {status && (
                    <p className="text-white p-3 rounded-sm bg-pink-600">
                      {status}
                    </p>
                  )}
                </form>
              </div>
              <div className="rounded-sm bg-chalet-remy bg-cover rounded-r-3xl bg-center md:w-1/2 hidden md:block shadow-md"></div>
            </section>
            <p className=" p-5 uppercase text-[10px] text-justify text-slate-600 shadow-sm md:space-x-8 rounded-sm">
              Conformément à la Loi Informatique & Libertés, vous disposez d’un
              droit d’accès et de rectification sur les informations vous
              concernant.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
