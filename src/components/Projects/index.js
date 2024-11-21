import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";
import { getDatabase, ref, onValue } from "firebase/database";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;
  ${({ active, theme }) => active && `background-color: ${theme.primary + 20};`}
  &:hover {
    background-color: ${({ theme }) => theme.primary + 80};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [Projects, setProjects] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const ProjectsRef = ref(db, "Projects");
    onValue(ProjectsRef, (snapshot) => {
      const data = snapshot.val();
      setProjects(data);
    });
  }, []);
  return (
    <Container id="projects">
      <Wrapper>
        <Title>{Projects.pro1}</Title>
        <Desc>{Projects.pro2}</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              {Projects.pro3}
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              {Projects.pro4}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web designer" ? (
            <ToggleButton
              active
              value="web designer"
              onClick={() => setToggle("web designer")}
            >
              {Projects.pro5}
            </ToggleButton>
          ) : (
            <ToggleButton
              value="web designer"
              onClick={() => setToggle("web designer")}
            >
              {Projects.pro6}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              {Projects.pro7}
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              {Projects.pro8}
            </ToggleButton>
          )}
          <Divider />
          {toggle === "dekstop application" ? (
            <ToggleButton
              active
              value="dekstop application"
              onClick={() => setToggle("dekstop application")}
            >
              {Projects.pro9}
            </ToggleButton>
          ) : (
            <ToggleButton
              value="dekstop application"
              onClick={() => setToggle("dekstop application")}
            >
              {Projects.pro10}
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
