import React, { useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      alert("Please enter a valid email");
      return;
    }

    const phoneDigits = contact.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      alert("Please enter a 10-digit number");
      return;
    }

    const formData = {
      name,
      phone: countryCode + phoneDigits,
      email,
    };
    

         

    try {
      
     //  Send email to YOU
emailjs.send(
    "service_t79x9v3",
        "template_cd7wsca",  
  {
    from_name: name,
    from_email: email,
    contact: contact,
  },
   "AdEXaqxSJ2ZZQmVgP"
);
 
//  Send auto-reply to USER
emailjs.send(
  "service_t79x9v3",
  "template_6o3grp5",  
  {
    from_name: name,
    from_email: email,
    contact: contact,
  },
   "AdEXaqxSJ2ZZQmVgP"
);


     
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Thanks! We will contact you shortly.");
        setName("");
        setContact("");
        setEmail("");
      } else {
        alert("❌ Error saving data.");
      }
    } catch (err) {
      alert("❌ Network error.");
    }
  };

  return (
    <>
      <div id="Contact" className="min-h-screen flex items-center justify-center text-gray-100 p-6 ">
        <section className="w-full max-w-2xl bg-white text-gray-900 overflow-x-hidden rounded-2xl shadow-2xl p-8 transition-transform hover:scale-[1.01]">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-1">E-Mail</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-1">Contact</label>
              <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="bg-gray-100 p-2 focus:outline-none"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="flex-1 p-2 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2.5 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-300">
              Submit
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
