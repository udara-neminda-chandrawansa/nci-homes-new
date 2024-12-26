import React from "react";

import { Link } from "wouter";

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

const clients = [
  {
    name: "partner 1",
    logo: p_1,
  },
  {
    name: "partner 2",
    logo: p_2,
  },
  {
    name: "partner 3",
    logo: p_3,
  },
  {
    name: "partner 4",
    logo: p_4,
  },
  {
    name: "partner 5",
    logo: p_5,
  },
  {
    name: "partner 6",
    logo: p_6,
  },
  {
    name: "partner 7",
    logo: p_7,
  },
  {
    name: "partner 8",
    logo: p_8,
  },
  {
    name: "partner 9",
    logo: p_9,
  },
  {
    name: "partner 10",
    logo: p_10,
  },
];

const PartnersCar = () => {
  return (
    <>
      <div className="py-8 overflow-hidden">
        <div className="flex gap-8 animate-left w-max">
          <div className="flex gap-8 w-max">
            {clients.map((client, index) => (
              <Link
                key={index}
                href="#"
                className="flex justify-center items-center p-6 w-[10rem] "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </Link>
            ))}
          </div>
          <div className="flex gap-8 w-max">
            {clients.map((client, index) => (
              <Link
                key={index}
                href="#"
                className="flex justify-center items-center p-6 w-[10rem] "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersCar;
