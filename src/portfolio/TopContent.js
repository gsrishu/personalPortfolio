import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./PortfolioIndex.css";
export default class TopContent extends React.Component {
  render() {
    return (
      <div class="containerFirst">
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                width: 400,
                height: 240,
              }}
              className="InfoBox1"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          justifyContent="flex-end"
          spacing={2}
          className="rightInfoBox"
        >
          <Box
            sx={{
              width: 590,
              height: 38,
            }}
            className="MarqueeInfoBox1"
          >
            <marquee className="MarqueeContent1">Latest News</marquee>
          </Box>

          <Grid item xs={3.5}>
            <Box
              sx={{
                width: 200,
                height: 200,
              }}
              className="InfoBox2"
            />
          </Grid>
          <Grid item xs={3.25}>
            <Box
              sx={{
                width: 200,
                height: 200,
              }}
              className="InfoBox3"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
