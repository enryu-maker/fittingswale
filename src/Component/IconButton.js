import React from 'react'
import { COLORS,FONTS } from '../Assets/Theme'

export default function IconButton({
    Icon,
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
        backgroundColor: COLORS.transparent,
        height: "45px",
        width:"150px",
        borderRadius: 10,
        border:`2px solid ${COLORS.Primary1}`,
        outline: "none",
        cursor: "pointer",
        margin:0,
        padding:0,
        ...buttonStyle
    }}
    onClick={onClick}
    >
        <p style={{ 
            width:"70%",
            color:COLORS.darkGray,
            ...FONTS.h3,
            margin:0,
            padding:0,
            ...textStyle
            }}>{title}</p>
        <Icon color={COLORS.Primary} size={25} style={{}} />
    </button>
  )
}
