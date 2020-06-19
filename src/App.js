import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "36d0d51f";
  const APP_KEY = "4c00071191fd0bf3d78df8044a6870e1";
  const exampleReq = useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
