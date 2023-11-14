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
export default function Home() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();
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
        height:mobile?"100px" : "auto",
        alignItems: "center",
        justifyContent: "center",
        marginBlock:mobile?"10px" : "50px",
        alignSelf: "center",
      }}>
        <Carousel
          selectedItem={1}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
          showIndicators={true}
        >
          <div style={{
            width: "100%",
            height: "100%",
          }}>
            <img style={{
              height: "350px",
              objectFit: "contain",
            }} src={Images.B1} />
          </div>
          <div style={{
            width: "100%",
            height: "100%",
          }}>
            <img style={{
              height: "350px",
              objectFit: "contain",
            }} src={Images.B1} />
          </div>
          <div style={{
            width: "100%",
            height: "100%",
          }}>
            <img style={{
              height: "350px",
              objectFit: "contain",
            }} src={Images.B1} />
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
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "95%",
              alignSelf: "center",
            }}>
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
              <CircularCard />
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
          backgroundColor: "white",
        }}
      >
        <p style={{
          textAlign: 'left',
          width: mobile ? "90%" : "92%",
          ...FONTS.h1,
        }}>Latest Arrivals <span style={{
          color: COLORS.Primary
        }}>.</span></p>
        <div style={{
          display: 'flex',
          flexDirection: mobile ? "column" : "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: mobile ? "90%" : "92%",
          marginBlockEnd: "50px",
          overflowY: "auto",
          whiteSpace: "nowrap",
        }}>
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
        height:mobile?"200px" : "500px",
        width: "100%",
        objectFit: "contain",
      }}
      />
      <TextButton
      title={"Get Started"}
      onClick={()=>{
        navigate("/auth")
      }}
      />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "100%",
          backgroundColor:COLORS.white,
        }}
      >
        <p style={{
          textAlign: 'left',
          width: mobile ? "90%" : "92%",
          ...FONTS.h1,
        }}>In the SpotLight <span style={{
          color: COLORS.Primary
        }}>.</span></p>
        <div style={{
          display: 'flex',
          flexDirection: mobile ? "column" : "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: mobile ? "90%" : "92%",
          marginBlockEnd: "50px",
          overflowY: "auto",
          whiteSpace: "nowrap",
        }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
