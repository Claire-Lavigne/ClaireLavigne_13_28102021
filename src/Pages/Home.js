import React from "react";
import datas from "../datas";
import Nav from "../Components/Nav";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <SCHero>
          <SCHeroContent>
            <h2 className="sr-only">Promoted Content</h2>
            <SCHeroSubtitle>No fees.</SCHeroSubtitle>
            <SCHeroSubtitle>No minimum deposit.</SCHeroSubtitle>
            <SCHeroSubtitle>High interest rates.</SCHeroSubtitle>
            <SCHeroText>
              Open a savings account with Argent Bank today!
            </SCHeroText>
          </SCHeroContent>
        </SCHero>
        <SCFeatures>
          <h2 className="sr-only">Features</h2>
          {datas.features.map((item, index) => (
            <Feature
              key={index}
              imgURL={item.imgURL}
              imgALT={item.imgALT}
              title={item.title}
              text={item.text}
            />
          ))}
        </SCFeatures>
      </main>
      <Footer />
    </>
  );
};

export default Home;

const SCHero = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/bank-tree.jpeg"});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const SCHeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const SCHeroSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const SCHeroText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const SCFeatures = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;
