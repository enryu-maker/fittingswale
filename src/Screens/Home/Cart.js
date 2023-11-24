import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'
import VerticalCard from '../../Component/VerticalCard';
import TextButton from '../../Component/TextButton';
import useMediaQuery from '../../Component/useMediaQuery';
export default function Cart() {
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
                <p style={{
                    textDecoration: "none",
                    color: COLORS.darkGray,
                    ...FONTS.body4,
                }}>
                    Cart
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
                My Cart<span style={{ color: COLORS.Primary }}>.</span>
            </p>
            <div style={{
                width: "92%",
                display: "flex",
                flexDirection: mobile?"column" : "row",
                alignItems:mobile?"center" : "flex-start",
                justifyContent: "space-between",
                marginBlock: 40,
                height: mobile?"auto" : "65vh",
            }}>
                <div 
                
                style={
                    mobile?{
                        width:"98%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                    }:
                    {
                    width:"70%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    overflowY:"scroll",
                    justifyContent: "space-evenly",
                }}>
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                </div>
                <div style={{
                    width: mobile? "98%" : "28%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    height: "60%",
                    paddingBlock: 20,
                    justifyContent: "space-evenly",
                    borderRadius: 10,
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }}>
                    <p style={{
                        ...FONTS.h2,
                        color: COLORS.black,
                        // textAlign: "left",
                        marginBlock: 0,
                        // width: "88%",
                        textTransform: "capitalize",
                    }}>
                        Cart Overview<span style={{ color: COLORS.Primary }}>.</span>
                    </p>
                    <div style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: COLORS.darkGray,
                        ...FONTS.h3,
                        textTransform: "capitalize",
                    }}>
                        <p>Subtotal</p>
                        <p>₹ 100</p>
                    </div>
                    <div style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: COLORS.darkGray,
                        ...FONTS.h3,
                        textTransform: "capitalize",
                    }}>
                        <p>GST Taxes</p>
                        <p>₹ 100</p>
                    </div>
                    <div style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: COLORS.darkGray,
                        ...FONTS.h3,
                        textTransform: "capitalize",
                    }}>
                        <p>Delivery Charges</p>
                        <p>₹ 100</p>
                    </div>
                    <div style={{
                        width: "80%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: COLORS.darkGray,
                        ...FONTS.h3,
                        textTransform: "capitalize",
                    }}>
                        <p>Total</p>
                        <p>₹ 100</p>
                    </div>
                    <TextButton
                        title={"Checkout."}
                    />
                </div>

            </div>
        </div>
    )
}
