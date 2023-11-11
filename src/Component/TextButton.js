import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
export default function TextButton({
    onClick,
    title,
    buttonStyle,
    textStyle
}) {
  return (
    <button
    style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: COLORS.Primary,
        height: "45px",
        width:"150px",
        borderRadius: 10,
        border:'none',
        outline: "none",
        cursor: "pointer",
        margin:0,
        padding:0,
        ...buttonStyle
    }}
    onClick={onClick}
    >
        <p style={{ 
            width:"100%",
            color:COLORS.white,
            ...FONTS.h2,
            margin:0,
            padding:0,
            ...textStyle
            }}>{title}</p>
</button>
  )
}
