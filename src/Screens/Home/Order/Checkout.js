import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '../../../Component/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
// import { OrderStart, getActiveAddress } from '../../Store/actions';
import { Oval } from 'react-loader-spinner';
import { COLORS, FONTS } from '../../../Assets/Theme';
import AddressCard from '../Address/AddressCard';
export default function Checkout() {
    const navigate = useNavigate()
    const mobile = useMediaQuery('(max-width: 768px)');
    const { state } = useLocation()
    const [orderData, setOrderData] = React.useState(state)
    const [loading, setLoading] = React.useState(false)
    const [total, setTotal] = React.useState(0)

    const activeAddress = useSelector(state => state.Reducers.activeAddress)
    const dispatch = useDispatch()
    React.useEffect(() => {
        // dispatch(getActiveAddress())
        setTotal(orderData?.total)
    }, [])
    const [active, setActive] = React.useState({
        "address": false,
        "payment": false,
        "checkout": false,
    })

    const [index, setIndex] = React.useState(0)
    function Address() {
        React.useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [])
        return (
            <>
                <p style={{
                    ...FONTS.h1,

                    letterSpacing: 1,
                    marginBlock: 5,
                    alignSelf: "center",
                }}>
                    Address
                </p>
                <div style={{
                    display: "flex",
                    width: mobile ? "95%" : "75%",
                    justifyContent: "space-between",
                    alignSelf: "center",
                }}>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 10
                    }}>
                        Delivery Address
                    </p>
                    <p onClick={() => {
                        navigate(mobile ? "/more/moreinfo" : "account", {
                            state: {
                                id: 1,
                                name: "Address"
                            }
                        })
                    }} style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 10,
                        color: COLORS.Primary,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {
                            mobile ?
                                <>
                                    Change
                                    <FaArrowRight
                                        color={COLORS.Primary}
                                        style={{
                                            marginInline: 5
                                        }}
                                    />
                                </>
                                :
                                <>
                                    Change Address
                                    <FaArrowRight
                                        color={COLORS.Primary}
                                        style={{
                                            marginInline: 5
                                        }}
                                    />
                                </>
                        }

                    </p>

                </div>
                <AddressCard
                    containerStyle={{
                        width: mobile ? "88%" : "75%",
                        marginTop: 0
                    }}
                    item={activeAddress}
                />
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "78%",
                    justifyContent: "flex-end",

                }}>
                    <button style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.Primary,
                        padding: 5,
                        ...FONTS.h3,
                        color: COLORS.white,
                        width: 100,
                        borderRadius: 8,
                        cursor: "pointer",
                        marginBlock: 10
                    }}
                        onClick={() => {
                            setIndex(1)
                            setActive({ ...active, address: true })
                        }}
                    >
                        Next
                    </button>
                </div>

            </>
        )
    }

    function CheckoutSection() {
        React.useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [])
        return (
            <>
                <p style={{
                    ...FONTS.h3,
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 10,
                    textAlign: "left",
                    width: mobile ? "95%" : "75%",
                    alignSelf: "center",
                }}>
                    Payment Mode
                </p>
                <label style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: mobile ? "88%" : "75%",
                    ...FONTS.h3,
                    marginBlock: 10
                }}><input style={{
                    accentColor: COLORS.Primary,
                    height: 20,
                    width: 20
                }} defaultChecked type='radio' name="payment_mode" value="ONLINE"></input>ONLINE</label>
                <label style={{
                    textAlign: "left",
                    width: mobile ? "88%" : "75%",
                    ...FONTS.h3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start"
                }}><input style={{
                    accentColor: COLORS.Primary,
                    height: 20,
                    width: 20
                }} disabled={true} type='radio' name="payment_mode" value="COD"></input>COD (Not Available)</label>
                <div style={{
                    height: 2,
                    width: mobile ? "88%" : "75%",
                    backgroundColor: "lightgray",
                    marginBlock: 20
                }} />
                <p style={{
                    ...FONTS.h3,
                    fontSize: 20,
                    letterSpacing: 1,
                    marginBlock: 10,
                    textAlign: "left",
                    width: mobile ? "95%" : "75%",
                }}>
                    Order Summary
                </p>
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "75%",
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Subtotal :
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        ₹ {state?.total}
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "75%",
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Delivery Charges :
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        ₹ 100
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "75%",
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Total :
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        ₹ {state?.total + 100}
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "75%",
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Promotion Applied :
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        - ₹ 100
                    </p>
                </div>
                <div style={{
                    height: 2,
                    width: mobile ? "88%" : "75%",
                    backgroundColor: "lightgray",
                }} />
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "75%",
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Total :
                    </p>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        ₹ {state?.total} /-
                    </p>
                </div>
                <div style={{
                    height: 2,
                    width: mobile ? "88%" : "75%",
                    backgroundColor: "lightgray",
                }} />
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "78%",
                    justifyContent: "space-evenly",
                }}>
                    <button style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.Primary,
                        padding: 5,
                        ...FONTS.h3,
                        fontSize: 18,
                        color: COLORS.white,
                        width: 100,
                        borderRadius: 8,
                        cursor: "pointer",
                        marginBlock: 10
                    }}
                        onClick={() => {
                            setIndex(0)
                            setActive({ ...active, address: false })
                        }}
                    >
                        Back
                    </button>
                    <button style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.Primary,
                        padding: 5,
                        ...FONTS.h3,

                        fontSize: 18,
                        color: COLORS.white,
                        width: 100,
                        borderRadius: 8,
                        cursor: "pointer",
                        marginBlock: 10
                    }}
                        onClick={() => {
                            setIndex(2)
                            setActive({ ...active, payment: true })
                        }}
                    >
                        Next
                    </button>
                </div>
            </>
        )
    }
    function Order() {
        React.useEffect(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }, [])
        return (
            <>
                <div style={{
                    display: "flex",
                    width: mobile ? "88%" : "75%",
                    height: 50,
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "center",
                }}>
                    <p style={{
                        ...FONTS.h3,

                        letterSpacing: 1,
                        marginBlock: 5,
                        fontSize: 25,
                        color: COLORS.Primary
                    }}>
                        Order Total :
                    </p>
                    <p style={{
                        ...FONTS.h3,

                        letterSpacing: 1,
                        marginBlock: 5,
                        fontSize: 25,
                        color: COLORS.Primary
                    }}>
                        ₹ {total} /-
                    </p>
                </div>
                <button
                    onClick={() => {
                        setActive({ ...active, checkout: true })
                        if (orderData?.single) {
                            orderData["address_id"] = activeAddress?.id
                            orderData["payment_mode"] = "ONLINE"
                            orderData["delivery_mode"] = 1
                            orderData["total"] = orderData["total"] * 100
                            console.log(orderData)
                            // dispatch(OrderStart(orderData, setLoading, navigate))
                        }
                        else {
                            orderData["address_id"] = activeAddress?.id
                            orderData["payment_mode"] = "ONLINE"
                            orderData["delivery_mode"] = 1
                            orderData["total"] = orderData["total"] * 100
                            console.log(orderData)
                            // dispatch(OrderStart(orderData, setLoading, navigate))
                        }
                    }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.Primary,
                        padding: 10,
                        ...FONTS.h3,
                        color: COLORS.white,
                        width: 200,
                        borderRadius: 8,
                        cursor: "pointer"
                    }}>
                    {
                        loading ?
                            <Oval
                                height={30}
                                width={30}
                                color={COLORS.Primary}
                            />
                            :
                            "Place Your Order"
                    }

                </button>
                <p style={{
                    ...FONTS.h3,
                    fontSize: 12,
                    width: mobile ? "88%" : "75%",
                    textAlign: "justify"
                }}>
                    By placing your order, you agree to <span onClick={() => {
                        navigate("/privacy")
                    }} style={{
                        color: COLORS.Primary
                    }}>Fittings's Wale privacy policy</span> and <span onClick={() => {
                        navigate("/terms")
                    }} style={{
                        color: COLORS.Primary
                    }}>conditions</span> of use.
                </p>

            </>
        )
    }
    function checker(data) {
        switch (data) {
            case 0:
                return (<Address />);
            case 1:
                return (<CheckoutSection />);
            case 2:
                return (<Order />);
            default:
                break;
        }
    }

    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                display: "flex",
                marginBlock: 20,
                width: mobile ? "100%" : "45%",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 22,
                        width: 22,
                        border: `2px solid ${COLORS.Primary}`,
                        borderRadius: "50%",
                    }}>
                        <div style={{
                            height: 18,
                            width: 18,
                            // border: `2px solid ${COLORS.Primary}`,
                            borderRadius: "50%",
                            backgroundColor: active.address ? COLORS.Primary : null
                        }} />
                    </div>
                    <p style={{
                        ...FONTS.h3,
                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Address
                    </p>
                </div>
                <div style={{
                    width: mobile ? "30px" : "60px",
                    height: 2,
                    backgroundColor: COLORS.Primary,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 22,
                        width: 22,
                        border: `2px solid ${COLORS.Primary}`,
                        borderRadius: "50%",
                    }}>
                        <div style={{
                            height: 18,
                            width: 18,
                            // border: `2px solid ${COLORS.Primary}`,
                            borderRadius: "50%",
                            backgroundColor: active.payment ? COLORS.Primary : null
                        }} />
                    </div>
                    <p style={{
                        ...FONTS.h3,

                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Payment Method
                    </p>
                </div>
                <div style={{
                    width: mobile ? "30px" : "60px",
                    height: 2,
                    backgroundColor: COLORS.Primary,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 22,
                        width: 22,
                        border: `2px solid ${COLORS.Primary}`,
                        borderRadius: "50%",
                    }}>
                        <div style={{
                            height: 18,
                            width: 18,
                            // border: `2px solid ${COLORS.Primary}`,
                            borderRadius: "50%",
                            backgroundColor: active.checkout ? COLORS.Primary : null
                        }} />
                    </div>
                    <p style={{
                        ...FONTS.h3,

                        letterSpacing: 1,
                        marginBlock: 5
                    }}>
                        Checkout
                    </p>
                </div>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "auto",
                width: mobile ? "95%" : "45%",
                borderRadius: 8,
                boxShadow: "5px 5px 10px #88888850",
                justifyContent: "center",
                alignItems: "center",
                paddingBlock: 10,
                marginBlock: 20,
                backgroundColor: COLORS.white,
            }}>
                {
                    checker(index)
                }
            </div>
        </div>
    )
}