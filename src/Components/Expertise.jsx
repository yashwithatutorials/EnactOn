import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import './Expertise.css'
const frontendTechnologies = [
    { name: 'Angular JS', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { name: 'TypeScript', logo: 'https://www.typescriptlang.org/icons/icon-48x48.png' },
    { name: 'React JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Next JS', logo: 'https://www.svgrepo.com/show/354112/nextjs.svg' },
    { name: 'Vue JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
    { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg' }
];

const backendTechnologies = [
    { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
    { name: 'Node JS', logo: 'https://www.svgrepo.com/show/303360/nodejs-logo.svg' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Flask', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg' },
    { name: 'Nest JS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg' },
    { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'MySQL', logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg' }
];
const mobileTechnologies = [
    { name: 'iOS', logo: 'https://www.svgrepo.com/show/69341/apple-logo.svg' },
    { name: 'Android', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg' },
    { name: 'React Native', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png' },
    { name: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
    { name: 'Swift', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg' },
    { name: 'Kotlin', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' }
];
const devopsTechnologies = [
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Google Cloud', logo: 'https://www.svgrepo.com/show/353805/google-cloud.svg' },
    { name: 'Jenkins', logo: 'https://www.svgrepo.com/show/394232/jenkins.svg' },
    { name: 'Docker', logo: 'https://www.svgrepo.com/show/373553/docker.svg' },
    { name: 'Kubernetes', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' },
    { name: 'GitLab', logo: 'https://www.svgrepo.com/show/448226/gitlab.svg' },
    { name: 'Terraform', logo: 'https://www.svgrepo.com/show/354447/terraform-icon.svg' },
    { name: 'Grafana', logo: 'https://www.svgrepo.com/show/448228/grafana.svg' }
];
const thirdPartyTechnologies = [
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'SendGrid', logo: 'https://www.svgrepo.com/show/354327/sendgrid-icon.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Cloudflare', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg' },
    { name: 'Twilio', logo: 'https://www.svgrepo.com/show/349539/twilio.svg' },
    { name: 'MSG91', logo: 'https://msg91.com/assets/brand/msg91.svg' },
    { name: 'Binance Pay', logo: 'https://cdn.worldvectorlogo.com/logos/binance-logo.svg' },
    { name: 'CoinGecko', logo: 'https://www.svgrepo.com/show/515600/coingecko.svg' }
];
const Expertise = () => {
    const [selectedCategory, setSelectedCategory] = useState('frontend');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        document.getElementsByTagName('button').style.textdecoration="underline";
    };

    const technologies = selectedCategory === 'frontend' ? frontendTechnologies :
    selectedCategory === 'backend' ? backendTechnologies :
    selectedCategory === 'mobile' ? mobileTechnologies :
    selectedCategory === 'devops' ? devopsTechnologies :
    thirdPartyTechnologies;

  return (
    <>
        <div className='text-center'>
           <h1 className='main'>Our Expertise on</h1> 
           <h1 style={{fontSize:"larger",fontFamily:'bold',fontWeight:'900'}}>Popular Website & Mobile App Technologies</h1>
        </div>
        <div >
            
            <div className="tabs">
                <button onClick={() => handleCategoryChange('frontend')} >Frontend</button>
                <button onClick={() => handleCategoryChange('backend')}>Backend</button>
                <button onClick={() => handleCategoryChange('mobile')}>Mobile</button>
                <button onClick={() => handleCategoryChange('devops')}>DevOps & Cloud</button>
                <button onClick={() => handleCategoryChange('thirdparty')}>Third Party Integration</button>

            </div>
            <div className='grid'>
                {technologies.map((tech, index) => (
                    <div key={index} className='text-center' >
                        <img src={tech.logo} alt={tech.name} className='icons' />
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Expertise