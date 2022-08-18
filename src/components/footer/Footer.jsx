import React from "react";
import style from "./footer.module.css";
import { IoMdBriefcase, IoIosHelpCircle } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <section className={foot.footer_Section}>
    //   <div className={foot.footer_Upperhalf}>
    //     <div className={foot.footer_Link to=""s}>
    //       <div className={foot.footer_about}>
    //         <div>ABOUT</div>
    //         <div>About Us</div>
    //         <div>Contact Us</div>
    //         <div>Careers</div>
    //         <div>ShoppingKart Stories</div>
    //         <div>Press</div>
    //         <div>ShoppingKart Wholesale</div>
    //         <div>Corporate Information</div>
    //       </div>
    //       <div className={foot.footer_help}>
    //         <div>HELP</div>
    //         <div>Payments</div>
    //         <div>Shipping</div>
    //         <div>Cancellation & Returns</div>
    //         <div>FAQ</div>
    //         <div>Report Infringement</div>
    //       </div>
    //       <div className={foot.footer_policy}>
    //         <div>POLICY</div>
    //         <div>Return Policy</div>
    //         <div>Terms Of Use</div>
    //         <div>Security</div>
    //         <div>Privacy</div>
    //         <div>Sitemap</div>
    //         <div>EPR Compliance</div>
    //       </div>
    //       <div className={foot.footer_social}>
    //         <div>SOCIAL</div>
    //         <div>Facebook</div>
    //         <div>Twitter</div>
    //         <div>YouTube</div>
    //       </div>
    //     </div>
    //     <div className={foot.sideBorder}></div>
    //     <div className={foot.footer_EmailContact}>
    //       <div>
    //         <div>Mail Us:</div>
    //         <div>
    //           ShoppingKart Private Limited, #88 3rd floor, Brigade
    //           Chambers,Gandhi Bazar Main Road, Basavanagudi Bengaluru, 560004,
    //           Karnataka, India
    //         </div>
    //       </div>
    //       <div>
    //         <div>Registered Office Address:</div>
    //         <div>
    //           ShoppingKart Private Limited, #88 3rd floor, Brigade
    //           Chambers,Gandhi Bazar Main Road, Basavanagudi Bengaluru, 560004,
    //           Karnataka, India CIN : U51109KA2012PTC066107 Telephone:{" "}
    //           <Link to="">080-41204235</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={foot.bottomBorder}></div>
    //   <div className={foot.footer_Lowerhalf}>
    //     <div className={foot.Seller}>
    //       <Link to="">
    //         <IoMdBriefcase />
    //       </Link>
    //       <Link to="">Become a Seller</Link>
    //     </div>
    //     <div className={foot.Advertise}>
    //       <Link to="">
    //         <MdStars />
    //       </Link>
    //       <Link to="">Advertise</Link>
    //     </div>
    //     <div className={foot.gift}>
    //       <Link to="">
    //         <FaGift />
    //       </Link>
    //       <Link to="">Gift Cards</Link>
    //     </div>
    //     <div className={foot.helpCenter}>
    //       <Link to="">
    //         <IoIosHelpCircle />
    //       </Link>
    //       <Link to="">Help Center</Link>
    //     </div>
    //     <div className={foot.tradeMark}>© 2007-2022 ShoppingKart.com</div>
    //     <div className={foot.payments}>
    //       <img
    //         src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
    //         alt="payments"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className={style.footerBlock}>
      <article>
        {/* footer upper */}
        <div className={style.footerUpper}>
          {/* footer upper left */}
          <div className={style.upperLeft}>
            {/* footer about */}
            <div className={style.footerAbout}>
              <h1 className={style.footerLeftHeading}>about</h1>
              <Link to="">contact us</Link>
              <Link to="">about us</Link>
              <Link to="">careers</Link>
              <Link to="">shoppingKart stories</Link>
              <Link to="">press</Link>
              <Link to="">shoppingKart wholesale</Link>
              <Link to="">corporate information</Link>
            </div>

            {/* footer help */}
            <div className={style.footerHelp}>
              <h1 className={style.footerLeftHeading}>help</h1>
              <Link to="">payments</Link>
              <Link to="">shipping</Link>
              <Link to="">cancellation & returns</Link>
              <Link to="">FAQ</Link>
              <Link to="">report infringement</Link>
            </div>

            {/* footer policy */}
            <div className={style.footerPolicy}>
              <h1 className={style.footerLeftHeading}>policy</h1>
              <Link to="">return policy</Link>
              <Link to="">terms of use</Link>
              <Link to="">security</Link>
              <Link to="">privacy</Link>
              <Link to="">sitemap</Link>
              <Link to="">EPR compliance</Link>
            </div>

            {/* footer social */}
            <div className={style.footerSocial}>
              <h1 className={style.footerLeftHeading}>social</h1>
              <Link to="">facebook</Link>
              <Link to="">twitter</Link>
              <Link to="">youTube</Link>
            </div>
          </div>

          {/* footer upper right */}

          <div className={style.upperRight}>
            <div className={style.mailBlock}>
              <h1 className={style.upperRightHeading}>mail us:</h1>
              <span>
                shoppingKart private limited, gopalan coworks, kathreguppe,
                banashankari 3rd stage, bangalore, 560029, karnataka, india
              </span>
            </div>
            <div className={style.officeAddress}>
              <h1 className={style.upperRightHeading}>
                registered office address:
              </h1>
              <span>
                shoppingKart private limited, gopalan coworks, kathreguppe,
                banashankari 3rd stage, bangalore, 560029, karnataka, india
              </span>
            </div>
          </div>
        </div>

        {/* footer lower  */}
        <div className={style.footerLower}>
          <div className={style.lowerLeft}>
            <div>
              <IoMdBriefcase />
              <Link to="">Become a Seller</Link>
            </div>
            <div>
              <MdStars />
              <Link to="">Advertise</Link>
            </div>
            <div>
              <FaGift />
              <Link to="">Gift Cards</Link>
            </div>
            <div>
              <IoIosHelpCircle />
              <Link to="">Help Center</Link>
            </div>
          </div>

          {/* footer copyright */}

          <div className={style.footerCopyRight}>
            <span>© 2007-2022 shoppingkart.com</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
