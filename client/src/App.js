import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDisptach } from "react-redux";

import { getPosts } from "./actions/Posts.js";
import Posts from "./components/Posts/Posts.js"
import useStyles from "./styles.js";
import memories from "./images/memories.png"
import Form from "./components/Form/Form.js";

const App = () => {
    const classes = useStyles();
    const disptach = useDisptach();

    useEffect(() => {
        disptach(getPosts());
    }, [dispatch])
    return (
        <Container Maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItem="stretch" spacing={100}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>    
    )
}

export default App;

