import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fade from "@material-ui/core/Fade";
import "./PortfolioIndex.css";
export default class TopContent extends React.Component {
  render() {
    return (
      <div class="containerFirst">
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={4}>
            <Fade in={"true"} appear="false" timeout={3000}>
              <Box
                sx={{
                  width: 400,
                  height: 240,
                }}
                className="InfoBox1"
              />
            </Fade>
          </Grid>
        </Grid>

        <Grid
          container
          justify="space-between"
          justifyContent="flex-end"
          spacing={2}
          className="rightInfoBox"
        >
          <Grid item xs={3.5}>
            <Fade in={"true"} appear="false" timeout={3000}>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                }}
                className="InfoBox2"
              />
            </Fade>
          </Grid>
          <Grid item xs={3.25}>
            <Fade in={"true"} appear="false" timeout={3000}>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                }}
                className="InfoBox3"
              />
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}
