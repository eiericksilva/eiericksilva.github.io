import React from "react";
import { Container, Section, ContainerSkills, ContainerCard } from "./MySkills";
import mongo from "../../assets/images/skills/mongodb.png";
import express from "../../assets/images/skills/express.png";
import node from "../../assets/images/skills/node.png";
import firebase from "../../assets/images/skills/firebase.png";
import vitest from "../../assets/images/skills/vitest.png";
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import javascript from "../../assets/images/skills/javascript.png";
import reactjs from "../../assets/images/skills/react.png";
import styled from "../../assets/images/skills/styled.png";

const MySkills = () => {
  return (
    <>
      <Container>
        <h1>Minhas Habilidades</h1>
        <Section>
          <h2>Front-End</h2>
          <hr />
          <ContainerSkills>
            <ContainerCard>
              <h3>HTML</h3>
              <img src={html} alt="HTML" />
            </ContainerCard>
            <ContainerCard>
              <h3>CSS</h3>
              <img src={css} alt="CSS" />
            </ContainerCard>
            <ContainerCard>
              <h3>JavaScript</h3>
              <img src={javascript} alt="JavaScript" />
            </ContainerCard>
            <ContainerCard>
              <h3>ReactJS</h3>
              <img src={reactjs} alt="ReactJS" />
            </ContainerCard>
            <ContainerCard>
              <h3>Styled-Components</h3>
              <img src={styled} alt="Styled-Components" />
            </ContainerCard>
          </ContainerSkills>
        </Section>
        <Section>
          <h2>Back-End</h2>
          <hr />
          <ContainerSkills>
            <ContainerCard>
              <h3>MongoDB</h3>
              <img src={mongo} alt="MongoDB" />
            </ContainerCard>
            <ContainerCard>
              <h3>Express</h3>
              <img src={express} alt="Express" />
            </ContainerCard>
            <ContainerCard>
              <h3>NodeJS</h3>
              <img src={node} alt="NodeJS" />
            </ContainerCard>
            <ContainerCard>
              <h3>Firebase</h3>
              <img src={firebase} alt="Firebase" />
            </ContainerCard>
            <ContainerCard>
              <h3>Vitest</h3>
              <img src={vitest} alt="Vitest" />
            </ContainerCard>
          </ContainerSkills>
        </Section>
      </Container>
    </>
  );
};

export default MySkills;
