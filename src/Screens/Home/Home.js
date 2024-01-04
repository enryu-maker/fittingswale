import React from 'react'
import { COLORS, FONTS } from "../../Assets/Theme"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from '../../Component/useMediaQuery';
import ProductCard from '../../Component/ProductCard';
import { Images } from '../../Assets/Image';
import CircularCard from '../../Component/CircularCard';
import TextButton from '../../Component/TextButton';
import { useNavigate } from 'react-router-dom';
import FlatList from 'flatlist-react/lib';
import { Data } from '../../Constants/Data';
import { useSelector } from 'react-redux';
export default function Home() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const access = useSelector(state => state.Reducers.access)
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "#f5f5f5"

    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: mobile ? "100px" : "auto",
        alignItems: "center",
        justifyContent: "center",
        marginBlock: mobile ? "10px" : "50px",
        alignSelf: "center",
      }}>
        <Carousel

          selectedItem={1}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={true}
          showIndicators={false}
        >
          <div style={{
            width: "100%",
            height: "100%",
          }}>
            <img style={{
              height: "350px",
              objectFit: "contain",
            }} src={Images.B1} />
            {
              mobile ? null :
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "100%",
              height: "100%",
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "40%",
                height: "80%",
                backgroundColor: COLORS.white
              }}>
                <p style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                  textAlign: "center",
                  marginBlock: 0,
                }}>
                  Best Selling<span style={{ color: COLORS.Primary }}>.</span>
                </p>
                <div style={{
                  height: "78%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  alignSelf: "center",
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    height: "100%",
                  }}>
                    <img
                      src={Images.B1}
                      style={{
                        height: "100%",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                    />
                    <p style={{
                      ...FONTS.body1,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      $ 200
                    </p>
                    <p style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Buy Now
                    </p>
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    height: "100%",
                  }}>
                    <img
                      src={Images.B1}
                      style={{
                        height: "100%",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                    />
                    <p style={{
                      ...FONTS.body1,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      $ 200
                    </p>
                    <p style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Buy Now
                    </p>
                  </div>
                </div>
              </div>

            </div>
            }
          </div>
          <div style={{
            width: "100%",
            height: "100%",
          }}>
            <img style={{
              height: "350px",
              objectFit: "contain",
            }} src={Images.B1} />
            
            {
              mobile ? null :
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "100%",
              height: "100%",
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "40%",
                height: "80%",
                backgroundColor: COLORS.white
              }}>
                <p style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                  textAlign: "center",
                  marginBlock: 0,
                }}>
                  Best Selling<span style={{ color: COLORS.Primary }}>.</span>
                </p>
                <div style={{
                  height: "78%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  alignSelf: "center",
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    height: "100%",
                  }}>
                    <img
                      src={Images.B1}
                      style={{
                        height: "100%",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                    />
                    <p style={{
                      ...FONTS.body1,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      $ 200
                    </p>
                    <p style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Buy Now
                    </p>
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    height: "100%",
                  }}>
                    <img
                      src={Images.B1}
                      style={{
                        height: "100%",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                    />
                    <p style={{
                      ...FONTS.body1,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      $ 200
                    </p>
                    <p style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Buy Now
                    </p>
                  </div>
                </div>
              </div>

            </div>
            }
          </div>
          <div style={{
            width: "100%",
            height: "100%",
          }}>
            <img style={{
              height: "350px",
              objectFit: "contain",
            }} src={Images.B1} />
            {
              mobile ? null :
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "100%",
              height: "100%",
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: "40%",
                height: "80%",
                backgroundColor: COLORS.white
              }}>
                <p style={{
                  ...FONTS.h1,
                  color: COLORS.black,
                  textAlign: "center",
                  marginBlock: 0,
                }}>
                  Best Selling<span style={{ color: COLORS.Primary }}>.</span>
                </p>
                <div style={{
                  height: "78%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  alignSelf: "center",
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    height: "100%",
                  }}>
                    <img
                      src={Images.B1}
                      style={{
                        height: "100%",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                    />
                    <p style={{
                      ...FONTS.body1,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      $ 200
                    </p>
                    <p style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Buy Now
                    </p>
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "45%",
                    height: "100%",
                  }}>
                    <img
                      src={Images.B1}
                      style={{
                        height: "100%",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                    />
                    <p style={{
                      ...FONTS.body1,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Product Name
                    </p>
                    <p style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      $ 200
                    </p>
                    <p style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textAlign: "center",
                      marginBlock: 0,
                    }}>
                      Buy Now
                    </p>
                  </div>
                </div>
              </div>

            </div>
            }
          </div>
        </Carousel>
        {
          mobile ? null :
            <>
              <p style={{
                textAlign: 'left',
                width: mobile ? "90%" : "92%",
                ...FONTS.h1,
              }}>Shop By Category<span style={{
                color: COLORS.Primary
              }}>.</span></p>
              <div style={{
                display: 'flex',
                flexDirection: mobile ? "column" : "row",
                justifyContent: "center",
                alignItems: "center",
                width: mobile ? "100%" : "92%",
                marginBlockEnd: mobile ? null : "50px",
                overflowY: mobile ? "hidden" : "auto",
                //  whiteSpace:mobile?"normal" : "nowrap",
              }}>
                <FlatList
                  list={Data.Category}
                  renderItem={(item, index) => {
                    return (
                      <CircularCard
                        item={item}
                      />
                    )
                  }}
                  renderWhenEmpty={() => <div>List is empty!</div>}
                  display={{ grid: true, columns: 5, gap: 10 }}
                />
              </div>
            </>
        }
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "100%",
          backgroundColor: COLORS.white,
        }}
      >
        <p style={{
          textAlign: 'left',
          width: mobile ? "90%" : "92%",
          ...FONTS.h1,
        }}>Latest Arrivals <span style={{
          color: COLORS.Primary
        }}>.</span></p>
        <div style={
          mobile ?
            {
              display: 'flex',
              // flexDirection: mobile ? "column" : "row",
              justifyContent: "center",
              // alignItems: "center",
              // width: mobile ? "100%" : "92%",
              // marginBlockEnd:mobile?null : "50px",
              // overflowY:mobile?"hidden" : "auto",
              whiteSpace: mobile ? "normal" : "nowrap",
              flexWrap: mobile ? "wrap" : "nowrap",
            } :
            {
              display: 'flex',
              flexDirection: mobile ? "column" : "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: mobile ? "100%" : "92%",
              marginBlockEnd: mobile ? null : "50px",
              overflowY: mobile ? "hidden" : "auto",
              whiteSpace: mobile ? "normal" : "nowrap",
            }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* Banner */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBlock: "20px",
      }}>
        <img
          src={Images.started}
          style={{
            height: mobile ? "200px" : "500px",
            width: "100%",
            objectFit: "contain",
          }}
        />
        {
          access === null ? null :

            <TextButton
              title={"Get Started"}
              onClick={() => {
                navigate("/auth")
              }}
            />
        }
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "100%",
          backgroundColor: COLORS.white,
        }}
      >
        <p style={{
          textAlign: 'left',
          width: mobile ? "90%" : "92%",
          ...FONTS.h1,
        }}>In the SpotLight <span style={{
          color: COLORS.Primary
        }}>.</span></p>
        <div style={
          mobile ?
            {
              display: 'flex',
              justifyContent: "center",
              whiteSpace: mobile ? "normal" : "nowrap",
              flexWrap: mobile ? "wrap" : "nowrap",
            } :
            {
              display: 'flex',
              flexDirection: mobile ? "column" : "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: mobile ? "100%" : "92%",
              marginBlockEnd: mobile ? null : "50px",
              overflowY: mobile ? "hidden" : "auto",
              textEmphasis: "ellipsis",
              whiteSpace: mobile ? "normal" : "nowrap",
            }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
