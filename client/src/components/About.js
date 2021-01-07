import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    paddingLeft: 75,
    paddingTop: 20,
    textAlign: "center",
    minHeight: 100,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Rotate1 = styled.rect`
  fill: #3f3d56;
  transition: ease-in-out 2s;
`;
const Rotate2 = styled.rect`
  fill: #6c63ff;
  transition: ease-in-out 2s;
`;

const Shape1 = styled.rect`
  transition: ease-in-out 1s;
`;
const Shape2 = styled.circle`
  transition: ease-in-out 1s;
`;

const Flash = styled.circle`
  transition: ease-in-out 0.5s;
`;

const Background1 = styled.div({
  [`:hover ${Rotate1},:hover ${Rotate2}`]: {
    transform: "translate(10px,20px) rotate(-360deg)",
  },
  [`:hover ${Shape1},:hover ${Shape2}`]: {
    opacity: 0,
  },
  [`:hover ${Flash}`]: {
    fill: "white",
    r: 20,
  },
});

const Frame0 = styled.rect`
  transition: 1s ease-in-out;
`;
const Frame1 = styled.path`
  transition: 1s ease-in-out;
`;

const Frame2 = styled.polygon`
  transition: 1s ease-in-out;
`;
const Frame3 = styled.circle`
  transition: 1s ease-in-out;
`;

const Frame4 = styled.rect`
  transition: 1s ease-in-out;
`;
const Frame5 = styled.path`
  transition: 1s ease-in-out;
`;

const Frame6 = styled.polygon`
  transition: 1s ease-in-out;
`;
const Frame7 = styled.circle`
  transition: 1s ease-in-out;
`;

const Background2 = styled.div({
  [`:hover ${Frame1},:hover ${Frame3},:hover ${Frame0}`]: {
    transform: "translate(-160px,120px)",
  },
  [`:hover ${Frame2}`]: {
    transform: "translate(0px,250px)",
  },
  [`:hover ${Frame4},:hover ${Frame7},:hover ${Frame6}`]: {
    transform: "translate(-320px,0px)",
  },
  [`:hover ${Frame5}`]: {
    transform: "translate(-490px,-120px)",
  },
});

const Photo0 = styled.path`
  transition: 1s ease-in-out;
`;
const Photo1 = styled.circle`
  transition: 1s ease-in-out;
`;
const Photo4 = styled.circle`
  transition: 1s ease-in-out;
`;

const Photo2 = styled.path`
  transition: 1s ease-in-out;
`;
const Photo3 = styled.circle`
  transition: 1s ease-in-out;
`;
const Photo5 = styled.circle`
  transition: 1s ease-in-out;
`;
const Background3 = styled.div({
  [`:hover ${Photo0}`]: {
    transform: "scale(0.5) translate(320px,50px)",
  },
  [`:hover ${Photo1}`]: {
    r: 12,
    transform: "translate(-100px,15px)",
  },
  [`:hover ${Photo4}`]: {
    r: 3,
    transform: "translate(-112px,15px)",
  },
  [`:hover ${Photo2}`]: {
    transform: "scale(2) translate(-150px,-350px)",
  },
  [`:hover ${Photo3}`]: {
    r: 30,
    transform: "translate(120px,-45px)",
  },
  [`:hover ${Photo5}`]: {
    r: 7,
    transform: "translate(106px,-45px)",
  },
});

function About() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    console.log(typeof expanded);
  };

  return (
    <React.Fragment>
      <div className="header">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          height="200px"
          width="400px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.24 91.68"
        >
         
          <path
            className="cls-1"
            d="M323.43,378.32a45.92,45.92,0,0,0-32.6-32.42,45.87,45.87,0,0,0-29.33,25.64,45.74,45.74,0,0,1,14.57-3.69,21.75,21.75,0,0,1,2.57-.17h2.56a21.75,21.75,0,0,1,2.57.17,45.84,45.84,0,0,1,40.08,32.57A46.1,46.1,0,0,0,325,390.24h0A46,46,0,0,0,323.43,378.32Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-2"
            d="M279.16,344.4h0a45.83,45.83,0,0,0-44.27,33.92,45.9,45.9,0,0,0,26.8,30.46,45.48,45.48,0,0,1-3.88-15,21.75,21.75,0,0,1-.17-2.57V390h0v-1.28a21.75,21.75,0,0,1,.17-2.57,45.84,45.84,0,0,1,33-40.21A46.31,46.31,0,0,0,279.16,344.4Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-3"
            d="M318.85,389.32a46,46,0,0,0-20.51-17.78A45.74,45.74,0,0,1,302,386.11a21.75,21.75,0,0,1,.17,2.57V390h0v1.28a21.75,21.75,0,0,1-.17,2.57,45.85,45.85,0,0,1-34.82,40.69,46.12,46.12,0,0,0,12,1.58h0a45.83,45.83,0,0,0,44.69-35.66A46,46,0,0,0,318.85,389.32Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-4"
            d="M285.52,411.79a21.17,21.17,0,0,1-4.32.45h-2.56c-.18,0-.35,0-.52,0a45.85,45.85,0,0,1-43.23-33.89,46,46,0,0,0-1.57,11.92h0a45.84,45.84,0,0,0,33.89,44.26A45.9,45.9,0,0,0,298.53,408,45.62,45.62,0,0,1,285.52,411.79Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M281.2,367.68h-1.28c1.3,0,2.58.07,3.85.17A21.75,21.75,0,0,0,281.2,367.68Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M278.64,367.68a21.75,21.75,0,0,0-2.57.17c1.27-.1,2.55-.17,3.85-.17Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M257.64,388.68V390c0-1.3.07-2.58.17-3.85A21.75,21.75,0,0,0,257.64,388.68Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M257.64,391.24a21.75,21.75,0,0,0,.17,2.57c-.1-1.27-.17-2.55-.17-3.85Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M302.2,388.68a21.75,21.75,0,0,0-.17-2.57c.1,1.27.17,2.55.17,3.85Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M302.2,391.24V390c0,1.3-.07,2.58-.17,3.85A21.75,21.75,0,0,0,302.2,391.24Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M278.64,412.24h.52c-.35,0-.69,0-1,0C278.29,412.22,278.46,412.24,278.64,412.24Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-5"
            d="M281.2,412.24a21.17,21.17,0,0,0,4.32-.45,46,46,0,0,1-6.36.45Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-6"
            stroke="#005a57"
            strokeMiterlimit="10"
            d="M204.7,346.72c13.53,0,26.53-.16,39.5.18,2,.05,3.79,2.47,5.68,3.79-2.06,1.4-4,3.88-6.19,4-8,.5-16.15.44-24.21.14-5.74-.2-7.71,1.13-7.62,5.94.34,17.68.06,35.37,0,53.05,0,1.41.36,3-.32,4.18a5.35,5.35,0,0,1-3.7,2.42c-1.18,0-2.51-1.54-3.46-2.57-.45-.48-.2-1.38-.2-2.08q0-33.16,0-66.31A20.11,20.11,0,0,1,204.7,346.72Z"
            transform="translate(-204.12 -344.4)"
          />
          <path
            className="cls-7"
            stroke="#488c7c"
            strokeMiterlimit="10"
            d="M347.94,430c-10,0-19.52.12-29.07-.14-1.43,0-2.79-1.86-4.18-2.86,1.51-1.06,2.95-2.93,4.55-3,5.91-.37,11.89-.33,17.82-.11,4.22.16,5.67-.85,5.61-4.48-.26-13.35-.05-26.71,0-40.06,0-1.07-.27-2.26.23-3.17a3.94,3.94,0,0,1,2.73-1.82c.86,0,1.84,1.16,2.54,1.94.33.36.15,1,.15,1.57q0,25.05,0,50.08A16.21,16.21,0,0,1,347.94,430Z"
            transform="translate(-204.12 -344.4)"
          />
        </svg>
        About us
      </div>

      <div className="header-wrapper">
        <div
          style={{
            fontFamily: ` 'Nanum Myeongjo', serif`,
            fontSize: `50px`,
          }}
        >
          Create. Protect. Feature.
        </div>
        <div
          style={{
            fontSize: `20px`,
            letterSpacing: `0.18em`,
          }}
        >
          we create masterpiece
        </div>
        <div className={classes.root}>
          <div className="column1">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <Background1>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  style={{ backgroundColor: " #bfeee6" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <div
                      className={classes.heading}
                      style={{ paddingLeft: `85px` }}
                    >
                      <svg
                        id="aeed419a-5a6b-43d7-93ce-9f8aaad142e0"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="400"
                        height="300"
                        viewBox="0 0 945 652.75686"
                      >
                        
                        <polygon
                          points="722.297 119.274 599.704 203.07 779.574 203.07 722.297 119.274"
                          fill="#f2f2f2"
                        />
                        <polygon
                          points="789.145 212.022 588.498 212.022 527.329 253.833 817.724 253.833 789.145 212.022"
                          fill="#f2f2f2"
                        />
                        <polygon
                          points="520.047 262.08 326.168 394.601 464.272 596.646 866 322.053 825.007 262.08 520.047 262.08"
                          fill="#f2f2f2"
                        />
                        <ellipse
                          cx="540"
                          cy="632.75686"
                          rx="405"
                          ry="20"
                          fill="#f2f2f2"
                        />
                        <ellipse
                          cx="116.5"
                          cy="595.75686"
                          rx="116.5"
                          ry="15"
                          fill="#f2f2f2"
                        />
                        <ellipse
                          cx="320.18573"
                          cy="345.70883"
                          rx="13.79379"
                          ry="7.98588"
                          fill="#3f3d56"
                        />
                        <polygon
                          points="682.636 404.151 372.638 404.151 380.261 376.709 386.853 352.969 398.048 312.676 657.952 312.676 668.827 352.969 676.269 380.556 682.636 404.151"
                          fill="#3f3d56"
                        />
                        <polygon
                          points="676.269 380.556 380.261 380.556 380.261 376.709 386.853 352.969 668.827 352.969 676.269 380.556"
                          opacity="0.1"
                        />
                        <rect
                          x="300.03955"
                          y="343.16787"
                          width="40.29237"
                          height="31.21751"
                          fill="#6c63ff"
                        />
                        <rect
                          x="271"
                          y="358.41364"
                          width="514"
                          height="274.42373"
                          fill="#3f3d56"
                        />
                        <rect
                          x="271"
                          y="461.50403"
                          width="514"
                          height="68.24294"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="528"
                          cy="495.6255"
                          r="127.41102"
                          fill="#2f2e41"
                        />
                        <circle
                          cx="528"
                          cy="495.6255"
                          r="118.33616"
                          fill="#3f3d56"
                        />
                        <circle
                          cx="528"
                          cy="495.6255"
                          r="90.0226"
                          fill="#2f2e41"
                        />
                        <circle
                          cx="705.86723"
                          cy="377.28934"
                          r="8.71186"
                          fill="#6c63ff"
                          opacity="0.2"
                        />
                        <circle
                          cx="732.00282"
                          cy="377.28934"
                          r="8.71186"
                          fill="#6c63ff"
                          opacity="0.5"
                        />
                        <Flash
                          cx="758.13842"
                          cy="377.28934"
                          r="8.71186"
                          fill="#6c63ff"
                        />
                        <rect
                          x="497.14548"
                          y="319.21025"
                          width="60.98305"
                          height="27.58757"
                          fill="#2f2e41"
                        />
                        <path
                          d="M180.299,360.65484l5.33849-5.3385s13.64282-23.72663,0-21.94714S171.9947,347.012,171.9947,347.012v13.64282Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#9f616a"
                        />
                        <path
                          d="M392.05925,418.19193l5.33849-1.7795s14.236-21.354,16.01548-11.86332-7.118,22.54031-7.118,22.54031h-14.236Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#9f616a"
                        />
                        <Rotate1
                          x="206.6949"
                          y="149.19119"
                          width="239.04586"
                          height="233.1142"
                          transform="translate(-53.07135 -194.98222) rotate(14.07623)"
                        />
                        <Rotate2
                          x="229.49356"
                          y="164.22827"
                          width="205.29499"
                          height="143.86092"
                          transform="translate(-60.09004 -197.31131) rotate(14.07623)"
                          opacity="0.2"
                        />
                        <ellipse
                          cx="137.18656"
                          cy="214.49296"
                          rx="23.86524"
                          ry="19.87106"
                          fill="#2f2e41"
                        />
                        <path
                          d="M227.75229,498.86249s-8.89749,24.3198-10.677,86.00906-3.559,100.245,4.15216,105.58353,18.98131,4.15216,19.57447,2.96583,3.559-78.2979,3.559-78.2979l15.42231-57.53709,17.20181,39.149V664.949s13.04965,11.86331,18.38815.59316,8.89749-68.80724,8.89749-68.80724,6.52482-97.87238-4.74533-109.7357S227.75229,498.86249,227.75229,498.86249Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M229.53179,690.45508s-6.52482-5.93166-11.86332,1.7795-23.13347,24.3198-18.98131,27.28563,25.50614,4.15216,27.8788,1.18633c0,0,17.20181-7.71116,17.20181-9.49065s-2.37266-21.354-4.74532-20.76081S230.125,695.79357,229.53179,690.45508Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M285.28939,661.39h11.49555s-3.19123,8.30432-.2254,8.30432,30.25146,22.54031,19.57447,24.913-40.92844-8.30432-42.11478-11.86332,4.15217-19.57447,4.15217-19.57447l7.118,3.559Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M252.0721,353.53684s-1.18634,20.16765-7.118,21.94714,18.98131,20.16764,18.98131,20.16764l17.20181-22.5403s-6.52482-11.27015-4.15216-19.57448S252.0721,353.53684,252.0721,353.53684Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#9f616a"
                        />
                        <path
                          d="M252.0721,353.53684s-1.18634,20.16765-7.118,21.94714,18.98131,20.16764,18.98131,20.16764l17.20181-22.5403s-6.52482-11.27015-4.15216-19.57448S252.0721,353.53684,252.0721,353.53684Z"
                          transform="translate(-127.5 -123.62157)"
                          opacity="0.1"
                        />
                        <path
                          d="M262.74908,376.67032s-20.76081-7.71116-23.72663-5.93166-30.84463,14.236-31.4378,16.60864,3.559,36.77629,3.559,36.77629,7.118,2.96583,7.71115,15.42231,16.60865,32.031,11.27016,45.08061-10.677,17.795-.59317,19.57448,55.7576-1.18634,58.13026-5.3385,16.01548-10.08382,20.16764-8.89749-2.37266-61.68925-2.37266-61.68925l3.559-8.89749,11.86332-32.62412s-17.795-20.16765-34.99679-18.38815C285.88255,368.366,266.90124,370.73866,262.74908,376.67032Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#555aa8"
                        />
                        <path
                          d="M216.48214,389.1268l-8.89749-1.7795s-8.89749,5.93166-11.86332,5.93166-2.96583,2.37266-2.96583,2.37266-11.27015-17.20181-8.89748-36.77628c0,0-13.64282-6.52483-14.236-1.7795s-5.33849,58.72342,4.74533,62.28242,44.48744,4.15216,44.48744,4.15216Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#555aa8"
                        />
                        <path
                          d="M312.575,385.5678h8.30432l21.94714,21.94714s5.33849-1.18633,7.118,2.37267,13.64282,2.96583,13.64282,2.96583l31.43779,2.96582s4.15216,13.64282,1.18633,16.01548-55.16443,2.96583-55.16443,2.96583-4.74533-2.37266-7.71116,0-24.3198-12.45648-26.69246-16.60864S312.575,385.5678,312.575,385.5678Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#555aa8"
                        />
                        <circle
                          cx="138.21491"
                          cy="217.45879"
                          r="21.94714"
                          fill="#9f616a"
                        />
                        <path
                          d="M252.10737,328.31556s-3.75382-9.76,1.68922-12.9507l1.50153,4.3169s13.70146-8.25842,17.2676-6.3815l-3.37844,4.50459s15.95375,0,17.0799,6.19381l-5.63074.18769s6.00612,3.94151,6.19381,10.323l-12.01224.75076,5.81843,3.37844s-21.77218,3.00306-27.02754-5.63073Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M244.06436,332.47945s6.36038,6.25365,14.59188,3.16684,0-14.40512,0-14.40512l-5.48767-2.74383Z"
                          transform="translate(-127.5 -123.62157)"
                          fill="#2f2e41"
                        />
                        <Shape1
                          x="340.5"
                          y="254.37843"
                          width="22"
                          height="22"
                          transform="translate(-210.5398 69.9716) rotate(-27.67193)"
                          fill="none"
                          stroke="#f2f2f2"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <Shape1
                          x="281.5"
                          y="236.37843"
                          width="22"
                          height="22"
                          transform="translate(35.37678 -236.72915) rotate(30)"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="558"
                          cy="286.75686"
                          r="11"
                          fill="none"
                          stroke="#3f3d56"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <circle
                          cx="524"
                          cy="244.75686"
                          r="11"
                          fill="none"
                          stroke="#3f3d56"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <circle
                          cx="580"
                          cy="212.75686"
                          r="11"
                          fill="none"
                          stroke="#3f3d56"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                        <Shape2
                          cx="208"
                          cy="91.75686"
                          r="11"
                          fill="none"
                          stroke="#f2f2f2"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      backgroundColor: `white`,
                      borderRadius: `2px`,
                      color: `#004240`,
                    }}
                  >
                    <Typography style={{ letterSpacing: `0.1em` }}>
                      Store the best of your memories and cherish every moment
                      of bliss with us.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Background1>
            </ScrollAnimation>
            <br />
            <br />
            <br />
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <Background2>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                  style={{ backgroundColor: " #bfeee6" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <div
                      className={classes.heading}
                      style={{ paddingLeft: `100px` }}
                    >
                      <svg
                        id="fe1bd44d-772d-49e6-8ede-d714f2b892c4"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="400"
                        height="300"
                        viewBox="0 0 872.24627 646.29397"
                      >
                        <circle
                          cx="730.18162"
                          cy="600.55246"
                          r="2.05936"
                          fill="#6c63ff"
                        />
                        <path
                          d="M894.92774,725.54052a2.05662,2.05662,0,0,1-2.25337,3.38663,2.05759,2.05759,0,1,0,2.25337-3.38663Z"
                          transform="translate(-163.87686 -126.85301)"
                          opacity="0.2"
                        />
                        <ellipse
                          cx="783.12431"
                          cy="602.78343"
                          rx="5.06259"
                          ry="2.05936"
                          fill="#3f3d56"
                        />
                        <path
                          d="M947.00119,727.57708q-.26072,0-.51484.01055c2.55416.10494,4.54775.98215,4.54775,2.04881s-1.99359,1.94386-4.54775,2.04881q.254.01044.51484.01055c2.796,0,5.06259-.922,5.06259-2.05936S949.79717,727.57708,947.00119,727.57708Z"
                          transform="translate(-163.87686 -126.85301)"
                          opacity="0.2"
                        />
                        <path
                          d="M953.6083,729.63644H928.20953v-2.74581a.51484.51484,0,0,0-.51483-.51484H913.62241a.51484.51484,0,0,0-.51484.51484v2.74581H898.34883v-1.71613a.51484.51484,0,0,0-.51484-.51484h-7.551a.51484.51484,0,0,0-.51484.51484v1.71613h-2.05936a.51415.51415,0,0,0-.51484.51347v33.80918a.51415.51415,0,0,0,.51346.51484H953.6083a.51416.51416,0,0,0,.51484-.51347V730.15128a.51416.51416,0,0,0-.51347-.51484Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#3f3d56"
                        />
                        <rect
                          x="723.31709"
                          y="616.85571"
                          width="66.92917"
                          height="6.5213"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="756.78168"
                          cy="620.11637"
                          r="13.04261"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="756.78168"
                          cy="620.11637"
                          r="9.70613"
                          fill="#3f3d56"
                        />
                        <path
                          d="M928.20953,746.96938a7.50341,7.50341,0,0,1-.61266,2.98092,7.40233,7.40233,0,0,1-.81516,1.4364,7.55071,7.55071,0,1,1-10.54049-10.54048,7.40018,7.40018,0,0,1,1.4364-.81516,7.55185,7.55185,0,0,1,10.5319,6.93832Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#fff"
                        />
                        <Frame0
                          x="110.24618"
                          width="2"
                          height="187"
                          fill="darkgray"
                        />
                        <Frame1
                          d="M165.084,230.20315a1.20843,1.20843,0,0,0-1.20712,1.20712V389.20353a1.20826,1.20826,0,0,0,1.20712,1.20711H384.916a1.20826,1.20826,0,0,0,1.20712-1.20711V231.41027a1.20843,1.20843,0,0,0-1.20712-1.20712Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="darkgray"
                        />
                        <Frame1
                          d="M372.7781,243.22443V355.36114a2.82227,2.82227,0,0,1-2.82133,2.82321h-190.361a2.37971,2.37971,0,0,1-.4046-.03147,2.8206,2.8206,0,0,1-2.41861-2.79174V243.22443a2.82225,2.82225,0,0,1,2.8213-2.82318h190.361a2.82226,2.82226,0,0,1,2.82321,2.82132Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#fff"
                        />
                        <Frame1
                          d="M302.42741,358.6339H180.922a2.47691,2.47691,0,0,1-.45406-.036l57.46648-99.54021a4.02364,4.02364,0,0,1,7.00406,0l38.56722,66.7992,1.84768,3.19635Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#e6e6e6"
                        />
                        <Frame2
                          points="138.55 231.781 97.066 231.781 117.43 202.2 118.896 200.069 119.629 199.004 121.477 202.2 138.55 231.781"
                          opacity="0.2"
                        />
                        <Frame1
                          d="M370.08076,358.6339H264.98852l20.36482-29.58064,1.46553-2.13091,26.53718-38.54925a5.36966,5.36966,0,0,1,7.97059-.47652,4.79728,4.79728,0,0,1,.38215.47652Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#e6e6e6"
                        />
                        <Frame3
                          cx="111.24627"
                          cy="106.99997"
                          r="4"
                          fill="#fff"
                        />
                        <Frame4
                          x="435.24618"
                          width="2"
                          height="187"
                          fill="darkgray"
                        />
                        <Frame5
                          d="M490.084,230.20315a1.20843,1.20843,0,0,0-1.20712,1.20712V389.20353a1.20826,1.20826,0,0,0,1.20712,1.20711H709.916a1.20826,1.20826,0,0,0,1.20712-1.20711V231.41027a1.20843,1.20843,0,0,0-1.20712-1.20712Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="darkgray"
                        />
                        <Frame5
                          d="M697.7781,243.22443V355.36114a2.82227,2.82227,0,0,1-2.82133,2.82321h-190.361a2.37971,2.37971,0,0,1-.4046-.03147,2.8206,2.8206,0,0,1-2.41861-2.79174V243.22443a2.82225,2.82225,0,0,1,2.8213-2.82318h190.361a2.82226,2.82226,0,0,1,2.82321,2.82132Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#fff"
                        />
                        <Frame5
                          d="M627.42741,358.6339H505.922a2.47691,2.47691,0,0,1-.45406-.036l57.46648-99.54021a4.02364,4.02364,0,0,1,7.00406,0l38.56722,66.7992,1.84768,3.19635Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#6c63ff"
                        />
                        <Frame6
                          points="463.55 231.781 422.066 231.781 442.43 202.2 443.896 200.069 444.629 199.004 446.477 202.2 463.55 231.781"
                          opacity="0.2"
                        />
                        <Frame5
                          d="M695.08076,358.6339H589.98852l20.36482-29.58064,1.46553-2.13091,26.53718-38.54925a5.36966,5.36966,0,0,1,7.97059-.47652,4.79728,4.79728,0,0,1,.38215.47652Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#6c63ff"
                        />
                        <Frame7
                          cx="436.24627"
                          cy="106.99997"
                          r="4"
                          fill="#fff"
                        />
                        <Frame4
                          x="760.24618"
                          width="2"
                          height="187"
                          fill="darkgray"
                        />
                        <Frame5
                          d="M815.084,230.20315a1.20843,1.20843,0,0,0-1.20712,1.20712V389.20353a1.20826,1.20826,0,0,0,1.20712,1.20711h219.832a1.20826,1.20826,0,0,0,1.20712-1.20711V231.41027a1.20843,1.20843,0,0,0-1.20712-1.20712Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="darkgray"
                        />
                        <Frame5
                          d="M1022.7781,243.22443V355.36114a2.82227,2.82227,0,0,1-2.82133,2.82321h-190.361a2.37971,2.37971,0,0,1-.4046-.03147,2.8206,2.8206,0,0,1-2.41861-2.79174V243.22443a2.82225,2.82225,0,0,1,2.8213-2.82318h190.361a2.82226,2.82226,0,0,1,2.82321,2.82132Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#fff"
                        />
                        <Frame5
                          d="M952.42741,358.6339H830.922a2.47691,2.47691,0,0,1-.45406-.036l57.46648-99.54021a4.02364,4.02364,0,0,1,7.00406,0l38.56722,66.7992,1.84768,3.19635Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#e6e6e6"
                        />
                        <Frame6
                          points="788.55 231.781 747.066 231.781 767.43 202.2 768.896 200.069 769.629 199.004 771.477 202.2 788.55 231.781"
                          opacity="0.2"
                        />
                        <Frame5
                          d="M1020.08076,358.6339H914.98852l20.36482-29.58064,1.46553-2.13091,26.53718-38.54925a5.36966,5.36966,0,0,1,7.97059-.47652,4.79728,4.79728,0,0,1,.38215.47652Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#e6e6e6"
                        />
                        <Frame7
                          cx="761.24627"
                          cy="106.99997"
                          r="4"
                          fill="#fff"
                        />
                        <path
                          d="M848.58252,539.903l1.8678,12.7633a11.28607,11.28607,0,0,1-12.72681,12.812h0a11.28606,11.28606,0,0,1-8.96793-15.24526l6.33663-16.40067-3.37259-110.62084,19.561-7.41969Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#a0616a"
                        />
                        <circle
                          cx="629.39524"
                          cy="202.60054"
                          r="26.98069"
                          fill="#a0616a"
                        />
                        <path
                          d="M825.64893,380.04235l-49.91428-2.02355c5.54155-12.136,7.73983-23.87513,5.39614-35.0749h33.05135C812.44414,353.506,817.24118,366.18842,825.64893,380.04235Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#a0616a"
                        />
                        <path
                          d="M817.55473,485.26705l-73.52239,5.39614,2.67255-41.54634c-8.4733-20.15337-7.11982-34.70642,2.85286-44.34749l.90294-14.0371a21.53089,21.53089,0,0,1,15.90722-19.41335l12.73933-3.41787c16.49521,9.66291,29.64467,9.53114,39.122-1.349l15.1619,7.76585a20.34026,20.34026,0,0,1,10.94321,20.34991Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#6c63ff"
                        />
                        <path
                          d="M704.91034,489.31415l-20.75307,10.89537a8.946,8.946,0,0,1-10.87428-2.0108h0a8.946,8.946,0,0,1,4.92314-14.6745l14.56292-2.97878L737.96169,463.008l7.41969-52.61235,20.91,5.39614-4.0471,62.05559Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#a0616a"
                        />
                        <path
                          d="M852.62963,419.16436,829.696,432.6547l-1.349-53.96138,3.95416-1.349a20.32848,20.32848,0,0,1,20.32847,20.32847Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#6c63ff"
                        />
                        <path
                          d="M836.77847,750.01509l-19.50122-3.05089c-3.93743-66.6281-11.86861-128.8299-26.0287-184.12766-32.74538,43.39091-60.1954,107.34133-83.64014,186.84129l-22.93359-6.07066,60.032-261.71271,71.49883-1.349C845.44691,520.5818,836.88633,644.23271,836.77847,750.01509Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M697.48116,773.0434l-33.88394-4.75008a6.681,6.681,0,0,1-5.518-8.37415v0a6.681,6.681,0,0,1,5.49045-4.85446l6.02106-.86971,19.0382-11.62728,15.74819,4.19952,4.66955,13.78064A10.36821,10.36821,0,0,1,697.48116,773.0434Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M830.36107,773.0434l-33.88394-4.75008a6.681,6.681,0,0,1-5.518-8.37415v0a6.681,6.681,0,0,1,5.49044-4.85446l6.02107-.86971,19.03819-11.62728,15.7482,4.19952,4.66955,13.78064A10.36821,10.36821,0,0,1,830.36107,773.0434Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#2f2e41"
                        />
                        <path
                          d="M770.33852,429.28212c-6.1334-13.48063-16.72329-18.70312-34.40039-10.79228l2.38344-17.57787a34.154,34.154,0,0,1,24.59723-28.2893h0Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#6c63ff"
                        />
                        <path
                          d="M761.42964,315.60989s-4.24452-33.03273,30.3879-22.20053c0,0,24.73469-4.53845,32.84616,26.40086l8.21341,32.432-4.0028-2.1787-1.86613,4.07915-6.48641,1.64268-2.77569-5.50923-1.34275,6.69027-53.12722,5.29634s23.79461-14.072,24.17193-39.29232L782.91567,327.76Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#2f2e41"
                        />
                        <circle
                          cx="656.42221"
                          cy="166.87979"
                          r="13.35886"
                          fill="#2f2e41"
                        />
                        <path
                          d="M806.53392,290.46235a13.34835,13.34835,0,0,1,13.35254-12.48574c-.27585-.035-.54923-.07754-.83051-.09563a13.35886,13.35886,0,0,0-1.71422,26.66268c.28128.01808.55785.01089.83592.01151A13.34835,13.34835,0,0,1,806.53392,290.46235Z"
                          transform="translate(-163.87686 -126.85301)"
                          fill="#2f2e41"
                        />
                      </svg>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      backgroundColor: `white`,
                      borderRadius: `2px`,
                      color: `#004240`,
                    }}
                  >
                    <Typography>
                      Life brings us as many joyful moments as it does
                      downfalls, and although there are days we wish there was a
                      manual to follow, it simply wouldn’t be the same without
                      the spontaneity. The journey of life may not become easier
                      as we grow older, but we do seem to understand it better
                      as our perspectives evolve.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Background2>
            </ScrollAnimation>
            <br />
            <br />
            <br />
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <Background3>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                  style={{ backgroundColor: " #bfeee6" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <div className={classes.heading}>
                      <svg
                        id="bcb5bbf0-7a2c-468e-9169-def856f1bf3d"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="400"
                        height="300"
                        viewBox="0 0 898.23872 566.34096"
                      >
                        
                        <path
                          d="M790.53175,646.07139H358.76435C244.33221,620.72986,150.88064,533.44518,150.88064,402.9176a271.80843,271.80843,0,0,1,6.36661-58.71408l348.02353-56.05926,268.4786-43.24289a480.15821,480.15821,0,0,1,54.91915,41.8614L571.683,384.79158,450.45154,431.03882l136.14515-33.83866L869.17334,326.968a481.98867,481.98867,0,0,1,46.655,61.39385L830.3746,452.25245l96.54745-45.69794q.61283,1.05685,1.22041,2.1171C988.71817,514.37707,912.36385,646.07139,790.53175,646.07139Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#f2f2f2"
                        />
                        <path
                          d="M721.535,215.23227c-65.35529,13.49881-145.70746,30.5596-228.32332,48.2945-119.45055,25.64945-243.62812,52.722-334.03368,72.51254l.06-.2344a80.79243,80.79243,0,0,1,23.08127-38.66247A478.7381,478.7381,0,0,1,429.78716,173.70378h.00833a483.29525,483.29525,0,0,1,81.40912-6.87426A478.25725,478.25725,0,0,1,721.535,215.23227Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#f2f2f2"
                        />
                        <Photo0
                          d="M616.11936,215.67048v442h433v-442Zm393,312h-352v-274h352Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <Photo0
                          d="M855.49236,330.8973c-10.67463-18.03681-31.79353-18.87741-31.79353-18.87741s-20.57916-2.63164-33.78057,24.83865c-12.30476,25.60458-29.2869,50.32632-2.734,56.32016l4.79622-14.928,2.97028,16.03938a103.89288,103.89288,0,0,0,11.361.19417c28.436-.91808,55.517.26861,54.64508-9.93543C859.79773,370.984,865.76349,348.25233,855.49236,330.8973Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#2f2e41"
                        />
                        <Photo0
                          d="M782.61936,502.17048l-36,25s-21,22-6,22,21-19,21-19l46-20Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#ffb8b8"
                        />
                        <Photo0
                          d="M797.11936,404.67048s-31.5,97.5-21.5,102.5,32,8,32,8Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#d0cde1"
                        />
                        <Photo0
                          d="M797.11936,404.67048s-31.5,97.5-21.5,102.5,32,8,32,8Z"
                          transform="translate(-150.88064 -166.82952)"
                          opacity="0.1"
                        />
                        <Photo0
                          d="M896.14939,527.67048h-70.91l50.38-25.5a32.12388,32.12388,0,0,1,3.19,2.36A63.96483,63.96483,0,0,1,896.14939,527.67048Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#2f2e41"
                        />
                        <Photo1
                          cx="666.23872"
                          cy="186.84096"
                          r="26"
                          fill="#ffb8b8"
                        />
                        <Photo0
                          d="M816.61936,375.17048s6,19,0,26,33-10,33-10-14-20-10-29Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#ffb8b8"
                        />
                        <Photo0
                          d="M874.21934,461.98048l-2.1,13.69s1.06,3.11,2.35,7.64c1.68005,5.91,3.75,14.24,4.34,21.22.61,7.08-.31,12.78-4.69,13.14-6.28.52-9.55,4.33-12.81,10h-72.34c.19-3.12.42-6.36.69-9.69q.225-3,.5-6.08c.2-2.36,7.28589-46.68955,1.96-56.23-10.997-19.69937,3-31,3-31s2-15,2-20c0-3.92005,15.36-8.45,22-10.23.43-.11.81-.22,1.16-.3,1.15-.3,1.84-.47,1.84-.47l5.25-2.15s14.75-2.85,15.75-4.85a5.08121,5.08121,0,0,1,2.56-1.82c2.11-.9,4.8-1.54,5.44-2.18a25.489,25.489,0,0,0,2.47-3.36,13.36526,13.36526,0,0,1,7.36005-4.3c10.74-2.71,26.17,2.66,26.17,2.66l-5.4,35.25Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#d0cde1"
                        />
                        <Photo0
                          d="M905.61936,440.17048l-36,25s-21,22-6,22,21-19,21-19l46-20Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#ffb8b8"
                        />
                        <Photo0
                          d="M843.773,329.1586l-20.86446-10.929-13.09039,2.03126a23.402,23.402,0,0,0-19.23593,17.95751l-2.44782,10.81118,14.83941-.57075,4.14557-9.673v9.51355l6.84725-.26338,3.9742-15.39994,2.48383,16.39352,24.34192-.49679Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#2f2e41"
                        />
                        <Photo0
                          d="M880.11936,379.67048l7-2s71,29,69,54,1,25-11,26-47-11-46-13,8-12,8-12l-27-21Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#d0cde1"
                        />
                        <Photo4
                          cx="692.23872"
                          cy="186.84096"
                          r="4"
                          fill="#ffb8b8"
                        />
                        <Photo2
                          d="M150.94071,417.67054V645.67036H374.298V417.67054Zm202.208,160.941H171.5742V437.27235H353.14872Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <Photo2
                          d="M250.82063,477.10879c5.50636-9.30405,16.40027-9.73766,16.40027-9.73766s10.61549-1.3575,17.42526,12.81268c6.34724,13.20779,15.10726,25.96017,1.41029,29.052l-2.47407-7.70041-1.53218,8.2737a53.5936,53.5936,0,0,1-5.86043.10016c-14.66834-.47358-28.63773.13855-28.18794-5.12507C248.59976,497.787,245.5224,486.06115,250.82063,477.10879Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#2f2e41"
                        />
                        <Photo2
                          d="M288.4112,565.45778l18.57012,12.89592s10.83257,11.34841,3.095,11.34841-10.83257-9.8009-10.83257-9.8009l-23.72849-10.31673Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#ffb8b8"
                        />
                        <Photo2
                          d="M280.93157,515.1637s16.24885,50.29408,11.09048,52.87327-16.50677,4.12669-16.50677,4.12669Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#d0cde1"
                        />
                        <Photo2
                          d="M280.93157,515.1637s16.24885,50.29408,11.09048,52.87327-16.50677,4.12669-16.50677,4.12669Z"
                          transform="translate(-150.88064 -166.82952)"
                          opacity="0.1"
                        />
                        <Photo2
                          d="M229.84824,578.61162h36.578l-25.98786-13.15384a16.57048,16.57048,0,0,0-1.64552,1.21737A32.99537,32.99537,0,0,0,229.84824,578.61162Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#2f2e41"
                        />
                        <Photo3
                          cx="119.73419"
                          cy="322.02651"
                          r="13.41176"
                          fill="#ffb8b8"
                        />
                        <Photo2
                          d="M270.87275,499.94652s-3.095,9.8009,0,13.41175-17.02261-5.15836-17.02261-5.15836,7.22171-10.31674,5.15836-14.95927Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#ffb8b8"
                        />
                        <Photo2
                          d="M241.16057,544.7263l1.08324,7.06181s-.54679,1.60425-1.2122,3.941a62.97606,62.97606,0,0,0-2.23875,10.946c-.31465,3.65213.15991,6.59241,2.41928,6.7781,3.23947.26822,4.92623,2.23355,6.60786,5.15837h37.31565c-.098-1.60941-.21668-3.28071-.35593-4.99846q-.11608-1.5475-.25792-3.13629c-.10317-1.21737-4.24686-24.09915-1.01105-29.00549,6.40732-9.71521-1.54751-15.99094-1.54751-15.99094s-1.03167-7.73755-1.03167-10.31674c0-2.0221-7.92325-4.35882-11.34841-5.277-.22181-.05673-.41783-.11347-.59836-.15474-.59322-.15475-.94915-.24243-.94915-.24243l-2.70815-1.10906s-7.60859-1.47013-8.12442-2.5018a2.62114,2.62114,0,0,0-1.32055-.93883,18.689,18.689,0,0,1-2.80615-1.12452,13.14739,13.14739,0,0,1-1.2741-1.7332,6.89422,6.89422,0,0,0-3.79658-2.21812c-5.54008-1.3979-13.49944,1.37214-13.49944,1.37214l2.78553,18.18325Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#d0cde1"
                        />
                        <Photo2
                          d="M224.96328,533.47591l18.57012,12.89591s10.83257,11.34841,3.095,11.34841-10.83257-9.8009-10.83257-9.8009L212.06736,537.6026Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#ffb8b8"
                        />
                        <Photo2
                          d="M256.86592,476.2119l10.76265-5.63759,6.7525,1.0478a12.07162,12.07162,0,0,1,9.9226,9.26314l1.26268,5.57681-7.65471-.29442L275.7732,481.178v4.90744l-3.53206-.13586-2.05-7.94385-1.28125,8.45638-12.55646-.25626Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#2f2e41"
                        />
                        <Photo2
                          d="M238.11712,502.26778l-3.61086-1.03167s-36.62441,14.95927-35.59274,27.85518-.51583,12.89592,5.67421,13.41176,24.24432-5.6742,23.72849-6.70588-4.1267-6.19-4.1267-6.19l13.9276-10.83257Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#d0cde1"
                        />
                        <Photo5
                          cx="106.32244"
                          cy="322.02651"
                          r="2.06335"
                          fill="#ffb8b8"
                        />
                        <path
                          d="M751.71464,531.908c-2.98743,5.27014-7.66236,11.65246-12.11963,15.35632l8.90155-1.68128a229.05519,229.05519,0,0,1-434.15064,49.68537l9.05066-.38526c-5.18231-2.59417-11.18512-7.74737-15.29181-12.20086.20954,6.05365-.44012,13.93823-2.3042,19.42566l6.69635-6.07434a231.055,231.055,0,0,0,437.97321-50.126l7.90222,4.39435C755.31022,545.38166,752.886,537.8509,751.71464,531.908Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#6c63ff"
                        />
                        <path
                          d="M961.92954,530.25072c-.20345-.33244-5.00048-8.3422-6.66355-24.97468-1.52542-15.25941-.54455-40.98035,12.79468-76.859,25.27076-67.9696-5.82379-122.81121-6.14152-123.35749l1.53408-.89c.08052.13852,8.10413,14.121,12.844,36.38592a158.7396,158.7396,0,0,1-6.57438,88.47969c-25.22747,67.85359-6.47222,99.9749-6.28,100.29176Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <circle
                          cx="801.16742"
                          cy="122.7144"
                          r="11.52464"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="837.51437"
                          cy="165.26693"
                          r="11.52464"
                          fill="#3f3d56"
                        />
                        <circle
                          cx="812.69206"
                          cy="193.63529"
                          r="11.52464"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="842.83344"
                          cy="217.57109"
                          r="11.52464"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="803.82695"
                          cy="254.80455"
                          r="11.52464"
                          fill="#3f3d56"
                        />
                        <path
                          d="M968.89177,530.67493s-11.52464-28.36835,23.04929-49.64462Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M954.71824,530.16034s-5.245-30.16738-45.84015-29.90882Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M200.47651,582.60943c.09738-.15912,2.39342-3.99291,3.18944-11.95385.73012-7.30374.26064-19.61478-6.124-36.78765-12.09556-32.53287,2.78749-58.78218,2.93957-59.04365l-.73427-.426a65.15969,65.15969,0,0,0-6.14765,17.41569,75.979,75.979,0,0,0,3.14675,42.34979c12.07484,32.47734,3.09786,47.85184,3.00587,48.0035Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <circle
                          cx="54.32553"
                          cy="300.56836"
                          r="5.51614"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="36.92848"
                          cy="320.93564"
                          r="5.51614"
                          fill="#3f3d56"
                        />
                        <circle
                          cx="48.80939"
                          cy="334.51383"
                          r="5.51614"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="34.38257"
                          cy="345.97042"
                          r="5.51614"
                          fill="#6c63ff"
                        />
                        <circle
                          cx="53.05258"
                          cy="363.79179"
                          r="5.51614"
                          fill="#3f3d56"
                        />
                        <path
                          d="M197.14412,582.81247s5.51614-13.57819-11.03227-23.76183Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                        <path
                          d="M203.92812,582.56617s2.51044-14.43928,21.94086-14.31552Z"
                          transform="translate(-150.88064 -166.82952)"
                          fill="#3f3d56"
                        />
                      </svg>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      backgroundColor: `white`,
                      borderRadius: `2px`,
                      color: `#004240`,
                    }}
                  >
                    <Typography>
                      Life brings us as many joyful moments as it does
                      downfalls, and although there are days we wish there was a
                      manual to follow, it simply wouldn’t be the same without
                      the spontaneity. The journey of life may not become easier
                      as we grow older, but we do seem to understand it better
                      as our perspectives evolve.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Background3>
            </ScrollAnimation>
            <br />
            <br />
            <br />
          </div>
          <div className="column2">
            <ScrollAnimation
              duration={3}
              animateIn="bounceInRight"
              animateOut="bounceOutRight"
            >
              <svg
                id="line"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="5px"
                viewBox="0 0 2.87 600"
                fill="none"
                stroke="#00a79d"
                strokeMiterlimit="10"
                strokeWidth="600px"
              >
               
                <line className="line-cls" y1="200" x2="2.87" y2="200" />
              </svg>

              <p>
                Life brings us as many joyful moments as it does downfalls, and
                although there are days we wish there was a manual to follow, it
                simply wouldn’t be the same without the spontaneity. The journey
                of life may not become easier as we grow older, but we do seem
                to understand it better as our perspectives evolve. Whether
                you’re embarking on a new adventure right out of school or you
                want to explore different paths in your personal life, it’s
                never too late to change what the future looks like.
              </p>
              <br />
              <br />
              <p>
                Life brings us as many joyful moments as it does downfalls, and
                although there are days we wish there was a manual to follow, it
                simply wouldn’t be the same without the spontaneity. The journey
                of life may not become easier as we grow older, but we do seem
                to understand it better as our perspectives evolve. Whether
                you’re embarking on a new adventure right out of school or you
                want to explore different paths in your personal life, it’s
                never too late to change what the future looks like.
              </p>
              <svg
                id="imagination"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 200 380.11 396"
                height="600px"
                width="200px"
              >
               
                <ellipse
                  fill="#e6e6e6"
                  cx="190.05"
                  cy="386.3"
                  rx="190.05"
                  ry="9.7"
                />

                <path
                  fill="#a0616a"
                  d="M200.55,379.06l-40.14-40.14a10.62,10.62,0,0,0-17.73,4.57h0A10.62,10.62,0,0,0,145.37,354L171,379.58l-35.76,28.51v0c-.18,0-.35,0-.53,0A10.89,10.89,0,1,0,145.6,419Z"
                  transform="translate(0 -250.5)"
                />
                <polygon
                  fill="#a0616a"
                  points="82 376.49 70.1 372.05 81.58 324 99.15 330.56 82 376.49"
                />
                <path
                  fill="#2f2e41"
                  d="M43,625l37.43,14h0l5.39-14.46h0l-23.47-8.76a14.89,14.89,0,0,0-19.16,8.74L43,625Z"
                  transform="translate(0 -250.5)"
                />
                <polygon
                  fill="#a0616a"
                  points="189.13 372.67 176.41 372.67 170.37 323.65 189.13 323.65 189.13 372.67"
                />
                <path
                  fill="#2f2e41"
                  d="M151.9,635h39.95V619.54H166.79a14.89,14.89,0,0,0-14.89,14.88h0V635Z"
                  transform="translate(0 -250.5)"
                />
                <path
                  fill="#2f2e41"
                  d="M157,393.58s-31.11-5.19-41.47,7.25L71.48,604.55l24.88,3.11s8.29-105.75,49.76-133.74c0,0,30.07,93.31,24.88,135.81l21.77-2.07S199.51,428.82,157,393.58Z"
                  transform="translate(0 -250.5)"
                />
                <circle fill="#a0616a" cx="149.48" cy="37.73" r="24.56" />
                <path
                  fill="#ccc"
                  d="M173.59,334.48s-22.8-27-41.47-5.18h0a74.13,74.13,0,0,0-17.8,50.43l.7,23.7,43-6.74Z"
                  transform="translate(0 -250.5)"
                />
                <path
                  id="hand1"
                  fill="#a0616a"
                  d="M149.36,352.36a11.16,11.16,0,0,1-15.71,1.52,10.8,10.8,0,0,1-1.33-1.29L45.4,252.75h-.23A10.67,10.67,0,0,1,35,241.62a10.83,10.83,0,0,1,.32-2.18h0a10.83,10.83,0,0,1,11.53-8,10.64,10.64,0,0,1,9.5,10.31v.2l92.44,95.54a11.15,11.15,0,0,1,.69,14.74Z"
                  transform="translate(0 -250.5)"
                  opacity="0"
                />
                <path
                  id="hand2"
                  fill="#a0616a"
                  d="M141,327.56a11.17,11.17,0,0,1,11,11.31,11.36,11.36,0,0,1-.18,1.84L128.29,471l.14.18a10.71,10.71,0,0,1-4.2,16h0a10.82,10.82,0,0,1-13.44-4,10.63,10.63,0,0,1,2.1-13.86l.15-.13,16.74-131.88a11.15,11.15,0,0,1,11.07-9.76Z"
                  transform="translate(0 -250.5)"
                />
                <path
                  id="hair"
                  fill="#2f2e41"
                  d="M145.5,292.48l-10.56-12.43c-2.72-3.21-5.56-6.7-5.95-10.88-.42-4.59,2.37-9.05,6.19-11.63s8.5-3.56,13.09-3.91c8.52-.66,17.48.74,24.48,5.64s11.59,13.73,9.88,22.1c-1.34,6.6-6.3,12.91-4.37,19.36,2.1,7,10.74,9.21,17.8,11.32,11.84,3.53,23.14,10.48,29.35,21.16s6.18,25.42-2.09,34.59c-5.36,5.95-13.44,8.95-21.43,9.41s-15.93-1.43-23.51-4c-7-2.37-13.88-5.41-19.37-10.33s-9.45-11.94-9.28-19.3c.16-7,3.93-13.42,5.47-20.27a33.26,33.26,0,0,0-10.4-31.73"
                  transform="translate(0 -250.5)"
                />
                <path
                  fill="#6c63ff"
                  d="M162.26,251.88l-6.64-1.3a4.27,4.27,0,0,0-5,3.36h0l-9.19,30.85h0l15,2.94h0l9.2-30.84A4.28,4.28,0,0,0,162.26,251.88Z"
                  transform="translate(0 -250.5)"
                />
                <circle fill="#fff" cx="147.64" cy="39.7" r="12.09" />
                <circle fill="#6c63ff" cx="147.64" cy="39.7" r="6.72" />
              </svg>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="footer">
        collaborate with us
        <div className="icons">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-linkedin"></a>
          <a href="#" className="fa fa-instagram"></a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
