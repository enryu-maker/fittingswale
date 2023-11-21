import React from 'react';
import { COLORS, FONTS } from '../Assets/Theme';
import { Controller, useForm } from 'react-hook-form';
import IconButton from '../Component/IconButton';
import VerticalCard from '../Component/VerticalCard';
import AddressCard from '../Component/AddressCard';
import { CiStar } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5"
import { Images } from '../Assets/Image';
export const ProfileScreen = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const [disabled, setDisabled] = React.useState(true);
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>Profile
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: "100%",
                justifyContent: 'space-between',
            }}>
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "45%",
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: "88%",
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingInline: 2,
                            }}>
                                <p style={{
                                    ...FONTS.h3,
                                    color: COLORS.darkGray,
                                    marginBlock: 5
                                }}>Full Name</p>
                                <p style={{
                                    ...FONTS.h4,
                                    color: "#0080ff",
                                    marginBlock: 5,
                                    cursor: "pointer",
                                }}
                                    onClick={() => {
                                        setDisabled(!disabled);
                                    }}
                                >Edit</p>
                            </div>
                            <input
                                type="text"
                                placeholder="Name"
                                style={{
                                    width: "88%",
                                    height: 40,
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: 5,
                                    ...FONTS.body3,
                                    color: COLORS.black,
                                    paddingInline: 10,
                                }}
                                disabled={disabled}
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    )}
                />
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "45%",
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: "88%",
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingInline: 2,
                            }}>
                                <p style={{
                                    ...FONTS.h3,
                                    color: COLORS.darkGray,
                                    marginBlock: 5
                                }}>Email</p>
                                <p style={{
                                    ...FONTS.h4,
                                    color: "#0080ff",
                                    marginBlock: 5,
                                    cursor: "pointer",
                                }}
                                    onClick={() => {
                                        setDisabled(!disabled);
                                    }}
                                >Edit</p>
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                style={{
                                    width: "88%",
                                    height: 40,
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: 5,
                                    ...FONTS.body3,
                                    color: COLORS.black,
                                    paddingInline: 10,
                                }}
                                disabled={disabled}
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    )}
                />
                <Controller
                    control={control}
                    name="phone"
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "45%",
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}>
                            <div style={{
                                width: "88%",
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingInline: 2,
                            }}>
                                <p style={{
                                    ...FONTS.h3,
                                    color: COLORS.darkGray,
                                    marginBlock: 5
                                }}>Phone</p>
                                <p style={{
                                    ...FONTS.h4,
                                    color: "#0080ff",
                                    marginBlock: 5,
                                    cursor: "pointer",
                                }}
                                    onClick={() => {
                                        setDisabled(!disabled);
                                    }}
                                >Edit</p>
                            </div>
                            <input
                                type="number"
                                placeholder="Phone"
                                style={{
                                    width: "88%",
                                    height: 40,
                                    border: "none",
                                    outline: "none",
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: 5,
                                    ...FONTS.body3,
                                    color: COLORS.black,
                                    paddingInline: 10,
                                }}
                                disabled={disabled}
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export const CoinsScreen = () => {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>StarCoins
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
            <p style={{
                ...FONTS.h3,
                color: COLORS.darkGray,
                marginBlock: 5
            }}>Your StarCoins Balance <span
                style={{
                    color: COLORS.Primary
                }}>:</span>
            </p>
            <p style={{
                display: "flex",
                ...FONTS.h1,
                color: COLORS.black,
                marginBlock: 5,
                justifyContent: "center",
                alignItems: "center",
            }}><CiStar color={COLORS.Primary} />1000</p>


            <button style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: COLORS.white,
                padding: 10,
                borderRadius: 10,
                border: `2px solid ${COLORS.Primary1}`,
            }} >
                <FaHistory size={20} color={COLORS.Primary} />
                <p style={{
                    ...FONTS.h3,
                    color: COLORS.darkGray,
                    marginBlock: 5,
                    marginInline: 10,
                }}>Your StarCoins History <span
                    style={{
                        color: COLORS.Primary
                    }}></span>
                </p>
            </button>
            <img src={Images.StarCoins} style={{
                width: "100%",
                height: "100%",
                marginBlock: 10,
            }} />
            {/* refer and earn */}
            <p style={{
                ...FONTS.h3,
                color: COLORS.darkGray,
                marginBlock: 5
            }}>Refer and Earn <span
                style={{
                    color: COLORS.Primary
                }}>:</span>
            </p>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width:"55%",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <button style={{
                    display: "flex",
                    height: 40,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: COLORS.white,
                    borderRadius: 10,
                    border: `2px solid ${COLORS.Primary1}`,
                }} >
                    <IoShareSocialOutline size={20} color={COLORS.Primary} />
                    <p style={{
                        ...FONTS.h3,
                        color: COLORS.darkGray,
                        marginBlock: 0,
                        paddingInline: 10,
                    }}> 
                    Refer Now
                    </p>
                </button>
                <p style={{
                    ...FONTS.h1,
                    color: COLORS.black,
                    marginBlock: 5,
                }}>Earn Upto <span style={{
                    color: COLORS.Primary
                }}>100 </span>
                StarCoins</p>
            </div>

            <p style={{
                fontFamily: "Poppins-Italic",
                fontSize: 12,
                color: COLORS.darkGray,
                marginBlock: 5
            }}>
                Refer your friends and earn 100 StarCoins per refer When your friends purchase more than ₹ 10000 you will get 100 StarCoins
            </p>

        </div>
    )
}

export const OrdersScreen = () => {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>Order History
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
            <VerticalCard />
        </div>
    )
}
export const AddressScreen = () => {

    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>Manage Address
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
            <button style={{
                width: "88%",
                height: 40,
                border: `1px solid ${COLORS.Primary}`,
                outline: "none",
                borderRadius: 5,
                backgroundColor: COLORS.transparent,
                ...FONTS.h3,
                color: COLORS.Primary,
                paddingInline: 10,
                marginBlock: 10,
                alignSelf: "center",
            }}>Add Address</button>
            <AddressCard />
        </div>
    )
}

export const SettingScreen = () => {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>Settings
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
        </div>
    )
}

export const CouponsScreen = () => {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>Coupons
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
        </div>
    )
}

export const RatingScreen = () => {
    return (
        <div style={{
            width: "100%",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        }}>
            <p style={{
                ...FONTS.h2,
                color: COLORS.gray,
            }}>Rating & Reviews
                <span style={{
                    color: COLORS.Primary
                }}>.</span>
            </p>
        </div>
    )
}