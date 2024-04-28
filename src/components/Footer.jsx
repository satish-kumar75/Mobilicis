import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content bg-haiti-950 py-6 text-purple-heart-200">
          <p className="text-center">
            &copy; {new Date().getFullYear()} ZenWork. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
