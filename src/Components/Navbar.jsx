import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import WebIcon from "@mui/icons-material/Web";
import MemoryIcon from "@mui/icons-material/Memory";
import ComputerIcon from "@mui/icons-material/Computer";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import DevicesIcon from "@mui/icons-material/Devices";
import WebhookIcon from "@mui/icons-material/Webhook";
import Container from "@mui/material/Container";
import SegmentIcon from "@mui/icons-material/Segment";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsNavVisible(true);
  };

  const handleMouseLeave = () => {
    setIsNavVisible(false);
  };

  return (
    <>
      <header className="bg-white" style={{ marginTop: "-40px" }}>
        <Container
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            marginTop: "40px",
          }}
        >
          <nav
            aria-label="Global"
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Box
                  component="img"
                  src="../../src/assets/enact.png"
                  sx={{
                    width: { md: "300px", lg: "300px" },
                    marginLeft: { lg: "-70px", md: "-45px" },
                    marginTop: { md: "-25px" },
                  }}
                />
              </a>
            </div>

            <div>
              <a
                href="#"
                style={{
                  marginLeft: "-90px",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginRight: "5px",
                }}
              >
                Home
              </a>
              <div className="dropdown">
                <button className="dropbtn">
                  Products
                  <KeyboardArrowDownIcon />
                </button>
                <div className="dropdown-content1">
                  <a href="#">EnactSoft</a>
                  <a href="#">ExtraDonation</a>
                  <a href="#">Coupomated</a>
                  <a href="#">Upcoming Launches</a>
                  <a href="#">View All Products</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  What We Do
                  <KeyboardArrowDownIcon />
                </button>
                <Box
                  sx={{ display: { xs: "block", md: "block", lg: "block" } }}
                >
                  <div
                    className="dropdown-content "
                    style={{ width: "1250px", marginLeft: "-600px" }}
                  >
                    <div style={{ float: "left" }}>
                      <Typography variant="h5">Services</Typography>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <PhonelinkSetupIcon
                          style={{
                            color: "rgb(6, 215, 131)",
                            paddingRight: "-100px",
                          }}
                        />
                        Mobile App Development
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">iOS</a>
                        <a href="#">Android</a>
                        <a href="#">Hybrid App</a>
                        <a href="#">PWA App</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Web 3.0 Development
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Blockchain</a>
                        <a href="#">NFT</a>
                        <a href="#">Crypto</a>
                        <a href="#">DeFi</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <MemoryIcon style={{ color: "rgb(6, 215, 131)" }} />
                        AI/ML and IoT Development
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">AI&ML</a>
                        <a href="#">IoT</a>
                        <a href="#">ChatBot</a>
                        <a href="#">Automation</a>
                      </div>
                    </div>
                    <div style={{ float: "left" }}>
                      <div style={{ marginTop: "32px" }}>
                        <Typography
                          variant="h7"
                          fontWeight={"600"}
                          className="wedo"
                        >
                          <ComputerIcon style={{ color: "rgb(6, 215, 131)" }} />
                          Web Development Services
                        </Typography>
                        <div className="grid grid-cols-2 gap-1">
                          <a href="#">Enterprise</a>
                          <a href="#">B2B and B2C</a>
                          <a href="#">Custom Website</a>
                          <a href="#">E-commerce</a>
                        </div>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <SendTimeExtensionIcon
                          style={{ color: "rgb(6, 215, 131)" }}
                        />
                        Browser Extension Development{" "}
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Chrome</a>
                        <a href="#">Safari</a>
                        <a href="#">Firefox </a>
                        <a href="#">Edge</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebhookIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Hire Dedicated Team
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Frontend Team</a>
                        <a href="#">MERN StackTeam</a>
                        <a href="#">PHP/Laravel Team</a>
                        <a href="#">WordPress Team</a>
                      </div>
                    </div>
                    <div style={{ float: "left" }}>
                      <Typography variant="h5">Technologies</Typography>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <PhonelinkSetupIcon
                          style={{ color: "rgb(6, 215, 131)" }}
                        />
                        Mobile Application Technologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Android</a>
                        <a href="#">iOS</a>
                        <a href="#">ReactNative</a>
                        <a href="#">Flutter</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Backend Technologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Laravel</a>
                        <a href="#">Python</a>
                        <a href="#">Golang</a>
                        <a href="#">Node JS</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <MemoryIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Future Tchnologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">AI</a>
                        <a href="#">ML</a>
                        <a href="#">IoT</a>
                        <a href="#">Data Science</a>
                      </div>
                    </div>
                    <div style={{ float: "left" }}>
                      <div style={{ marginTop: "32px" }}>
                        <Typography
                          variant="h7"
                          fontWeight={"600"}
                          className="wedo"
                        >
                          <ComputerIcon style={{ color: "rgb(6, 215, 131)" }} />
                          Frontend Technologies
                        </Typography>
                        <div className="grid grid-cols-2 gap-1">
                          <a href="#">React JS</a>
                          <a href="#">Vue JS</a>
                          <a href="#">Tailwind CSS</a>
                          <a href="#">Type Script</a>
                        </div>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <DevicesIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Fullstact Technologies{" "}
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">TALL</a>
                        <a href="#">MERN</a>
                        <a href="#">MEAN </a>
                        <a href="#">LEMP</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebhookIcon style={{ color: "rgb(6, 215, 131)" }} />
                        DecOps&Cloud Technologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">AWS</a>
                        <a href="#">GCP</a>
                        <a href="#">Jenkins</a>
                        <a href="#">Docker/kubernete</a>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "none",
                      lg: "block",
                    },
                  }}
                >
                  <div
                    className="dropdown-content "
                    style={{ width: "1030px", marginLeft: "-350px" }}
                  >
                    <div style={{ float: "left" }}>
                      <Typography
                        variant="h5"
                        sx={{ marginBottom: "10px", fontWeight: "600" }}
                      >
                        Services
                      </Typography>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <PhonelinkSetupIcon
                          style={{ color: "rgb(6, 215, 131)" }}
                        />
                        Mobile App<br></br> Development
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">iOS</a>
                        <a href="#">Android</a>
                        <a href="#">Hybrid App</a>
                        <a href="#">PWA App</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Web 3.0<br></br> Development
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Blockchain</a>
                        <a href="#">NFT</a>
                        <a href="#">Crypto</a>
                        <a href="#">DeFi</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <MemoryIcon style={{ color: "rgb(6, 215, 131)" }} />
                        AI/ML and IoT<br></br> Development
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">AI&ML</a>
                        <a href="#">IoT</a>
                        <a href="#">ChatBot</a>
                        <a href="#">Automation</a>
                      </div>
                    </div>
                    <div style={{ float: "left" }}>
                      <div style={{ marginTop: "42px" }}>
                        <Typography
                          variant="h7"
                          fontWeight={"600"}
                          className="wedo"
                        >
                          <ComputerIcon style={{ color: "rgb(6, 215, 131)" }} />
                          Web Development<br></br> Services
                        </Typography>
                        <div className="grid grid-cols-2 gap-1">
                          <a href="#">Enterprise</a>
                          <a href="#">B2B and B2C</a>
                          <a href="#">
                            Custom <br></br>Website
                          </a>
                          <a href="#">E-commerce</a>
                        </div>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <SendTimeExtensionIcon
                          style={{ color: "rgb(6, 215, 131)" }}
                        />
                        Browser Extension <br></br>Development{" "}
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Chrome</a>
                        <a href="#">Safari</a>
                        <a href="#">Firefox </a>
                        <a href="#">Edge</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebhookIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Hire Dedicated Team
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">
                          Frontend<br></br> Team
                        </a>
                        <a href="#">
                          MERN Stack<br></br>Team
                        </a>
                        <a href="#">
                          PHP/Laravel <br></br>Team
                        </a>
                        <a href="#">
                          WordPress <br></br>Team
                        </a>
                      </div>
                    </div>
                    <div style={{ float: "left" }}>
                      <Typography
                        variant="h5"
                        sx={{ marginBottom: "10px", fontWeight: "600" }}
                      >
                        Technologies
                      </Typography>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <PhonelinkSetupIcon
                          style={{ color: "rgb(6, 215, 131)" }}
                        />
                        Mobile Application <br></br>Technologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Android</a>
                        <a href="#">iOS</a>
                        <a href="#">ReactNative</a>
                        <a href="#">Flutter</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Backend Technologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">Laravel</a>
                        <a href="#">Python</a>
                        <a href="#">Golang</a>
                        <a href="#">Node JS</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <MemoryIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Future Tchnologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">AI</a>
                        <a href="#">ML</a>
                        <a href="#">IoT</a>
                        <a href="#">Data Science</a>
                      </div>
                    </div>
                    <div style={{ float: "left" }}>
                      <div style={{ marginTop: "42px" }}>
                        <Typography
                          variant="h7"
                          fontWeight={"600"}
                          className="wedo"
                        >
                          <ComputerIcon style={{ color: "rgb(6, 215, 131)" }} />
                          Frontend Technologies
                        </Typography>
                        <div className="grid grid-cols-2 gap-1">
                          <a href="#">React JS</a>
                          <a href="#">Vue JS</a>
                          <a href="#">Tailwind CSS</a>
                          <a href="#">Type Script</a>
                        </div>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <DevicesIcon style={{ color: "rgb(6, 215, 131)" }} />
                        Fullstact Technologies{" "}
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">TALL</a>
                        <a href="#">MERN</a>
                        <a href="#">MEAN </a>
                        <a href="#">LEMP</a>
                      </div>
                      <Typography
                        variant="h7"
                        fontWeight={"600"}
                        className="wedo"
                      >
                        <WebhookIcon style={{ color: "rgb(6, 215, 131)" }} />
                        DecOps&Cloud <br></br>Technologies
                      </Typography>
                      <div className="grid grid-cols-2 gap-1">
                        <a href="#">AWS</a>
                        <a href="#">GCP</a>
                        <a href="#">Jenkins</a>
                        <a href="#">Docker/kubernete</a>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Whom We Serve
                  <KeyboardArrowDownIcon />
                </button>
                <div
                  className="dropdown-content1"
                  style={{
                    width: "430px",
                    paddingTop: "10px",
                    marginTop: "0px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Box>
                      <Typography variant="h5">Industries</Typography>
                      <a href="#">StartUp Companies</a>
                      <a href="#">Fintech StartUps</a>
                      <a href="#">Retail Industry</a>
                      <a href="#">E-commerce Businesses</a>
                      <a href="#">Advertising Agencies</a>
                      <a href="#">Educational Institutions</a>
                      <a href="#">Enterprises</a>
                      <a href="#">Climate Tech</a>
                    </Box>
                    <Box>
                      <Typography variant="h5">Customers</Typography>
                      <a href="#">Protfolio</a>
                      <a href="#">Testimonials</a>
                      <a href="#">Featured Work</a>
                    </Box>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Careers
                  <KeyboardArrowDownIcon />
                </button>
                <div className="dropdown-content1">
                  <a href="#">Work Life@EnactOn</a>
                  <a href="#">Open Positions/vacancies</a>
                  <a href="#">Apply For A Job</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  Compay
                  <KeyboardArrowDownIcon />
                </button>
                <div className="dropdown-content1">
                  <a href="#">About Us</a>
                  <a href="#">Our Infrastructure</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
              <a href="#" style={{ fontSize: "16px", fontWeight: "600" }}>
                Blog
              </a>
              <Button
                sx={{
                  marginLeft: { md: "13px", lg: "38px" },
                  color: "white",
                  borderRadius: "11px",
                  width: "100px",
                  height: "45px",
                  marginRight: { md: "-50px" },
                }}
                className="bg-gradient-to-r from-emerald-500 to-orange-500  "
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        </Container>

        <Container
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            marginTop: "30px",
          }}
        >
          <nav>
            <div className="flex justify-between">
              <a href="#">
                <Box
                  component="img"
                  src="../../src/assets/enact.png"
                  sx={{
                    width: { xs: "180px", sm: "180px" },
                    marginLeft: { xs: "-10px" },
                    marginTop: { xs: "20px", sm: "20px" },
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "none",
                    },
                  }}
                />
              </a>

              <div className="flex lg:hidden" style={{ float: "right" }}>
                <button className="icon" onClick={handleMouseEnter}>
                  <SegmentIcon
                    style={{
                      fontSize: "32px",
                      float: "right",
                      marginTop: "15px",
                    }}
                  />
                </button>
              </div>
            </div>
            <Box>
              <div
                className="nav"
                style={{ display: isNavVisible ? "block" : "none" }}
              >
                <button onClick={handleMouseLeave}>
                  <CloseIcon
                    style={{
                      fontSize: "32px",
                      float: "right",
                      marginTop: "15px",
                    }}
                  />
                </button>
                <div style={{ display: "block" }}>
                  <a href="#">Home</a>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Products
                      <KeyboardArrowDownIcon />
                    </button>
                    <div className="content1">
                      <a href="#">EnactSoft</a>
                      <a href="#">ExtraDonation</a>
                      <a href="#">Coupomated</a>
                      <a href="#">Upcoming Launches</a>
                      <a href="#">View All Products</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="dropbtn">
                      What We Do
                      <KeyboardArrowDownIcon />
                    </button>
                    <div className="content1">
                      <a href="#">Services</a>
                      <a href="#">Mobile App Development</a>
                      <a href="#">Web Development Services</a>
                      <a href="#">Web 3.0 Development</a>
                      <a href="#">Browser Extension Development</a>
                      <a href="#">
                        AI/ML and IOT <br></br>Development
                      </a>
                      <a href="#">Hire Dedicated Team</a>
                      <a href="#">Technologies</a>
                      <a href="#">
                        Mobile Application<br></br>Technologies
                      </a>
                      <a href="#">Frontend Technologies</a>
                      <a href="#">Backend Technologies</a>
                      <a href="#">Fullstack Technologies</a>
                      <a href="#">Future Technologies</a>
                      <a href="#">
                        DevOPs & Cloud<br></br>Technologies
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Whom We Serve
                      <KeyboardArrowDownIcon />
                    </button>
                    <div className="content1">
                      <a href="#">Industries</a>
                      <a href="#">StartUp Companies</a>
                      <a href="#">Fintech StartUp</a>
                      <a href="#">Retail Industry</a>
                      <a href="#">E-commerce Businesses</a>
                      <a href="#">Advertising Agencies</a>
                      <a href="#">Educational Institutions</a>
                      <a href="#">Enterprises</a>
                      <a href="#">Climate Tech</a>
                      <a href="#">Customers</a>
                      <a href="#">Protfolio</a>
                      <a href="#">Testimonials</a>
                      <a href="#">Featured Work</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Careers
                      <KeyboardArrowDownIcon />
                    </button>
                    <div className="content1">
                      <a href="#">WorkLife@EnactOn</a>
                      <a href="#">Open Positions/vacancies</a>
                      <a href="#">Apply For Job Now</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="dropbtn">
                      Company
                      <KeyboardArrowDownIcon />
                    </button>
                    <div className="content1">
                      <a href="#">About Us</a>
                      <a href="#">Our Infrastructure</a>
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
