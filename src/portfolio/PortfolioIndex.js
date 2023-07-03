import React from "react";
import "./PortfolioIndex.css";
import HeaderIndex from "./HeaderIndex";
import TopContent from "./TopContent";
import MiddleContent from "./MiddleContent";
import BottomContent from "./BottomContent";
class PortfolioIndex extends React.Component {
  render() {
    return (
      <body className="BodyContent">
        <HeaderIndex />
        <TopContent />
        <MiddleContent />
        <BottomContent />
      </body>
    );
  }
}
export default PortfolioIndex;
