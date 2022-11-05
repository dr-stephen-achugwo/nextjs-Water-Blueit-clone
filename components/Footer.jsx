import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { MdLocationOn} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import style from "../styles/index.module.css"

const Footer = () => {
  return (
    <div className="bg-dark text-white  pt-2">
      <div className="container-fluid ">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4">
            <h6 className={style.btm}>Blueit</h6>
            <p className="fs-6">
              Don't forget to review our products for a new generation of water saving.
            </p>
            <div className="d-flex justify-content-center mb-md-4 gap-4 text-center">
              <span>
                <FiInstagram size={20} color="#0BA5BE" />
              </span>
              <span>
                <FiTwitter color="#0BA5BE" size={20} />
              </span>
              <span>
                <FaFacebook color="#0BA5BE" size={20} />
              </span>
              <span>
                <BsLinkedin color="#0BA5BE" size={20} />
              </span>
            </div>
          </div>
          <div className="col-md-4 text-center ">
            <h6 className={style.btm}>Contact</h6>
            <div>
              <p>
                {" "}
                <span className="me-2">
                    <MdLocationOn  color="#0BA5BE" size={15}/>
                </span>
                DEPARK-Buca/İZMİR
              </p>
              <p>
                <span className="me-2">
                    <BsFillTelephoneFill color="#0BA5BE" size={15}/>
                </span>
                (+90) 551 456 85 71</p>
              <p>
                <span className="me-2">
                    <HiOutlineMail color="#0BA5BE" size={15}/>
                </span>
                <a
                  href="mailto:info@blueitfuture.com
"                   className={style.link}
                >
                  info@blueitfuture.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6256.50083872609!2d27.206609!3d38.366328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb863aae743ff19ec!2sDEPARK%20Alfa-Beta%20Binalar%C4%B1%20(Dokuz%20Eyl%C3%BCl%20%C3%9Cniversitesi%20Teknopark%C4%B1)!5e0!3m2!1str!2str!4v1661692556763!5m2!1str!2str"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
