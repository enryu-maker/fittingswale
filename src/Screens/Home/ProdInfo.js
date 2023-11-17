import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'

export default function ProdInfo() {
    const { state } = useLocation();
    const { id, item, cat } = state;
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: "#f5f5f5",
                width: "100vw",
            }}
        >
            <div style={{
                width: "88%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                color: COLORS.darkGray,
                ...FONTS.body4,
                textTransform: "capitalize",
            }}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = COLORS.Primary;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = COLORS.darkGray;
                    }}
                >
                    Home
                </Link>
                <p>/</p>
                <p onClick={() => {
                    window.history.back();
                }}
                    style={{
                        textDecoration: "none",
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                        cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.color = COLORS.Primary;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = COLORS.darkGray;
                    }}
                >{cat}</p>
                <p>/</p>
                <p>{item?.name}</p>
            </div>
            <p style={{
                ...FONTS.h1,
                color: COLORS.black,
                textAlign: "left",
                marginBlock: 0,
                width: "88%",
                textTransform: "capitalize",
            }}>
                {item?.name}<span style={{ color: COLORS.Primary }}>.</span>
            </p>
        </div>
    )
}
