import React from 'react'
import { COLORS,FONTS } from '../Assets/Theme'

export default function SIzeButton() {
  return (
    <button
    style={{
        width:"100px",
        height:"30px",
        border:`2px solid ${COLORS.Primary1}`,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        backgroundColor:"transparent",
        borderRadius:"5px",
        margin:"5px",
        ...FONTS.h5
    }}
    >
        S
    </button>
  )
}
