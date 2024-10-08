// import React from "react";
// import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
// import "bootstrap-icons/font/bootstrap-icons.css";

// function Footer() {
//   return (
//     <MDBFooter className="bg-secondary text-white">
//       <MDBContainer className="p-4">
//         <h5 className="text-uppercase">Quick Link</h5>
//         <MDBRow>
//           <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
//             <ul
//               style={{
//                 listStyleType: "none",
//                 display: "flex",
//                 justifyContent: "left",
//                 gap: "50px",
//               }}
//             >
//               <li>Enrol</li>
//               <li>Fees</li>
//               <li>Prospectus</li>
//               <li>Learning</li>
//               <li>Employment</li>
//               <li>Term </li>
//               <li>Policies</li>
//               <li>Safety</li>
//               <li>Contact </li>
//               <li>Complaints</li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//           <MDBCol lg="6" md="12" className="mb-4 mb-md-0 mt-5">
//             <h5 className="text-uppercase">Follow Us</h5>
//             <ul
//               style={{
//                 listStyleType: "none",
//                 display: "flex",
//                 justifyContent: "left",
//                 gap: "20px",
//               }}
//             >
//               <div>
//                 <i class="bi bi-facebook"></i>
//               </div>
//               <div>
//                 <i class="bi bi-instagram"></i>
//               </div>
//               <div>
//                 <i class="bi bi-twitter-x"></i>
//               </div>
//               <div>
//                 <i class="bi bi-linkedin"></i>
//               </div>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//           <MDBCol lg="4" md="12" className="mb-4 mb-md-0 mt-5">
//             <p>
//               The care, safety and wellbeing of all children and vulnerable
//               people is a core and fundamental responsibility for our community.
//             </p>
//           </MDBCol>
//           <MDBCol lg="4" md="12" className="mb-4 mb-md-0 mt-5">
//             <p>
//               We acknowledge the Traditional Owners of the land on which our
//               College resides and pay our respects to their Elders, past,
//               present and future.
//             </p>
//           </MDBCol>
//           <MDBCol lg="4" md="12" className="mb-4 mb-md-0 mt-5">
//             <p>
//               We acknowledge the Traditional Owners of the land on which our
//               College resides and pay our respects to their Elders, past,
//               present and future.
//             </p>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>

//       <div
//         className="text-center p-3"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//       >
//         © 2020 Copyright:
//         <a className="text-white" href="https://mdbootstrap.com/">
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }  
// export default Footer;
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Footer.css"; // Custom CSS file

function Footer() {
  return (
    <footer className="footer bg-custom col-12">
      <div className="container py-5">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-12 text-start mb-4">
            <h5 className="footer-title">QUICK LINKS</h5>
            <ul className="list-inline footer-links">
              <li className="list-inline-item">
                <a href="#">ENROL NOW</a>
              </li>
              <li className="list-inline-item">
                <a href="#">FEES</a>
              </li>
              <li className="list-inline-item">
                <a href="#">PROSPECTUS</a>
              </li>
              <li className="list-inline-item">
                <a href="#">LEARNING</a>
              </li>
              <li className="list-inline-item">
                <a href="#">EMPLOYMENT</a>
              </li>
              <li className="list-inline-item">
                <a href="#">TERM DATES</a>
              </li>
              <li className="list-inline-item">
                <a href="#">POLICIES</a>
              </li>
              <li className="list-inline-item">
                <a href="#">CHILD SAFETY</a>
              </li>
              <li className="list-inline-item">
                <a href="#">CONTACT US</a>
              </li>
              <li className="list-inline-item">
                <a href="#">COMPLAINTS FORM</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div className="col-md-12 text-start mb-4">
            <h5 className="footer-title">FOLLOW US</h5>
            <ul className="list-inline d-flex gap-4">
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* First Paragraph */}
            <div className="col-md-4 text-start">
              <p className="footer-text">
                The care, safety and wellbeing of all children and vulnerable
                people is a core and fundamental responsibility for our
                community.
              </p>
            </div>

            {/* Second Paragraph */}
            <div className="col-md-4 text-start">
              <p className="footer-text">
                We acknowledge the Traditional Owners of the land on which our
                College resides and pay our respects to their Elders, past,
                present and future.
              </p>
            </div>

            {/* Third Paragraph */}
            <div className="col-md-4 text-start mt-4 mt-md-0">
              <p className="footer-credits">
                © Salesian College Chadstone 2024 | Terms & Privacy | Website by
                IGNITE
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;