import react, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    axios
      .get("/api/hello")
      // .get("http://localhost:3001/api/hello")
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div>
      <h1>Setting up CI/CD</h1>
      <h2>{message}</h2>
    </div>
  );
};

export default App;
