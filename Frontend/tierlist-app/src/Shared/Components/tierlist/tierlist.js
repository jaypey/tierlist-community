import { DndContext } from "@dnd-kit/core";
import styles from "./tierlist.css";
import { Button, Input, TextField, Divider, Grid } from "@mui/material";
import TierBoard from "../tierboard/tierboard";
import CardItems from "../carditems/carditems";
import { useState } from "react";

function TierList() {

    const [items, setItems] = useState([
        {id: 'S', cards: [] },
        {id: 'A', cards: [] },
        {id: 'B', cards: [] },
        {id: 'C', cards: [] },
        {id: 'D', cards: [] },
        {id: 'E', cards: [] },
        {id: 'F', cards: [] },
    ])

    const [cards, setCards] = useState([{id:'1', content: 'TEST BLA'}]);

    return (
        <Grid container rowSpacing={1}>
            <DndContext onDragEnd={handleDragEnd}>
                <Grid item xs={12}>
                    <TierBoard items={items}></TierBoard>
                </Grid>
                <Grid item xs={12}>
                    <CardItems cards={cards}></CardItems>
                </Grid>
            </DndContext>
        </Grid>
    );

    function handleDragEnd(event){
        const newlist = items.map((elem) => {
            if(elem.id === event.over.id){
                const card = cards.filter(function(x) { return x.id == event.active.id})
                return {id: elem.id, cards: [...elem.cards, card]};
            }else{
                return elem;
            }
        });
        setItems(newlist);
        setCards(cards.filter(function(x) {return x.id != event.active.id}))
        const {over} = event;
    }
}

export default TierList;