import "./App.css";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import HomeSection1 from "./components/HomeSection1";
//import HomeSection2 from "./components/HomeSection2";
import WhoWeAre from "./components/WhoWeAre";
import HomeSection2New from "./components/HomeSection2New";
import HomeSection3 from "./components/HomeSection3";
//import PartnersCar from "./components/PartnersCar";
import Button from "./components/Button";
import Footer from "./components/Footer";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from "./images/logo.png";

import ChatBot from "./components/FBChatBt";

export default function Landing() {
  return (
    <>
      <div className="flex flex-row h-[100dvh] w-full bg-blue-400">
        <Sidebar />
        <Banner />
      </div>
      <div className="flex items-center justify-between gap-6 px-3 py-6 border-b max-md:flex-col">
        <div>
          <p className="text-xl font-semibold uppercase max-md:text-center max-xl:text-lg max-lg:text-base">
            Have you found a high quality constructor for your project?
          </p>
        </div>
        <div>
          <Button
            theme={"dark"}
            width={"full"}
            displayText={"Get a free consult"}
            url={"/contact"}
          ></Button>
        </div>
      </div>
      <WhoWeAre />
      <HomeSection1 />
      <HomeSection2New />
      <HomeSection3 />
      <div className="flex items-center justify-between gap-6 px-12 py-6 max-md:px-3 border-y max-md:flex-col">
        <div>
          <p className="text-xl font-semibold uppercase max-md:text-center max-xl:text-lg max-lg:text-base">
            we are ready to hear from you!
          </p>
          <p className="text-xl max-md:text-center max-xl:text-lg max-lg:text-base">
            Call us now or send an email
          </p>
        </div>
        <div>
          <p className="text-sm uppercase max-md:text-center">Call us now</p>
          <p className="text-xl font-semibold uppercase max-md:text-center max-xl:text-lg max-lg:text-base">
            <a href="tel:94812213613">+94 81 221 3613</a>
          </p>
        </div>
        <div>
          <Button
            theme={"dark"}
            width={"full"}
            displayText={"Contact Us"}
            url={"/contact"}
          ></Button>
        </div>
      </div>
      <Footer />
      <WhatsAppWidget
        phoneNo="94777860950"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={true}
        autoOpenTimer={3000}
        messageBox={true}
        messageBoxTxt="Hi! Can I get a quote?"
        iconSize="50"
        iconColor="white"
        iconBgColor="#006064"
        headerIcon={logo}
        headerIconColor="pink"
        headerTxtColor="white"
        headerBgColor="#006064"
        headerTitle="NCI Homes"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        chatMessage={
          <>
            Hi there 👋 <br />
            <br /> How can I help you?
          </>
        }
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="#006064"
        btnTxt={
          <div className="flex items-center gap-3">
            <p>Send a Message</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
            </svg>
          </div>
        }
        btnTxtColor="white"
      />
      <ChatBot />
    </>
  );
}
