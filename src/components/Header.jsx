import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import TinderLogo from "../assets/img/tinderlogo.png";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../assets/img/ozzylogo.png";

const StyledContainer = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-around;
  z-index: 99;
  border-bottom: 2px solid #f9f9f9;
`;
const StyledImage = styled.img`
  object-fit: cover;
  height: 40px;
`;
const StyledLogo = styled.img`
  object-fit: cover;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
`;
const Link = styled.a``;
const Header = () => {
  return (
    <StyledContainer>
      <Link href="http://codeguruozzy.com">
        <StyledLogo src={logo} />
      </Link>
      <IconButton>
        <PersonIcon fontSize="large" />
      </IconButton>
      <StyledImage src={TinderLogo} />
      <IconButton>
        <ForumIcon fontSize="large" />
      </IconButton>
    </StyledContainer>
  );
};

export default Header;
