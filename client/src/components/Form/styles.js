import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: '15px',
    },
  },
  paper: {
    padding: '16px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    marginLeft: '15px'
  },
  buttonSubmit: {
    marginBottom: '10px !important',
  },
  
}));