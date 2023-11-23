import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Images } from '../Assets/Image'
import { Link } from 'react-router-dom'
import useMediaQuery from './useMediaQuery'
import { useSelector } from 'react-redux'

export default function Footer() {
    const mobile = useMediaQuery('(max-width: 768px)')
    const access = useSelector(state => state.Reducers.access)
    return (
        <div
            style={{
                width: '100%',
                backgroundColor: COLORS.black,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBlockEnd: mobile ? 50 : 20,
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: mobile ? 'column' : 'row',
                width: mobile ? "90%" : '80%',
                justifyContent: mobile ? "flex-start" : 'space-between',
                alignItems: mobile ? "flex-start" : 'center',
                textAlign: "center"
            }}>
                <p style={{ color: COLORS.white, marginBlockEnd: 0, ...FONTS.h1 }}>Fittings<span style={{ ...FONTS.body1, color: COLORS.Primary }}>Wale</span></p>
                <p style={{
                    color: COLORS.white,
                    marginBlockEnd: 0,
                    padding: 0,
                    ...FONTS.h3
                }}>© 2023 FittingsWale. All rights reserved.</p>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: mobile ? "90%" : '80%',
                justifyContent: mobile ? "space-between" : 'space-between',
                alignItems: "flex-start",
                textAlign: "center",
                marginBlock: 20,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <p style={{
                        color: COLORS.white,
                        padding: 0,
                        ...FONTS.h2,
                        borderBlock: `2px solid ${COLORS.Primary}`
                    }}>Site Maps</p>
                    <Link to={'/'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4,
                        textDecoration: 'none',
                    }}>Home</Link>
                    <Link to={'/about'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        textDecoration: 'none',
                        ...FONTS.body4
                    }}>About Us</Link>
                    {
                        access === null ?
                            <Link to={'/auth'} style={{
                                color: COLORS.white,
                                margin: 0,
                                padding: 0,
                                textDecoration: 'none',
                                ...FONTS.body4
                            }}>Login</Link>
                            :

                            <Link
                                to={'/cart'}
                                style={{
                                    color: COLORS.white,
                                    margin: 0,
                                    padding: 0,
                                    textDecoration: 'none',
                                    ...FONTS.body4
                                }}>Cart</Link>
                    }
                    <Link to={'download'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        textDecoration: 'none',
                        ...FONTS.body4
                    }}>Download App</Link>
                    <Link style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        textDecoration: 'none',
                        ...FONTS.body4
                    }}>Reviews</Link>
                    <Link style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        textDecoration: 'none',
                        ...FONTS.body4
                    }}>Carrers</Link>
                    <Link to={'/contact-us'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        textDecoration: 'none',
                        ...FONTS.body4
                    }}>Contact-Us</Link>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <p style={{
                        color: COLORS.white,
                        padding: 0,
                        ...FONTS.h2,
                        borderBlock: `2px solid ${COLORS.Primary}`
                    }}>Other</p>
                    <p style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4
                    }}>Be our Partner</p>
                    <p style={{
                        color: COLORS.white,
                        padding: 0,
                        ...FONTS.h2,
                        borderBlock: `2px solid ${COLORS.Primary}`
                    }}>Information</p>
                    <Link to={'/privacy'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4,
                        textDecoration: 'none',
                    }}>Privacy Policy</Link>
                    <Link to={'/terms'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4,
                        textDecoration: 'none',
                    }}>Terms & Conditions</Link>
                    <Link to={'/refund'} style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4,
                        textDecoration: 'none',
                    }}>Refund & Cancellation Policy</Link>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <p style={{
                        color: COLORS.white,
                        padding: 0,
                        ...FONTS.h2,
                        borderBlock: `2px solid ${COLORS.Primary}`
                    }}>Get In Touch</p>
                    <p style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4
                    }}>+91 9155511522</p>
                    <p style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4
                    }}>support@fittingswale.com</p>
                    <p style={{
                        color: COLORS.white,
                        padding: 0,
                        ...FONTS.h2,
                        borderBlock: `2px solid ${COLORS.Primary}`
                    }}>Location</p>
                    <p style={{
                        color: COLORS.white,
                        margin: 0,
                        padding: 0,
                        ...FONTS.body4,
                        width: '300px',
                        textAlign: 'left',
                        textTransform: 'capitalize'
                    }}>Mittal bhawan gol building manaitand dhanbad jharkhand 826001</p>
                </div>
            </div>
        </div>
    )
}
