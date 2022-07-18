import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import axios from "../axios.js";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
const TinderCards = () => {
  const [people, setPeople] = useState([]);

  // useEffect to fetch data from database mongodb
  useEffect(() => {
    const fetchdata = async () => {
      const req = await axios.get("/tinder/card");
      setPeople(req.data);
    };
    fetchdata();
  }, []);
  //   define functions
  const swiped = (direction, nameToDelete) => {
    console.log(`Removing ${nameToDelete}`);
  };
  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };
  return (
    <StyledContainer>
      <StyledWrapper>
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

export default TinderCards;
