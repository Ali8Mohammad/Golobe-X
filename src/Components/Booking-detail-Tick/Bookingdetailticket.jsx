import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faLocationDot,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import img9 from "./../../assets/images/Frame.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bookingdetailticket.css";

export default function BookingTicket({ Main1, head, card }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="MH-container">
      {head.map((item) => (
        <div className="MH-head" key={item.id}>
          <p>
            Turkey <FontAwesomeIcon icon={faChevronRight} /> Istanbul{" "}
            <FontAwesomeIcon icon={faChevronRight} />
            <span className="MH-sapn">
              CVK Park Bosphorus Hotel Istanbul
            </span>
          </p>

          <div className="MH-content">
            <div className="MH-content1" data-aos="fade-right">
              <h2>{item.title}</h2>
              <div className="MH-location-path">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
              </div>
            </div>

            <div className="MH-content2" data-aos="fade-left">
              <p>{item.price}</p>
              <div className="MH-download-btn">
                <div className="MH-share-icon">
                  <FontAwesomeIcon icon={faShareNodes} />
                </div>
                <a href={item.Ticket} download>
                  <button>Download</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {Main1.map((item) => (
        <div key={item.id} className="MH-main">
          <div className="MH-main-1-2">
            <div className="MH-main1" data-aos="flip-left">
              <p>{item.time}</p>
              <span>{item.location}</span>

              <div className="MH-airplan">
                {item.airplan.map((imgSrc, index) => (
                  <div className="MH-airplan1" key={index}>
                    <img src={imgSrc} alt="not-found" />
                  </div>
                ))}
              </div>

              <p>{item.time2}</p>
              <span>{item.location2}</span>
            </div>

            <div className="MH-main2" data-aos="flip-left">
              <div className="MH-main2-head">
                <div className="MH-main2-content">
                  <img src={item.image} alt="airline" />
                  <div>
                    <p>{item.name}</p>
                    <span>{item.info}</span>
                  </div>
                </div>

                <div className="MH-paragraph">
                  <p>{item.class}</p>
                  <p>{item.empty}</p>
                </div>
              </div>

              <div className="MH-main2-contents">
                {card.map((c) => (
                  <div className="MH-main2-content1" key={c.id}>
                    <div className="MH-main2-image">
                      <img src={c.images} alt="service" />
                    </div>
                    <div>
                      <p>{c.title}</p>
                      <span>{c.subTitle}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="MH-main2-footer">
                <div className="MH-EK">
                  <p>EK</p>
                  <span>ABC12345</span>
                </div>
                <img src={img9} alt="barcode" />
              </div>
            </div>
          </div>

          <div className="MH-main3" data-aos="flip-left">
            <img src={item.imagemap} alt="map" />
          </div>
        </div>
      ))}
    </section>
  );
}
