import {
  EmailOutlined,
  Timelapse,
  ContactMail,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-primary-bcg">
      <div className="container mx-auto">
        <div className="logo">WAVES</div>
      </div>
      <div className="container mx-auto">
        <div className="left">
          <h2>Contact Information</h2>
          <div className="business_nfo">
            <div className="tag">
              <ContactMail />
              <div className="nfo">
                <div>Address</div>
                <div>Darlinton 222</div>
              </div>
            </div>
            <div className="tag">
              <Phone />
              <div className="nfo">
                <div>Phone</div>
                <div>222-555-7777</div>
              </div>
            </div>
            <div className="tag">
              <EmailOutlined />
              <div className="nfo">
                <div>Email</div>
                <div>waves@hotmail.com</div>
              </div>
            </div>
            <div className="tag">
              <Timelapse />
              <div className="nfo">
                <div>Address</div>
                <div>Darlinton 222</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Be the first to contact</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse velit
            officia porro amet eum perspiciatis nostrum ratione commodi et
            quidem inventore voluptatum ullam, at sit libero sequi vel excepturi
            accusamus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
