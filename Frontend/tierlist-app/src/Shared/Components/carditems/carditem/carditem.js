import { useDraggable } from "@dnd-kit/core";
import styles from "./carditem.css";
import { Button, Input, TextField, Divider, Grid, Paper } from "@mui/material";

function CardItem(props) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    if (props.addItem == "true") {
        return (
        <div className="cardItem">
            <h4 style={{margin: "0", marginTop: "10px"}}>+</h4>
        </div>
        );
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} draggable="true" className="cardItemAdded">
          <p style={{margin: "0", marginTop: "5px", fontSize: "17px", zIndex: '1000'}}>{props.content}</p>
        </div>
      );
}

export default CardItem;