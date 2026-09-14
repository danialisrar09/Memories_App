import React, { useState } from "react";
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from "@mui/material";


import useStyles from "./styles.js";


const  Form = () => {
    const [postData, setPostData ] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const clear = () => {

    }

    return (
        <Paper classes={classes.paper}>
            <form autoComplete="off" noValidate={classes.form} className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">Creating a Memory</Typography>
                
                <TextField name="Creator" variant="outlined" label="Creator" fullwidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.values})}   /> 
                <TextField name="title" variant="outlined" label="title" fullwidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.values})}    />
                <TextField name="message" variant="outlined" label="message" fullwidth value={postData.messsage} onChange={(e) => setPostData({...postData, message: e.target.values})}  />  
                <TextField name="tags" variant="outlined" label="tags" fullwidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.values})}    />
                
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/></div>
                
                <Button className={classes.buttonSubmit} variant="contained" type="submit" color="primary" size="large" fullWidth >Submit</Button>
                <Button variant="contained" onClick={clear} color="secondary" size="large" fullWidth >Clear</Button> 
            </form>
        </Paper>
    )
}

export default Form;