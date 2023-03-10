import styles from "./tierboard.css";
import { Button, Input, TextField, Divider, Grid } from "@mui/material";
import TierRow from "../tierrow/tierrow";
import { useState } from "react";

function TierBoard(props) {



    return (
      <Grid container rowGap={1}>
        <TierRow letter="S" backgroundColor="#ff3043" linkedItems={props.items.filter(obj => {
            return obj.id === "S"
            })[0]}></TierRow>
        <TierRow letter="A" backgroundColor="#fca574" linkedItems={props.items.filter(obj => {
            return obj.id === "A"
            })[0]}></TierRow>
        <TierRow letter="B" backgroundColor="#e2e264" linkedItems={props.items.filter(obj => {
            return obj.id === "B"
            })[0]}></TierRow>
        <TierRow letter="C" backgroundColor="#7d964c" linkedItems={props.items.filter(obj => {
            return obj.id === "C"
            })[0]}></TierRow>
        <TierRow letter="D" backgroundColor="#6bd5da" linkedItems={props.items.filter(obj => {
            return obj.id === "D"
            })[0]}></TierRow>
        <TierRow letter="E" backgroundColor="#dfa8d3" linkedItems={props.items.filter(obj => {
            return obj.id === "E"
            })[0]}></TierRow>
        <TierRow letter="F" backgroundColor="#ad8de0" linkedItems={props.items.filter(obj => {
            return obj.id === "F"
            })[0]}></TierRow>
      </Grid>
    );
}

export default TierBoard;