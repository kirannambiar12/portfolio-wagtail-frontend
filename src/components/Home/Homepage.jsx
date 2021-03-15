import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const Wrapper = styled.section`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  background-image: url(${props => props.backgroundUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  animation: fadeIn 1s ease-in-out;

  .intro {
    font-family: "Roboto", sans-serif;
    transform: translateY(20%);
    animation: none;
    @media (max-width: 576px) {
      transform: translateY(130%);
    }
  }

  h1 {
    font-size: 8rem;
    font-weight: 600;
    white-space: nowrap;
    margin: auto;
    @media (max-width: 576px) {
      font-size: 16vw;
    }
  }

  .hello0:after {
    content: "Hello.";
    color: white;
    @media (max-width: 576px) {
      content: "About";
    }
  }

  .hello0:hover:after {
    content: "About";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .hello1:after {
    content: "I am";
    color: #ff0000;
    @media (max-width: 576px) {
      content: "Work";
    }
  }

  .hello1:hover:after {
    content: "Work";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .hello2:after {
    content: "Kiran";
    color: #ff0000;
    @media (max-width: 576px) {
      content: "Contact";
    }
  }

  .hello2:hover:after {
    content: "Contact";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .Typist {
    font-size: 25px;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
  }
`;

const HOMEPAGE_LINKS = gql`
query {
  homepage {
    title
    sideImage{
      file
      rendition(format: "jpeg") {
        url
      }
    }
    homepage {
      selectionTitle
      selectionHandle
    }
  }
}
`;

const Homepage = () => {

  const { data, error, loading } = useQuery(HOMEPAGE_LINKS);
  return (
    <>
      <MetaTags>
        <meta property="og:url" content="https://www.kirannambiar.in" />
      </MetaTags>
      {React.Children.toArray(data?.homepage.map((homeData) => (
    <Wrapper backgroundUrl={`http://localhost:8000${homeData.sideImage.rendition.url}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="intro">
                {homeData?.homepage?.map((link, i) => (
                  <>
                    <Link to={`/${link.selectionHandle}`}>
                      <h1 data-aos="slide-right" data-aos-delay={i * 1000} className={`hello${i}`}>
                      </h1>
                    </Link>

                  </>
                ))}
                <Typist
                  className="d-none d-md-block"
                  startDelay={3500}
                  avgTypingDelay={100}
                  hideWhenDone={false}
                  cursor={{ blink: true }}
                >
                  <span> I am a developer by profession. </span>
                  <Typist.Backspace count={30} delay={1000} />
                  <span>like to travel. </span>
                  <Typist.Backspace count={8} delay={1000} />
                  <span>take photographs. </span>
                  <Typist.Backspace count={30} delay={1000} />
                  <span>Click above to know more. </span>
                </Typist>
              </div>
            </div>
          </div>
        </div>
    </Wrapper>
      )))}
    </>
  );
};

export default Homepage;
