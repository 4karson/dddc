"use client";

import { useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://online-booking.housecallpro.com/script.js?token=127343b956e24e13a52da46f4500936b&orgName=Duct-Daddy";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.appendChild(script);
    };
  })

  const handleClick = () => {
    if (typeof HCPWidget !== "undefined") {
      HCPWidget.openModal();
    }
  };

  return (
    <>
      <button
        data-token="127343b956e24e13a52da46f4500936b"
        data-orgname="Duct-Daddy"
        onClick={handleClick}
        className="flex items-center gap-x-2.5"
      >
        <FaCalendarDays />
        Book Now
      </button>
    </>
  )
}