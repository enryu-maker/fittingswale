import React from 'react'
import { Images } from '../Assets/Image'
import { FONTS } from '../Assets/Theme'
import { FaStar } from "react-icons/fa";
export default function ProductCard() {
    return (
        <div
            style={{
                // height: "380px",
                width: "280px",
                border: "2.5px solid lightgray",
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "10px",
                paddingBlock: "5px",
            }}
        >
            <img
                src={Images.pic1}
                style={{
                    height: "200px",
                    width: "94%",
                    borderRadius: "15px",
                    marginTop: "8px",
                }}
            />
            <p style={{
                ...FONTS.body3,
                marginBlockEnd: "0px",
                textAlign: "left",
                width: "90%",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }}>McCoy Soudal Windowseal Siliconized Acrylic Sealant - White (270 ml)</p>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <FaStar color='#ffd700' />
                <p style={{
                    ...FONTS.h3,
                    marginBlock: "0px",
                    alignSelf: "center",
                    marginLeft: "5px",
                }}>5.0</p>
            </div>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
            <p style={{
                ...FONTS.h2,
                marginBlock: "0px",
                alignSelf: "center",
            }}>₹3,072</p>
            <p style={{
                ...FONTS.h4,
                marginBlock: "0px",
                alignSelf: "center",
                marginLeft: "8px",
                color: "gray",
            }}>incl. Tax</p>
            </div>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <p style={{
                ...FONTS.h3,
                marginBlock: "0px",
                alignSelf: "center",
                color: "gray",
                textDecorationLine: "line-through",
            }}>₹6,504</p>
            <p style={{
                ...FONTS.h4,
                marginBlock: "0px",
                alignSelf: "center",
                marginLeft: "12px",
                color: "green",
            }}>53% Off</p>
            </div>
        </div>
    )
}
