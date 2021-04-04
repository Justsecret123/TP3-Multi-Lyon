import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Peer from 'peerjs';

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


const start = (localId, remoteId) => {
    
    const peer = new Peer(localId, {
        host: 'localhost',
        port: 3000,
        path: '/mypeer'
    });

    peer.on('open', function(localId) {
        console.log('My peer ID is: ' + localId);
    });

    var conn = peer.connect(remoteId);

    conn.on('open', function() {

        // Send messages
        const send = (text) => {
            conn.send(text);
        }

        // Receive messages
        conn.on('data', function(data) {
            console.log('Received', data);
        });

    });

}

function DataChat()  {

    const classes = useStyles();

    const [startAvailable, setStart] = React.useState(true)
    const [sendAvailable, setSend] = React.useState(false)
    const [hangupAvailable, setHangup] = React.useState(false)
    const [localId, setLocalId] = React.useState(0);
    const [remoteId, setRemoteId] = React.useState(0);


    return (
        // TODO rajouter les champs textes correspondants
        
        // Vous pouvez utiliser des TextField de material-UI
        // Et une Grid plutôt que des div pour la mise en page
        <div className={classes.root}>
            <Grid container spacing={3}>       
                <Grid item xs={4}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Local id" onChange={(event) => setLocalId(event.target.value)} /> <br/>
                        <Button onClick={start}>Start</Button>
                        {/* <Button onClick={start.send}>Send</Button> */}
                    </form>
                </Grid>     
                <Grid item xs={4}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Remote chat id" onChange={(event) => setRemoteId(event.target.value)} /> <br/>
                        <Button>Call</Button>
                    </form>
                </Grid>     
                <Grid item xs={4}>
                    <Button>Hang up</Button>
                </Grid>     
                <Grid item xs={12}>
                    <textarea></textarea>
                </Grid>
          </Grid>
        </div>
    )
}
export default DataChat