import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "./App.css";
import Card from "./components/Card";

import fun from "./images/fun.svg";
import chef from "./images/chef.svg";
import goodTime from "./images/goodTime.svg";
import invite from "./images/invite.svg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  //Handlers
  const inputHandler = (e) => {
    return setInputValue(e.target.value);
  };
  const nameHandler = () => {
    if (inputValue.length !== 0) {
      let nameUpper = inputValue.toUpperCase();
      return setName(nameUpper);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (inputFocus) {
        if (e.key === "Enter") {
          nameHandler();
          setInputValue("");
        }
      }
      if (e.key === "Escape") {
        setInputValue("");
      }
    });
  });
  return (
    <AppStyled className="App">
      <Header>
        <h2>Hey, your name?</h2>
        <div className="input-field">
          <input
            onChange={(e) => inputHandler(e)}
            onFocus={() => setInputFocus(true)}
            type="text"
            value={inputValue}
            on
          />
          <button onClick={nameHandler}>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </Header>
      <MainStyled>
        {name.length === 0 && <h3>This tuesday is my birthday and...</h3>}
        {name.length !== 0 && (
          <Card type={"invitation"} image={invite} name={name} />
        )}

        <CardsStyled className="cards-container">
          <Card image={goodTime} text={"Let's have a good time!"} />
          <Card image={chef} text={"There will be food (veggie also),"} />
          <Card image={fun} text={"but beverage brought by yourself"} />
        </CardsStyled>
      </MainStyled>

      <a href="whatsapp://send?phone=5491164012523">
        <i className="fab fa-whatsapp"></i>
      </a>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 100vh;
  a {
    margin-bottom: 2rem;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 20vh;
  background-color: #75d3bf;
  h2 {
    margin: 0;
    color: white;
    font-family: "Staatliches", cursive;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  div.input-field {
    position: relative;
    width: 30%;
    min-width: 300px;
    border-radius: 3rem;
    background-color: white;
    overflow: hidden;
    input {
      width: 100%;
      border: none;
      line-height: 1.3rem;
      outline: none;
      padding: 0.5rem;
    }
    button {
      font-size: 1.3rem;
      position: absolute;
      top: 51%;
      right: 0rem;
      transform: translateY(-50%);
      color: #75d3bf;
      border: none;
      background: none;
      z-index: 10;
    }
  }
`;

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  h3 {
    color: #444;
  }
  p {
    span {
      color: #098a6e;
      font-weight: bold;
    }
  }
`;

const CardsStyled = styled.div`
  @media (min-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
  @media (min-width: 900px) {
    width: 80%;
    flex-direction: row;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
