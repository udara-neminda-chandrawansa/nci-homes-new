import React from "react";
import p_1 from "./../images/partners/1.png";
import p_2 from "./../images/partners/2.png";
import p_3 from "./../images/partners/3.png";
import p_4 from "./../images/partners/4.png";
import p_5 from "./../images/partners/5.png";
import p_6 from "./../images/partners/6.png";
import p_7 from "./../images/partners/7.png";
import p_8 from "./../images/partners/8.png";
import p_9 from "./../images/partners/9.png";
import p_10 from "./../images/partners/10.png";

const PartnersCar = () => {
  return (
    <div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex items-center justify-between gap-6 py-12 animate-marquee whitespace-nowrap">
          <img src={p_1} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_2} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_3} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_4} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_5} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_6} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_7} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_8} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_9} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_10} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
        </div>

        <div className="absolute top-0 flex items-center justify-between gap-6 py-12 animate-marquee2 whitespace-nowrap">
          <img src={p_1} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_2} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_3} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_4} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_5} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_6} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_7} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_8} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_9} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
          <img src={p_10} alt="partner-image" className="w-[100px] h-[100px] object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default PartnersCar;
