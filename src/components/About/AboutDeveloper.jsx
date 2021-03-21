import React from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const Wrapper = styled.section`
 
  margin-top: 100px;
  
  #developer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .do-as-developer {
    font-family: "Archivo Black", sans-serif;
    color: white;
    @media (max-width: 992px) {
      margin: auto;
    }
    @media (max-width: 576px) {
      padding-left: 20px;
      margin: auto;
    }
  }

  .full-stack {
    color: white;
    text-align: center;
    font-size: 2.5vw;
  }

  span {
    color: red;
  }

  p {
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
  }

  img {
    width: 100px;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .col-4 {
    display: flex;
    flex-direction: column;
  }

  .icon {
    padding: 10%;
  }

  .deploy {
    margin-left: -10px;
  }

  .dev-text p{
    color: white;
    font-family: "Ubuntu",sans-serif;
    font-size: 18px;
  }
`;

const AboutDeveloper = ({ title, content, devLogos }) => {
  return (
    <Wrapper>

            <div id="developer" >
              <div className="container">
                <div className="row">
                  <h1 className="mt-5 do-as-developer">
                    What I Do As A <span> Developer? </span>
                  </h1>
                </div>
                <div className="row mt-5">
                  <div className="col-12 col-md-8 mx-auto">
                    <span className="dev-text">{ReactHtmlParser(content)}</span>
                  </div>
                </div>
                <div className="row">
                {React.Children.toArray(devLogos?.map((logo) => (
                    <div className="col-4 icon">
                      <img className="img-fluid" src={`http://localhost:8000${logo?.developmentLogo?.rendition?.url}`} alt="" />
                      <h1 className="full-stack">Frontend</h1>
                    </div>
                )))}
                </div>
              </div>
            </div>
    </Wrapper>
  );
};

export default AboutDeveloper;
