import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={22}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer",
    flexDirection:'column'}}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ margin: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <br />
        <Typography
        style={{marginLeft:'3px'}}
        variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
        <br/>
      </Paper>
    </Grid>
  );
};
export default VideoItem;
