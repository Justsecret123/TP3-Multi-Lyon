import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Peer from 'peerjs';
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

let peer;
let connection;

const start = (localId, remoteId) => {
    
    peer = new Peer(localId, {
        host: 'localhost',
        port: 3000,
        path: '/mypeer'
    });

    peer.on('open', function(localId) {
        console.log('My peer ID is: ' + localId);
    });

    connection = peer.connect(remoteId);


    peer.on('connection', function(connection) {
        connection.on('data', function(data) {
            console.log('Received', data);
            let chat = document.getElementById("chat"); 
            chat.value = [chat.value + "\n" +  data + "\n"];
        });
    
    });

}

function DataChat()  {

    //State
    const [localId, setLocalId] = React.useState(0);
    const [remoteId, setRemoteId] = React.useState(0);
    const [message, setMessage] = React.useState(0);
    const [messages, setMessages] = React.useState("");

    //Logic
    const initStart = () => {
        console.log("start ", localId, remoteId);
        start(localId, remoteId);
    };

    //Send avec ajout d'en-tête
    const send = () => {
        connection.send(localId + ": " + message + "\n");
        setMessages([...messages, localId + ": " + message]);
        let chat = document.getElementById("chat"); 
        chat.value = [chat.value + "\n" + localId + ": " + message  + "\n"];
    }

    const classes = useStyles();



    return (
        <div className={classes.root} id="App">
            <Grid container spacing={3}>       
                <Grid item xs={4}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Local id" onChange={(event) => setLocalId(event.target.value)} /> <br/>
                        <Button onClick={initStart}>Start <ChatBubbleOutlineIcon fontSize="small"/> </Button>
                    </form>
                </Grid>     
                <Grid item xs={4}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Remote chat id" onChange={(event) => setRemoteId(event.target.value)} /> <br/>
                        <Button>Call <PhoneInTalkIcon/> </Button>
                    </form>
                </Grid>     
                {/* <Grid item xs={3}>
                    <Button>Hang up</Button>
                </Grid>   */}
                <Grid item xs={4}>
                <TextField id="standard-basic" label="Message" onChange={(event) => setMessage(event.target.value)} /> <br/>
                    <Button onClick={send}>Send <SendIcon/> </Button>
                </Grid>   
                <Grid item xs={12}>
                    <h3> Chat : </h3>
                    <textarea id={"chat"} rows={32} readOnly/> 
                </Grid>
          </Grid>
        </div>
    )
}

export default DataChat