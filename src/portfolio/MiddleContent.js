import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./PortfolioIndex.css";
import Fade from "@material-ui/core/Fade";
export default class MiddleContent extends React.Component {
  render() {
    return (
      <Box component="div" sx={{ display: "block" }} style={{ margin: "36px" }}>
        <Grid container justify="space-between">
          <Grid item xs={3.5}>
            <Fade in={"true"} appear="false" timeout={3500}>
              <Box
                sx={{
                  width: 240,
                  height: 200,
                }}
                className="MiddleInfoBox1"
              />
            </Fade>
          </Grid>
          <Grid item xs={3.5}>
            <Fade in={"true"} appear="false" timeout={3500}>
              <Box
                sx={{
                  width: 240,
                  height: 200,
                }}
                className="MiddleInfoBox1"
              />
            </Fade>
          </Grid>
          <Grid item>
            <Fade in={"true"} appear="false" timeout={3500}>
              <Box
                sx={{
                  width: 400,
                  height: 200,
                }}
                className="MiddleInfoBox1"
              />
            </Fade>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
