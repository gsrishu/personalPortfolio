import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./PortfolioIndex.css";
export default class MiddleContent extends React.Component {
  render() {
    return (
      <Box component="div" sx={{ display: "block" }} style={{ margin: "36px" }}>
        <Grid container justify="space-between">
          <Grid item xs={3.5}>
            <Box
              sx={{
                width: 240,
                height: 200,
              }}
              className="MiddleInfoBox1"
            />
          </Grid>
          <Grid item xs={3.5}>
            <Box
              sx={{
                width: 240,
                height: 200,
              }}
              className="MiddleInfoBox1"
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 400,
                height: 200,
              }}
              className="MiddleInfoBox1"
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}
