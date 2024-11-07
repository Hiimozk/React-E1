import React, { useState } from "react";
import Card from "./Card";

function App() {

  //getters y setters
  const [getColor, setGetColor] = useState("");
  const [getDescription, setGetDescription] = useState("");
  const [getError, setGetError] = useState("");
  const [getSubmittedData, setGetSubmittedData] = useState(null);
  //cambiantes
  const handleColorChange = (e) => setGetColor(e.target.value);
  const handleDescriptionChange = (e) => setGetDescription(e.target.value);

  const handleSubmit = (e) => {  //validaciones aca
    e.preventDefault();
    setGetSubmittedData(null);// para borrar si es incorrecto

    if (getColor.length < 3 || getColor.startsWith(" ")) {
      setGetError("Por favor chequea que la informacion sea correcta.");
      return;
    }
    if (getDescription.length < 6) {
      setGetError("Por favor chequea que la informacion sea correcta.");
      return;
    }

    setGetError("");
    setGetSubmittedData({ color: getColor, description: getDescription });
  };

  return (
    <div className="App" style={styles.appContainer}>
      <h1 style={styles.title}>Elige un color</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Color Favorito:</label>
          <input
            type="text"
            value={getColor}
            onChange={handleColorChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Descripcion:</label>
          <input
            type="text"
            value={getDescription}
            onChange={handleDescriptionChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>

      {getError && <p style={styles.error}>{getError}</p>}

      {getSubmittedData && (
        <Card color={getSubmittedData.color} description={getSubmittedData.description} />
      )}
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
  },
  inputContainer: {
    marginBottom: "15px",
    width: "100%",
  },
  label: {
    display: "block",
    fontSize: "16px",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginTop: "15px",
  },
};

export default App;
