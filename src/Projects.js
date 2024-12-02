import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Container>
      <h2>Mis Proyectos</h2>
      <ProjectsGrid>
        {[1, 2, 3, 4].map((project, index) => (
          <Card
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={`https://via.placeholder.com/300?text=Proyecto+${project}`}
              alt={`Proyecto ${project}`}
            />
            <Content>
              <h3>Proyecto {project}</h3>
              <p>Descripción breve del proyecto.</p>
            </Content>
          </Card>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 40px;
  background-color: #1c1c1c;
  color: white;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.div)`
  background: #2d2d2d;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

export default Projects;
