import React, { useDebugValue } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../Store/actions';

export default function More() {
    const [current, setCurrent] = React.useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = [
        {
            id: 0,
            title: "Profile",
        },
        {
            id: 1,
            title: "StarCoins",
        },
        {
            id: 2,
            title: "Order History",
        },
        {
            id: 3,
            title: "Address",
        },
        {
            id: 4,
            title: "Coupons",
        },
        {
            id: 5,
            title: "Rating & Reviews",
        },
        {
            id: 6,
            title: "Settings",
        },
    ]
    return (
        <div style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f5f5f5",
            alignItems: "center",
        }}>
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
                <p style={{
                    textDecoration: "none",
                    color: COLORS.darkGray,
                    ...FONTS.body4,
                }}>
                    More
                </p>
            </div>
            <p style={{
                ...FONTS.h1,
                color: COLORS.black,
                // textAlign: "left",
                marginBlock: 0,
                // width: "88%",
                textTransform: "capitalize",
            }}>
                More<span style={{ color: COLORS.Primary }}>.</span>
            </p>
            <div style={{
                width: "100%",
                height: "100%",
                justifyContent: "space-evenly",
                display: "flex",
                flexDirection: "column",
            }}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} style={{
                                width: "90%",
                                height: "15%",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                // backgroundColor: current === index ? COLORS.Primary : COLORS.white,
                                color: COLORS.gray,
                                alignSelf: "center",
                                paddingBlock: 2,
                                fontFamily: "Poppins-Bold",
                                fontSize: 18,
                                cursor: "pointer",
                                textTransform: "capitalize",
                                marginBlock: 5,
                                transition: "all 0.3s ease-in-out",
                            }}
                            >
                                <p
                                    onClick={() => {
                                        setCurrent(index);
                                        navigate("/moreinfo");
                                    }}
                                    style={{
                                        textAlign: "left",
                                        marginBlock: 0,
                                        width: "90%",
                                        alignSelf: "center",
                                    }}>{item.title}</p>
                            </div>
                        )
                    })
                }
                <div style={{
                    width: "90%",
                    height: "15%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: COLORS.red,
                    alignSelf: "center",
                    paddingInline: 5,
                    paddingBlock: 2,
                    // borderRadius: 5,
                    fontFamily: "Poppins-Bold",
                    fontSize: 18,
                    cursor: "pointer",
                    textTransform: "capitalize",
                    marginBlock: 5
                }}
                >
                    <p
                        onClick={() => {
                            dispatch(LogoutAction());
                            navigate("/");
                        }}
                        style={{
                            textAlign: "left",
                            marginBlock: 0,
                            width: "90%",
                            alignSelf: "center",
                        }}>Logout</p>
                </div>

            </div>
        </div>
    )
}
