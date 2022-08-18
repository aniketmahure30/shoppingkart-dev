import React from "react";
import style from "./footer.module.css";
import { IoMdBriefcase, IoIosHelpCircle } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
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
              <Link to="/merchant-signup">Become a Seller</Link>
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
