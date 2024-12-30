import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function ContactUs() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar></Sidebar>
        <div className="flex flex-col w-[100dvw] h-full">
          {/*nav*/}
          <div className="p-1 border-b-[1px] border-b-gray-300">
            <Nav theme={"dark"}></Nav>
          </div>
          {/*top blue bar*/}
          <div>
            <ul className="flex justify-center w-full gap-6 py-3 bg-[#133E87] text-white max-lg:flex-col max-lg:items-start max-lg:pl-4">
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>
                +94 812 213613/+94 777 860950
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                info@ncihomes.com
              </li>
              <li className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                No. 381 A,Katugastota Road,Kandy
              </li>
            </ul>
          </div>
          {/*title + text + form*/}
          <div className="flex flex-col gap-10 p-4 pt-16">
            <h1 className="text-5xl uppercase">Connect With Us</h1>
            <p className="text-lg g-font-1">
              If you need more information about our services, please do not
              hesitate to contact our representatives. Our team is waiting to
              provide excellent customer service for you.
            </p>
            <div className="flex items-center justify-center w-full">
              <form className="flex flex-col w-1/2 gap-4 p-6 border-2 rounded-lg max-md:w-2/3 max-sm:w-full">
                {/*name*/}
                <div>
                  <div className="block mb-2">
                    <label className="text-sm" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="name"
                    type="text"
                    required
                  />
                </div>
                {/*email*/}
                <div>
                  <div className="block mb-2">
                    <label className="text-sm" htmlFor="email1">
                      Email Address
                    </label>
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="email1"
                    type="email"
                    required
                  />
                </div>
                {/*contact no*/}
                <div>
                  <div className="block mb-2">
                    <label className="text-sm" htmlFor="contact">
                      Contact Number
                    </label>
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="contact"
                    type="text"
                    required
                  />
                </div>
                {/*subject*/}
                <div>
                  <div className="block mb-2">
                    <label className="text-sm" htmlFor="subject">
                      Subject
                    </label>
                  </div>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="subject"
                    type="text"
                    required
                  />
                </div>
                {/*message*/}
                <div className="w-full">
                  <div className="block mb-2">
                    <label className="text-sm" htmlFor="enquiry">
                      Your Message (Optional)
                    </label>
                  </div>
                  <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    id="enquiry"
                    rows={4}
                  />
                </div>
                <button
                  className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Send your enquiry
                </button>
              </form>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.304862369098!2d80.62689407558851!3d7.319611292688437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3680b241489e9%3A0x11893d842e34b00c!2sNCI%20Homes%20Private%20Limited!5e0!3m2!1sen!2slk!4v1735538023146!5m2!1sen!2slk"
            width="full"
            className="px-4"
            height="450"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
