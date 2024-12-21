import "./Charity.css";

export default function Charity() {
  return (
    <div className="charity-container">
      <h1 className="charity-title">About Our Charity</h1>
      <p className="charity-description">
        Our mission is to create a positive impact in our community by supporting those in need. From organizing events to fundraising efforts, we strive to make a difference in the lives of many.
      </p>

      <h2 className="charity-subtitle">How You Can Help</h2>
      <ul className="charity-list">
        <li>Donate funds to support our ongoing projects.</li>
        <li>Volunteer your time to assist in our events and initiatives.</li>
        <li>Spread awareness by sharing our mission with others.</li>
      </ul>

      <h2 className="charity-subtitle">Contact Us</h2>
      <p className="charity-contact">
        Email: support@ourcharity.org<br />
        Phone: +1 (123) 456-7890
      </p>
    </div>
  );
}

