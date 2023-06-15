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

            <div className="title-footer">CODING NINJAS</div>
            <div className="hover-effect-border">About Us</div>
            <div className="hover-effect-border">Careers</div>
            <div className="hover-effect-border">Privacy Policy</div>
            <div className="hover-effect-border">Terms & Conditions</div>
            <div className="hover-effect-border">Pricing & Refund Policy</div>
            <div className="hover-effect-border">Bug Bounty</div>
            <div className="hover-effect-border">Our Students</div>
            <div className="hover-effect-border">Press Release</div>
          
        </ul>
        </div>
        <div>
            <div className="title-footer">PRODUCTS</div>
            <div className="hover-effect-border">Courses</div>
            <div className="hover-effect-border">Try courses for Free</div>
            <div className="hover-effect-border">Career Camp</div>
            <div className="hover-effect-border">Mock Interviews</div>
            <div className="hover-effect-border">Hire Talent</div>
          </div>
          <div>
            <div className="title-footer">COMMUNITY</div>
            <div className="">CodeStudio</div>
            <div className="hover-effect-border">Blog</div>
            <div className="hover-effect-border">Events</div>
            <div className="hover-effect-border">Campus Ninja</div>
            <div className="hover-effect-border">Affiliate</div>
            <div className="hover-effect-border">Scholarship Event</div>
            <div className="hover-effect-border">Placement cell</div>
          </div>
          
        
        <div>
            
            <div className='title-footer'>Useful Links </div>
            <li className='hover-effect-border'>About Us</li>
            <li className='hover-effect-border'>Information</li>
            <li className='hover-effect-border'>Privacy Policy</li>
            <li className='hover-effect-border'> Terms & Conditions</li>
       
        </div>
        <div>
            <p><b>Our Offers</b> </p>
            <div className='title-footer'>
            <li className='hover-effect-border'>About Us</li>
            <li className='hover-effect-border'>Information</li>
            <li className='hover-effect-border'>Privacy Policy</li>
            <li className='hover-effect-border'>Terms & Conditions</li>
        </div>
        </div>
       
      </div>
    </div>

    <div id="sub-container-footer">
          <div className="head-footer-link" style={{textAlign:"left"}}>Important Links</div>
          <p>
            <strong>CODING COURSES FOR BEGINNERS:</strong>
            <span className="hover-effect-border">C++ Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Java Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Interview Preparation for Product Companies </span>
            <span className="hover-effect-border"> Competitive Programming Course </span>|
            <span className="hover-effect-border"> Python Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Aptitude Preparation Course </span>|
          </p>
          <p>
            <strong>ADVANCED CODING COURSE:</strong>
            <span className="hover-effect-border">Advanced Front-End Web Development with React </span>|
            <span className="hover-effect-border"> Machine Learning and Deep Learning Course </span>|
            <span className="hover-effect-border"> Full Stack Web Development Course </span>|
            <span className="hover-effect-border"> Data Science & Machine Learning Complete </span>|
            <span className="hover-effect-border"> Operating Systems && System Design </span>|
            <span className="hover-effect-border"> Database Management System</span>
          </p>
          <p>
            <strong>FREE TRIAL:</strong>
            <span className="hover-effect-border">C++ Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Java Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Competitive Course </span>|
            <span className="hover-effect-border"> Aptitude Preparation Course </span>|
            <span className="hover-effect-border"> Python Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Advanced Front-End Web Development with React </span>
            <span className="hover-effect-border"> Interview Preparation for Product Companies </span>
          </p>
          <p>
            <strong>FREE CONTENTS:</strong>
            <span className="hover-effect-border">C++ Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Java Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Competitive Programming Course </span>|
            <span className="hover-effect-border"> Aptitude Preparation Course </span>|
            <span className="hover-effect-border"> Python Foundation with Data Structures </span>|
            <span className="hover-effect-border"> Advanced Front-End Web Development with React </span>
            <span className="hover-effect-border"> Interview Preparation for Product Companies </span>
            <span className="hover-effect-border"> Machine Learning Course</span>
          </p>
        </div>
    </>
  );
};


export default Footer
