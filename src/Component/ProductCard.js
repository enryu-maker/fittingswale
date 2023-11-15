import React from 'react'
import { Images } from '../Assets/Image'
import { FONTS } from '../Assets/Theme'
import { FaStar } from "react-icons/fa";
import useMediaQuery from './useMediaQuery';
export default function ProductCard({
    desc= "McCoy Soudal Windowseal Siliconized Acrylic Sealant - White (270 ml)",
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div
            style={{
                // height: "380px",
                width: mobile ? "150px" : "280px",
                border: "2.5px solid lightgray",
                borderRadius: "10px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "10px",
                paddingBlock: "5px",
            }}
        >
            <img
                src={Images.pic1}
                style={{
                    height: mobile ? "80px" : "200px",
                    width: "94%",
                    borderRadius:mobile?"10px" : "15px",
                    // marginTop: mobile?"4px" : "8px",
                }}
            />
            <p style={
                mobile ? {
                    ...FONTS.body5,
                    marginBlockEnd: "0px",
                    textAlign: "left",
                    width: "90%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }
                    : {
                        ...FONTS.body3,
                        marginBlockEnd: "0px",
                        textAlign: "left",
                        width: "90%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}>{desc}</p>
            <div style={{
                display: "flex",
                width: "90%",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <FaStar  color='#ffd700' />
                <p style={mobile?{
                    ...FONTS.h5,
                    marginBlock: "0px",
                    alignSelf: "center",
                    marginLeft: "5px",
                }:{
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
                <p style={
                    mobile?{
                    ...FONTS.h4,
                    marginBlock: "0px",
                    alignSelf: "center",
                    }:
                    {
                    ...FONTS.h2,
                    marginBlock: "0px",
                    alignSelf: "center",
                }}>₹3,072</p>
                <p style={
                    mobile?{
                        ...FONTS.h5,
                        marginBlock: "0px",
                        alignSelf: "center",
                        marginLeft: "8px",
                        color: "gray",
                    }:
                    {
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
                <p style={
                    mobile?{
                        ...FONTS.h5,
                        marginBlock: "0px",
                        alignSelf: "center",
                        color: "gray",
                        textDecorationLine: "line-through",
                    }:
                    {
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
