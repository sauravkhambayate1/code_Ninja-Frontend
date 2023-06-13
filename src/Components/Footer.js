import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import icon_Ninja from '../images/logo_variants-white-25005.png'
const Footer = () => {
  return (
    <>
    <div className='main_footer'>

      <div className='footer__section1'>
        <div className='section1__details'>
          <img src={icon_Ninja} alt='iShop' width={100} />
          <p className='label5 mt-30'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className='section1__details'>
          <p><b>Follow Us</b> </p>
          <p className='label5 mt-30'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </p>
          <div className='icon__container'>
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twttter" />
          </div>
        </div>
        <div className='section1__details'>
        <p><b>Contact Us</b> </p>
          <p className='label5 mt-30'>
          CodeNinja: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com
          </p>
        </div>
      </div>
      <div className='footer__section2'>
        <div>
            <p><b>Information</b> </p>
            <ul>
            <li  className='label5 align__left'>About Us</li>
            <li  className='label5 align__left'>Information</li>
            <li  className='label5 align__left'>Privacy Policy</li>
            <li  className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p><b>Service</b> </p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p><b>Extras</b> </p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p><b>My Account</b> </p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p><b>Useful Links</b> </p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'> Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p><b>Our Offers</b> </p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
       
      </div>
    </div>
    </>
  );
};


export default Footer
