import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";


const Wrapper = styled.section`
    height: 100vh;

  background-color: black;

  @keyframes blinkingText {
    0% {
      color: red;
    }
    5% {
      color: black;
    }
    10% {
      color: red;
    }
    15% {
      color: black;
    }
    20% {
      color: red;
    }
    25% {
      color: black;
    }
    30% {
      color: red;
    }
    100% {
      color: red;
    }
  }
  .head-row {
    padding-top: 5%;
  }

  .aboutus-img {
    width: 400px;
    float: right;
    object-fit: cover;
    @media (max-width: 768px) {
      float: unset;
      display: block;
      margin: 50px auto;
    }
  }

  .left-content {
    display: block;
    max-width: 500px;
  }

  h1 {
    font-family: "Archivo Black", sans-serif;
    font-size: 88px;
    -webkit-text-stroke: 2px red;
    animation: blinkingText 10s infinite;
    @media (max-width: 768px) {
      margin: auto;
    }
  }

  p {
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
  }

  .scroll- {
    width: 30%;
    height: auto;
    display: block;
    margin: 20px auto;
    cursor: pointer;
    object-fit: contain;
  }

  .scroll-row {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  a {
    margin: auto;
    display: block;
  }

  .reverse-column {
    @media (max-width: 576px) {
        flex-direction: column-reverse;
    }
  }
`;

const AboutIntro = ({title, content, sideImg}) => {
  return (
    <Wrapper>
            <div className="container">
              <div className="row head-row">
                <h1>{title}</h1>
              </div>
              <div className="row reverse-column">
                <div className="col-12 col-md-6 order-sm-2 order-md-1">
                  <div className="left-content">
                    <span className="mt-5">{ReactHtmlParser(content)}</span>
                  </div>
                </div>
                <div className="col-12 col-md-6 right-col order-sm-1 order-md-2">
                  <img
                    className="aboutus-img img-fluid"
                    src={sideImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
    </Wrapper>
  );
};

export default AboutIntro;
