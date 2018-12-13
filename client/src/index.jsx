import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Rating from "./components/Rating.jsx";
import Description from "./components/Description.jsx";
import DetailsWithPrivateDining from "./components/DetailsWithPrivateDining.jsx";
import Details from "./components/Details.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null || this.props
    };
  }



  render() {
  
    if (this.props) {
      if (this.state.restaurant.private_dining) {
        return (
          <div className="container">
            <div>
              <h1 id="name">
                {this.props.name}
              </h1>
              <hr />
            </div>
            <div className="header">
              <Rating rating={this.props.aggregate_score} />
              <span className="topBar">
                {Number(this.props.aggregate_score).toFixed(1)}
              </span>
              <i className="far fa-comment-alt fa-lg fa-flip-horizontal" />
              <span className="topBar">
                {this.props.review_count} reviews
              </span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 -5 24 24"
                version="1.1"
              >
                <title>icon/ic_price_range</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="icon/ic_price_range">
                    <g id="ic_price_range">
                      <rect id="boundry" x="0" y="0" width="24" height="24" />
                      <rect
                        id="outside"
                        stroke="#333333"
                        strokeWidth="2"
                        x="3"
                        y="6"
                        width="18"
                        height="12"
                        rx="2"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="3"
                        y="6"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="18"
                        y="6"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="3"
                        y="15"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="10"
                        y="10"
                        width="4"
                        height="4"
                        rx="2"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="18"
                        y="15"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="topBar">
                {this.props.price_quantile}
              </span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 -5 24 24"
                version="1.1"
              >
                <title>icon/ic_cuisine</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="icon/ic_cuisine">
                    <g id="ic_cuisine">
                      <rect id="boundary" x="0" y="0" width="24" height="24" />
                      <path
                        d="M14.55,2 C14.2462434,2 14,2.24624339 14,2.55 L14,21 C14,21.5522847 14.4477153,22 15,22 L16,22 C16.5522847,22 17,21.5522847 17,21 L17,17 L18,17 C19.1045695,17 20,16.1045695 20,15 L20,7.45 C20,4.44004811 17.5599519,2 14.55,2 L14.55,2 Z M18,15 L16,15 L16,4.32 C17.2176535,4.88673047 17.9973291,6.10692278 18,7.45 L18,15 Z"
                        id="Shape"
                        fill="#333333"
                        fillRule="nonzero"
                      />
                      <path
                        d="M11,2 L6,2 C4.8954305,2 4,2.8954305 4,4 L4,11 C4,12.1045695 4.8954305,13 6,13 L7,13 L7,21 C7,21.5522847 7.44771525,22 8,22 L9,22 C9.55228475,22 10,21.5522847 10,21 L10,13 L11,13 C12.1045695,13 13,12.1045695 13,11 L13,4 C13,2.8954305 12.1045695,2 11,2 Z M11,11 L6,11 L6,4 L7,4 L7,8.5 C7,8.77614237 7.22385763,9 7.5,9 C7.77614237,9 8,8.77614237 8,8.5 L8,4 L9,4 L9,8.5 C9,8.77614237 9.22385763,9 9.5,9 C9.77614237,9 10,8.77614237 10,8.5 L10,4 L11,4 L11,11 Z"
                        id="Shape"
                        fill="#333333"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="topBar">{this.props.cuisine.slice(1,-3).split(',')[0]}</span>
            </div>
            <div id="ulTag">
              <span id="tag">Top Tags:</span>
              {this.props.tags.slice(1,-1).split(',').map((tag, index) => {
                return (
                  <li className="liTag" key={index}>
                    <div className="divTag">
                      <a className="aTag">{tag}</a>
                    </div>
                  </li>
                );
              })}
            </div>
            <div>
              <Description description={this.props.decriptions} />
            </div>
            <div>
              <DetailsWithPrivateDining restaurant={this.props} />
            </div>
          </div>
        );
      } else {
        return (
          <div className="container">
            <div>
              <h1 id="name">
                {this.props.name}
              </h1>
              <hr />
            </div>
            <div className="header">
              <Rating rating={this.props.aggregate_score} />
              <span className="topBar">
                {Number(this.props.aggregate_score).toFixed(1)}
              </span>
              <i className="far fa-comment-alt fa-lg fa-flip-horizontal" />
              <span className="topBar">
                {" "}
                {this.props.review_count} reviews
              </span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 -5 24 24"
                version="1.1"
              >
                <title>icon/ic_price_range</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="icon/ic_price_range">
                    <g id="ic_price_range">
                      <rect id="boundry" x="0" y="0" width="24" height="24" />
                      <rect
                        id="outside"
                        stroke="#333333"
                        strokeWidth="2"
                        x="3"
                        y="6"
                        width="18"
                        height="12"
                        rx="2"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="3"
                        y="6"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="18"
                        y="6"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="3"
                        y="15"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="10"
                        y="10"
                        width="4"
                        height="4"
                        rx="2"
                      />
                      <rect
                        id="line"
                        fill="#333333"
                        x="18"
                        y="15"
                        width="3"
                        height="3"
                        rx="0.5"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="topBar">
                {this.props.price_quantile}
              </span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 -5 24 24"
                version="1.1"
              >
                <title>icon/ic_cuisine</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="icon/ic_cuisine">
                    <g id="ic_cuisine">
                      <rect id="boundary" x="0" y="0" width="24" height="24" />
                      <path
                        d="M14.55,2 C14.2462434,2 14,2.24624339 14,2.55 L14,21 C14,21.5522847 14.4477153,22 15,22 L16,22 C16.5522847,22 17,21.5522847 17,21 L17,17 L18,17 C19.1045695,17 20,16.1045695 20,15 L20,7.45 C20,4.44004811 17.5599519,2 14.55,2 L14.55,2 Z M18,15 L16,15 L16,4.32 C17.2176535,4.88673047 17.9973291,6.10692278 18,7.45 L18,15 Z"
                        id="Shape"
                        fill="#333333"
                        fillRule="nonzero"
                      />
                      <path
                        d="M11,2 L6,2 C4.8954305,2 4,2.8954305 4,4 L4,11 C4,12.1045695 4.8954305,13 6,13 L7,13 L7,21 C7,21.5522847 7.44771525,22 8,22 L9,22 C9.55228475,22 10,21.5522847 10,21 L10,13 L11,13 C12.1045695,13 13,12.1045695 13,11 L13,4 C13,2.8954305 12.1045695,2 11,2 Z M11,11 L6,11 L6,4 L7,4 L7,8.5 C7,8.77614237 7.22385763,9 7.5,9 C7.77614237,9 8,8.77614237 8,8.5 L8,4 L9,4 L9,8.5 C9,8.77614237 9.22385763,9 9.5,9 C9.77614237,9 10,8.77614237 10,8.5 L10,4 L11,4 L11,11 Z"
                        id="Shape"
                        fill="#333333"
                        fillRule="nonzero"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              {/* <span className="topBar">{this.props.cuisine.slice(1).split(',')[0]}</span> */}
            </div>
            <div id="ulTag">
              <span id="tag">Top Tags:</span>
              {this.props.tags.slice(1,-2).split('').map((tag, index) => {
                return (
                  <li className="liTag" key={index}>
                    <div className="divTag">
                      <a className="aTag">{tag}</a>
                    </div>
                  </li>
                );
              })}
            </div>
            <div>
            
              <Description description={this.props.decriptions} />
            </div>
            <div>
              <Details restaurant={this.props} />
            </div>
          </div>
        );
      }
    } else {
      return <div> Loading... </div>;
    }
  }
}

export default Overview;

