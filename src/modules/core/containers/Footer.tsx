function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="display-4 font-bold">React Assessment</h3>
            <p>&#64;2024 React Assessment, LLC. All Rights Reserved</p>
          </div>

          <div className="col-md-8 text-right d-flex justify-content-end">
            <ul className="footer-nav">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Term & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
