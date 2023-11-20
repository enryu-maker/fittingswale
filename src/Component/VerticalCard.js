import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Images } from '../Assets/Image'
import useMediaQuery from './useMediaQuery'

export default function VerticalCard() {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                width: "100%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                height: "120px",
                alignSelf: 'center',
                borderRadius: 10,
                marginBlockEnd: 20,
            }}
        >
            <img
                src={Images.pic1}
                style={{
                    height: "100%",
                    width: "25%",
                    backgroundColor: COLORS.Primary,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                }} />
            <div style={{
                height: "100%",
                width: "75%",
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                flexDirection: "column",
                paddingInline: 20,
            }}>
                <p style={{
                    ...FONTS.h2,
                    color: COLORS.black,
                    // textAlign: "left",
                    marginBlock: 0,
                    // width: "88%",
                    textTransform: "capitalize",
                }}>
                    Product Name
                </p>
                <p style={{
                    ...FONTS.body4,
                    color: COLORS.black,
                    // textAlign: "left",
                    marginBlock: 0,
                    // width: "88%",
                    textTransform: "capitalize",
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div style={{
                    display: "flex",
                    width: "90%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}>
                    <p style={
                        mobile ? {
                            ...FONTS.h4,
                            marginBlock: "0px",
                            alignSelf: "center",
                        } :
                            {
                                ...FONTS.h2,
                                marginBlock: "0px",
                                alignSelf: "center",
                            }}>₹3,072</p>
                    <p style={
                        mobile ? {
                            ...FONTS.h5,
                            marginBlock: "0px",
                            alignSelf: "center",
                            marginLeft: "8px",
                            color: "gray",
                        } :
                            {
                                ...FONTS.h4,
                                marginBlock: "0px",
                                alignSelf: "center",
                                marginLeft: "8px",
                                color: "gray",
                            }}>incl. Tax</p>
                    <p style={
                        mobile ? {
                            ...FONTS.h5,
                            marginBlock: "0px",
                            alignSelf: "center",
                            color: "gray",
                            textDecorationLine: "line-through",
                        } :
                            {
                                ...FONTS.h3,
                                marginBlock: "0px",
                                alignSelf: "center",
                                color: "gray",
                                textDecorationLine: "line-through",
                                marginLeft: "12px",
                            }}>₹6,504</p>
                    <p style={{
                        ...FONTS.h4,
                        marginBlock: "0px",
                        alignSelf: "center",
                        marginLeft: "12px",
                        color: "green",
                    }}>53% Off</p>
                    <button 
                    
                    style={{
                        ...FONTS.h4,
                        marginBlock: "0px",
                        alignSelf: "center",
                        marginLeft: "12px",
                        color: "red",
                        backgroundColor: COLORS.white,
                        border: "none",
                        cursor: "pointer",
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}
