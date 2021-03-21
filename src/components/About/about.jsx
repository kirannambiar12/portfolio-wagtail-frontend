import React from 'react'
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import MetaTags from "react-meta-tags";
import AboutIntro from "./AboutIntro";
import AboutDeveloper from "./AboutDeveloper";

const ABOUT_QUERY = gql`
query {
  about {
    id
    title
    content
    sideImage {
      rendition(format: "jpeg") {
        url
      }
    }
    developerTitle
    developerIntro
    aboutpage {
      developmentLogo {
        rendition(format: "png") {
          url
        }
      }
    }
  }
}
`;

const About = () => {

  const { data, loading } = useQuery(
    ABOUT_QUERY,
  );
  return (
    <>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/about" />
      </MetaTags>
      {React.Children.toArray(data?.about?.map((data) => (
        <>
          {console.log(data)}
          <AboutIntro title={data?.title} content={data?.content} sideImg={`http://localhost:8000${data?.sideImage?.rendition?.url}`} />
          <AboutDeveloper title={data?.developerTitle} content={data?.developerIntro} devLogos={data.aboutpage} />
        </>
      )))}
    </>
  )
}

export default About;
