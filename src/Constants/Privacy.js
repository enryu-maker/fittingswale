import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import { PrivacyData } from './Data';
export default function Privacy() {
    const [current, setCurrent] = React.useState(0);
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
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
                <p>Privacy Policy</p>
            </div>
            <p style={{
                ...FONTS.h1,
                color: COLORS.black,
                textAlign: "center",
                marginBlock: 0,
            }}>
                Privacy Policy<span style={{ color: COLORS.Primary }}>.</span>
            </p>
            <p style={{
                ...FONTS.h5,
                color: COLORS.black,
                textAlign: "center",
                marginBlock: 0,
            }}>
                Disclaimer: <span style={{ 
                    color: COLORS.gray,
                    fontFamily:"Poppins-Italic",
                    fontSize:12
                    }}>
                        In the event of any discrepancy or conflict, the English version will prevail over the translation.We don’t share personal information.
                    </span>
            </p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: "100%",
                backgroundColor: COLORS.white,
                // height: "60vh",
                paddingBlock:20,
                marginBlock: 40,
            }}>
                <div style={{
                    width: "25%",
                    height: "100%",
                    paddingInline: 20,
                    justifyContent: "space-evenly",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {
                        PrivacyData.map((item, index) => {
                            return (
                                <div key={index} style={{
                                    width: "90%",
                                    height: "8%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    backgroundColor: current === index ? COLORS.Primary : COLORS.white,
                                    color: current === index ? COLORS.white : COLORS.gray,
                                    alignSelf: "center",
                                    paddingInline: 5,
                                    paddingBlock: 2,
                                    // borderRadius: 5,
                                    ...FONTS.h4,
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    borderBlockEnd:"1px solid lightgray",
                                    marginBlock:5
                                }}
                                >
                                    <p
                                        onClick={() => {
                                            setCurrent(index);
                                        }}
                                        style={{
                                            textAlign: "left",
                                            marginBlock: 0,
                                            width: "90%",
                                            alignSelf: "center",
                                        }}>{item.section}</p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div style={{
                    width: "2px",
                    height: "100%",
                    backgroundColor: COLORS.Primary,
                }} />
                <div style={{
                    width: "75%",
                    height: "100%",
                    paddingInline: 20,
                }}>
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.gray,
                        textAlign: "left",
                        width: "88%",
                        textTransform: "capitalize",
                    }}>
                        {PrivacyData[current]?.section}<span style={{ color: COLORS.Primary }}>.</span>
                    </p>
                    {
                        PrivacyData[current]?.content.map((item, index) => (
                            <p style={{
                                ...FONTS.body3
                            }}>
                                {item}
                            </p>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
