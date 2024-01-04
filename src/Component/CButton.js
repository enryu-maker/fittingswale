import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { useNavigate } from 'react-router-dom';
export default function CButton({
    title,
    data,
    onClick,
    index,
}) {
    const [active, setActive] = React.useState(false);
    const [cat, setCat] = React.useState(false);
    const [current, setCurrent] = React.useState(0);
    const [currentData, setCurrentData] = React.useState([]);
    const Navigate = useNavigate();
    return (
        <>
            <button style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                ...FONTS.h5,
                backgroundColor: "transparent",
                cursor: "pointer",
                outline: "none",
                margin: 0,
                width: "100%",
                height: "50px",
                textAlign: "center",
                color: COLORS.black,
                textTransform: "capitalize",
            }}
                onMouseEnter={(e) => {
                    e.target.style.color = COLORS.Primary;
                    e.target.style.borderBottom = `2px solid ${COLORS.Primary}`;
                    setActive(true);
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = COLORS.black;
                    e.target.style.borderBottom = "none";
                    setActive(false);
                }}
            >
                {title}
            </button>
            {
                active ?
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: "absolute",
                            alignSelf: "center",
                            width: "100%",
                            height: "400px",
                            marginTop: "455px",
                            backgroundColor: COLORS.white,
                            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                            transition: "all 1s ease",
                        }}
                        onMouseEnter={(e) => {
                            setActive(true);
                        }}
                        onMouseLeave={(e) => {
                            setActive(false);
                        }}
                    >
                        <p style={{
                            ...FONTS.h1,
                            color: COLORS.black,
                            textAlign: "center",
                            marginBlock: 0,
                        }}>
                            {title}<span style={{ color: COLORS.Primary }}>.</span>
                        </p>
                        <div style={{
                            height: "78%",
                            width: "95%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            alignItems: "flex-start",
                            alignSelf: "center",
                        }}>

                            <div style={{
                                height: data?.subcategories?.length > 5 ? "88%" : "auto",
                                width: "25%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: data?.subcategories?.length > 5 ? "space-evenly" : "flex-start",
                                alignItems: "flex-start",
                                textTransform: "capitalize",
                            }}>
                                <p style={{
                                    ...FONTS.h2,
                                    color: COLORS.black,
                                    textAlign: "center",
                                    marginBlock: 0,
                                }}>
                                    Category
                                    <span style={{ color: COLORS.Primary }}>.</span>
                                </p>
                                {
                                    data?.subcategories?.map((item, index) => (
                                        <li key={index} style={{
                                            ...FONTS.body3,
                                            color: COLORS.black,
                                            textAlign: "center",
                                            marginBlock: 5,
                                            cursor: "pointer",
                                            textTransform: "capitalize",
                                        }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = COLORS.Primary;
                                                setCurrent(item.id);
                                                setCurrentData(item.Scategory);
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = COLORS.black;
                                            }}
                                        >
                                            {item.name}
                                        </li>
                                    ))
                                }
                            </div>
                            <div style={{
                                width: "25%",
                                flexWrap: "wrap",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyItems: "flex-start",
                                marginBlockStart: 10,
                                textTransform: "capitalize",
                            }}>
                                <p style={{
                                    ...FONTS.h2,
                                    color: COLORS.black,
                                    textAlign: "center",
                                    // marginBlock: 0,
                                }}>
                                    Sub Category
                                    <span style={{ color: COLORS.Primary }}>.</span>
                                </p>
                                <div style={{
                                    width: "92%",
                                    flexWrap: "wrap",
                                    display: "flex",
                                    // flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                }}>
                                    {
                                        currentData?.map((item, index) => (
                                            <li style={{
                                                ...FONTS.body3,
                                                color: COLORS.black,
                                                textAlign: "center",
                                                marginInline: 5,
                                                cursor: "pointer",
                                                textAlignLast: "center",
                                                textTransform: "capitalize",

                                            }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.color = COLORS.Primary;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.color = COLORS.black;
                                                }}
                                                onClick={() => {
                                                    Navigate(`prodinfo/${item.name}`, {
                                                        state: {
                                                            id: item.id,
                                                            item: item,
                                                            cat: "",
                                                        }
                                                    })
                                                }}
                                            >
                                                {item.name}
                                            </li>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
        </>
    )
}
