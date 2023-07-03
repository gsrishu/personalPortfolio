import React from "react";
import Grid from "@mui/material/Grid";
import "./PortfolioIndex.css";
export default class HeaderIndex extends React.Component {
  render() {
    return (
      <header>
        <Grid className="Header" container justify="space-between" spacing={2}>
          <Grid item xs={4}>
            <spam>Gaurav portfolio</spam>
          </Grid>
          <Grid item xs={1}>
            <spam>Home</spam>
          </Grid>
          <Grid item xs={1}>
            <spam>About</spam>
          </Grid>
          <Grid item xs={1}>
            <spam>Contact</spam>
          </Grid>
          <Grid item xs={3}>
            <spam>Works</spam>
          </Grid>
          <Grid item xs={2}>
            <spam>
              <a
                href="https://wpriverthemes.com/gridx/contact-info/"
                class="LetsTalk"
              >
                Let's talk
              </a>
            </spam>
          </Grid>
        </Grid>
      </header>
    );
  }
}
