import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MetaTags from "react-meta-tags";
import ReactHtmlParser from "react-html-parser";
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const WORK_QUERY = gql`
query {
        work {
            title
            description
          technology {
            technologypage {
              technologypage {
                softwareTitle
                description
              }
            }
          }
        }
}
`;

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  .progress {
    margin-bottom: 30px;
    height: 1.5rem;
  }
  h1 {
    font-family: "Archivo Black", sans-serif;
    color: white;
  }
  span {
    color: red;
  }
  .progress-bars {
    margin-top: 50px;
  }
  .tech {
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
    color: white;
  }
  h2,
  h5, p {
    color: white;
  }
  h2 {
    border-bottom: 3px solid red;
    display: inline-block;
  }
  .accordion-arrow {
    color: red;
    transform: rotate(90deg);
    margin-top: -5px;
  }
  .accordion-box {
    background-color: white;
    padding: 20px;
    p {
      color: black;
      font-family: "Ubuntu",sans-serif;
    }
  }
  .accordion-head:hover + .accordion-box {
      display: block !important;
    }
  
    .accordion-head:hover{
      cursor: pointer;
    }
  .accordion-box:hover {
      display: block !important;
    }
  .hr-line {
    background-color: white;
  }
  
`;

const Technologies = () => {

    const { data, loading } = useQuery(
        WORK_QUERY,
    );

    return (
        <Wrapper>
            <MetaTags>
                <meta property="og:url" content="http://www.kirannambiar.in/work" />
            </MetaTags>
            <div className="container">
                <div className="row my-2">
                    <h1>
                        What Do I <span> Work </span> On?
            </h1>
                </div>
                <div className="progress-bars">
                    {
                        data.work.map((node, index) => (
                            <div key={index}>
                                <h2 className="">{node.title}</h2>
                                <p>{ReactHtmlParser(node.description)}</p>
                                {node.technology[0].technologypage.technologypage.map((service) => (
                                    <div>
                                        <div className="d-inline-flex accordion-head py-3 pr-3"><h5 className="accordion-title">{service.softwareTitle}</h5><i class="fas fa-chevron-right accordion-arrow"></i></div>
                                        <div className="accordion-box d-none"><p>{ReactHtmlParser(service.description)}</p> </div>
                                    </div>
                                ))}
                                <hr className="hr-line my-5" />
                            </div>
                        ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default Technologies;
