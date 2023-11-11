import React from 'react'
import { COLORS, FONTS } from '../Assets/Theme'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineSearch, AiOutlineUser, AiOutlineMobile, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdClear } from 'react-icons/md'
import IconButton from './IconButton'
import { FiPhoneCall } from 'react-icons/fi'
import { LiaHandshakeSolid } from 'react-icons/lia'
import useMediaQuery from './useMediaQuery'
import { Link, useNavigate } from 'react-router-dom'
export default function Header() {
    const { control} = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    const navigate =  useNavigate();
    const [search, setSearch] = React.useState("")
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "auto",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            position: "sticky",
            top: 0,
            backgroundColor: COLORS.white,
            zIndex: 100,
            paddingBlock: 15
        }}>
            {
                mobile ?

                    <>
                        <div style={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBlockEnd: 15
                        }}>
                            <p style={{ marginBlock: 0, ...FONTS.h1 }}>Fittings<span style={{ ...FONTS.body1, color: COLORS.Primary }}>Wale</span></p>
                            <Link
                                to={'/auth'}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    borderRadius: "50%",
                                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                                    textDecoration: "none",
                                }}>
                                <AiOutlineUser color={COLORS.black} size={30} />
                            </Link>
                        </div>
                        <div style={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Controller
                                name="search"
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#f0f0f0",
                                            width: "100%",
                                            height: "45px",
                                            borderRadius: 10,
                                        }}>
                                        <AiOutlineSearch color={COLORS.gray} size={30} style={{ marginInline: 10 }} />
                                        <input
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                                border: "none",
                                                outline: "none",
                                                backgroundColor: "#f0f0f0",
                                                ...FONTS.h3,
                                                color: COLORS.black,
                                                padding: 0,
                                            }}
                                            type="text"
                                            placeholder="Search for Products"
                                            placeholderTextColor={COLORS.black}
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <MdClear color={COLORS.gray} size={30} style={{ marginRight: 10 }} />
                                    </div>
                                )}
                            />
                        </div>
                    </>
                    :
                    <>
                        <div style={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBlockEnd: 15
                        }}>
                            <Link 
                            to={'/'}
                            style={{ textDecoration:"none",color:COLORS.black,marginBlock: 0, ...FONTS.h1 }}>Fittings<span style={{ ...FONTS.body1, color: COLORS.Primary }}>Wale</span></Link>
                            <Controller
                                name="search"
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#f0f0f0",
                                            width: "50vw",
                                            height: "45px",
                                            borderRadius: 10,
                                        }}>
                                        <AiOutlineSearch color={COLORS.gray} size={30} style={{ marginInline: 10 }} />
                                        <input
                                            style={{
                                                width: "90%",
                                                height: "90%",
                                                border: "none",
                                                outline: "none",
                                                backgroundColor: "#f0f0f0",
                                                ...FONTS.h3,
                                                color: COLORS.black,
                                                padding: 0,
                                            }}
                                            type="text"
                                            placeholder="Search for Products"
                                            placeholderTextColor={COLORS.black}
                                            value={value}
                                            onChange={onChange}
                                        />
                                        <MdClear onClick={()=>{
                                            setSearch("")
                                        }} color={COLORS.gray} size={30} style={{ marginRight: 10 }} />
                                    </div>
                                )}
                            />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: COLORS.Primary,
                                borderRadius: 10,
                                cursor: "pointer",
                                margin: 0,
                                padding: 0,
                            }}>
                                <p style={{
                                    position: "absolute",
                                    color: COLORS.darkGray,
                                    ...FONTS.h3,
                                    margin: 0,
                                    top: 10,
                                    marginLeft: 25,
                                }}>0</p>
                                <AiOutlineShoppingCart color={COLORS.Primary} size={30} />
                            </div>
                            <IconButton
                                Icon={LiaHandshakeSolid}
                                title="Be our Partner"
                                color={COLORS.black}
                                textStyle={{
                                    color: COLORS.black,
                                    ...FONTS.h4
                                }}
                            />
                        </div>
                        <div style={{
                            width: "90%",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}>
                            <IconButton
                                Icon={AiOutlineUser}
                                title="Login/Register"
                                color={COLORS.black}
                                textStyle={{
                                    color: COLORS.black,
                                    ...FONTS.h4
                                }}
                                onClick={() => navigate('/auth')}
                            />
                            <IconButton
                                Icon={AiOutlineMobile}
                                title="Download App"
                                color={COLORS.black}
                                textStyle={{
                                    color: COLORS.black,
                                    fontFamily: "Poppins-Bold",
                                    fontSize: 13.5
                                }}
                                onClick={() => {
                                    console.log(search)
                                }}
                                buttonStyle={{
                                    marginInline: 10
                                }}
                            />
                            <IconButton
                                Icon={FiPhoneCall}
                                title="Contact Us"
                                color={COLORS.black}
                                textStyle={{
                                    color: COLORS.black,
                                    ...FONTS.h4
                                }}
                            />
                        </div>
                    </>
            }
        </div>
    )
}
