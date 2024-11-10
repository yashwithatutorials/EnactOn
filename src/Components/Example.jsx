
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import WebIcon from '@mui/icons-material/Web';
import MemoryIcon from '@mui/icons-material/Memory';
import ComputerIcon from '@mui/icons-material/Computer';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import DevicesIcon from '@mui/icons-material/Devices';
import WebhookIcon from '@mui/icons-material/Webhook';
import Container from '@mui/material/Container';
import { Button, Hidden } from '@mui/material';
const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const Example = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img
              alt=""
              src="../../src/assets/enact.png"
              className="h-8 w-auto"
            /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <Container sx={{display:{xs:"none",sm:"none",md:"block",lg:"block"}}}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
      
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Box component='img' src='../../src/assets/enact.png' sx={{width:{md:"300px",lg:"300px"},marginLeft:{lg:"-70px",md:"-80px"},marginTop:{md:"-25px"}}}/>
          </a>
        </div>
        
      <div>
        <a href='#' style={{marginLeft:"-90px",fontSize:"16px",fontWeight: 600,marginRight:"5px"}}>Home</a>
        <div className="dropdown">
  <button className="dropbtn">Products<KeyboardArrowDownIcon/></button>
  <div className="dropdown-content1">
    <a href="#">EnactSoft</a>
    <a href="#">ExtraDonation</a>
    <a href='#'>Coupomated</a>
    <a href="#">Upcoming Launches</a>
    <a href='#'>View All Products</a>
  </div>
</div>
<div className="dropdown" >
  <button className="dropbtn">What We Do<KeyboardArrowDownIcon/></button>
  <Box sx={{ display: { xs: 'block', md: 'none', lg: 'block' } }}>
  <div className="dropdown-content "  style={{ width: "1250px", marginLeft: "-600px" }}>
  <div style={{float:"left"}} >
  <Typography variant='h5'>Services</Typography>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><PhonelinkSetupIcon style={{color:"rgb(6, 215, 131)", paddingRight:"-100px"}} />Mobile App Development</Typography>
  <div className="grid grid-cols-2 gap-1">
  <a href="#">iOS</a>
    <a href="#">Android</a>
    <a href='#'>Hybrid App</a>
    <a href="#">PWA App</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebIcon style={{color:"rgb(6, 215, 131)"}}/>Web 3.0 Development</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">Blockchain</a>
    <a href="#">NFT</a>
    <a href='#'>Crypto</a>
    <a href="#">DeFi</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><MemoryIcon style={{color:"rgb(6, 215, 131)"}}/>AI/ML and IoT Development</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">AI&ML</a>
    <a href="#">IoT</a>
    <a href='#'>ChatBot</a>
    <a href="#">Automation</a>
</div>
    </div>
    <div style={{float:"left"}}>
  <div style={{marginTop:"32px"}}>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><ComputerIcon style={{color:"rgb(6, 215, 131)"}}/>Web Development Services</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">Enterprise</a>
    <a href="#">B2B and B2C</a>
    <a href='#'>Custom Website</a>
    <a href="#">E-commerce</a>
</div>
    </div>
    <Typography variant='h7' fontWeight={"600"} className='wedo'><SendTimeExtensionIcon style={{color:"rgb(6, 215, 131)"}}/>Browser Extension Development </Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">Chrome</a>
    <a href="#">Safari</a>
    <a href='#'>Firefox </a>
    <a href="#">Edge</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebhookIcon style={{color:"rgb(6, 215, 131)"}}/>Hire Dedicated Team</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">Frontend Team</a>
    <a href="#">MERN StackTeam</a>
    <a href='#'>PHP/Laravel Team</a>
    <a href="#">WordPress Team</a>
</div>
    </div>
    <div style={{float:"left"}}>
  <Typography variant='h5'>Technologies</Typography>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><PhonelinkSetupIcon style={{color:"rgb(6, 215, 131)"}}/>Mobile Application Technologies</Typography>
  <div className="grid grid-cols-2 gap-1">
  <a href="#">Android</a>
    <a href="#">iOS</a>
    <a href='#'>ReactNative</a>
    <a href="#">Flutter</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebIcon style={{color:"rgb(6, 215, 131)"}}/>Backend Technologies</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">Laravel</a>
    <a href="#">Python</a>
    <a href='#'>Golang</a>
    <a href="#">Node JS</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><MemoryIcon style={{color:"rgb(6, 215, 131)"}}/>Future Tchnologies</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">AI</a>
    <a href="#">ML</a>
    <a href='#'>IoT</a>
    <a href="#">Data Science</a>
</div>
    </div>
    <div style={{float:"left"}}>
  <div style={{marginTop:"32px"}}>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><ComputerIcon style={{color:"rgb(6, 215, 131)"}}/>Frontend Technologies</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">React JS</a>
    <a href="#">Vue JS</a>
    <a href='#'>Tailwind CSS</a>
    <a href="#">Type Script</a>
</div>
    </div>
    <Typography variant='h7' fontWeight={"600"} className='wedo'><DevicesIcon style={{color:"rgb(6, 215, 131)"}}/>Fullstact Technologies </Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">TALL</a>
    <a href="#">MERN</a>
    <a href='#'>MEAN </a>
    <a href="#">LEMP</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebhookIcon style={{color:"rgb(6, 215, 131)"}}/>DecOps&Cloud Technologies</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">AWS</a>
    <a href="#">GCP</a>
    <a href='#'>Jenkins</a>
    <a href="#">Docker/kubernete</a>
</div>
    </div>
    
  </div>
  </Box>
  <Box sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }}>
  <div className="dropdown-content "  style={{ width: "1030px", marginLeft: "-400px" }}>
  <div style={{float:"left"}}>
  <Typography variant='h5' sx={{marginBottom:"10px",fontWeight:"600"}}>Services</Typography>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><PhonelinkSetupIcon style={{color:"rgb(6, 215, 131)"}} />Mobile App<br></br> Development</Typography>
  <div className="grid grid-cols-2 gap-1">
  <a href="#">iOS</a>
    <a href="#">Android</a>
    <a href='#'>Hybrid App</a>
    <a href="#">PWA App</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebIcon style={{color:"rgb(6, 215, 131)"}}/>Web 3.0<br></br> Development</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">Blockchain</a>
    <a href="#">NFT</a>
    <a href='#'>Crypto</a>
    <a href="#">DeFi</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><MemoryIcon style={{color:"rgb(6, 215, 131)"}}/>AI/ML and IoT<br></br> Development</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">AI&ML</a>
    <a href="#">IoT</a>
    <a href='#'>ChatBot</a>
    <a href="#">Automation</a>
</div>
    </div>
    <div style={{float:"left"}}>
  <div style={{marginTop:"42px"}}>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><ComputerIcon style={{color:"rgb(6, 215, 131)"}}/>Web Development<br></br> Services</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">Enterprise</a>
    <a href="#">B2B and B2C</a>
    <a href='#'>Custom <br></br>Website</a>
    <a href="#">E-commerce</a>
</div>
    </div>
    <Typography variant='h7' fontWeight={"600"} className='wedo'><SendTimeExtensionIcon style={{color:"rgb(6, 215, 131)"}}/>Browser Extension <br></br>Development </Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">Chrome</a>
    <a href="#">Safari</a>
    <a href='#'>Firefox </a>
    <a href="#">Edge</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebhookIcon style={{color:"rgb(6, 215, 131)"}}/>Hire Dedicated Team</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">Frontend<br></br> Team</a>
    <a href="#">MERN Stack<br></br>Team</a>
    <a href='#'>PHP/Laravel <br></br>Team</a>
    <a href="#">WordPress <br></br>Team</a>
</div>
    </div>
    <div style={{float:"left"}}>
  <Typography variant='h5' sx={{marginBottom:"10px",fontWeight:"600"}}>Technologies</Typography>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><PhonelinkSetupIcon style={{color:"rgb(6, 215, 131)"}}/>Mobile Application <br></br>Technologies</Typography>
  <div className="grid grid-cols-2 gap-1">
  <a href="#">Android</a>
    <a href="#">iOS</a>
    <a href='#'>ReactNative</a>
    <a href="#">Flutter</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebIcon style={{color:"rgb(6, 215, 131)"}}/>Backend Technologies</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">Laravel</a>
    <a href="#">Python</a>
    <a href='#'>Golang</a>
    <a href="#">Node JS</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><MemoryIcon style={{color:"rgb(6, 215, 131)"}}/>Future Tchnologies</Typography>
<div className="grid grid-cols-2 gap-1">
<a href="#">AI</a>
    <a href="#">ML</a>
    <a href='#'>IoT</a>
    <a href="#">Data Science</a>
</div>
    </div>
    <div style={{float:"left"}}>
  <div style={{marginTop:"42px"}}>
  <Typography variant='h7' fontWeight={"600"} className='wedo'><ComputerIcon style={{color:"rgb(6, 215, 131)"}}/>Frontend Technologies</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">React JS</a>
    <a href="#">Vue JS</a>
    <a href='#'>Tailwind CSS</a>
    <a href="#">Type Script</a>
</div>
    </div>
    <Typography variant='h7' fontWeight={"600"} className='wedo'><DevicesIcon style={{color:"rgb(6, 215, 131)"}}/>Fullstact Technologies </Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">TALL</a>
    <a href="#">MERN</a>
    <a href='#'>MEAN </a>
    <a href="#">LEMP</a>
</div>
<Typography variant='h7' fontWeight={"600"} className='wedo'><WebhookIcon style={{color:"rgb(6, 215, 131)"}}/>DecOps&Cloud <br></br>Technologies</Typography>
  <div className="grid grid-cols-2 gap-1">
<a href="#">AWS</a>
    <a href="#">GCP</a>
    <a href='#'>Jenkins</a>
    <a href="#">Docker/kubernete</a>
</div>
    </div>
   
  </div>
  </Box>
</div>
<div className="dropdown">
  <button className="dropbtn">Whom We Serve<KeyboardArrowDownIcon/></button>
  <div className="dropdown-content1" style={{width:"430px",paddingTop:"20px",marginTop:"10px"}}>
  <div style={{display:"flex"}}>
    <Box>
    <Typography variant='h5'>Industries</Typography>
    <a href='#'>StartUp Companies</a>
    <a href='#'>Fintech StartUps</a>
    <a href='#'>Retail Industry</a>
    <a href='#'>E-commerce Businesses</a>
    <a href='#'>Advertising Agencies</a>
    <a href='#'>Educational Institutions</a>
    <a href='#'>Enterprises</a>
    <a href='#'>Climate Tech</a>
     </Box>
<Box>
    <Typography variant='h5'>Customers</Typography>
    <a href='#'>Protfolio</a>
    <a href='#'>Testimonials</a>
    <a href='#'>Featured Work</a>
</Box>
</div>
</div>
</div>
<div className="dropdown">
  <button className="dropbtn">Careers<KeyboardArrowDownIcon/></button>
  <div className="dropdown-content1">
    <a href="#">Work Life@EnactOn</a>
    <a href="#">Open Positions/vacancies</a>
    <a href='#'>Apply For A Job</a>
  </div>
</div>
<div className="dropdown">
  <button className="dropbtn">Compay<KeyboardArrowDownIcon/></button>
  <div className="dropdown-content1">
    <a href="#">About Us</a>
    <a href="#">Our Infrastructure</a>
    <a href='#'>Contact Us</a>
    
  </div>
</div>
<a href='#' style={{fontSize:"16px",fontWeight:"600"}}>Blog</a>
<Button  sx={{marginLeft:{md:"13px",lg:"38px"},color:"white",borderRadius:"11px",width:"100px",height:"45px",marginRight:{md:"-50px"}}} className='bg-gradient-to-r from-emerald-500 to-orange-500  '>Let's Talk</Button>
      </div>
      
      </nav>
      </Container>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Example