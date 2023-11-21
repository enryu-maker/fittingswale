import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Images } from '../Assets/Image'
import useMediaQuery from './useMediaQuery'
import { IoMdMore } from "react-icons/io";
export default function AddressCard() {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                width: "88%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                height: "120px",
                alignSelf: 'center',
                borderRadius: 10,
                marginBlockEnd: 20,
            }}
        >
            <div style={{
                height: "100%",
                backgroundColor: COLORS.Primary,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
            }}>
            <IoMdMore 
            size={30}
            style={{
                color: COLORS.white,
                cursor: "pointer",
            }}
            />
            </div>
            <div style={{
                height: "100%",
                marginInline: 20,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                flexDirection: "column",
            }}>
                <p style={{
                    ...FONTS.h2,
                    color: COLORS.black,
                    // textAlign: "left",
                    marginBlock: 0,
                    // width: "88%",
                    textTransform: "capitalize",
                }}>
                    Akif Khan <span style={{ color: COLORS.Primary }}>.</span>
                </p>
                <p style={{
                    ...FONTS.h4,
                    color: COLORS.black,
                    // textAlign: "left",
                    marginBlock: 0,
                    // width: "88%",
                    textTransform: "capitalize",
                }}>
                    +92 1234567890
                </p>
                <p style={{ 
                    ...FONTS.body4,
                    color: COLORS.black,
                    // textAlign: "left",
                    marginBlock: 0,
                    // width: "88%",
                    textTransform: "capitalize",
                }}>
                    123, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
            </div>
        </div>
    )
}
