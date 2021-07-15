import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { Row, Col, Collapse } from 'antd';
import { getCenter } from './utils/getCenter';
import arrowDown from './images/arrowDown.png';
import headerImage from './images/headerImage.png';
import logo from './images/logo.png';
import { fontFamily } from './globalAsset/fontFamily';
import { IoIosText } from 'react-icons/io';
import bg1 from './images/bg1.png';
import heart from './images/heart.png';
import img6 from './images/img6.png';
import img1 from './images/img1.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img2 from './images/img2.png';
import img7 from './images/img7.png';
import arrowLeft from './images/arrowLeft.png';
import FAQ from './images/FAQ.png';
import logo_w from './images/logo_w.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import insta from './images/insta.png';
import Ticker from 'react-ticker';
import { device } from './globalAsset/breakpoints';

const { Panel } = Collapse;

const slidingText = [
  'Innovation',
  'Grit',
  'Startups',
  'Ideas',
  'Execution',
  'Advisory',
  'Business models',
  'Customers',
  'Sales',
  'Support',
  'Network',
  'Investors',
  'Pre-seed',
  'Growth',
  'Market Validation',
];

const text = (
  <div>
    <ul>
      <li >Fill a form</li>
      <li>Get scheduled for an interview</li>
      <li>Sign terms and commit to a plan designed by you and agreed by us</li>
      <li>Bi-weekly check-ins for progress monitoring/updates, advisory discussions, and support (8 to 12 weeks)</li>
      <li>Other details</li>
      <ul>
        <li>No major traction needed</li>
        <li>No mandatory demo day</li>
      </ul>
    </ul>
  </div>
)

const text2 = `
  - First, you would have to apply via our website. We typically go through every application and generally get back within 1-2 weeks
  If we are looking to move forward with you, we will invite you for a 30-45 minute call to learn more about you and what you're working on. About a week after this we will get back to you with our decision and possible next steps for on-boarding.
  Once you are on-boarded you will be set up with initial documentation and paired with an advisor. You'll discuss your plans with your advisor and set up bi-weekly 30 - 45 minute sessions for check-ins, progress updates, and advisory support. This can take between 4 to 12 weeks where we hope to get you ready for your next major phase.
`;

const FAQLinkArray = [
  { text: 'General', isActive: true , description: text2},
  { text: 'Process', isActive: false , description: text},
  { text: 'Portfolio', isActive: false },
];
const cartObj = [
  {
    image: img2,
    heading: 'Early Funding',
    message:
      /* 'Very Early Round (pre-traction or family and friends round). Check size between $5-$15k', */
      'Very Early Round (pre-traction or family and friends round). Check sizes up to $15k'
  },
  {
    image: img3,
    heading: 'Advisory & Mentorship',
    message: 'Hands-on guidance around product, people & operations, tech, business, marketing, customer acquisition & support, intro to legal experts and service providers, etc'
      /* 'Very Early Round (pre-traction or family and friends round). Check size between $5-$15k', */
  },
  {
    image: img4,
    heading: 'Investor Readiness',
    message:
      'Review Decks & Fundraising Strategy, Investor Relations, Financials, Registration (local and International), Term Sheets, Valuations etc, Direct intro to pre-seed or seed investors',
  },
  {
    image: img5,
    heading: 'Community & Visibility',
    message: 'Direct intros to other founders and ecosystem players, partners, corporates, etc'
     /*  'Direct Intros to other founders and ecosystem players, Partners, Corporates, etc', */
  },
  {
    image: img1,
    heading: 'Potential Users',
    message:
      'Beta testers, early users/customers, test groups to give you quality product/service feedback and suggestions',
  },
];

function App() {
  const [FAQLink, setFAQLink] = React.useState(FAQLinkArray);
  const [activePanel, setActivePanel] = React.useState([]);
  const secondDivRef = React.useRef();
  const invisibleDiv = React.useRef();
  const [magicNumber, setMagicNumber] = React.useState(-100);
  const [oppoMagicNumber, setOppoMagicNumber] = React.useState(100);
  const [secondDivPos, setSecondDivPos] = React.useState(
    secondDivRef?.current?.getBoundingClientRect()?.top
  );
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const leftDivRef = React.useRef();

  React.useLayoutEffect(() => {
    const invisibleDivRefCurrent = invisibleDiv.current;
    window.addEventListener('scroll', () => {
      let perce =
        (invisibleDivRefCurrent.getBoundingClientRect().top /
          window.innerHeight) *
        100;

      if (perce >= 99) {
        setMagicNumber(100 - perce);
        setOppoMagicNumber(perce - 100);
      }
    });

    return () =>
      window.removeEventListener('scroll', () => {
        let perce =
          (invisibleDivRefCurrent.getBoundingClientRect().top /
            window.innerHeight) *
          100;

        if (perce >= 99) {
          setMagicNumber(100 - perce);
          setOppoMagicNumber(perce - 100);
        }
      });
  }, []);

  useEffect(() => {
    window.addEventListener('load', () => {
      setScreenWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener('load', () => {
        setScreenWidth(window.innerWidth);
      });
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      });
  });

  const onFAQClick = item => () => {
    const updatedFAQ =  [...FAQLink].map(faq => {
      if(faq.text === item.text){
        faq.isActive = true;
        return faq;
      }

      faq.isActive = false;
      return faq;
    });

    setFAQLink(updatedFAQ);
  };

  const FAQLinkList = FAQLink.map((item, index) => {
    return (
      <StyledLink isActive={item.isActive} onClick={onFAQClick(item)}>
        <p>{item.text}</p>
      </StyledLink>
    );
  });

  const cardList = cartObj.map((item, index) => {
    return (
      <Card
        key={index}
        number={`0${index + 1}`}
        image={item.image}
        heading={item.heading}
        message={item.message}
      />
    );
  });

  const onChange = (...args) => {
    setActivePanel(args);
  };

  const text2 = `
  - First, you would have to apply via our website. We typically go through every application and generally get back within 1-2 weeks
  If we are looking to move forward with you, we will invite you for a 30-45 minute call to learn more about you and what you're working on. About a week after this we will get back to you with our decision and possible next steps for on-boarding.
  Once you are on-boarded you will be set up with initial documentation and paired with an advisor. You'll discuss your plans with your advisor and set up bi-weekly 30 - 45 minute sessions for check-ins, progress updates, and advisory support. This can take between 4 to 12 weeks where we hope to get you ready for your next major phase.
`;

const text3 ='Fill a form <br/> - Get scheduled for an interview <br/> -Sign terms and commit to a plan designed by you and agreed by us <br/> - Bi-weekly check-ins for progress monitoring/updates, advisory discussions, and support (8 to 12 weeks) <br/> - Other details <br/>  - No major traction needed <br/> - No mandatory demo day'

  const slidingTextArr = slidingText.map((item, index) => {
    return <span>{item}</span>;
  });
  return (
    <>
      {/* START OF FIRST SEGMENT */}
      <Row>
        <StyledHeaderCol sm={{ span: 24 }} id='home'>
          <StyledHeader>
            <div>
              <StyledLogo src={logo} alt='logo' />
              <StyledHeaderTextDiv>
                <h1>
                  <span>Nanō</span>traction
                </h1>
                <p>
                  <span>Yes, We’re super early</span> - before traction -
                  before product market fit
                </p>
              </StyledHeaderTextDiv>
              <StyledArrow src={arrowDown} />
            </div>
          </StyledHeader>
          <div style={{ marginTop: '100px' }}>
            <Ticker offset='run-in' speed={10} mode='smooth'>
              {({ index }) => (
                <>
                  <StyledSlideText>
                    Innovation | Grit | Startups | Ideas | Execution | Advisory
                    | Business models | Customers | Sales | Support | Network |
                    Investors | Pre-seed | Growth | Market Validation
                  </StyledSlideText>
                </>
              )}
            </Ticker>
          </div>
        </StyledHeaderCol>
      </Row>
      {/* END OF FIRST SEGMENT */}
      {/* START OF SECOND SEGMENT */}
      <Row ref={secondDivRef}>
        <Col xs={{ span: 24 }}>
          <StyledSecondDiv id='AboutUs'>
            <div>
              <h4>WHO WE ARE</h4>
              <div>
                <h1>If you’re feeling formal, call us the</h1>
                <h1>“super early-stage angel investors and advisors”</h1>
                {/* <h1>
                  If you’re feeling formal, call us the “super early-stage angel investors and advisors”
                </h1> */}
                <p style={{marginBottom: '25px'}}>
                  Our aim is to help and guide you to better articulate, test
                  and validate your idea, get better traction and get you on the
                  right track faster in order to get the best early/seed stage
                  investors to join your journey.
                </p>
              </div>

              <StyledButton>
                <StyledIoIosText />
                Let's Talk Now
              </StyledButton>
            </div>
          </StyledSecondDiv>
        </Col>
      </Row>
      {/* END OF SECOND SEGMENT */}
      {/* START OF THIRD SEGMENT */}
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <StyledThirdSegment
            ref={leftDivRef}
            style={{ transform: screenWidth >= 1024 && `translateX(${magicNumber}%)` }}
            animate={secondDivPos <= 0}
          >
            <h5>Our DNA</h5>
                <h1>We’re Makers at Heart</h1>
                <h5 style={{visibility: 'hidden'}}>Our DNA</h5>
                <h5 style={{visibility: 'hidden'}}>Our DNA</h5>
           {/*  <div> 
              <div>
                
              </div>
              <StyledHeartDiv>
                <StyledHeart src={heart} />
              </StyledHeartDiv> 
            </div> */}
          </StyledThirdSegment>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <StyledThirdSegment2
            style={{ transform: screenWidth >= 1024 && `translateX(${oppoMagicNumber}%)` }}
          >

                <h5 style={{ visibility: 'hidden' }}>Our DNA</h5>
                <h1>Game-changing Execution Strategies</h1>   
                <h5 style={{ visibility: 'hidden' }}>Our DNA</h5>
                <h5 style={{ visibility: 'hidden' }}>Our DNA</h5>  
           {/*  <div>
              <div>
               
              </div>
              <StyledHeartDiv style={{ visibility: 'hidden' }}>
                <StyledHeart src={heart} />
              </StyledHeartDiv>
            </div> */}
          </StyledThirdSegment2>
        </Col>
      </Row>
      {/* INVISIBLE */}
      {screenWidth >= 1024 && (
        <Row>
          <StyledInvisible span={24}></StyledInvisible>
        </Row>
      )}
      {/* FOURTH SEGMENT */}
      <Row>
        <Col ref={invisibleDiv} span={24}>
          <StyledFourthSegment>
            <h5>WHAT WE DO</h5>
            <h1>
              We don’t work like a<br /> traditional VC firm.{' '}
              <span>On Purpose.</span>
            </h1>
            <div>
              {cardList}
              <SpecialCard>
                <div>
                  <h1>
                    {/* Apply to
                    <br /> <span>Nanotraction</span> */}
                     Get Early Access<br/>to <span>Nanotraction</span>
                  </h1>
                  <p>
                    {/* We also help founders build the credibility they need and
                    much more.{' '} */}
                   We help founders build the credibility they need and much more
                  </p>
                  <a  href='https://www.notion.so/yewiedewie/Early-Access-Details-27ff09ad49a54d35997ea0cc995eb83a' ><StyledArrowLeft  src={arrowLeft} /></a>
                </div>
              </SpecialCard>
            </div>
          </StyledFourthSegment>
        </Col>
      </Row>
      {/* FIFT SEGMENT */}
      <Row>
        <Col span={24}>
          <StyledFiftSegment>
            <div>
              <StyledBoomImageDiv>
                <StyledBoomImage src={FAQ} />
              </StyledBoomImageDiv>
              <h2>Frequently asked questions</h2>
              <StyledFQALinkDiv>{FAQLinkList}</StyledFQALinkDiv>
            </div>
            <Collapse
              onChange={onChange}
              defaultActiveKey={['1']}
              ghost
              expandIconPosition='right'
            >
              <StyledPanel
                isActive={activePanel.some((item) => item === 1)}
                header={<StyledPanelHeader>How do I apply?</StyledPanelHeader>}
                key='1'
              >
                <StyledPanelText>{FAQLink.find(item => item.isActive).description}</StyledPanelText>
              </StyledPanel>
              <StyledPanel
                isActive={activePanel.some((item) => item === 2)}
                header={
                  <StyledPanelHeader>
                    Which types of ideas do you support and fund?
                  </StyledPanelHeader>
                }
                key='2'
              >
                <StyledPanelText>{FAQLink.find(item => item.isActive).description}</StyledPanelText>
              </StyledPanel>
              <StyledPanel
                isActive={activePanel.some((item) => item === 3)}
                header={
                  <StyledPanelHeader>
                    How does Nanotraction work?
                  </StyledPanelHeader>
                }
                key='3'
              >
                <StyledPanelText>{FAQLink.find(item => item.isActive).description}</StyledPanelText>
              </StyledPanel>
              <StyledPanel
                isActive={activePanel.some((item) => item === 4)}
                header={
                  <StyledPanelHeader>
                    What’s the execution strategy for startups/team who joins
                    Nanotraction?
                  </StyledPanelHeader>
                }
                key='4'
              >
                <StyledPanelText>{text}</StyledPanelText>
              </StyledPanel>
            </Collapse>
          </StyledFiftSegment>
        </Col>
      </Row>
      {/* FOOTER */}
      <Row>
        <Col span={24}>
          <StyledFooter>
            <div>
              <StyledFooterLinkDiv>
                <StyledFooterLink href='#home'>Home</StyledFooterLink>
                <StyledFooterLink href='#AboutUs'>About us</StyledFooterLink>
                <StyledFooterLogo src={logo_w} />
                <StyledFooterLink>Apply now</StyledFooterLink>
                <StyledFooterLink>Contacts</StyledFooterLink>
              </StyledFooterLinkDiv>
              <StyledUnderLine />
              <StyledContactDiv>
                <p>
                  <span>For other questions, you can email us directly at </span>{' '}
                  Email: or nanotraction@gmail.com <span>or</span> hello@nanotraction.co
                </p>
                <StyledSocialMedias>
                  {/* <StyledSocial src={facebook} /> */}
                  <a href='https://twitter.com/nanotraction' rel="noopener noreferrer" target='_blank'><StyledSocial src={twitter} /></a>
                  <StyledSocial src={insta} />
                </StyledSocialMedias>
              </StyledContactDiv>
            </div>
          </StyledFooter>
        </Col>
      </Row>
    </>
  );
}

const StyledInvisible = styled(Col)`
  background-color: transparent;
  height: 100vh;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <StyledCardHeader>
        <p>{props.number}</p>
        <StyledCardImageDiv>
          <StyledCardImage src={props.image} />
        </StyledCardImageDiv>
      </StyledCardHeader>
      <StyledCardFooter>
        <h2>{props.heading}</h2>
        <p>{props.message}</p>
      </StyledCardFooter>
    </StyledCard>
  );
};

const StyledHeaderCol = styled(Col)`
  background-color: #ebf1c7;
  min-height: 100vh;
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px 300px;

  @media ${device.laptop} {
    background-size: 30vw 30vw;
  }
`;
const StyledHeader = styled.header`
  width: 100%;
  display: grid;
  place-items: center;
  height: 80vh;

  & > div:first-child {
    height: 80vh;
    margin-top: 50px;
    ${getCenter({
      flexDirection: 'column',
      justifyContent: 'space-between',
    })};
  }
`;

const StyledLogo = styled.img`
  width: 40px;

  @media ${device.laptop} {
    width: 2.5vw;
  }
`;

const StyledHeaderTextDiv = styled.div`
  width: 100%;
  text-align: left;
  color: #03284a;
  font-family: recoleta;
  flex-basis: 50%;
  word-wrap: break-word;
  word-break: break-word;
  padding: 0px 20px;
  flex: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & span {
    font-weight: 900;
    display: block;
  }

  & h1 {
    font-weight: 400;
    font-size: 90px;
    line-height: 80px;

    margin-bottom: 20px;
    margin-top: 0px;
    color: #03284a;
  }

  & p {
    margin-top: 0px;
    font-size: 23px;
    font-weight: 400;

    &span {
      font-weight: bolder;
    }
  }

  @media ${device.tablet} {
    & span {
      display: inline;
    }
  }

  @media ${device.laptop} {
    text-align: center;
    padding: 0px 0px;
    & h1 {
      font-size: 173px;
      line-height: normal;
      margin-bottom: 0px;
    }

    & span {
      display: inline;
    }
  }
`;

const StyledArrow = styled.img`
  width: 20px;
  position: relative;

  animation-name: arrowBounce;
  animation-fill-mode: forwards;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes arrowBounce {
    0% {
      top: 0px;
    }

    25% {
      top: 10px;
    }

    50% {
      top: 20px;
    }

    100% {
      top: 0px;
    }
  }

  @media ${device.laptop} {
    width: 2vw;
  }
`;

// SECOND DIV

const StyledSecondDiv = styled.div`
  color: #ffe6d2;
  background-color: #091348;
  min-height: 100vh;
  text-align: left;
  display: grid;
  place-items: center;
  width: 100%;
  padding-top: 40px;

  & > div {
    min-height: 70%;
    ${getCenter({
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'no-wrap',
    })};

    & div {
      & h1 {
        font-weight: 900;
        font-family: recoleta;
        font-size: 30px;
        width: 80vw;
        margin: 0px;
        padding: 0px;
        color: #ffe6d2;
        word-wrap: normal;
      }

      & p {
        font-family: ${fontFamily.inter};
        font-weight: 400;
        font-size: 24px;
        width: 90vw;
        margin: 50px auto 0 auto;
        text-align: left;
      }
    }
  }

  & h4 {
    margin: 0;
    color: #ffe6d2;
    font-size: 13px;
    margin-bottom: 30px;
  }

  @media ${device.laptop} {
    text-align: center;
    padding-top: 0px;
    & > div {
      height: 70%;
      & div {
        & h1 {
          font-size: 4.2vw;
        }

        & p {
          font-family: ${fontFamily.inter};
          font-weight: 400;
          font-size: 1.8vw;
          width: 70vw;
          margin: 50px auto 0 auto;
          text-align: center;
        }
      }
    }
    & h4 {
      margin: 0;
      color: #ffe6d2;
      font-size: 0.9vw;
    }
  }
`;

const StyledButton = styled.button`
  background-color: #ffe6d2;
  color: #161c2d;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13px;
  width: 100%;
  font-family: ${fontFamily.inter};
  font-weight: 700;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 40px;

  &:focus {
    outline: none;
  }

  @media ${device.tablet} {
    width: 40vw;
  }
  @media ${device.laptop} {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    width: 16vw;
    font-size: 0.9vw;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const StyledIoIosText = styled(IoIosText)`
  margin-right: 15px;
  font-size: 30px;
  transform: rotateY(180deg);
`;

// ThIRD SEGMENT
const StyledThirdSegment = styled.div`
  background-image: url(${heart});
  background-repeat: no-repeat;
  background-position: center 150%;
  background-color: #eef6fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  text-align: center;
  padding-top: 10vh;
  

  & h5 {
      font-family: ${fontFamily.inter};
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
      color: #141003;

    }

    & h1 {
      font-family: recoleta;
      font-size: 58px;
      color: #141003;
      font-weight: 700;
      width: 55%;
      margin: 0 auto;
      line-height: 72px;
    }
  @media ${device.laptop} {
    width: 50vw;
    position: fixed;
    top: 0;
    & > div {
      & div:first-child {
        flex-wrap: wrap;
      }
    }
  }
`;

const StyledThirdSegment2 = styled(StyledThirdSegment)`
  background-image: url(${bg1});
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  & h5 {
      font-family: ${fontFamily.inter};
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 700;
      color: #141003;
    }

    & h1 {
      font-family: recoleta;
      font-size: 58px;
      color: #fff;
      font-weight: 700;
      width: 90%;
      margin: 0 auto;
      line-height: 72px;
    }

 

  @media ${device.laptop} {
    position: fixed;
    top: 0;
    width: 50vw;

    & > div {
      & div:first-child {
        flex-wrap: wrap;
      }
    }
  }
`;

const StyledHeart = styled.img`
  width: 80%;
  height: auto;

  @media ${device.tablet} {
    width: 55%;
  }
`;

const StyledHeartDiv = styled.div`
  height: 70vh;
  ${getCenter({ flexDirection: 'column', justifyContent: 'flex-end' })}
`;

// FOURTH SEGMENT

const StyledFourthSegment = styled.div`
  background-image: url(${img6});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #0c1b2e;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: 134px 0px;

  & > h1 {
    font-family: recoleta;
    font-weight: 900;
    color: #fff;
    font-size: 54px;
    line-height: 72px;
    margin: 0 auto;
    margin-left: 10px;
    margin-right: 10px;

    & span {
      color: #d8fbdf;
    }
  }

  & > h5 {
    color: #fff;
    font-family: ${fontFamily.inter};
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 48px;
  }

  & > div {
    ${getCenter({ justifyContent: 'space-between' })};
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
  }

  @media ${device.laptop} {
    & > h1 {
      font-size: 3.8vw;
      margin-left: 0px;
      margin-right: 0px;
    }

    & > h5 {
      font-size: 1.1vw;
    }
  }
`;

const StyledCard = styled.div`
  flex-basis: 100%;
  background-color: #15263c;
  border-radius: 20px;
  padding: 30px 15px 30px 20px;
  text-align: left;
  color: #fff;
  height: 70vh;
  overflow: auto;

  margin-bottom: 20px;

  @media ${device.tablet} {
    padding: 30px 37px 30px 37px;
  }

  @media ${device.laptop} {
    padding: 30px 37px 30px 37px;
    flex-basis: 32%;
    height: 65vh;
  }
`;

const StyledCardHeader = styled.div`
  height: 40%;

  & > p:first-child {
    font-family: recoleta;
    font-weight: 400;
    font-size: 30px;
    color: #fff;
    margin: 10px;
  }

  @media ${device.laptop} {
    & > p:first-child {
      font-size: 2vw;
    }
  }
`;
const StyledCardFooter = styled.div`
  height: 40%;
  padding-top: 40px;

  & > h2 {
    font-family: recoleta;
    font-size: 24px;
    color: #fff;
  }

  & p {
    font-family: ${fontFamily.inter};
    font-weight: 400;
    font-size: 16px;
    color: #707f90;
  }

  @media ${device.laptop} {
    & > h2 {
      font-size: 1.6vw;
    }

    & p {
      font-size: 1.25vw;
    }
  }
`;
const StyledCardImageDiv = styled.div`
  height: 80%;
`;
const StyledCardImage = styled.img`
  max-width: 88%;
  max-height: 88%;
  object-fit: contain;
`;

const SpecialCard = styled.div`
  flex-basis: 100%;
  background-image: url(${img7});
  background-position: center;
  background-size: cover;
  background-color: #ebf1c7;
  border-radius: 20px;
  padding: 30px 15px 30px 20px;
  text-align: left;
  color: #fff;
  height: 70vh;
 /*  margin: 0 auto; */
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;

  & div {
    & > h1 {
      font-family: recoleta;
      font-size: 32px;
      font-weight: 400;
      margin-top: auto;

      & span {
        font-weight: 900;
      }
    }

    & p {
      font-size: 16px;
      font-weight: 400;
      font-family: ${fontFamily.inter};
      color: #707973;
    }
  }

  @media ${device.tablet} {
    padding: 30px 37px 30px 37px;
  }

  @media ${device.laptop} {
    height: 65vh;
    flex-basis: 32%;
    padding: 30px 37px 30px 37px;

    & div {
      & > h1 {
        font-size: 2.7vw;
      }

      & p {
        font-size: 1.25vw;
      }
    }
  }
`;

const StyledArrowLeft = styled.img`
  width: 20%;
  margin-top: 40px;
`;

// FIFT SEGMENT
const StyledFiftSegment = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #edf6fe;
  padding-top: 60px;

  & > div {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 30px;

    & h2 {
      font-family: recoleta;
      font-weight: 700;
      font-size: 40px;
      color: #0c1b2d;
      text-align: center;
      margin-top: 30px;
    }
  }

  @media ${device.laptop} {
    & > div {
      width: 60%;
    }
  }
`;
const StyledBoomImage = styled.img`
  width: 30%;
`;
const StyledBoomImageDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;
const StyledFQALinkDiv = styled.div`
  ${getCenter()};
  margin-bottom: 20px;
`;
const StyledLink = styled.div`
  background-color: ${(props) => (props.isActive ? '#fff' : 'transparent')};
  border-radius: 40px;
  padding: 8px 20px;
  cursor: pointer;

  & p {
    color: #091348;
    font-family: ${fontFamily.inter};
    font-size: 16px;
    margin: 0px;
    font-weight: 500;
  }

  @media ${device.laptop} {
    font-size: 1.1vw;
  }
`;

const StyledPanel = styled(Panel)`
  background-color: ${(props) => (props.isActive ? '#fff' : 'transparent')};
  border-radius: 20px !important;
  margin-bottom: ${(props) => (props.isActive ? '10px' : '0')};
  margin-left: 10px;
  margin-right: 10px;

  @media ${device.laptop} {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const StyledPanelHeader = styled.h1`
  font-family: recoleta;
  font-size: 18px;
  color: #272e35;

  @media ${device.laptop} {
    font-size: 1.25vw;
  }
`;

const StyledPanelText = styled.p`
  font-family: ${fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  color: #6e757c;

  @media ${device.laptop} {
    font-size: 1.1vw;
  }
`;

// FOOTER
const StyledFooter = styled.div`
  width: 100%;
  background-color: #0c1b2d;
  padding-top: 102px;
  padding-bottom: 40px;

  & > div {
    width: 100%;
    margin: 0 auto;
  }

  @media ${device.laptop} {
    & > div {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
const StyledFooterLinkDiv = styled.div`
  ${getCenter({ justifyContent: 'space-between', flexDirection: 'column' })};
  width: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    ${getCenter({ justifyContent: 'space-between' })};
    width: 65%;
  }
`;

const StyledFooterLink = styled.a`
  font-family: ${fontFamily.inter};
  font-size: 16px;
  color: #fff;
  opacity: 0.5;
  margin-bottom: 10px;
  /*   margin-right: 20px; */

  &:hover {
    color: #fff;
  }

  @media ${device.laptop} {
    font-size: 1.1vw;
    margin-bottom: 0px;
  }
`;

const StyledFooterLogo = styled.img`
  width: 9%;
`;

const StyledUnderLine = styled.div`
  border-bottom: 1px solid #fff;
  opacity: 0.2;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const StyledContactDiv = styled.div`
  ${getCenter({ justifyContent: 'space-between', flexDirection: 'column' })};
  width: 100%;
  margin: 0 auto;
 /* border: 1px solid red; */

  & p {
    margin-bottom: 10px;
    color: #fff;
    text-align: center;
    font-size: 14px;

    & span {
      opacity: 0.3;
    }
  }

  @media ${device.laptop} {
    /* ${getCenter({ justifyContent: 'space-between' })}; */
    width: 80%;

    & p {
      margin-bottom: 0px;
      text-align: center;

      & span {
        opacity: 0.3;
      }
    }
  }
`;

const StyledSocialMedias = styled.div`
  /* ${getCenter()}; */
  /* width: fit-content; */
  margin-top: 20px;
  text-align: center;

  @media ${device.laptop} {
    /* ${getCenter({ justifyContent: 'flex-end' })}; */
  }

  & a {
    margin-left: 20px;
  }
`;

const StyledSocial = styled.img`
   width: 10%;
  margin-left: 20px;

  &:first-child {
    margin-left: 0px;
  }
`;

const StyledMarquee = styled.marquee`
  font-family: recoleta;
  font-weight: 500;
  color: #0c1b2d;
  font-size: 18px;

  &:hover {
    animation-play-state: paused;
  }

  & span {
    margin-right: 10px;
  }

  & p {
    display: inline;
    margin-right: 10px;
  }
`;

const StyledSlideText = styled.p`
  font-family: recoleta;
  font-weight: 500;
  color: #0c1b2d;
  font-size: 18px;
  width: 100%;
  white-space: nowrap;
`;
export default App;
