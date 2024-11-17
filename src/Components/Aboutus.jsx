import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import WebIcon from '@mui/icons-material/Web';
import MemoryIcon from '@mui/icons-material/Memory';
import ComputerIcon from '@mui/icons-material/Computer';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import DevicesIcon from '@mui/icons-material/Devices';
import WebhookIcon from '@mui/icons-material/Webhook';
import './Aboutus.css';
const Aboutus = () => {
  const services = [
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Development of user-friendly and captivating Android, iOS, and cross-platform applications that are adored by both businesses and end-users. Our developed apps are designed to be quickly adopted and embraced by users across enterprises and consumer markets alike.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "At our company, our skilled web developers craft tailor-made web and web application solutions that meet the unique needs of your business. We leverage the latest web technologies to deliver a robust solution that can drive business growth and help you achieve your goals.",
    },
    {
      icon: "🔌",
      title: "Browser Extension",
      description:
        "We provide professional services for developing browser extensions that cater to your specific needs. Our team of experts helps you create custom browser extensions that enhance your online experience and automate your business workflow.",
    },
    {
      icon: "🤖",
      title: "AI/ML Development",
      description:
        "We integrate AI/ML components into existing business processes to enhance productivity. Our team of AI/ML engineers is highly skilled in the development of advanced AI/ML applications and solutions that cater to a wide range of industries.",
    },
    {
      icon: "☁️",
      title: "IoT Development",
      description:
        "We offer IoT development services, helping businesses create innovative solutions that leverage the power of connected devices. Our team of skilled IoT developers can assist you in designing and implementing IoT solutions as per your specifications.",
    },
    {
      icon: "🌐",
      title: "Web 3.0",
      description:
        "We offer blockchain & cryptocurrency development services that use Web 3.0 technology to create innovative solutions. Our team of experts in the field of DeFi, Crypto, and NFT develops advanced applications that deliver exceptional user experiences and data security.",
    },
    {
      icon: "⚙️",
      title: "DevOps & Cloud",
      description:
        "Our company is a trusted provider of DevOps and cloud services. We help businesses of all sizes adopt DevOps practices and implement cloud technologies to improve their software development processes and overall IT operations.",
    },
    {
      icon: "👥",
      title: "Hire Remote Team",
      description:
        "We provide cost-effective and flexible remote team services to businesses of all sizes. We specialize in augmenting staff and helping our clients scale their operations with talented professionals who work from different parts of the world.",
    },
  ];
  return (
    <>
        <div  className='text-center'>
            <Typography variant='h5' sx={{marginTop:"120px"}} className='text-center'>About Us</Typography>
            <Typography sx={{fontSize:{xs:"30px"},fontWeight:{xs:"550"}}} className='text-center'>Best Web & Mobile App Development Company</Typography>
            <article className="text-wrap">
            <Typography sx={{marginTop:"25px",fontSize:"19px",color:"gray",marginLeft:{lg:"90px"},marginRight:{lg:"90px"}}} className='text-center text-balance' >Originally a product-based software developer, EnactOn has evolved into one of the best software development companies,catering to our global clientele from over 62+ countries. We stand out for our attention to detail,one-stop solutions,and ability to simplify complex problems,all while offering affordable,scalable solutions.</Typography>
            <Typography sx={{marginTop:"25px",fontSize:"19px",color:"gray",marginLeft:{lg:"130px"},marginRight:{lg:"130px"}}} className='text-center text-balance'>Our portfolio ranges from MVPs to full-scale enterprise software, leveraging our vast technical expertise in website and mobile app development, and browser extension<a href='#' style={{color:"purple",textDecoration:"underline"}}> development services.</a>At EnactOn, we’re committed to bringing your vision to life with innovation and adherence to <a href='#' style={{color:"blue",textDecoration:"underline"}} >our core values.</a></Typography>
            </article>
        </div>
        <div  className='text-center'>
            <Typography variant='h5' sx={{marginTop:"120px"}} className='text-center'>Services</Typography>
            <Typography sx={{fontSize:{xs:"30px"},fontWeight:{xs:"550"}}} className='text-center'>Leading Software Development Outsourcing Company</Typography>
            <div className="cards-container">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <div className="icon">{service.icon}</div>
          <h3 style={{fontSize:"32px",fontWeight:"500"}}>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
        </div>
        <div className='text-center'>
        
          <Typography sx={{fontSize:"32px",color:"blue"}}>
          <Box 
              component='img' 
              src='../../src/assets/book.png' 
              sx={{width:"190px"}}
              />
          World-Class<br></br><span style={{color:"black"}}>Our Unique Products</span></Typography>
          <Typography sx={{fontSize:"25px"}}>Our Unique Products</Typography>
          
        </div>

    </>
  )
}

export default Aboutus;