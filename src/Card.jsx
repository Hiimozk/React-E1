import React from "react";

function Card({ color, description }) {
  return (
    <div style={styles.cardContainer}>
      <h2 style={styles.cardTitle}>Informacion ingresada:</h2>
      <p style={styles.cardText}><strong>Color:</strong> {color}</p>
      <p style={styles.cardText}><strong>Descripcion:</strong> {description}</p>
    </div>
  );
}

const styles = {
  cardContainer: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "left",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    color: "#333",
    fontSize: "20px",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "16px",
    color: "#555",
  },
};

export default Card;
