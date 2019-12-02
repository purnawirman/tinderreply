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
  Select,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { EmojiEmotions, ThumbUp, ThumbDown } from "@material-ui/icons";

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
    color: theme.palette.text.secondary,
    flexGrow: 1,
    height: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
  }
}));

export default function Voting({ comments }) {
  const classes = useStyles();

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
              <img src="http://placekitten.com/200/300" alt="message" />
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
        <Paper className={classes.paper}>
          <form>
            <FormControl className={classes.formControl}>
              <List>
                {comments.map(cm => {
                  return (
                    <ListItem>
                      <ListItemText primary={cm.text} />
                      <IconButton>
                        <ThumbUp />
                        {cm.like}
                      </IconButton>
                      <IconButton>
                        <EmojiEmotions />
                        {cm.funny}
                      </IconButton>
                      <IconButton>
                        <ThumbDown />
                        {cm.hate}
                      </IconButton>
                    </ListItem>
                  );
                })}
              </List>
            </FormControl>

            <TextField
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              label={"Add new comment here"}
            />

            <Button variant="contained"> Submit </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
