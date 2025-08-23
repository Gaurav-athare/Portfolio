// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,  // ✅ Service ID
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ Template ID
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY   // ✅ Public Key
//       )
//       .then(
//         () => {
//           setLoading(false);
//           form.current.reset();
//           toast.success("Message sent successfully! ✅", {
//             position: "top-right",
//             autoClose: 3000,
//             theme: "dark",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error("Error sending message:", error);
//           toast.error("Failed to send message ❌ Please try again.", {
//             position: "top-right",
//             autoClose: 3000,
//             theme: "dark",
//           });
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient clip-path-custom-2"
//     >
//       <ToastContainer />

//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white tracking-wide">CONTACT</h2>
//         <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
//         <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
//           I’d love to hear from you — reach out for any{" "}
//           <span className="text-purple-400 font-semibold">opportunities</span> or{" "}
//           <span className="text-purple-400 font-semibold">collaborations</span>!
//         </p>
//       </div>

//       <div className="w-full max-w-md bg-[#0d081f] p-8 rounded-2xl shadow-lg border border-gray-700">
//         <h3 className="text-2xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-5">
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="5"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition resize-none"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 text-white font-semibold rounded-md transition ${
//               loading
//                 ? "bg-gray-600 cursor-not-allowed"
//                 : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
//             }`}
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
