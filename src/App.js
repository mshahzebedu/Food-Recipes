import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import axios from "axios";
function App() {
  const [search, setSearch] = useState("chicken");
  const [recipies, setRecipies] = useState([]);
  const App_Id = "b9a97e3a";
  const App_Key = "f4ceae95dfed3177d2adce84606e5d9b	";

  useEffect(() => {
    getRecepies();
  }, []);

  const getRecepies = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${App_Id}&app_key=${App_Key}`
    );
    setRecipies(response.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  const onSearchRecpie = () => {
    getRecepies();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchRecpie={onSearchRecpie}
      />
      <div className="container">
        <Recipes recipies={recipies} />
      </div>
    </div>
  );
}

export default App;
