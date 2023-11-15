import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
export default function CButton({
    title=`Button`,
    onClick,
    index,
}) {
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
            height: "50px",
            textAlign:"center",
            color:COLORS.black,
        }}
        onMouseEnter={(e) => {
            e.target.style.color = COLORS.Primary;
            e.target.style.borderBottom = `2px solid ${COLORS.Primary}`;
        }}
        onMouseLeave={(e) => {
            e.target.style.color = COLORS.black;
            e.target.style.borderBottom = "none";
        }}
            onClick={onClick}
        >
            {title}
        </button> 
        </>
    )
}
