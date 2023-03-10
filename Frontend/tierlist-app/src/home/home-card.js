import CardItems from "../Shared/Components/carditems/carditems";
import TierBoard from "../Shared/Components/tierboard/tierboard";
import TierList from "../Shared/Components/tierlist/tierlist";
import styles from "./home-card.css";
import { Button, Input, TextField, Divider, Grid } from "@mui/material";

function HomeCard() {

    return (
      <div className="homeMainCard">
        <Grid container spacing={1} >
          <Grid item xs={8}>
            <TextField className="roomNameInput" color="secondary" label="Room name"></TextField>
          </Grid>
          <Grid item xs={4}>
            <Button className="createRoomButton" color="secondary" variant="outlined">Create room</Button>
          </Grid>
          <Grid item xs={12}>
            <Divider dark />
          </Grid>
        </Grid>
        <TierList></TierList>
        
      </div>
    );
}

export default HomeCard;