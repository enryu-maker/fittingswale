import React from 'react'
import { Images } from '../Assets/Image'
import { FONTS } from '../Assets/Theme'
export default function CircularCard() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "150px",
                    height: "150px",
                }}
            >
                <img 
                src={Images.pic1}
                style={{
                    height: "70px",
                    width: "70px",
                    borderRadius: "50%",
                    border: "2px solid lightgray",
                }}/>
                <p style={{
                    ...FONTS.h5,
                    marginBlock:0,
                }}>Skrew</p>
            </div>

        </>
    )
}
