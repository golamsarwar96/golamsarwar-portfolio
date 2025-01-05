import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapLocation } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const ContactMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = "_S7cdpqMFl3Bo06Rc";
    const serviceId = "service_cvdo44g";
    const templateId = "template_8qj7ph9";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Golam Sarwar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="contactMe" className="p-10">
      <h1 className="text-5xl font-bold text-center text-textPrimaryColor mt-10">
        CONTACT ME
      </h1>
      <div className="flex gap-10 justify-center items-center flex-col md:flex-row">
        <div className="card bg-base-100 w-1/2 shadow-2xl mt-10 px-30">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea px-2 border-1 mt-5 border-gray-300"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-control ">
              <input
                type="submit"
                className="btn bg-lime-950 text-textColor"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="text-textPrimaryColor">
          <p className="text-2xl flex items-center gap-3 mt-10">
            <FaMapLocation></FaMapLocation>Location : Dhaka, Bangladesh
          </p>
          <p className="text-2xl flex items-center gap-3 mt-10">
            <MdEmail></MdEmail> Email : sarwartasin1896@gmail.com
          </p>
          <p className="text-2xl flex items-center gap-3 mt-10">
            <FaPhone></FaPhone> Phone/WhatsApp : +8801631624674
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
