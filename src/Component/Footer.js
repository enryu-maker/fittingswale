import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Images } from '../Assets/Image'

export default function Footer() {
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: COLORS.black,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                display: 'flex',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <p style={{ color: COLORS.white, marginBlockEnd: 0, ...FONTS.h1 }}>Fittings<span style={{ ...FONTS.body1, color: COLORS.Primary }}>Wale</span></p>

                <p style={{
                    color: COLORS.white,
                    margin: 0,
                    padding: 0,
                    ...FONTS.h3
                }}>© 2023 FittingsWale. All rights reserved.</p>
            </div>
            <div style={{
                display: 'flex',
                width: '80%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <p style={{
                    color: COLORS.white,
                    padding: 0,
                    ...FONTS.h2
                }}>FITTINGSWALE.COM</p>
                <p style={{
                    ...FONTS.h2,
                    color: COLORS.white,
                    fontFamily:"Cursive",
                    padding: 0,
                    marginInline: 10
                }}>Designed By</p>
                <p style={{
                    color: COLORS.white,
                    padding: 0,
                    ...FONTS.h2
                }}>NERDTECH</p>

            </div>

        </div>
    )
}
