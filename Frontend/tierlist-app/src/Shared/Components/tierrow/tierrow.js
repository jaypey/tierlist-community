import { DndContext } from "@dnd-kit/core";
import styles from "./tierrow.css";
import { Button, Input, TextField, Divider, Grid } from "@mui/material";
import DroppableRow from "../droppablerow/droppablerow";

function TierRow(props) {

    const letterStyle = {
        backgroundColor: props.backgroundColor
    };

    return (
        <Grid container>
            <Grid item xs={2} style={letterStyle} className="tierLetter">
                <h4>{props.letter}</h4>
            </Grid>
            <DroppableRow linkedItems={props.linkedItems} id={props.letter}></DroppableRow>
        </Grid>
    );
}

export default TierRow;