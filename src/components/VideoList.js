import React from "react";
// import { Grid, Paper, Typography } from "@material-ui/core";
import VideoItem from "./VideoItem";
export default function VideoList({ videos }) {
  const list_videos = videos.map((video) => <VideoItem video={video} />);
  return list_videos;
}
