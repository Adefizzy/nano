import React from 'react';
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
import Marquee from 'react-fast-marquee';
import Ticker from 'react-ticker';

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


const FAQLinkArray = [
  { text: 'Generals', isActive: true },
  { text: 'Offerings', isActive: false },
  { text: 'Deals', isActive: false },
];
const cartObj = [
  {
    image: img2,
    heading: 'Early Funding',
    message:
      'Very Early Round (pre-traction or family and friends round). Check size between $5-$15k',
  },
  {
    image: img3,
    heading: 'Advisory & Mentorship',
    message:
      'Very Early Round (pre-traction or family and friends round). Check size between $5-$15k',
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
    message:
      'Direct Intros to other founders and ecosystem players, Partners, Corporates, etc',
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
  const leftDivRef = React.useRef();

  React.useLayoutEffect(() => {
    const invisibleDivRefCurrent = invisibleDiv.current;
    window.addEventListener('scroll', () => {
      let perce =
        (invisibleDivRefCurrent.getBoundingClientRect().top /
          window.innerHeight) *
        100;
      console.log('real', perce);
      console.log('perce', 100 - perce);
      console.log('oppo', perce - 100);
      console.log(leftDivRef.current.getBoundingClientRect().right);
      console.log(leftDivRef.current.getBoundingClientRect().width);

      if (perce >= 99) {
        setMagicNumber(100 - perce);
        setOppoMagicNumber(perce - 100);
      }

      /*    setSecondDivPos(secondDivRef.current.getBoundingClientRect().top) */
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

  const onFAQClick = () => {};

  const FAQLinkList = FAQLink.map((item, index) => {
    return (
      <StyledLink isActive={item.isActive} onClick={onFAQClick}>
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

  const text = `
  - First, you would have to apply via our website. We typically go through every application and generally get back within 1-2 weeks
  If we are looking to move forward with you, we will invite you for a 30-45 minute call to learn more about you and what you're working on. About a week after this we will get back to you with our decision and possible next steps for on-boarding.
  Once you are on-boarded you will be set up with initial documentation and paired with an advisor. You'll discuss your plans with your advisor and set up bi-weekly 30 - 45 minute sessions for check-ins, progress updates, and advisory support. This can take between 4 to 12 weeks where we hope to get you ready for your next major phase.
`;

  return (
    <>
      {/* START OF FIRST SEGMENT */}
      <Row>
        <StyledHeaderCol sm={{ span: 24 }}>
          <StyledHeader>
            <div>
              <StyledLogo src={logo} alt='logo' />
              <StyledHeaderTextDiv>
                <h1>
                  <span>Nanō</span>traction
                </h1>
                <p>
                  <span>Yes, We’re ridiculously early</span> - before traction -
                  before product market fit
                </p>
              </StyledHeaderTextDiv>
              <StyledArrow src={arrowDown} />
            </div>
          </StyledHeader>
          <div style={{ height: 'fit-content', marginTop: '100px' }}>
            <Ticker offset='run-in' speed={15}>
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
        <Col sm={{ span: 24 }}>
          <StyledSecondDiv animate={secondDivPos <= 0}>
            <div>
              <h4>WHO WE ARE</h4>
              <div>
                <h1>If you’re feeling formal, call us the</h1>
                <h1>“super early -stage venture capital firm”</h1>
                <p>
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
        <Col span={12}>
          <StyledThirdSegment
            ref={leftDivRef}
            style={{ transform: `translateX(${magicNumber}%)` }}
            animate={secondDivPos <= 0}
          >
            <div>
              <div>
                <h5>Our DNA</h5>
                <h1>We’re Makers at Heart</h1>
              </div>
              <StyledHeartDiv>
                <StyledHeart src={heart} />
              </StyledHeartDiv>
            </div>
          </StyledThirdSegment>
        </Col>
        <Col span={12}>
          <StyledThirdSegment2
            style={{ transform: `translateX(${oppoMagicNumber}%)` }}
          >
            <div>
              <div>
                <h5 style={{ visibility: 'hidden' }}>Our DNA</h5>
                <h1>Game-changing Execution Strategies</h1>
              </div>
              <StyledHeartDiv style={{ visibility: 'hidden' }}>
                <StyledHeart src={heart} />
              </StyledHeartDiv>
            </div>
          </StyledThirdSegment2>
        </Col>
      </Row>
      {/* INVISIBLE */}
      <Row>
        <StyledInvisible span={24}></StyledInvisible>
      </Row>
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
                    Apply to
                    <br /> <span>Nanotraction</span>
                  </h1>
                  <p>
                    We also help founders build the credibility they need and
                    much more.{' '}
                  </p>
                  <StyledArrowLeft src={arrowLeft} />
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
                <StyledPanelText>{text}</StyledPanelText>
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
                <StyledPanelText>{text}</StyledPanelText>
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
                <StyledPanelText>{text}</StyledPanelText>
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
                <StyledFooterLink>Home</StyledFooterLink>
                <StyledFooterLink>About us</StyledFooterLink>
                <StyledFooterLogo src={logo_w} />
                <StyledFooterLink>Apply now</StyledFooterLink>
                <StyledFooterLink>Contacts</StyledFooterLink>
              </StyledFooterLinkDiv>
              <StyledUnderLine />
              <StyledContactDiv>
                <p>
                  <span>For other questions, you can email us directly at</span>{' '}
                  hello@nanotraction.co <span>or</span> nanotraction@gmail.com
                </p>
                <StyledSocialMedias>
                  <StyledSocial src={facebook} />
                  <StyledSocial src={twitter} />
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
  background-size: 30vw 30vw;
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
  width: 2.5vw;
`;

const StyledHeaderTextDiv = styled.div`
  width: 100%;
  text-align: center;
  color: #03284a;
  font-family: recoleta;
  flex-basis: 50%;

  & span {
    font-weight: 900;
  }

  & h1 {
    font-weight: 400;
    font-size: 173px;
    margin-bottom: 0px;
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
`;

const StyledArrow = styled.img`
  width: 2vw;
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
`;

// SECOND DIV

const StyledSecondDiv = styled.div`
  color: #ffe6d2;
  background-color: #091348;
  height: 100vh;
  text-align: center;
  display: grid;
  place-items: center;
  /*  position:${(props) => (props.animate ? 'fixed' : 'relative')};
  top:${(props) => props.animate && '0px'};
  z-index: -1; */
  width: 100%;

  & > div {
    height: 70%;
    ${getCenter({
      flexDirection: 'column',
      justifyContent: 'space-between',
    })};

    & div {
      & h1 {
        font-weight: 900;
        font-family: recoleta;
        font-size: 60px;
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
        width: 70vw;
        margin: 50px auto 0 auto;
        text-align: center;
      }
    }
  }

  & h4 {
    margin: 0;
    color: #ffe6d2;
  }
`;

const StyledButton = styled.button`
  background-color: #ffe6d2;
  color: #161c2d;
  border: none;
  /*  width: 20vw; */
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13px;
  width: 16vw;
  font-family: ${fontFamily.inter};
  font-weight: 700;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const StyledIoIosText = styled(IoIosText)`
  margin-right: 15px;
  font-size: 30px;
  transform: rotateY(180deg);
`;

// ThIRD SEGMENT
const StyledThirdSegment = styled.div`
  background-color: #eef6fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 50vw;

  /* left: ${(props) => props.animate && '50vw'}; */

  & > div {
    text-align: center;
    height: 80vh;
    margin-top: auto;
    overflow: hidden;

    & div:first-child {
      height: 35%;
      ${getCenter({
        flexDirection: 'column',
        justifyContent: 'space-between',
      })};
    }

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
  }
`;

const StyledThirdSegment2 = styled.div`
  background-image: url(${bg1});
  background-position: center;
  background-size: contain;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  width: 50vw;

  & > div {
    text-align: center;
    height: 80vh;
    margin-top: auto;
    overflow: hidden;

    & div:first-child {
      height: 35%;
      ${getCenter({
        flexDirection: 'column',
        justifyContent: 'space-between',
      })};
    }

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
  }
`;

const StyledHeart = styled.img`
  width: 55%;
  height: auto;
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
`;

const StyledCard = styled.div`
  flex-basis: 32%;
  background-color: #15263c;
  border-radius: 20px;
  padding: 30px 37px 30px 37px;
  text-align: left;
  color: #fff;
  height: 65vh;
  margin-bottom: 20px;
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
    font-size: 18px;
    color: #707f90;
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
  flex-basis: 32%;
  background-image: url(${img7});
  background-position: center;
  background-size: cover;
  background-color: #ebf1c7;
  border-radius: 20px;
  padding: 30px 37px 30px 37px;
  text-align: left;
  color: #fff;
  height: 65vh;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;

  & div {
    & > h1 {
      font-family: recoleta;
      font-size: 40px;
      font-weight: 400;
      margin-top: auto;

      & span {
        font-weight: 900;
      }
    }

    & p {
      font-size: 18px;
      font-weight: 400;
      font-family: ${fontFamily.inter};
      color: #707973;
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
    width: 60%;
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

  & p {
    color: #091348;
    font-family: ${fontFamily.inter};
    font-size: 16px;
    margin: 0px;
    font-weight: 500;
  }
`;

const StyledPanel = styled(Panel)`
  background-color: ${(props) => (props.isActive ? '#fff' : 'transparent')};
  border-radius: 20px !important;
  margin-bottom: ${(props) => (props.isActive ? '10px' : '0')};
`;

const StyledPanelHeader = styled.h1`
  font-family: recoleta;
  font-size: 18px;
  color: #272e35;
`;

const StyledPanelText = styled.p`
  font-family: ${fontFamily.inter};
  font-size: 16px;
  font-weight: 400;
  color: #6e757c;
`;
const StyledFooter = styled.div`
  width: 100%;
  background-color: #0c1b2d;
  padding-top: 102px;
  padding-bottom: 40px;

  & > div {
    width: 80%;
    margin: 0 auto;
  }
`;
const StyledFooterLinkDiv = styled.div`
  ${getCenter({ justifyContent: 'space-between' })};
  width: 65%;
  margin: 0 auto;
`;

const StyledFooterLink = styled.a`
  font-family: ${fontFamily.inter};
  font-size: 16px;
  color: #fff;
  opacity: 0.5;
  /*   margin-right: 20px; */

  &:hover {
    color: #fff;
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
  ${getCenter({ justifyContent: 'space-between' })};
  width: 80%;
  margin: 0 auto;

  & p {
    margin-bottom: 0px;
    color: #fff;

    & span {
      opacity: 0.3;
    }
  }
`;

const StyledSocialMedias = styled.div`
  ${getCenter({ justifyContent: 'flex-end' })};
  width: fit-content;
`;

const StyledSocial = styled.img`
  width: 7%;
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
`;
export default App;
