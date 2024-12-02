const About = () => {
  const testimonials = [
    { name: "Juan", feedback: "¡Trabajo impresionante!" },
    { name: "Ana", feedback: "Muy profesional y creativo." },
    { name: "Luis", feedback: "Superó mis expectativas." },
  ];

  return (
    <Container>
      <h2>Testimonios</h2>
      <Slider>
        {testimonials.map((item, index) => (
          <Slide
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <p>"{item.feedback}"</p>
            <span>- {item.name}</span>
          </Slide>
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  padding: 100px 40px;
  background: #1e1e2f;
  color: white;
  text-align: center;

  h2 {
    margin-bottom: 40px;
  }
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Slide = styled(motion.div)`
  background: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  text-align: center;

  p {
    font-style: italic;
    margin-bottom: 10px;
  }

  span {
    color: #00e0ff;
  }
`;

export default About;
