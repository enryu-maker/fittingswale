import React from 'react'
import { COLORS } from '../Assets/Theme'
import { CiHome, CiBoxList, CiUser, CiShoppingCart } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
export default function Tab() {
    const navigate = useNavigate();
    const location = useLocation();
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
                <CiHome 
                color={location.pathname === "/" ? COLORS.Primary : COLORS.darkGray}
                onClick={() => navigate("/")}
                size={30} />
                <CiBoxList
                color={location.pathname === "/cat" ? COLORS.Primary : COLORS.darkGray}
                onClick={() => navigate("/cat")}
                size={30} />
                <CiShoppingCart 
                color={location.pathname === "/cart" ? COLORS.Primary : COLORS.darkGray}
                onClick={() => navigate("/cart")}
                size={30} />
                <CiUser 
                color={location.pathname === "/more" ? COLORS.Primary : COLORS.darkGray}
                onClick={() => navigate("/more")}
                size={30} />
            </div>
        </div>
    )
}
