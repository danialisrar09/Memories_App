import React, { useState } from "react";
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from "@mui/material";

import { useDispatch } from 'react-redux'
import useStyles from "./styles.js";

import { createPost } from "../../actions/Posts.js";


const  Form = () => {
    const [postData, setPostData ] = useState({
        creator: '', 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: ''
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitting:", postData);

        dispatch(createPost({
            ...postData,
            tags: typeof postData.tags === 'string' ? postData.tags.split(',') : postData.tags, 
        }))
    }

    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });   
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate={classes.form} className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6" align="center">Creating a Memory</Typography>
                
                <TextField name="Creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}   /> 
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}    />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}  />  
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})}    />
                
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/></div>
                
                <Button className={classes.buttonSubmit} variant="contained" type="submit" color="primary" size="large" fullWidth >Submit</Button>
                <Button variant="contained" onClick={clear} color="secondary" size="large" fullWidth >Clear</Button> 
            </form>
        </Paper>
    )
}

export default Form;