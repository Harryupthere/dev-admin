import React from "react";
import "./addresscard.scss";

const AddressCard = () => {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096186!2d144.9630576156549!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776de6e4d4f84e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635396939472!5m2!1sen!2sau`;
  return (
    <div className="address-card-main">
      <div className="address-card-data">
        <div className="text-card">
          <h2>Address</h2>
          <p>
            5/3, Ramakrishnan Road, Wellawatta, <br />
            Colombo 03 <br />
            Western Province
          </p>
        </div>
        <div className="map-data">
          <iframe
            title="Google Map"
            src={mapSrc}
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className='btn-map'>
            <button className='orange_button'>View on Map</button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
