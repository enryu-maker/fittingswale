import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Link } from 'react-router-dom'
import { TermsData } from './Data';
import useMediaQuery from '../Component/useMediaQuery';
export default function Terms() {
    const [current, setCurrent] = React.useState(0);
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    const mobile = useMediaQuery('(max-width: 768px)');
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
                <p>Terms & Conditions</p>
            </div>
            <p style={{
                ...FONTS.h1,
                color: COLORS.black,
                textAlign: "center",
                marginBlock: 0,
            }}>
                Terms & Conditions<span style={{ color: COLORS.Primary }}>.</span>
            </p>
            <p style={{
                ...FONTS.h5,
                color: COLORS.black,
                textAlign: "center",
                marginBlock: 0,
            }}>
                Disclaimer: <span style={{
                    color: COLORS.gray,
                    fontFamily: "Poppins-Italic",
                    fontSize: 12
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
                paddingBlock: 20,
                marginBlock: 40,
            }}>
                <div style={{
                    width: mobile?"100%" : "25%",
                    height: "100%",
                    paddingInline: 20,
                    justifyContent: "space-evenly",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {
                        TermsData.map((item, index) => {
                            return (
                                <div key={index} style={{
                                    width:mobile?"95%" : "90%",
                                    height: "8%",
                                    display: "flex",
                                    flexDirection: mobile?"column":"row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    backgroundColor:mobile?null : current === index ? COLORS.Primary : COLORS.white,
                                    color:mobile?null : current === index ? COLORS.white : COLORS.gray,
                                    alignSelf: "center",
                                    paddingInline: 5,
                                    paddingBlock: 2,
                                    // borderRadius: 5,
                                    ...FONTS.h4,
                                    cursor: "pointer",
                                    textTransform: "capitalize",
                                    borderBlockEnd: "1px solid lightgray",
                                    marginBlock: 5,
                                    transition: "all 0.3s ease-in-out",
                                }}
                                >
                                    <p
                                        onClick={() => {
                                            setCurrent(index);
                                        }}
                                        style={
                                            mobile?{
                                                textAlign: "left",
                                                marginBlock: 0,
                                                width: "100%",
                                                alignSelf: "left",
                                                
                                                ...FONTS.h2,
                                            }:{
                                            textAlign: "left",
                                            marginBlock: 0,
                                            width: "90%",
                                            alignSelf: "center",
                                        }}>{item.section}</p>
                                    {
                                        mobile ?
                                            item.content.map((item, index) => (
                                                <p style={mobile?{
                                                    ...FONTS.body4,
                                                    textAlign: "justify",
                                                }:{
                                                    ...FONTS.body3
                                                }}>
                                                    {item}
                                                </p>

                                            ))
                                            :
                                            null
                                    }
                                </div>
                            )
                        }
                        )
                    }
                </div>
                {
                    mobile ?
                        null :

                        <div style={{
                            width: "72%",
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
                                {TermsData[current]?.section}<span style={{ color: COLORS.Primary }}>.</span>
                            </p>
                            {
                                TermsData[current]?.content.map((item, index) => (
                                    <p style={{
                                        ...FONTS.body3
                                    }}>
                                        {item}
                                    </p>

                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}
