import styles from "./carditems.css";
import { Button, Input, TextField, Divider, Grid, Paper } from "@mui/material";
import CardItem from "./carditem/carditem";

function CardItems(props) {

    return (
      <Paper className="containerPaper" variant="oulined" elevation={2}>
        <Grid container>
            {props.cards.map((item) => (
                <CardItem addItem="false" id={item.id} content={item.content}></CardItem>
            ))}
            <CardItem addItem="true"></CardItem>
        </Grid>
      </Paper>
    );
}

export default CardItems;