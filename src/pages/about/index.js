import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 100,
        position: "absolute",
        width: "76%",
        background: "lightblue",
        border: "3px solid #1e88e5",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px",
        textAlign: "center"
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <Container className={classes.paper}>
            <h1><b>ADMIN PANEL FOR CONFIGS</b></h1>
            <h3 style={{ textDecoration: "underline" }}>Used technologies:</h3>
            <h3>JS</h3>
            <h3>React</h3>
            <h3>Redux</h3>
            <h3>Saga</h3>
            <h3>Material UI</h3>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>MirageJS</h3>
            <h3>Faker</h3>
        </Container>
    );
};

export default About;