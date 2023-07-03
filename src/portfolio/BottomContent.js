import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./PortfolioIndex.css";
export default class BottomContent extends React.Component {
  render() {
    return (
      <Box Component="div" sx={{ display: "block" }} className="Footer">
        <Box display="flex" justifyContent="center" alignItems="center">
          First Logo
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            Component="spam"
            sx={{ display: "inline" }}
            style={{ margin: "6px", "margin-right": "100px" }}
          >
            Home
          </Box>
          <Box
            Component="spam"
            sx={{ display: "inline" }}
            style={{ margin: "6px", "margin-right": "100px" }}
          >
            About
          </Box>
          <Box
            Component="spam"
            sx={{ display: "inline" }}
            style={{ margin: "6px", "margin-right": "100px" }}
          >
            Contact
          </Box>
          <Box Component="spam" sx={{ display: "inline" }}>
            Works
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            Component="spam"
            sx={{ display: "inline" }}
            style={{ margin: "6px", "margin-right": "20px" }}
          >
            Twitter Profile
          </Box>
          <Box
            Component="spam"
            sx={{ display: "inline" }}
            style={{ margin: "6px", "margin-right": "20px" }}
          >
            Git Hub
          </Box>
          <Box
            Component="spam"
            sx={{ display: "inline" }}
            style={{ margin: "6px", "margin-right": "20px" }}
          >
            LinkedIn
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ margin: "6px" }}
        >
          Copyright &copy;Gaurav Singh
        </Box>
      </Box>
    );
  }
}
