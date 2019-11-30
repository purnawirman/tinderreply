import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Paper,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Select
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
    // height:
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
  }
}));

export default function Voting({ image }) {
  const classes = useStyles();
  console.log(process.env.PUBLIC_URL + "/static/messages/Snip20191130_25.png");
  return (
    <Grid container sm={12} className={classes.root} spacing={1}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <FormControl className={classes.formControl}>
            <InputLabel id="task-type">Task Type</InputLabel>
            <Select labelId="task-type" id="task-type" value={2}>
              <MenuItem value={1}>Vote response</MenuItem>
              <MenuItem value={2}>Give response</MenuItem>
            </Select>
          </FormControl>

          <Card className={classes.card}>
            <CardActionArea>
              <img src="http://placekitten.com/200/300" />
              <CardContent>
                <Typography gutterBottom variant="body2">
                  Messages
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>Votes</Paper>
      </Grid>
    </Grid>
  );
}
