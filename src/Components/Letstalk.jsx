import React,{useState} from 'react'
import './Letstalk.css'
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
const testimonials = [
    {
      id: 1,
      quote: "Best thing about EnactOn is they have all under-one-roof solution for end-to-end business requirements.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybkzjJiPUNbagWcz-wX8D2d5wknxDJSlCJw&s", 
      name: "Tejprakash",
      title: "Founder at, AdGaem",
    },
    {
      id: 2,
      quote: "No matter it's a day or night,there are responses to my inquiries and resolve my concerns in less than an hour ",
      image: "https://sites.gatech.edu/he-wang/files/2024/01/2023-he-wang-9e6ff8153baff98d.jpg", 
      name: "He Wang",
      title: "Founder at,Cashbackist,inc",
    },
    {
      id: 3,
      quote: "We appreciate their attention to detail and creative approach in bringing our new exhibit to life online",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQIh12gpQTg9ohI8WqzgEhbFmkhh1jDzcFA&s", 
      name: "Y Sreekanth",
      title: "Founder at,Cashkart365",
    },
  ];
const Letstalk = () => {
      
     
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const nextSlide = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
        };
      
        const prevSlide = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
          );
        };
  return (
    < >
      <Typography 
      sx={{
        fontSize:"27px",
        color:"black",
        textAlign:"center",
        fontWeight:"900"
      }}>Contact US:Let's Transform Your Vision into Reality</Typography>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
      <div className="container" >
            <div className="contact-details" >
                <h2>Global customer footprint</h2>
                <h3>EnactOn Technologies Private Limited</h3>
                <p style={{color:"black",fontSize:"18px"}}>Registered Office (IN)</p>
                <p>
                    605, Luxuria Business Hub, Nr. V R Mall, Dumas Rd. Vesu, Surat, Gujarat. INDIA - 395007
                </p>
                <div className="contacts">
                    <p>
                        <strong>EnactStaff Sales Enquiry:</strong> <br />
                        (+91) 74260 60610 <br />
                        contact@enacton.com
                    </p>
                    <p>
                        <strong>Couponated Sales Enquiry:</strong> <br />
                        (+91) 94038 90058 <br />
                        contact@couponated.com
                    </p>
                    <p>
                        <strong>HR/Corporate Enquiry:</strong> <br />
                        (+91) 90790 45453 <br />
                        careers@enacton.com
                    </p>
                </div>
                <div className="social-icons">
                    <a href="#"><FacebookIcon style={{color:"#3b5998",fontSize:"45px"}}/></a>
                    <a href='#'><InstagramIcon className='insta' style={{fontSize:"38px"}}/></a>
                    <a href="#"><LinkedInIcon style={{color:"#0A66C2 ",fontSize:"45px"}}/></a>
                    <a href="#"><TwitterIcon className='twitter' style={{fontSize:"45px"}}/></a>
                    <a href="#"><YouTubeIcon style={{color:"red",fontSize:"45px"}}/></a>
                </div>
                <Typography sx={{fontSize:"19px",fontWeight:"700",color:"black"}}>Clients that have trusted us over the years</Typography>
                <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6 '>
                    <img src='./src/assets/oodlzWebAppLogo-1.png' style={{width:"90px"}}/>
                    <img src='./src/assets/sparissimo.png' style={{width:"90px"}}/>
                    <img src='./src/assets/flolio.png' style={{width:"90px"}}/>
                    <img src='./src/assets/gorilla-coupon-logo.png' style={{width:"110px"}}/>
                    <img src='./src/assets/Monerio-logo-248.webp' style={{width:"90px"}}/>
                    <img src='./src/assets/cashbackdunia-icon1.png' style={{width:"150px"}}/>
                </div>
                <div className="slider-container">
    
      <p className="quote">{testimonials[currentIndex].quote}</p>

      
      <div className="profile">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="profile-image"
        />
        <div>
          <h4 className="name">{testimonials[currentIndex].name}</h4>
          <p className="title">{testimonials[currentIndex].title}</p>
        </div>
      </div>
      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot ${
              currentIndex === index ? "active-dot" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
            </div>
            <div className="form-section">
                <h2>Project Enquiry</h2>
                <form>
                    <div className="form-row">
                    <label>First Name
                        <input type="text" placeholder="First Name *" required /></label>
                        <label>Last Name  <input type="text" placeholder="Last Name *" required /></label>
                    </div>
                    <div className="form-row">
                    <label>Emain ID <input type="email" placeholder="Email ID *" required /></label>
                    <label>Mobile Phone <input type="tel" placeholder="Mobile Phone *" required /></label>
                    </div>
                    
                    <label>Select a Service
                        <select required>
                            <option value="">Select a Service *</option>
                            <option value="service1">Mobile Application Development</option>
                            <option value="service2">Web Development</option>
                            <option value="service3">Customer Open Source Project</option>
                            <option value="service4">UI/UX design</option>
                            <option value="service5">AI/ML development</option>
                            <option value="service6">IoT development</option>
                            <option value="service7">Browser Extension development</option>
                            <option value="service8">QA Services</option>
                            <option value="service9">Other</option>
                        </select></label>
                        <div className="form-row">
                        <label>Budget
                        <select required>
                            <option value="">Select Budget *</option>
                            <option value="budget1">$5K+</option>
                            <option value="budget2">$15K+</option>
                            <option value="budget3">$25K+</option>
                            <option value="budget4">$50K+</option>
                            <option value="budget5">$100K+</option>
                        </select></label>
                    
                    
                    <label>How soon you want to start
                      <select required>
                        <option value="">Select timeline</option>
                        <option value="Right Now">Right Now</option>
                        <option value="In few Weeks">In few Weeks</option>
                        <option value="In few Months">In few Months</option>
                        <option value="Right Now">Not Sure</option>
                      </select>
                      </label>
                    </div>
                   
                    <label>Requirements
                        <select required>
                            <option value="">Select Requirement *</option>
                            <option value="req1">New Project</option>
                            <option value="req2">Existing Project</option>
                            <option value="req2">Hire Dedicated Team</option>
                            <option value="req2">Support-Maintainence</option>
                        </select>
                        </label>
                        <label>Brief about the project
                        <textarea placeholder="Describe about your project requirements,so we can quickly get back to you with a Quote."></textarea></label>
                    
                    <div className=" file-upload">
                        <label>Requirement Documents</label>
                        <input type="file" />
                        <p style={{fontSize:"13px"}}>Allowed files: pdf, doc, png, jpg, max file upload: 5 MB (Alternatively share Google drive link in above description field)</p>
                    </div>
                    <div  style={{display:'flex'}} className='robo'>
                        <input type="checkbox" required style={{width:"30px"}}/>
                        <label>I am not a robot</label>
                        <img src='./src/assets/recapcha.png' style={{width:"60px"}}/>
                    </div>
                    <button type="submit" className='submit'>Submit</button>
                </form>
            </div>    
        </div>
        </div>
        <div className='reach' >
           
                <div className='project'>
                <div style={{textAlign:"center",paddingTop:"10px"}}>
                    <h3 style={{color:"blue"}}>Reach Out to Us Directly</h3>
                    <h2>For Project Enquiry</h2>
                    </div>
                    <p style={{marginLeft:"13px"}}>
                        <WifiCalling3OutlinedIcon/>
                        (+91)74260 60610
                    </p>
                    <p style={{marginLeft:"13px"}}>
                        <EmailOutlinedIcon/>
                        contact@enacton.com
                    </p>
                </div>
                <div className='career'>
                <div style={{textAlign:"center",paddingTop:"10px"}}>
                    <h3>Reach Out to Us Directly</h3>
                    <h2 style={{color:"white"}}>For Career Enquiry</h2>
                    </div>
                    <p style={{color:"white",marginLeft:"13px"}}>
                        <WifiCalling3OutlinedIcon/>
                        (+91)90790 45453
                    </p>
                    <p style={{color:"white",marginLeft:"13px"}}>
                        <EmailOutlinedIcon/> 
                        contact@enacton.com
                    </p>
                </div>
                
            </div>
        {/* </div> */}
    </>
  )
}

export default Letstalk