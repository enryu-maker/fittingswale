import React from 'react'
import { COLORS, FONTS } from '../../Assets/Theme'
import useMediaQuery from '../../Component/useMediaQuery'
import { Controller, useForm } from 'react-hook-form';
import TextButton from '../../Component/TextButton';
import { Images } from '../../Assets/Image';
import { Link } from 'react-router-dom';

export default function Download() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const { control, handleSubmit, formState: { errors } } = useForm();
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: "#f5f5f5",
                // height: "80vh",
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
                <p>Download App</p>
            </div>
            <div style={{
                width: "100%",
                height: "60vh",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.white,
                marginBlockEnd: 40,
            }}>
                <img
                    src={Images.Banner}
                    alt="Group-1"
                    style={{
                        objectFit: "contain",
                        height: "100%",
                        width: mobile ? "100%" : "55%",
                    }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: mobile ? "center" : "flex-start",
                    width: mobile ? "100%" : "45%",
                    height: "45vh",
                }}>
                    <p style={{
                        marginBlock: 0,
                        color: COLORS.black,
                        ...FONTS.largeTitle,
                        textAlign: 'center',
                    }}>
                        Get the Fittings<span style={{
                            color: COLORS.Primary,
                            ...FONTS.largeTitleBody,
                        }}>Wale</span> App
                    </p>
                    <p style={{
                        marginBlock: 0,
                        color: COLORS.gray,
                        ...FONTS.h3,
                        textAlign: 'center',
                    }}>
                        We will send you a link, open it on your phone to download the app
                    </p>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#f0f0f0",
                                    width: "80%",
                                    height: "45px",
                                    borderRadius: 10,
                                }}>
                                <input
                                    style={{
                                        width: "90%",
                                        height: "90%",
                                        border: "none",
                                        outline: "none",
                                        backgroundColor: "#f0f0f0",
                                        ...FONTS.h3,
                                        color: COLORS.black,
                                        paddingInline: 10,
                                        borderRadius: 10,
                                    }}
                                    type="text"
                                    placeholder="Enter your email address"
                                    placeholderTextColor={COLORS.black}
                                    value={value}
                                    onChange={onChange}
                                />
                                <TextButton
                                    title={"Send"}
                                    style={{
                                        borderRadius: 10,
                                        backgroundColor: COLORS.Primary,
                                        color: COLORS.white,
                                        ...FONTS.h3,
                                    }}
                                />
                            </div>
                        )}
                    />
                    <p style={{
                        marginBlock: 0,
                        color: COLORS.gray,
                        ...FONTS.h2,
                        textAlign: 'center',
                    }}>
                        Download App From
                    </p>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.black,
                            height: 40,
                            paddingInline: 10,
                            borderRadius: 8,
                            marginInlineEnd: 20,
                            // width: 100
                        }}>
                            <img src={Images.playstore} alt="playstore" style={{ width: 30, height: 30 }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <p style={{
                                    marginBlock: 0,
                                    ...FONTS.body4,
                                    color: COLORS.white,
                                    textAlign: 'center',
                                    marginLeft: 10,
                                }}>
                                    Get it on
                                </p>
                                <p style={{
                                    marginBlock: 0,
                                    color: COLORS.white,
                                    ...FONTS.h4,
                                    textAlign: 'center',
                                    marginLeft: 10,
                                }}>
                                    Playstore
                                </p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.black,
                            height: 40,
                            paddingInline: 10,
                            borderRadius: 8,
                            // width: 100
                        }}>
                            <img src={Images.appstore} alt="playstore" style={{ width: 30, height: 30 }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}>
                                <p style={{
                                    marginBlock: 0,
                                    color: COLORS.white,
                                    ...FONTS.body4,
                                    textAlign: 'center',
                                    marginLeft: 10,
                                }}>
                                    Get it on
                                </p>
                                <p style={{
                                    marginBlock: 0,
                                    color: COLORS.white,
                                    ...FONTS.h4,
                                    textAlign: 'center',
                                    marginLeft: 10,
                                }}>
                                    Appstore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
