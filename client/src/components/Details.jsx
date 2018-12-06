import React from "react";
import Map from "./Map.jsx";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readDetails: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      readDetails: true
    });
  }

  render() {
    if (!this.state.readDetails) {
      console.log('IN details !state', this.props.restaurant)
      return (
        
        <div>
          <div id="table">
            <div id="section">
              <div className="row">
                <div className="column1">
                  <div className="row">
                    <div className="column2">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <rect width="24" height="24" />
                          <g transform="translate(3 2)">
                            <path
                              stroke="#333333"
                              strokeWidth="2"
                              d="M7.32550582,4.0945285 C7.84035094,4.03146621 8.39760374,4 9,4 C9.60239626,4 10.1596491,4.03146621 10.6744942,4.0945285 C10.8844525,3.77431614 11,3.39700119 11,3 C11,1.8954305 10.1045695,1 9,1 C7.8954305,1 7,1.8954305 7,3 C7,3.39700119 7.1155475,3.77431614 7.32550582,4.0945285 Z"
                            />
                            <path
                              stroke="#333333"
                              strokeWidth="2"
                              d="M16.027822,12.0000146 C16.0556944,6.52731707 13.7899702,4 9,4 C4.21002973,4 1.94431329,6.52731623 1.9722357,12.0000005 L16.027822,12.0000146 Z"
                            />
                            <path
                              fill="#333333"
                              d="M1.5,14 L16.5,14 L16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,15 L17,15 C17,15.5522847 16.5522847,16 16,16 L2,16 L2,16 C1.44771525,16 1,15.5522847 1,15 L1,14.5 L1,14.5 C1,14.2238576 1.22385763,14 1.5,14 Z"
                            />
                            <rect
                              width="2"
                              height="5"
                              x="8"
                              y="14"
                              fill="#333333"
                            />
                            <rect
                              width="6"
                              height="2"
                              x="6"
                              y="18"
                              fill="#333333"
                              rx=".5"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Dining style</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.dining_style}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
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
                              <rect
                                id="boundary"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
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
                    </div>
                    <div className="column3">
                      <span className="sectionName">Cuisines</span>
                      <br />
                      {this.props.restaurant.cuisine.slice(1,-2).split(',').map((food, index) => {
                        if (
                          index ===
                          this.props.restaurant.cuisine.slice(1,-2).split(',').length - 1
                        ) {
                          return (
                            <span className="sectionDescription" key={index}>{food}</span>
                          );
                        }
                        return (
                          <span className="sectionDescription" key={index}>{food}, </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_clock</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_clock">
                            <rect
                              id="boundry"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <circle
                              id="Oval"
                              stroke="#333333"
                              strokeWidth="2"
                              cx="12"
                              cy="12"
                              r="8"
                            />
                            <rect
                              id="Rectangle-3"
                              fill="#333333"
                              x="11"
                              y="7"
                              width="2"
                              height="6"
                              rx="0.5"
                            />
                            <rect
                              id="Rectangle-3"
                              fill="#333333"
                              x="11"
                              y="11"
                              width="4"
                              height="2"
                              rx="0.5"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Hours of operation</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.hour.map((hour, index) => {
                          return (
                            <li style={{ listStyleType: "none" }} key={index}>{hour}</li>
                          );
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_phone</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_phone">
                            <g id="ic_phone">
                              <rect
                                id="Rectangle-path"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <path
                                d="M3.6078908,10.550251 C2.61923908,11.0680258 1.99972271,12.0918108 1.99971837,13.2078404 L1.99971837,15.6072816 C1.99971837,16.1595664 2.44743362,16.6072816 2.99971837,16.6072816 L6.3793488,16.6072816 C6.82186328,16.6072816 7.21175771,16.3164463 7.33787494,15.892282 C7.82877775,14.2412802 8.56739585,13.2739483 9.74971837,13.2739483 L10.3982265,13.2739469 L10.9997198,13.2739459 C11.9349601,13.2739449 11.9349601,13.2739449 12.2508894,13.273949 C13.457624,13.275362 14.2165836,14.245409 14.6845206,15.8821632 C14.8072329,16.3113873 15.1995808,16.6072842 15.6460041,16.6072816 L18.9997184,16.6072816 C19.5520031,16.6072816 19.9997184,16.1595664 19.9997184,15.6072816 L19.9997184,13.2078497 C19.9997184,12.09182 19.3802043,11.0680343 18.3915552,10.5502559 C15.911882,9.25160463 13.451313,8.60728164 10.9997184,8.60728164 C8.54812677,8.60728164 6.08756091,9.25160303 3.6078908,10.550251 Z"
                                id="Shape"
                                stroke="#333333"
                                strokeWidth="2"
                                transform="translate(10.999718, 12.607282) rotate(-135.000000) translate(-10.999718, -12.607282) "
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Phone number</span>
                      <br />
                      <span className="sectionDescription">
                        {
                          this.props.restaurant
                            .display_phone
                        }
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_new_window</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_new_window">
                            <g id="ic_new_window">
                              <rect
                                id="boundary"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <path
                                d="M19.5,4 L14.5,4 C14.2238576,4 14,4.22385763 14,4.5 L14,5.5 C14,5.77614237 14.2238576,6 14.5,6 L16.59,6 L10.76,11.83 C10.6653437,11.9238833 10.6121008,12.0516812 10.6121008,12.185 C10.6121008,12.3183188 10.6653437,12.4461167 10.76,12.54 L11.47,13.25 C11.5638833,13.3446563 11.6916812,13.3978992 11.825,13.3978992 C11.9583188,13.3978992 12.0861167,13.3446563 12.18,13.25 L18,7.41 L18,9.5 C18,9.77614237 18.2238576,10 18.5,10 L19.5,10 C19.7761424,10 20,9.77614237 20,9.5 L20,4.5 C20,4.22385763 19.7761424,4 19.5,4 Z"
                                id="Shape"
                                fill="#333333"
                                fillRule="nonzero"
                              />
                              <path
                                d="M19.5,14 L18.5,14 C18.2238576,14 18,14.2238576 18,14.5 L18,18 L6,18 L6,6 L9.5,6 C9.77614237,6 10,5.77614237 10,5.5 L10,4.5 C10,4.22385763 9.77614237,4 9.5,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,14.5 C20,14.2238576 19.7761424,14 19.5,14 Z"
                                id="Shape"
                                fill="#333333"
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <div>Website</div>
                      <a className="hyperlink" href="www.amelie.com">
                        <span>
                          {this.props.restaurant.website}
                        </span>
                      </a>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_payment</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_payment">
                            <g id="ic_payment">
                              <rect
                                id="boundry"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <rect
                                id="Rectangle-10-Copy"
                                stroke="#333333"
                                strokeWidth="2"
                                x="3"
                                y="5"
                                width="18"
                                height="14"
                                rx="2"
                              />
                              <rect
                                id="Rectangle-13-Copy"
                                fill="#333333"
                                x="3"
                                y="8"
                                width="18"
                                height="4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Payment options</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.payment_options}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_dress_code</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_dress_code">
                            <g id="ic_dress_code">
                              <rect
                                id="boundary"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <path
                                d="M17.58,11.53 C17.4266401,11.1416536 17.3986659,10.7150477 17.5,10.31 L18.68,5.66 C18.9359464,4.6576009 18.3851789,3.62545408 17.41,3.28 L14,2.09 L13.68,3.09 C13.47,3.72 12.89,4.04 11.95,4.04 C11.01,4.04 10.45,3.72 10.24,3.1 L9.92,2.1 L6.59,3.28 C5.61955417,3.62512239 5.06991046,4.65083545 5.32,5.65 L6.49,10.3 C6.59133406,10.7050477 6.5633599,11.1316536 6.41,11.52 L3.08,20 L4.01,20.36 C6.55296711,21.3932302 9.265496,21.9459079 12.01,21.99 C14.7522514,21.9642714 17.4642871,21.4143968 20,20.37 L20.92,20 L17.58,11.53 Z M8.85,4.6 C9.60629927,5.55574661 10.7837814,6.07907199 12,6 C13.2152867,6.07388266 14.3904734,5.55157745 15.15,4.6 L16.74,5.16 L15.56,9.81 C15.56,9.87 15.56,9.93 15.56,10 L8.46,10 C8.46,9.94 8.46,9.88 8.46,9.81 L7.25,5.16 L8.85,4.6 Z M12.05,20 C9.87756989,19.9727298 7.72482585,19.5840868 5.68,18.85 L8.27,12.26 C8.27,12.17 8.32,12.09 8.35,12 L15.63,12 C15.63,12.09 15.63,12.17 15.71,12.26 L18.31,18.86 C16.3022506,19.5891869 14.1859133,19.9745901 12.05,20 L12.05,20 Z"
                                id="dress"
                                fill="#333333"
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Dress code</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.dress_code}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_chef</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="icon/ic_chef"
                            fillRule="nonzero"
                            fill="#333333"
                          >
                            <g
                              id="ic_chef"
                              transform="translate(3.000000, 3.000000)"
                            >
                              <g id="path0_stroke">
                                <path d="M9,2 C10.74753,2 11.2909,2.52203 11.5663,2.90067 C11.7569,3.15266 11.8773,3.44336 12.0477,3.77663 C12.1995,4.07263 12.4802,4.60816 13.0528,4.89443 L13.9472,3.10557 C14.0198,3.14184 13.988,3.17737 13.8273,2.864 C13.6852,2.58789 13.4931,2.15984 13.1837,1.724328 C12.4591,0.72797 11.2525,0 9,0 L9,2 Z M13.0528,4.89443 C13.3931,5.05914 13.813,5.17853 14.1705,5.29042 C14.531,5.40297 14.8325,5.50244 15.1211,5.67628 C15.5714,5.93891 16,6.36421 16,7.5 L18,7.5 C18,5.63579 17.1786,4.56109 16.1289,3.94872 C15.6675,3.68506 15.1565,3.50328 14.767,3.38146 C14.3745,3.25897 14.1069,3.19086 13.9472,3.10557 L13.0528,4.89443 Z M16,7.5 C16,8.58594 15.4906,9.2061 14.8598,9.73178 C14.5267,10.01122 14.1517,10.26122 13.8286,10.52865 C13.5618,10.75096 13,11.2399 13,12 L15,12 C15,12.2601 14.8132,12.3115 15.1089,12.0651 C15.3483,11.8638 15.7233,11.6138 16.1402,11.2682 C17.0094,10.5439 18,9.41406 18,7.5 L16,7.5 Z M13.5793,16 L4.49999,16 L4.49999,18 L13.5793,18 L13.5793,16 Z M4.99999,12 C4.99999,11.2399 4.4382,10.75097 4.17142,10.52866 C3.84829,10.26122 3.47329,10.01122 3.14018,9.73178 C2.50937,9.20611 2,8.58594 2,7.5 L0,7.5 C0,9.41406 0.99061891,10.54389 1.859807,11.2682 C2.2767,11.6138 2.65169,11.8638 2.89105,12.0651 C3.18677,12.3115 2.99999,12.2601 2.99999,12 L4.99999,12 Z M2,7.5 C2,6.36421 2.42864,5.93891 2.87887,5.67628 C3.16747,5.50244 3.46898,5.40297 3.82952,5.29042 C4.18699,5.17853 4.6069,5.05914 4.94721,4.89443 L4.05279,3.10557 C3.8931,3.19086 3.62551,3.25897 3.23298,3.38146 C2.84352,3.50328 2.33253,3.68506 1.871129,3.94872 C0.821361,4.56109 0,5.63579 0,7.5 L2,7.5 Z M4.94721,4.89443 C5.51975,4.60816 5.80052,4.07263 5.95232,3.77663 C6.12265,3.44336 6.24309,3.15266 6.43374,2.90067 C6.70911,2.52203 7.25247,2 9,2 L9,0 C6.74753,0 5.54089,0.72797 4.81626,1.724328 C4.50691,2.15984 4.31485,2.58789 4.17268,2.864 C4.01198,3.17737 3.98025,3.14184 4.05279,3.10557 L4.94721,4.89443 Z M4.99999,16.5 L4.99999,13 L2.99999,13 L2.99999,16.5 L4.99999,16.5 Z M4.99999,13 L4.99999,12 L2.99999,12 L2.99999,13 L4.99999,13 Z M13,12 C13,12.5 13,12.75 13,12.875 C13,12.9375 13,12.9688 13,12.9844 C13,12.9922 13,12.9961 13,12.998 C13,12.999 13,12.9995 13,12.9998 C13,12.9999 13,12.9999 13,13 C13,13 13,13 13,13 C13,13 13,13 13,13 C13,13 13,13 13,13 C13,13 13,13 13,13 C13,13 14,13 14,13 C14,13 15,13 15,13 C15,13 15,13 15,13 C15,13 15,13 15,13 C15,13 15,13 15,13 C15,13 15,13 15,13 C15,12.9999 15,12.9999 15,12.9998 C15,12.9995 15,12.999 15,12.998 C15,12.9961 15,12.9922 15,12.9844 C15,12.9688 15,12.9375 15,12.875 C15,12.75 15,12.5 15,12 L13,12 Z M13.0002,13.0227 L13.0794,16.5113 L15.0789,16.466 L14.9997,12.9773 L13.0002,13.0227 Z M3.99999,14 L14,14 L14,12 L3.99999,12 L3.99999,14 Z M13.5793,18 C14.4211,18 15.098,17.3075 15.0789,16.466 L13.0794,16.5113 C13.0731,16.2308 13.2987,16 13.5793,16 L13.5793,18 Z M4.49999,16 C4.77613,16 4.99999,16.2239 4.99999,16.5 L2.99999,16.5 C2.99999,17.3284 3.67156,18 4.49999,18 L4.49999,16 Z" />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Executive chef</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.executive_chef}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_catering</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_catering">
                            <g id="ic_catering">
                              <rect
                                id="boundry"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <g
                                id="Group-72"
                                transform="translate(3.000000, 4.000000)"
                              >
                                <path
                                  d="M1,11 L17,11 C17,6.581722 13.418278,3 9,3 C4.581722,3 1,6.581722 1,11 Z"
                                  id="Rectangle-61"
                                  stroke="#333333"
                                  strokeWidth="2"
                                />
                                <rect
                                  id="Rectangle-65"
                                  fill="#333333"
                                  x="0"
                                  y="13"
                                  width="18"
                                  height="2"
                                  rx="1"
                                />
                                <rect
                                  id="Rectangle-65"
                                  fill="#333333"
                                  x="6"
                                  y="14"
                                  width="6"
                                  height="2"
                                  rx="1"
                                />
                                <rect
                                  id="Rectangle-65"
                                  fill="#333333"
                                  x="7"
                                  y="0"
                                  width="4"
                                  height="4"
                                  rx="2"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Catering</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.catering}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_private_dining</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_private_dining">
                            <rect
                              id="Rectangle-77"
                              fill="#2D3339"
                              x="5"
                              y="19"
                              width="4"
                              height="2"
                              rx="0.5"
                            />
                            <path
                              d="M4,4 L4,11 C4,12.6568542 5.34314575,14 7,14 C8.65685425,14 10,12.6568542 10,11 L10,4 L4,4 Z"
                              id="Rectangle-77"
                              stroke="#2D3339"
                              strokeWidth="2"
                            />
                            <rect
                              id="Rectangle-77"
                              fill="#2D3339"
                              x="6"
                              y="14"
                              width="2"
                              height="6"
                              rx="0.5"
                            />
                            <rect
                              id="Rectangle-77"
                              fill="#2D3339"
                              x="15"
                              y="19"
                              width="4"
                              height="2"
                              rx="0.5"
                            />
                            <path
                              d="M14.3418861,8.19246067 L19.3418861,6.525794 C19.6038578,6.43847012 19.8870178,6.58005011 19.9743416,6.84202177 C19.9913361,6.893005 20,6.9463946 20,7.00013565 L20,7.9460431 C20,8.1612583 19.862285,8.35232772 19.6581139,8.42038475 L14.6581139,10.0870514 C14.3961422,10.1743753 14.1129822,10.0327953 14.0256584,9.77082365 C14.0086639,9.71984041 14,9.66645081 14,9.61270976 L14,8.66680232 C14,8.45158711 14.137715,8.26051769 14.3418861,8.19246067 Z"
                              id="Rectangle-77"
                              fill="#2D3339"
                            />
                            <path
                              d="M4.34188612,8.19246067 L9.34188612,6.525794 C9.60385778,6.43847012 9.88701776,6.58005011 9.97434165,6.84202177 C9.99133606,6.893005 10,6.9463946 10,7.00013565 L10,7.9460431 C10,8.1612583 9.86228495,8.35232772 9.65811388,8.42038475 L4.65811388,10.0870514 C4.39614222,10.1743753 4.11298224,10.0327953 4.02565835,9.77082365 C4.00866394,9.71984041 4,9.66645081 4,9.61270976 L4,8.66680232 C4,8.45158711 4.13771505,8.26051769 4.34188612,8.19246067 Z"
                              id="Rectangle-77"
                              fill="#2D3339"
                            />
                            <path
                              d="M14,4 L14,11 C14,12.6568542 15.3431458,14 17,14 C18.6568542,14 20,12.6568542 20,11 L20,4 L14,4 Z"
                              id="Rectangle-77"
                              stroke="#2D3339"
                              strokeWidth="2"
                            />
                            <rect
                              id="Rectangle-77"
                              fill="#2D3339"
                              x="16"
                              y="14"
                              width="2"
                              height="6"
                              rx="0.5"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">
                        Private party facilities
                      </span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.private_party_facilities}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_contact</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_contact">
                            <g id="ic_contact">
                              <rect
                                id="boundry"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <rect
                                id="outside"
                                stroke="#333333"
                                strokeWidth="2"
                                x="5"
                                y="4"
                                width="14"
                                height="16"
                                rx="2"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="3"
                                y="7"
                                width="4"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="3"
                                y="11"
                                width="4"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="3"
                                y="15"
                                width="4"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="9"
                                y="7"
                                width="7"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="9"
                                y="11"
                                width="7"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="9"
                                y="15"
                                width="7"
                                height="2"
                                rx="0.5"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Private party contact</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.private_party_contact_name}
                      </span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.private_party_contact_number}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="column1">
                  {/* <Map
                    latitude={
                      this.props.restaurant.coordinates
                        .latitude
                    }
                    longitude={
                      this.props.restaurant.coordinates
                        .longitude
                    }
                  /> */}
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_location</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_location">
                            <g id="ic_location">
                              <rect
                                id="boundary"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <path
                                d="M12,9 C12.5522847,9 13,9.44771525 13,10 C13,10.5522847 12.5522847,11 12,11 C11.4477153,11 11,10.5522847 11,10 C11,9.44771525 11.4477153,9 12,9 L12,9 Z M12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 Z"
                                id="Shape"
                                fill="#333333"
                                fillRule="nonzero"
                              />
                              <path
                                d="M12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.21 17.2,14 12,19.21 C6.8,14 6,11.21 6,10 C6,6.6862915 8.6862915,4 12,4 L12,4 Z M12,2 C7.581722,2 4,5.581722 4,10 C4,12.8133333 6.43333333,16.59 11.3,21.33 L11.3,21.33 C11.6888435,21.7111429 12.3111565,21.7111429 12.7,21.33 C17.5666667,16.59 20,12.8133333 20,10 C20,5.581722 16.418278,2 12,2 Z"
                                id="Shape"
                                fill="#333333"
                                fillRule="nonzero"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <div className="hyperlink">
                        {this.props.restaurant.display_address.map((
                          address, index) => {
                            return <span key={index}>{address} </span>;
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_neighborhood</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_neighborhood">
                            <g id="Group-81">
                              <rect
                                id="outside"
                                stroke="#333333"
                                strokeWidth="2"
                                x="4"
                                y="8"
                                width="8"
                                height="11"
                                rx="2"
                              />
                              <path
                                d="M12,18.9976974 L19,18.9976974 C19.5522847,18.9976974 20,18.5499821 20,17.9976974 L20,7.13007812 C20,6.77881527 19.8157012,6.45330845 19.5144958,6.2725852 L16.5144958,4.4725852 C16.1978134,4.28257577 15.8021866,4.28257577 15.4855042,4.4725852 L12.4855042,6.2725852 C12.1842988,6.45330845 12,6.77881527 12,7.13007812 L12,18.9976974 Z"
                                id="outside"
                                stroke="#333333"
                                strokeWidth="2"
                              />
                              <rect
                                id="Rectangle-75"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="7"
                                y="11"
                                width="2"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="7"
                                y="14"
                                width="2"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="15"
                                y="11"
                                width="2"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="15"
                                y="14"
                                width="2"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="line"
                                fill="#333333"
                                x="15"
                                y="8"
                                width="2"
                                height="2"
                                rx="0.5"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Neighborhood</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.neighborhood}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_cross_street</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_cross_street">
                            <g id="ic_cross_street">
                              <rect
                                id="boundry"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="9"
                                y="3"
                                width="2"
                                height="5"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="9"
                                y="16"
                                width="2"
                                height="5"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="14"
                                y="3"
                                width="2"
                                height="3"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="14"
                                y="8"
                                width="2"
                                height="3"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="14"
                                y="13"
                                width="2"
                                height="3"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="14"
                                y="18"
                                width="2"
                                height="3"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-42"
                                fill="#333333"
                                x="19"
                                y="3"
                                width="2"
                                height="18"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-57"
                                fill="#333333"
                                x="3"
                                y="6"
                                width="7"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-57"
                                fill="#333333"
                                x="8"
                                y="11"
                                width="3"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-57"
                                fill="#333333"
                                x="3"
                                y="11"
                                width="3"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-57"
                                fill="#333333"
                                x="3"
                                y="16"
                                width="7"
                                height="2"
                                rx="0.5"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Cross street</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.cross_street}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_parking_details</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_parking_details">
                            <rect
                              id="boundry"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            />
                            <circle
                              id="Oval"
                              stroke="#333333"
                              strokeWidth="2"
                              cx="12"
                              cy="12"
                              r="8"
                            />
                            <rect
                              id="Rectangle-3"
                              fill="#333333"
                              x="9"
                              y="8"
                              width="2"
                              height="8"
                              rx="1"
                            />
                            <rect
                              id="Rectangle-3"
                              fill="#333333"
                              x="13"
                              y="8"
                              width="2"
                              height="5"
                              rx="1"
                            />
                            <path
                              d="M10,8 L14,8 L14,9.5 L14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L10.5,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 L10,8 Z"
                              id="Rectangle-3"
                              fill="#333333"
                            />
                            <path
                              d="M10.5,11 L13.5,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 L14,13 L10.5,13 L10.5,13 C10.2238576,13 10,12.7761424 10,12.5 L10,11.5 L10,11.5 C10,11.2238576 10.2238576,11 10.5,11 Z"
                              id="Rectangle-3"
                              fill="#333333"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Parking details</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.parking_details}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_public_transit</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_public_transit">
                            <g id="ic_public_transit">
                              <rect
                                id="boundry"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <g
                                id="Group-71"
                                transform="translate(4.000000, 2.000000)"
                              >
                                <g id="Group-70">
                                  <path
                                    d="M3,2 C1.8954305,2 1,2.8954305 1,4 L1,16 C1,16.5522847 1.44771525,17 2,17 L14,17 C14.5522847,17 15,16.5522847 15,16 L15,4 C15,2.8954305 14.1045695,2 13,2 L3,2 Z"
                                    id="Rectangle-62"
                                    stroke="#333333"
                                    strokeWidth="2"
                                  />
                                  <rect
                                    id="Rectangle-63"
                                    fill="#333333"
                                    x="3"
                                    y="0"
                                    width="10"
                                    height="3"
                                    rx="1.5"
                                  />
                                  <rect
                                    id="Rectangle-63"
                                    fill="#333333"
                                    x="1"
                                    y="9"
                                    width="14"
                                    height="2"
                                    rx="1"
                                  />
                                  <rect
                                    id="Rectangle-64"
                                    fill="#333333"
                                    x="3"
                                    y="16"
                                    width="3"
                                    height="4"
                                    rx="1"
                                  />
                                  <rect
                                    id="Rectangle-64"
                                    fill="#333333"
                                    x="3"
                                    y="12"
                                    width="3"
                                    height="3"
                                    rx="1.5"
                                  />
                                  <rect
                                    id="Rectangle-64"
                                    fill="#333333"
                                    x="10"
                                    y="16"
                                    width="3"
                                    height="4"
                                    rx="1"
                                  />
                                  <rect
                                    id="Rectangle-64"
                                    fill="#333333"
                                    x="10"
                                    y="12"
                                    width="3"
                                    height="3"
                                    rx="1.5"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Public transit</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.public_transit}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_entertainment</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_entertainment">
                            <g id="ic_entertainment">
                              <rect
                                id="boundary"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <g
                                id="Group-75"
                                transform="translate(3.000000, 3.000000)"
                              >
                                <rect
                                  id="Rectangle-61"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  x="1"
                                  y="1"
                                  width="16"
                                  height="16"
                                  rx="2"
                                />
                                <circle
                                  id="Oval-8"
                                  fill="#333333"
                                  cx="7.5"
                                  cy="11.5"
                                  r="2.5"
                                />
                                <path
                                  d="M9.375,4 L10.3672178,4 L10.3672178,4 C10.6433602,4 10.8672178,4.22385763 10.8672178,4.5 C10.8672178,4.52073251 10.8659283,4.54144495 10.8633567,4.56201737 L9.98835672,11.5620174 L9.98835672,11.5620174 C9.95707992,11.8122318 9.74437942,12 9.49221778,12 L8.5,12 L8.5,12 C8.22385763,12 8,11.7761424 8,11.5 C8,11.4792675 8.00128951,11.458555 8.00386106,11.4379826 L8.87886106,4.43798263 L8.87886106,4.43798263 C8.91013786,4.18776822 9.12283837,4 9.375,4 Z"
                                  id="Rectangle-66"
                                  fill="#333333"
                                />
                                <rect
                                  id="Rectangle-66"
                                  fill="#333333"
                                  x="9"
                                  y="4"
                                  width="4"
                                  height="2"
                                  rx="0.5"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Entertainment</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.entertainment}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <title>icon/ic_special_events</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g
                          id="Symbols"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g id="icon/ic_special_events">
                            <g id="ic_special_events">
                              <rect
                                id="boundary"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                              />
                              <rect
                                id="Rectangle-10-Copy"
                                stroke="#333333"
                                strokeWidth="2"
                                x="4"
                                y="6"
                                width="16"
                                height="14"
                                rx="2"
                              />
                              <rect
                                id="Rectangle-13-Copy"
                                fill="#333333"
                                x="3"
                                y="9"
                                width="18"
                                height="2"
                              />
                              <rect
                                id="Rectangle-13-Copy"
                                fill="#333333"
                                x="9"
                                y="14"
                                width="6"
                                height="2"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-13-Copy"
                                fill="#333333"
                                x="11"
                                y="12"
                                width="2"
                                height="6"
                                rx="0.5"
                              />
                              <rect
                                id="Rectangle-6"
                                fill="#333333"
                                x="7"
                                y="3"
                                width="2"
                                height="4"
                                rx="1"
                              />
                              <rect
                                id="Rectangle-6"
                                fill="#333333"
                                x="15"
                                y="3"
                                width="2"
                                height="4"
                                rx="1"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">
                        Special events and promotions
                      </span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.special_events_promotions}
                      </span>
                      <br />
                    </div>
                  </div>
                  <div className="row">
                    <div className="column2">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <rect width="24" height="24" />
                          <g transform="rotate(45 5.374 17.754)">
                            <path
                              stroke="#333333"
                              strokeWidth="2"
                              d="M1,4.23686384 L1,16 C1,16.5522847 1.44771525,17 2,17 L10,17 C10.5522847,17 11,16.5522847 11,16 L11,4.31096383 L9.65103691,1.55975554 C9.48305062,1.21714773 9.134734,1 8.75315896,1 L3.23618407,1 C2.85738175,1 2.5110964,1.21403622 2.34171932,1.55286154 L1,4.23686384 Z"
                            />
                            <rect
                              width="4"
                              height="4"
                              x="4"
                              y="4"
                              fill="#333333"
                              rx="2"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="column3">
                      <span className="sectionName">Additional</span>
                      <br />
                      <span className="sectionDescription">
                        {this.props.restaurant.additional}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="transparentDetails" />
          </div>
          <div id="details">
            <button onClick={this.handleClick} id="detailsBtn">
              <span id="detailsBtnWords">View all details</span>
            </button>
          </div>
        </div>
      );
    } else {
      console.log('IN details state', this.props.restaurant)
      return (
        <div id="section">
          <div className="row">
            <div className="column1">
              <div className="row">
                <div className="column2">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24" />
                      <g transform="translate(3 2)">
                        <path
                          stroke="#333333"
                          strokeWidth="2"
                          d="M7.32550582,4.0945285 C7.84035094,4.03146621 8.39760374,4 9,4 C9.60239626,4 10.1596491,4.03146621 10.6744942,4.0945285 C10.8844525,3.77431614 11,3.39700119 11,3 C11,1.8954305 10.1045695,1 9,1 C7.8954305,1 7,1.8954305 7,3 C7,3.39700119 7.1155475,3.77431614 7.32550582,4.0945285 Z"
                        />
                        <path
                          stroke="#333333"
                          strokeWidth="2"
                          d="M16.027822,12.0000146 C16.0556944,6.52731707 13.7899702,4 9,4 C4.21002973,4 1.94431329,6.52731623 1.9722357,12.0000005 L16.027822,12.0000146 Z"
                        />
                        <path
                          fill="#333333"
                          d="M1.5,14 L16.5,14 L16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,15 L17,15 C17,15.5522847 16.5522847,16 16,16 L2,16 L2,16 C1.44771525,16 1,15.5522847 1,15 L1,14.5 L1,14.5 C1,14.2238576 1.22385763,14 1.5,14 Z"
                        />
                        <rect
                          width="2"
                          height="5"
                          x="8"
                          y="14"
                          fill="#333333"
                        />
                        <rect
                          width="6"
                          height="2"
                          x="6"
                          y="18"
                          fill="#333333"
                          rx=".5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Dining style</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.dining_style}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
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
                          <rect
                            id="boundary"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
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
                </div>
                <div className="column3">
                  <span className="sectionName">Cuisines</span>
                  <br />
                  {this.props.restaurant.cuisine.slice(1,-2).split(',').map((food, index) => {
                    if (index === this.props.restaurant.cuisine.slice(1,-2).split(',').length - 1) {
                      return <span className="sectionDescription" key={index}>{food}</span>;
                    }
                    return <span className="sectionDescription" key={index}>{food}, </span>;
                  })}
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_clock</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_clock">
                        <rect id="boundry" x="0" y="0" width="24" height="24" />
                        <circle
                          id="Oval"
                          stroke="#333333"
                          strokeWidth="2"
                          cx="12"
                          cy="12"
                          r="8"
                        />
                        <rect
                          id="Rectangle-3"
                          fill="#333333"
                          x="11"
                          y="7"
                          width="2"
                          height="6"
                          rx="0.5"
                        />
                        <rect
                          id="Rectangle-3"
                          fill="#333333"
                          x="11"
                          y="11"
                          width="4"
                          height="2"
                          rx="0.5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Hours of operation</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.hour.split(',').map((hour, index) => {
                      return <li style={{ listStyleType: "none" }} key={index}>{hour}</li>;
                    })}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_phone</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_phone">
                        <g id="ic_phone">
                          <rect
                            id="Rectangle-path"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <path
                            d="M3.6078908,10.550251 C2.61923908,11.0680258 1.99972271,12.0918108 1.99971837,13.2078404 L1.99971837,15.6072816 C1.99971837,16.1595664 2.44743362,16.6072816 2.99971837,16.6072816 L6.3793488,16.6072816 C6.82186328,16.6072816 7.21175771,16.3164463 7.33787494,15.892282 C7.82877775,14.2412802 8.56739585,13.2739483 9.74971837,13.2739483 L10.3982265,13.2739469 L10.9997198,13.2739459 C11.9349601,13.2739449 11.9349601,13.2739449 12.2508894,13.273949 C13.457624,13.275362 14.2165836,14.245409 14.6845206,15.8821632 C14.8072329,16.3113873 15.1995808,16.6072842 15.6460041,16.6072816 L18.9997184,16.6072816 C19.5520031,16.6072816 19.9997184,16.1595664 19.9997184,15.6072816 L19.9997184,13.2078497 C19.9997184,12.09182 19.3802043,11.0680343 18.3915552,10.5502559 C15.911882,9.25160463 13.451313,8.60728164 10.9997184,8.60728164 C8.54812677,8.60728164 6.08756091,9.25160303 3.6078908,10.550251 Z"
                            id="Shape"
                            stroke="#333333"
                            strokeWidth="2"
                            transform="translate(10.999718, 12.607282) rotate(-135.000000) translate(-10.999718, -12.607282) "
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Phone number</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.display_phone}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_new_window</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_new_window">
                        <g id="ic_new_window">
                          <rect
                            id="boundary"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <path
                            d="M19.5,4 L14.5,4 C14.2238576,4 14,4.22385763 14,4.5 L14,5.5 C14,5.77614237 14.2238576,6 14.5,6 L16.59,6 L10.76,11.83 C10.6653437,11.9238833 10.6121008,12.0516812 10.6121008,12.185 C10.6121008,12.3183188 10.6653437,12.4461167 10.76,12.54 L11.47,13.25 C11.5638833,13.3446563 11.6916812,13.3978992 11.825,13.3978992 C11.9583188,13.3978992 12.0861167,13.3446563 12.18,13.25 L18,7.41 L18,9.5 C18,9.77614237 18.2238576,10 18.5,10 L19.5,10 C19.7761424,10 20,9.77614237 20,9.5 L20,4.5 C20,4.22385763 19.7761424,4 19.5,4 Z"
                            id="Shape"
                            fill="#333333"
                            fillRule="nonzero"
                          />
                          <path
                            d="M19.5,14 L18.5,14 C18.2238576,14 18,14.2238576 18,14.5 L18,18 L6,18 L6,6 L9.5,6 C9.77614237,6 10,5.77614237 10,5.5 L10,4.5 C10,4.22385763 9.77614237,4 9.5,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,14.5 C20,14.2238576 19.7761424,14 19.5,14 Z"
                            id="Shape"
                            fill="#333333"
                            fillRule="nonzero"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <div>Website</div>
                  <a className="hyperlink" href="www.amelie.com">
                    <span>
                      {this.props.restaurant.website}
                    </span>
                  </a>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_payment</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_payment">
                        <g id="ic_payment">
                          <rect
                            id="boundry"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <rect
                            id="Rectangle-10-Copy"
                            stroke="#333333"
                            strokeWidth="2"
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                          />
                          <rect
                            id="Rectangle-13-Copy"
                            fill="#333333"
                            x="3"
                            y="8"
                            width="18"
                            height="4"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Payment options</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.payment_options}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_dress_code</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_dress_code">
                        <g id="ic_dress_code">
                          <rect
                            id="boundary"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <path
                            d="M17.58,11.53 C17.4266401,11.1416536 17.3986659,10.7150477 17.5,10.31 L18.68,5.66 C18.9359464,4.6576009 18.3851789,3.62545408 17.41,3.28 L14,2.09 L13.68,3.09 C13.47,3.72 12.89,4.04 11.95,4.04 C11.01,4.04 10.45,3.72 10.24,3.1 L9.92,2.1 L6.59,3.28 C5.61955417,3.62512239 5.06991046,4.65083545 5.32,5.65 L6.49,10.3 C6.59133406,10.7050477 6.5633599,11.1316536 6.41,11.52 L3.08,20 L4.01,20.36 C6.55296711,21.3932302 9.265496,21.9459079 12.01,21.99 C14.7522514,21.9642714 17.4642871,21.4143968 20,20.37 L20.92,20 L17.58,11.53 Z M8.85,4.6 C9.60629927,5.55574661 10.7837814,6.07907199 12,6 C13.2152867,6.07388266 14.3904734,5.55157745 15.15,4.6 L16.74,5.16 L15.56,9.81 C15.56,9.87 15.56,9.93 15.56,10 L8.46,10 C8.46,9.94 8.46,9.88 8.46,9.81 L7.25,5.16 L8.85,4.6 Z M12.05,20 C9.87756989,19.9727298 7.72482585,19.5840868 5.68,18.85 L8.27,12.26 C8.27,12.17 8.32,12.09 8.35,12 L15.63,12 C15.63,12.09 15.63,12.17 15.71,12.26 L18.31,18.86 C16.3022506,19.5891869 14.1859133,19.9745901 12.05,20 L12.05,20 Z"
                            id="dress"
                            fill="#333333"
                            fillRule="nonzero"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Dress code</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.dress_code}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_chef</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_chef" fillRule="nonzero" fill="#333333">
                        <g
                          id="ic_chef"
                          transform="translate(3.000000, 3.000000)"
                        >
                          <g id="path0_stroke">
                            <path d="M9,2 C10.74753,2 11.2909,2.52203 11.5663,2.90067 C11.7569,3.15266 11.8773,3.44336 12.0477,3.77663 C12.1995,4.07263 12.4802,4.60816 13.0528,4.89443 L13.9472,3.10557 C14.0198,3.14184 13.988,3.17737 13.8273,2.864 C13.6852,2.58789 13.4931,2.15984 13.1837,1.724328 C12.4591,0.72797 11.2525,0 9,0 L9,2 Z M13.0528,4.89443 C13.3931,5.05914 13.813,5.17853 14.1705,5.29042 C14.531,5.40297 14.8325,5.50244 15.1211,5.67628 C15.5714,5.93891 16,6.36421 16,7.5 L18,7.5 C18,5.63579 17.1786,4.56109 16.1289,3.94872 C15.6675,3.68506 15.1565,3.50328 14.767,3.38146 C14.3745,3.25897 14.1069,3.19086 13.9472,3.10557 L13.0528,4.89443 Z M16,7.5 C16,8.58594 15.4906,9.2061 14.8598,9.73178 C14.5267,10.01122 14.1517,10.26122 13.8286,10.52865 C13.5618,10.75096 13,11.2399 13,12 L15,12 C15,12.2601 14.8132,12.3115 15.1089,12.0651 C15.3483,11.8638 15.7233,11.6138 16.1402,11.2682 C17.0094,10.5439 18,9.41406 18,7.5 L16,7.5 Z M13.5793,16 L4.49999,16 L4.49999,18 L13.5793,18 L13.5793,16 Z M4.99999,12 C4.99999,11.2399 4.4382,10.75097 4.17142,10.52866 C3.84829,10.26122 3.47329,10.01122 3.14018,9.73178 C2.50937,9.20611 2,8.58594 2,7.5 L0,7.5 C0,9.41406 0.99061891,10.54389 1.859807,11.2682 C2.2767,11.6138 2.65169,11.8638 2.89105,12.0651 C3.18677,12.3115 2.99999,12.2601 2.99999,12 L4.99999,12 Z M2,7.5 C2,6.36421 2.42864,5.93891 2.87887,5.67628 C3.16747,5.50244 3.46898,5.40297 3.82952,5.29042 C4.18699,5.17853 4.6069,5.05914 4.94721,4.89443 L4.05279,3.10557 C3.8931,3.19086 3.62551,3.25897 3.23298,3.38146 C2.84352,3.50328 2.33253,3.68506 1.871129,3.94872 C0.821361,4.56109 0,5.63579 0,7.5 L2,7.5 Z M4.94721,4.89443 C5.51975,4.60816 5.80052,4.07263 5.95232,3.77663 C6.12265,3.44336 6.24309,3.15266 6.43374,2.90067 C6.70911,2.52203 7.25247,2 9,2 L9,0 C6.74753,0 5.54089,0.72797 4.81626,1.724328 C4.50691,2.15984 4.31485,2.58789 4.17268,2.864 C4.01198,3.17737 3.98025,3.14184 4.05279,3.10557 L4.94721,4.89443 Z M4.99999,16.5 L4.99999,13 L2.99999,13 L2.99999,16.5 L4.99999,16.5 Z M4.99999,13 L4.99999,12 L2.99999,12 L2.99999,13 L4.99999,13 Z M13,12 C13,12.5 13,12.75 13,12.875 C13,12.9375 13,12.9688 13,12.9844 C13,12.9922 13,12.9961 13,12.998 C13,12.999 13,12.9995 13,12.9998 C13,12.9999 13,12.9999 13,13 C13,13 13,13 13,13 C13,13 13,13 13,13 C13,13 13,13 13,13 C13,13 13,13 13,13 C13,13 14,13 14,13 C14,13 15,13 15,13 C15,13 15,13 15,13 C15,13 15,13 15,13 C15,13 15,13 15,13 C15,13 15,13 15,13 C15,12.9999 15,12.9999 15,12.9998 C15,12.9995 15,12.999 15,12.998 C15,12.9961 15,12.9922 15,12.9844 C15,12.9688 15,12.9375 15,12.875 C15,12.75 15,12.5 15,12 L13,12 Z M13.0002,13.0227 L13.0794,16.5113 L15.0789,16.466 L14.9997,12.9773 L13.0002,13.0227 Z M3.99999,14 L14,14 L14,12 L3.99999,12 L3.99999,14 Z M13.5793,18 C14.4211,18 15.098,17.3075 15.0789,16.466 L13.0794,16.5113 C13.0731,16.2308 13.2987,16 13.5793,16 L13.5793,18 Z M4.49999,16 C4.77613,16 4.99999,16.2239 4.99999,16.5 L2.99999,16.5 C2.99999,17.3284 3.67156,18 4.49999,18 L4.49999,16 Z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Executive chef</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.executive_chef}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_catering</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_catering">
                        <g id="ic_catering">
                          <rect
                            id="boundry"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <g
                            id="Group-72"
                            transform="translate(3.000000, 4.000000)"
                          >
                            <path
                              d="M1,11 L17,11 C17,6.581722 13.418278,3 9,3 C4.581722,3 1,6.581722 1,11 Z"
                              id="Rectangle-61"
                              stroke="#333333"
                              strokeWidth="2"
                            />
                            <rect
                              id="Rectangle-65"
                              fill="#333333"
                              x="0"
                              y="13"
                              width="18"
                              height="2"
                              rx="1"
                            />
                            <rect
                              id="Rectangle-65"
                              fill="#333333"
                              x="6"
                              y="14"
                              width="6"
                              height="2"
                              rx="1"
                            />
                            <rect
                              id="Rectangle-65"
                              fill="#333333"
                              x="7"
                              y="0"
                              width="4"
                              height="4"
                              rx="2"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Catering</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.catering}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_private_dining</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_private_dining">
                        <rect
                          id="Rectangle-77"
                          fill="#2D3339"
                          x="5"
                          y="19"
                          width="4"
                          height="2"
                          rx="0.5"
                        />
                        <path
                          d="M4,4 L4,11 C4,12.6568542 5.34314575,14 7,14 C8.65685425,14 10,12.6568542 10,11 L10,4 L4,4 Z"
                          id="Rectangle-77"
                          stroke="#2D3339"
                          strokeWidth="2"
                        />
                        <rect
                          id="Rectangle-77"
                          fill="#2D3339"
                          x="6"
                          y="14"
                          width="2"
                          height="6"
                          rx="0.5"
                        />
                        <rect
                          id="Rectangle-77"
                          fill="#2D3339"
                          x="15"
                          y="19"
                          width="4"
                          height="2"
                          rx="0.5"
                        />
                        <path
                          d="M14.3418861,8.19246067 L19.3418861,6.525794 C19.6038578,6.43847012 19.8870178,6.58005011 19.9743416,6.84202177 C19.9913361,6.893005 20,6.9463946 20,7.00013565 L20,7.9460431 C20,8.1612583 19.862285,8.35232772 19.6581139,8.42038475 L14.6581139,10.0870514 C14.3961422,10.1743753 14.1129822,10.0327953 14.0256584,9.77082365 C14.0086639,9.71984041 14,9.66645081 14,9.61270976 L14,8.66680232 C14,8.45158711 14.137715,8.26051769 14.3418861,8.19246067 Z"
                          id="Rectangle-77"
                          fill="#2D3339"
                        />
                        <path
                          d="M4.34188612,8.19246067 L9.34188612,6.525794 C9.60385778,6.43847012 9.88701776,6.58005011 9.97434165,6.84202177 C9.99133606,6.893005 10,6.9463946 10,7.00013565 L10,7.9460431 C10,8.1612583 9.86228495,8.35232772 9.65811388,8.42038475 L4.65811388,10.0870514 C4.39614222,10.1743753 4.11298224,10.0327953 4.02565835,9.77082365 C4.00866394,9.71984041 4,9.66645081 4,9.61270976 L4,8.66680232 C4,8.45158711 4.13771505,8.26051769 4.34188612,8.19246067 Z"
                          id="Rectangle-77"
                          fill="#2D3339"
                        />
                        <path
                          d="M14,4 L14,11 C14,12.6568542 15.3431458,14 17,14 C18.6568542,14 20,12.6568542 20,11 L20,4 L14,4 Z"
                          id="Rectangle-77"
                          stroke="#2D3339"
                          strokeWidth="2"
                        />
                        <rect
                          id="Rectangle-77"
                          fill="#2D3339"
                          x="16"
                          y="14"
                          width="2"
                          height="6"
                          rx="0.5"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Private party facilities</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.private_party_facilities}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_contact</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_contact">
                        <g id="ic_contact">
                          <rect
                            id="boundry"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <rect
                            id="outside"
                            stroke="#333333"
                            strokeWidth="2"
                            x="5"
                            y="4"
                            width="14"
                            height="16"
                            rx="2"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="3"
                            y="7"
                            width="4"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="3"
                            y="11"
                            width="4"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="3"
                            y="15"
                            width="4"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="9"
                            y="7"
                            width="7"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="9"
                            y="11"
                            width="7"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="9"
                            y="15"
                            width="7"
                            height="2"
                            rx="0.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Private party contact</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.private_party_contact_name}
                  </span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.private_party_contact_number}
                  </span>
                  <br />
                </div>
              </div>
            </div>
            <div className="column1">
              {/* <Map
                latitude={
                  this.props.restaurant.coordinates.latitude
                }
                longitude={
                  this.props.restaurant.coordinates
                    .longitude
                } */}
              />
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_location</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_location">
                        <g id="ic_location">
                          <rect
                            id="boundary"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <path
                            d="M12,9 C12.5522847,9 13,9.44771525 13,10 C13,10.5522847 12.5522847,11 12,11 C11.4477153,11 11,10.5522847 11,10 C11,9.44771525 11.4477153,9 12,9 L12,9 Z M12,7 C10.3431458,7 9,8.34314575 9,10 C9,11.6568542 10.3431458,13 12,13 C13.6568542,13 15,11.6568542 15,10 C15,8.34314575 13.6568542,7 12,7 Z"
                            id="Shape"
                            fill="#333333"
                            fillRule="nonzero"
                          />
                          <path
                            d="M12,4 C15.3137085,4 18,6.6862915 18,10 C18,11.21 17.2,14 12,19.21 C6.8,14 6,11.21 6,10 C6,6.6862915 8.6862915,4 12,4 L12,4 Z M12,2 C7.581722,2 4,5.581722 4,10 C4,12.8133333 6.43333333,16.59 11.3,21.33 L11.3,21.33 C11.6888435,21.7111429 12.3111565,21.7111429 12.7,21.33 C17.5666667,16.59 20,12.8133333 20,10 C20,5.581722 16.418278,2 12,2 Z"
                            id="Shape"
                            fill="#333333"
                            fillRule="nonzero"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <div className="hyperlink">
                    {this.props.restaurant.display_address.map((
                      address, index) => {
                        return <span key={index}>{address} </span>;
                      }
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_neighborhood</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_neighborhood">
                        <g id="Group-81">
                          <rect
                            id="outside"
                            stroke="#333333"
                            strokeWidth="2"
                            x="4"
                            y="8"
                            width="8"
                            height="11"
                            rx="2"
                          />
                          <path
                            d="M12,18.9976974 L19,18.9976974 C19.5522847,18.9976974 20,18.5499821 20,17.9976974 L20,7.13007812 C20,6.77881527 19.8157012,6.45330845 19.5144958,6.2725852 L16.5144958,4.4725852 C16.1978134,4.28257577 15.8021866,4.28257577 15.4855042,4.4725852 L12.4855042,6.2725852 C12.1842988,6.45330845 12,6.77881527 12,7.13007812 L12,18.9976974 Z"
                            id="outside"
                            stroke="#333333"
                            strokeWidth="2"
                          />
                          <rect
                            id="Rectangle-75"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="7"
                            y="11"
                            width="2"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="7"
                            y="14"
                            width="2"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="15"
                            y="11"
                            width="2"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="15"
                            y="14"
                            width="2"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="line"
                            fill="#333333"
                            x="15"
                            y="8"
                            width="2"
                            height="2"
                            rx="0.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Neighborhood</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.neighborhood}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_cross_street</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_cross_street">
                        <g id="ic_cross_street">
                          <rect
                            id="boundry"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="9"
                            y="3"
                            width="2"
                            height="5"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="9"
                            y="16"
                            width="2"
                            height="5"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="14"
                            y="3"
                            width="2"
                            height="3"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="14"
                            y="8"
                            width="2"
                            height="3"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="14"
                            y="13"
                            width="2"
                            height="3"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="14"
                            y="18"
                            width="2"
                            height="3"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-42"
                            fill="#333333"
                            x="19"
                            y="3"
                            width="2"
                            height="18"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-57"
                            fill="#333333"
                            x="3"
                            y="6"
                            width="7"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-57"
                            fill="#333333"
                            x="8"
                            y="11"
                            width="3"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-57"
                            fill="#333333"
                            x="3"
                            y="11"
                            width="3"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-57"
                            fill="#333333"
                            x="3"
                            y="16"
                            width="7"
                            height="2"
                            rx="0.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Cross street</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.cross_street}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_parking_details</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_parking_details">
                        <rect id="boundry" x="0" y="0" width="24" height="24" />
                        <circle
                          id="Oval"
                          stroke="#333333"
                          strokeWidth="2"
                          cx="12"
                          cy="12"
                          r="8"
                        />
                        <rect
                          id="Rectangle-3"
                          fill="#333333"
                          x="9"
                          y="8"
                          width="2"
                          height="8"
                          rx="1"
                        />
                        <rect
                          id="Rectangle-3"
                          fill="#333333"
                          x="13"
                          y="8"
                          width="2"
                          height="5"
                          rx="1"
                        />
                        <path
                          d="M10,8 L14,8 L14,9.5 L14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L10.5,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 L10,8 Z"
                          id="Rectangle-3"
                          fill="#333333"
                        />
                        <path
                          d="M10.5,11 L13.5,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 L14,13 L10.5,13 L10.5,13 C10.2238576,13 10,12.7761424 10,12.5 L10,11.5 L10,11.5 C10,11.2238576 10.2238576,11 10.5,11 Z"
                          id="Rectangle-3"
                          fill="#333333"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Parking details</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.parking_details}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_public_transit</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_public_transit">
                        <g id="ic_public_transit">
                          <rect
                            id="boundry"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <g
                            id="Group-71"
                            transform="translate(4.000000, 2.000000)"
                          >
                            <g id="Group-70">
                              <path
                                d="M3,2 C1.8954305,2 1,2.8954305 1,4 L1,16 C1,16.5522847 1.44771525,17 2,17 L14,17 C14.5522847,17 15,16.5522847 15,16 L15,4 C15,2.8954305 14.1045695,2 13,2 L3,2 Z"
                                id="Rectangle-62"
                                stroke="#333333"
                                strokeWidth="2"
                              />
                              <rect
                                id="Rectangle-63"
                                fill="#333333"
                                x="3"
                                y="0"
                                width="10"
                                height="3"
                                rx="1.5"
                              />
                              <rect
                                id="Rectangle-63"
                                fill="#333333"
                                x="1"
                                y="9"
                                width="14"
                                height="2"
                                rx="1"
                              />
                              <rect
                                id="Rectangle-64"
                                fill="#333333"
                                x="3"
                                y="16"
                                width="3"
                                height="4"
                                rx="1"
                              />
                              <rect
                                id="Rectangle-64"
                                fill="#333333"
                                x="3"
                                y="12"
                                width="3"
                                height="3"
                                rx="1.5"
                              />
                              <rect
                                id="Rectangle-64"
                                fill="#333333"
                                x="10"
                                y="16"
                                width="3"
                                height="4"
                                rx="1"
                              />
                              <rect
                                id="Rectangle-64"
                                fill="#333333"
                                x="10"
                                y="12"
                                width="3"
                                height="3"
                                rx="1.5"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Public transit</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.public_transit}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_entertainment</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_entertainment">
                        <g id="ic_entertainment">
                          <rect
                            id="boundary"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <g
                            id="Group-75"
                            transform="translate(3.000000, 3.000000)"
                          >
                            <rect
                              id="Rectangle-61"
                              stroke="#333333"
                              strokeWidth="2"
                              x="1"
                              y="1"
                              width="16"
                              height="16"
                              rx="2"
                            />
                            <circle
                              id="Oval-8"
                              fill="#333333"
                              cx="7.5"
                              cy="11.5"
                              r="2.5"
                            />
                            <path
                              d="M9.375,4 L10.3672178,4 L10.3672178,4 C10.6433602,4 10.8672178,4.22385763 10.8672178,4.5 C10.8672178,4.52073251 10.8659283,4.54144495 10.8633567,4.56201737 L9.98835672,11.5620174 L9.98835672,11.5620174 C9.95707992,11.8122318 9.74437942,12 9.49221778,12 L8.5,12 L8.5,12 C8.22385763,12 8,11.7761424 8,11.5 C8,11.4792675 8.00128951,11.458555 8.00386106,11.4379826 L8.87886106,4.43798263 L8.87886106,4.43798263 C8.91013786,4.18776822 9.12283837,4 9.375,4 Z"
                              id="Rectangle-66"
                              fill="#333333"
                            />
                            <rect
                              id="Rectangle-66"
                              fill="#333333"
                              x="9"
                              y="4"
                              width="4"
                              height="2"
                              rx="0.5"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Entertainment</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.entertainment}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <title>icon/ic_special_events</title>
                    <desc>Created with Sketch.</desc>
                    <defs />
                    <g
                      id="Symbols"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="icon/ic_special_events">
                        <g id="ic_special_events">
                          <rect
                            id="boundary"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          />
                          <rect
                            id="Rectangle-10-Copy"
                            stroke="#333333"
                            strokeWidth="2"
                            x="4"
                            y="6"
                            width="16"
                            height="14"
                            rx="2"
                          />
                          <rect
                            id="Rectangle-13-Copy"
                            fill="#333333"
                            x="3"
                            y="9"
                            width="18"
                            height="2"
                          />
                          <rect
                            id="Rectangle-13-Copy"
                            fill="#333333"
                            x="9"
                            y="14"
                            width="6"
                            height="2"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-13-Copy"
                            fill="#333333"
                            x="11"
                            y="12"
                            width="2"
                            height="6"
                            rx="0.5"
                          />
                          <rect
                            id="Rectangle-6"
                            fill="#333333"
                            x="7"
                            y="3"
                            width="2"
                            height="4"
                            rx="1"
                          />
                          <rect
                            id="Rectangle-6"
                            fill="#333333"
                            x="15"
                            y="3"
                            width="2"
                            height="4"
                            rx="1"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">
                    Special events and promotions
                  </span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.special_events_promotions}
                  </span>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="column2">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                      <rect width="24" height="24" />
                      <g transform="rotate(45 5.374 17.754)">
                        <path
                          stroke="#333333"
                          strokeWidth="2"
                          d="M1,4.23686384 L1,16 C1,16.5522847 1.44771525,17 2,17 L10,17 C10.5522847,17 11,16.5522847 11,16 L11,4.31096383 L9.65103691,1.55975554 C9.48305062,1.21714773 9.134734,1 8.75315896,1 L3.23618407,1 C2.85738175,1 2.5110964,1.21403622 2.34171932,1.55286154 L1,4.23686384 Z"
                        />
                        <rect
                          width="4"
                          height="4"
                          x="4"
                          y="4"
                          fill="#333333"
                          rx="2"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="column3">
                  <span className="sectionName">Additional</span>
                  <br />
                  <span className="sectionDescription">
                    {this.props.restaurant.additional}
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Details;
