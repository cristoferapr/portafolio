import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        background: "linear-gradient(135deg, #1e1e2f, #343444)",
        color: "#fff",
      }}
    >
      {/* Opciones a la izquierda */}
      <div
        style={{
          flex: "0 0 20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "20px",
          gap: "20px",
        }}
      >
        <motion.a
          href="#about"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.1 }}
        >
          Sobre mí
        </motion.a>
        <motion.a
          href="#projects"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.1 }}
        >
          Proyectos
        </motion.a>
        <motion.a
          href="#contact"
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.1 }}
        >
          Contacto
        </motion.a>
      </div>

      {/* Contenido Principal */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "3.5rem",
            margin: "0",
            color: "#fff",
          }}
        >
          Bienvenido a mi Portafolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "1.5rem",
            marginTop: "20px",
            color: "#fff",
          }}
        >
          Diseño. Innovación. Creatividad.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
