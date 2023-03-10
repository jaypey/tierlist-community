import { DndContext, useDroppable } from "@dnd-kit/core";
import styles from "./droppablerow.css";
import { Button, Input, TextField, Divider, Grid } from "@mui/material";
import CardItem from "../carditems/carditem/carditem";

function DroppableRow(props) {
    const {isOver, setNodeRef} = useDroppable({
        id: props.id,
    });
    const style = {
        backgroundColor: '#121212',
        borderRadius: '10px',
        borderColor: isOver ? 'green' : '#121212',
        borderStyle: isOver ? 'solid' : 'none',
    };

    if (props.linkedItems.cards.length > 0) {
        return (
            <Grid item xs={10} ref={setNodeRef} style={style}>
                {props.linkedItems.cards.map((item) => (
                    <CardItem addItem="false" id={item[0].id} content={item[0].content}></CardItem>
                ))}
            </Grid>
        );
    }
    else{
        return (
            <Grid item xs={10} ref={setNodeRef} style={style}>
            </Grid>
        );
    }
}

export default DroppableRow;