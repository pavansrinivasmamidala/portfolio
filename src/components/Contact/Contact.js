import "./Contact.css";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import address from "../../assets/address.png";

export default function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        {/* <div className="contact-header">
          <span>Contact Info</span>
        </div> */}
        <div className="contact-cards">
          <div className="contact-card" >
            <img src={phone} alt="phone" />
            <span>+1 (416) - (854) - (8046)</span>
          </div>
          <div className="contact-card"  data-aos-delay="50">
            <img src={email} alt="email" />
            <span>chinni.mamidala@gmail.com</span>
          </div>
          <div className="contact-card"  data-aos-delay="100">
              <img src={address} alt="address" />
              <span>Toronto, Canada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
