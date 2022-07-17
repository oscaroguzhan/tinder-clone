import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 10vh;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const SwipeButtons = () => {
  return (
    <StyledContainer>
      <IconButton className="btn">
        <ReplayIcon fontSize="large" color="primary" />
      </IconButton>
      <IconButton className="btn">
        <CloseIcon fontSize="large" color="error" />
      </IconButton>
      <IconButton className="btn">
        <StarRateIcon fontSize="large" color="success" />
      </IconButton>
      <IconButton className="btn">
        <FavoriteIcon fontSize="large" color="error" />
      </IconButton>
      <IconButton className="btn">
        <FlashOnIcon fontSize="large" color="secondary" />
      </IconButton>
    </StyledContainer>
  );
};

export default SwipeButtons;
