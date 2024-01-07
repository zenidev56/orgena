import React from "react";

const Map = () => {
  return (
    <div className="h-[35vh] w-[100%] mb-10" relative>
      <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.605940871361!2d72.8672994!3d19.299495399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b11db7a616e7%3A0xbc4a8bdde26f0f2c!2sC.A.R.E%20Physiotherapy%20Clinic%20-%20Dr%20Julie%20Pawar%20(Physiotherapist)!5e0!3m2!1sen!2sin!4v1702400881563!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
