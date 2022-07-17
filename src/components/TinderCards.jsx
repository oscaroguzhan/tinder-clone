import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { useState } from "react";

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
  const [people, setPeople] = useState([
    {
      name: "Rivaldo",
      url: "https://scontent.fmmx3-1.fna.fbcdn.net/v/t39.30808-6/292804663_10159722971406201_789317216826390673_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=3rkStdtX1tQAX9hMksR&_nc_ht=scontent.fmmx3-1.fna&oh=00_AT8P2MFSO2ygPYzyVxO0o7lJTXH2McUA2Mq3Y6cOxvdt0Q&oe=62D8FCED",
    },
    {
      name: "Ronaldinho",
      url: "https://scontent.fmmx3-1.fna.fbcdn.net/v/t39.30808-6/292449676_10159722971491201_8445605123795223527_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=hbDKs7CdnWoAX90Un1k&_nc_ht=scontent.fmmx3-1.fna&oh=00_AT-IUlx4zByZvWND3HgWpfZay-fd36JEa59OpanE9Rc2hQ&oe=62D93792",
    },
    {
      name: "Neymar",
      url: "https://scontent.fmmx3-1.fna.fbcdn.net/v/t39.30808-6/292786763_10159722971516201_9023871402152617661_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=WkfXbiu_9R0AX-64XB5&_nc_ht=scontent.fmmx3-1.fna&oh=00_AT_zkICFSQvB3QnL35Lb_oKIz79vON-R1NGCf08hvWckvg&oe=62D9EF6A",
    },
    {
      name: "Ronaldo",
      url: "https://scontent.fmmx3-1.fna.fbcdn.net/v/t39.30808-6/292517862_10159722971401201_3301714747319099208_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=iHFmdFlOG_kAX8gDUWW&_nc_ht=scontent.fmmx3-1.fna&oh=00_AT8m7e3xBzFDPBKN6M-JoZIVH_fVKGV9t1PLdPRrn6IjRQ&oe=62DA3B73",
    },
  ]);

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
