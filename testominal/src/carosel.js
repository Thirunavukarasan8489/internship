import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import Thiru from "./thiru.JPG";
import praveen from "./praveen.JPG";
import Dinesh from "./dinesh.JPG";
import Madhan from './madhan.JPG'; 
import Siva from './siva.JPG';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <h1>Testominal</h1>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "text",
            marginTop: "5%",
            // border: "1px solid black",
            background: "rgb(248, 8, 48)",
            // backgroundImage:"linear-gradient( rgb(95, 15, 105), rgb(225, 0, 105))"

          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={
          {
            // style: {
            //   background: "blue"
            // }
          }
        }
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            fontSize:"xx-large",
            width: 60,
            height: 60,
            border:"none",
            color:"white",
            cursor:"pointer",
            background:"rgb(248, 8, 48)",
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            fontSize:"xx-large",
            width: 60,
            height: 60,
            border:"none",
            color:"white",
            cursor:"pointer",
            background:"rgb(248, 8, 48)",
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={3}
        speed={300}
      >

        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 400
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              background: "white",
              marginTop: "55px",
              width: 250,
              height: 300,
              boxShadow:
                "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px"
            }}
          >
            <img
              src={Thiru}
              width={100}
              alt="name"
              style={{
                height: "38%",
                borderRadius: "50%",
                marginLeft: "75px",
                marginTop: "-67px",
                boxShadow:
                  "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
              }}
            />
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "0px"
              }}
            >
              Thirunavukarasan
            </h2>
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                color: "red",
                textAlign: "center",
                fontSize: "xxx-large",
                marginTop: "-10px"
              }}
            >
              ''
            </h2>
            <p
              style={{
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "-30px"
              }}
            >
              The following two paragraphs contains a long text that will not
              fit in the box.The following two paragraphs contains a long text
              that will not fit in the box.
            </p>
          </div>
        </div>

        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 400
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              background: "white",
              marginTop: "55px",
              width: 250,
              height: 300,
              boxShadow:
                "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px"
            }}
          >
            <img
              src={praveen}
              width={100}
              alt="name"
              style={{
                height: "38%",
                borderRadius: "50%",
                marginLeft: "75px",
                marginTop: "-67px",
                boxShadow:
                  "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
              }}
            />
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "0px"
              }}
            >
              Praveen Kumar
            </h2>
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                color: "red",
                textAlign: "center",
                fontSize: "xxx-large",
                marginTop: "-10px"
              }}
            >
              ''
            </h2>
            <p
              style={{
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "-30px"
              }}
            >
              The following two paragraphs contains a long text that will not
              fit in the box.The following two paragraphs contains a long text
              that will not fit in the box.
            </p>
          </div>
        </div>

        {/* card */}

        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 400
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              background: "white",
              marginTop: "55px",
              width: 250,
              height: 300,
              boxShadow:
                "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px"
            }}
          >
            <img
              src={Dinesh}
              width={100}
              alt="name"
              style={{
                height: "38%",
                borderRadius: "50%",
                marginLeft: "75px",
                marginTop: "-67px",
                boxShadow:
                  "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
              }}
            />
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "0px"
              }}
            >
              Dinesh
            </h2>
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                color: "red",
                textAlign: "center",
                fontSize: "xxx-large",
                marginTop: "-10px"
              }}
            >
              ''
            </h2>
            <p
              style={{
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "-30px"
              }}
            >
              The following two paragraphs contains a long text that will not
              fit in the box.The following two paragraphs contains a long text
              that will not fit in the box.
            </p>
          </div>
        </div>

        {/* card */}

        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 400
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              background: "white",
              marginTop: "55px",
              width: 250,
              height: 300,
              boxShadow:
                "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px"
            }}
          >
            <img
              src={Madhan}
              width={100}
              alt="name"
              style={{
                height: "38%",
                borderRadius: "50%",
                marginLeft: "75px",
                marginTop: "-67px",
                boxShadow:
                  "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
              }}
            />
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "0px"
              }}
            >
              Madhan Kumar
            </h2>
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                color: "red",
                textAlign: "center",
                fontSize: "xxx-large",
                marginTop: "-10px"
              }}
            >
              ''
            </h2>
            <p
              style={{
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "-30px"
              }}
            >
              The following two paragraphs contains a long text that will not
              fit in the box.The following two paragraphs contains a long text
              that will not fit in the box.
            </p>
          </div>
        </div>

        {/* card */}
        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 400
          }}
        >
          <div
            style={{
              // border: "1px solid black",
              background: "white",
              marginTop: "55px",
              width: 250,
              height: 300,
              boxShadow:
                "0px 5px 20px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px"
            }}
          >
            <img
              src={Siva}
              width={100}
              alt="name"
              style={{
                height: "38%",
                borderRadius: "50%",
                marginLeft: "75px",
                marginTop: "-67px",
                boxShadow:
                  "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)"
              }}
            />
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px red, 0 0 5px darkblue",
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "0px"
              }}
            >
              Siva Kumar
            </h2>
            <h2
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
                color: "red",
                textAlign: "center",
                fontSize: "xxx-large",
                marginTop: "-10px"
              }}
            >
              ''
            </h2>
            <p
              style={{
                fontFamily: "Cursive",
                textAlign: "center",
                marginTop: "-30px"
              }}
            >
              The following two paragraphs contains a long text that will not
              fit in the box.The following two paragraphs contains a long text
              that will not fit in the box.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
