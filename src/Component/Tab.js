import React from 'react'
import { COLORS } from '../Assets/Theme'
import { CiHome, CiBoxList, CiUser, CiShoppingCart } from "react-icons/ci";
export default function Tab() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                position: "fixed",
                bottom: 0,
                backgroundColor: COLORS.white,
                width: "100%",
                height: "65px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "90%",
                }}
            >
                <CiHome size={30} />
                <CiBoxList size={30} />
                <CiUser size={30} />
                <CiShoppingCart size={30} />
            </div>
        </div>
    )
}
