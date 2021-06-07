import React from "react";
import styled from "styled-components";

const Invitation = ({ image, type, name }) => {
  return (
    <CardStyled className={type === "invitation" ? "invitation" : ""}>
      <div className="top">
        <div className="image-container">
          <img src={image} alt="" />
        </div>

        <div className="info-container">
          {type === "invitation" && (
            <div>
              <p>
                <span>{name}</span> come to celebrate my last twenties 🎉 🎊,
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="bottom">
        <p>
          <i className="fas fa-clock"></i> tomorrow, around 18:00 pm
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> at{" "}
          <a
            href="https://www.google.com/maps/place/60%C2%B043'34.2%22N+15%C2%B000'26.4%22E/@60.7261581,15.0051517,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d60.7261581!4d15.0073404?hl=es"
            target="_blank"
            rel="noreferrer"
          >
            home,
          </a>{" "}
          or outside depending on the weather.
        </p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 90%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: solid 1px #a4dbcf;

  border-radius: 2rem;
  margin: 1rem;
  padding: 1rem;
  &.invitation {
    border: solid 3px #75d3bf;
    width: 30%;
    height: auto;
    background-color: #d5fdf4;
    @media (max-width: 800px) {
      height: auto;
      width: 90%;
    }
  }

  @media (max-width: 500px) {
    height: 25vh;
    padding: 0.5rem;
  }
  .top {
    display: flex;
    justify-content: space-evenly;
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
        text-align: left;
      }
      i {
        color: #75d3bf;
      }
    }
    div.image-container {
      width: 40%;
      img {
        width: 100%;
      }
    }
  }

  .bottom {
    p {
      font-size: 0.9rem;
      color: #424242;
      text-align: center;
    }
    i {
      color: #75d3bf;
    }
  }
`;
export default Invitation;
