import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'
import SIzeButton from '../../Component/SIzeButton';
import TextButton from '../../Component/TextButton';
export default function ProdInfo() {
    const { state } = useLocation();
    const { id, item, cat } = state;
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: "#f5f5f5",
                width: "100vw",
            }}
        >
            <div style={{
                width: "88%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                color: COLORS.darkGray,
                ...FONTS.body4,
                textTransform: "capitalize",
            }}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = COLORS.Primary;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = COLORS.darkGray;
                    }}
                >
                    Home
                </Link>
                <p>/</p>
                <p onClick={() => {
                    window.history.back();
                }}
                    style={{
                        textDecoration: "none",
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                        cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = COLORS.Primary;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = COLORS.darkGray;
                    }}
                >{cat}</p>
                <p>/</p>
                <p>{item?.name}</p>
            </div>
            <div style={{
                width: "88%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                color: COLORS.darkGray,
                ...FONTS.body4,
                textTransform: "capitalize",
                marginBlockEnd: 20,
            }}>
                <div style={{
                    height: "60vh",
                    width: "30vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }} />
                <div style={{
                    height: "60vh",
                    width: "30vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    borderRadius: 10,
                    paddingInline: 10,
                }} >
                    <p style={{
                        ...FONTS.h1,
                        color: COLORS.black,
                        // textAlign: "left",
                        marginBlock: 0,
                        // width: "88%",
                        textTransform: "capitalize",
                    }}>
                        {item?.name}<span style={{ color: COLORS.Primary }}>.</span>
                    </p>
                    <p style={{
                        ...FONTS.body4,
                        color: COLORS.black,
                        // textAlign: "left",
                        marginBlock: 0,
                        // width: "88%",
                        textTransform: "capitalize",
                    }}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod, diam sit amet aliquam ultricies, mauris quam aliquet odio, quis ultricies nisl nunc eget nisl. donec euismod, diam sit amet aliquam ultricies, mauris quam aliquet odio, quis ultricies nisl nunc eget nisl.
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        color: COLORS.black,
                        // textAlign: "left",
                        marginBlockEnd: 0,
                        // width: "88%",
                        textTransform: "capitalize",
                    }}>
                        Size Chart<span style={{ color: COLORS.Primary }}>.</span>
                    </p>
                    <SIzeButton />
                    <p style={{
                        ...FONTS.h3,
                        color: COLORS.black,
                        // textAlign: "left",
                        marginBlockEnd: 0,
                        // width: "88%",
                        textTransform: "capitalize",
                    }}>
                        Price Chart<span style={{ color: COLORS.Primary }}>.</span>
                    </p>
                    <SIzeButton />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "88%",
                        // alignSelf: "center",
                    }}>
                        <TextButton
                            title={"Add to Cart"}
                        />
                        <TextButton
                            title={"Buy Now"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
