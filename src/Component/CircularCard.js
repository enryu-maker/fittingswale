import React from 'react'
import { Images } from '../Assets/Image'
import { COLORS, FONTS } from '../Assets/Theme'
import { useNavigate } from 'react-router-dom'
export default function CircularCard({
    item
}) {
    const navigate = useNavigate();
    return (
        <>
            <button
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "120px",
                    height: "150px",
                    border: "none",
                    backgroundColor: "transparent",
                }}
                onClick={() => {
                    navigate("catinfo",{
                        state:{
                            id:item.id,
                            item:item,
                        }
                    })
                }}
            >
                <img
                    src={Images.pic1}
                    style={{
                        height: "70px",
                        width: "70px",
                        borderRadius: "50%",
                        border: "2px solid lightgray",
                        cursor: "pointer",
                    }} />
                <p style={{
                    ...FONTS.h5,
                    marginBlock: 0,
                    width: "120px",
                    color: COLORS.black,
                }}>{item?.name}</p>
            </button>

        </>
    )
}
