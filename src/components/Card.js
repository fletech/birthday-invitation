import React from "react";
import styled from "styled-components";

const Card = ({ image, text, type, name }) => {
  return (
    <CardStyled>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="info-container">
        <p>{text}</p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 90%;
  height: 25vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: solid 1px #a4dbcf;

  border-radius: 2rem;
  margin: 1rem;
  padding: 1rem;

  @media (max-width: 500px) {
    height: 25vh;
    padding: 1rem;
  }

  div.info-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    p {
      margin-left: 1rem;
      padding-left: 0.5rem;
      font-size: 0.9rem;
      color: #424242;
      text-align: center;
    }
  }
  div.image-container {
    width: 40%;
    img {
      width: 100%;
    }
  }
`;
export default Card;
