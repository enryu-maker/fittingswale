import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'
import { AddressScreen, CoinsScreen, CouponsScreen, OrdersScreen, ProfileScreen, RatingScreen, SettingScreen } from '../../Constants/ProfileContent';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../Store/actions';

export default function Profile() {
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

    function currentSection() {
        switch (current) {
            case 0:
                return (
                    <ProfileScreen />
                )
            case 1:
                return (
                    <CoinsScreen />
                )
            case 2:
                return (
                    <OrdersScreen />
                )
            case 3:
                return (
                    <AddressScreen />
                )
            case 4:
                return (
                    <CouponsScreen />
                )
            case 5:
                return (
                    <RatingScreen />
                )
            case 6:
                return (
                    <SettingScreen />
                )
            default:
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
                <p>My Account</p>
            </div>
            <p style={{
                ...FONTS.h1,
                color: COLORS.black,
                // textAlign: "left",
                marginBlock: 0,
                // width: "88%",
                textTransform: "capitalize",
            }}>
                My Account<span style={{ color: COLORS.Primary }}>.</span>
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
                    width: "25%",
                    height: "100%",
                    paddingInline: 20,
                    justifyContent: "space-evenly",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {
                        data.map((item, index) => {
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
                        height: "8%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        color: COLORS.red,
                        alignSelf: "center",
                        paddingInline: 5,
                        paddingBlock: 2,
                        // borderRadius: 5,
                        ...FONTS.h4,
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
                <div style={{
                    width: "75%",
                    height: "100%",
                    paddingInline: 20,
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {currentSection()}
                </div>
            </div>
        </div>
    )
}
