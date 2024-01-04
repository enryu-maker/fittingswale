import React from 'react'
import useMediaQuery from '../../Component/useMediaQuery'
import { FONTS, COLORS } from '../../Assets/Theme';
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineMail, AiOutlineUser, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { MdPassword } from 'react-icons/md'
import TextButton from '../../Component/TextButton';
import { Link } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi'
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../Store/actions';
import { ThreeDots } from 'react-loader-spinner';
export default function AuthScreen() {
    const mobile = useMediaQuery("(max-width: 768px)");
    const { handleSubmit, control, formState: { errors }, } = useForm();
    const [count, setCount] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: mobile ? "100vh" : "88vh",
                backgroundColor: "#f5f5f5"
            }}
        >

            <div style={{
                height: mobile ? "85%" : "80%",
                width: mobile ? "95%" : "55%",
                backgroundColor: "white",
                borderRadius: 20,
                display: "flex",
                marginTop: "50px",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "5px 5px 10px #88888850",
            }}>
                {
                    mobile ? null :
                        <div style={{
                            width: "40%",
                            height: "96%",
                            marginInline: 10,
                            backgroundColor: COLORS.Primary,
                            transform: `translateX(${count === 0 ? 0 : 144}%)`,
                            transition: "all 1s ease",
                            borderRadius: 20,
                        }}>

                        </div>
                }
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: mobile ? "100%" : "55%",
                    justifyContent: "center",
                    alignItems: mobile ? "center" : "flex-start",
                    height: "100%",
                    transform: mobile ? null : `translateX(${count === 0 ? 0 : -72}%)`,
                    transition: "all 1s ease",
                }}>
                    {
                        count === 0 ?
                            <>
                                <p style={mobile ? {
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: 30,
                                    color: COLORS.darkGray
                                } : {
                                    ...FONTS.h1,
                                    marginBlockEnd: 0,
                                }}>
                                    Login <span style={{
                                        color: COLORS.Primary
                                    }}>/</span>
                                    SignIn
                                </p>
                                <p style={{
                                    ...FONTS.body4,
                                }}>
                                    Welcome back! Log in to access your account.
                                </p>
                                <Controller
                                    name="username"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                            }}>
                                            <AiOutlineUser color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0,
                                                }}
                                                type="text"
                                                placeholder="Enter your Username"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                            <div style={{
                                                height: 25,
                                                width: 25,
                                            }} />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="password"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                                marginTop: 15
                                            }}>
                                            <MdPassword color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0
                                                }}
                                                type={!show ? "password" : "text"}
                                                placeholder="Enter your Password"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                            {show ?
                                                <AiOutlineEyeInvisible
                                                    color={COLORS.gray}
                                                    size={25}
                                                    style={{ cursor: "pointer", marginInline: 10 }}
                                                    onClick={() => setShow(!show)}
                                                /> :
                                                <AiOutlineEye
                                                    color={COLORS.gray}
                                                    size={25}
                                                    style={{ cursor: "pointer", marginInline: 10 }}
                                                    onClick={() => setShow(!show)}
                                                />
                                            }
                                        </div>
                                    )}
                                />
                                <Link style={{
                                    ...FONTS.h4,
                                    marginBlockStart: 15,
                                    textDecorationLine: "underline",
                                    textDecorationColor: COLORS.Primary,
                                    color: COLORS.gray,
                                    textAlign: mobile ? "right" : "left",
                                    width: mobile ? "88%" : "75%",
                                }}>
                                    Forgot Password?
                                </Link>
                                {
                                    loading ?
                                        <ThreeDots
                                            height="50"
                                            width="50"
                                            radius="4"
                                            color={COLORS.Primary}
                                            ariaLabel="three-dots-loading"
                                            wrapperStyle={{}}
                                            wrapperClassName=""
                                            visible={true}
                                        />
                                        :
                                        <TextButton
                                            title={"Login"}
                                            onClick={() => {
                                                handleSubmit((data) => {
                                                    dispatch(LoginAction(setLoading, data))
                                                })()
                                            }}
                                            buttonStyle={{
                                                marginTop: 15
                                            }}
                                        />
                                }
                                <p style={{
                                    ...FONTS.h4,
                                    marginBlockStart: 15,
                                    color: COLORS.gray
                                }}>
                                    Don't have an account?
                                    <button style={{
                                        ...FONTS.h4,
                                        marginBlockStart: 15,
                                        textDecorationLine: "underline",
                                        textDecorationColor: COLORS.Primary,
                                        color: COLORS.Primary,
                                        border: "none",
                                        outline: "none",
                                        backgroundColor: COLORS.transparent,
                                        cursor: "pointer"
                                    }}
                                        onClick={() => {
                                            setCount(1)
                                        }}>
                                        Sign Up
                                    </button>
                                </p>
                            </> :
                            <>
                                <p style={mobile ? {
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: 30,
                                    color: COLORS.darkGray
                                } : {
                                    ...FONTS.h1,
                                    marginBlockEnd: 0,
                                }}>
                                    Register <span style={{
                                        color: COLORS.Primary
                                    }}>/</span> SignUp
                                </p>
                                <p style={{
                                    ...FONTS.body4,
                                }}>
                                    Create your account to get started.
                                </p>
                                <Controller
                                    name="role"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: true }}
                                    render={({ field: { onChange, value } }) => (
                                        <select style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: "#f0f0f0",
                                            width: mobile ? "88%" : "75%",
                                            height: "45px",
                                            borderRadius: 10,
                                            outline: "none",
                                            border: "none",
                                            marginBlockEnd: 15,
                                            paddingInline: 10,
                                            ...FONTS.h3,
                                        }}
                                            value={value}
                                            onChange={onChange}
                                        >
                                            <option value="Customer">Customer</option>
                                            <option value="Interior">Interior</option>
                                            <option value="Business">Business</option>
                                        </select>
                                    )}
                                />
                                <Controller
                                    name="name"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                            }}>
                                            <AiOutlineUser color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0,

                                                }}
                                                type="text"
                                                placeholder="Enter your Name"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                        </div>
                                    )}
                                />

                                <Controller
                                    name="email"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                                marginTop: 15
                                            }}>
                                            <AiOutlineMail color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0,

                                                }}
                                                type="email"
                                                placeholder="Enter your email"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="phone"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                                marginTop: 15
                                            }}>
                                            <FiPhoneCall color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0,
                                                }}
                                                type="tel"
                                                placeholder="Enter your Mobile Number"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="password"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                                marginTop: 15
                                            }}>
                                            <MdPassword color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0,

                                                }}
                                                type={!show ? "password" : "text"}
                                                placeholder="Enter your Password"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                            {show ?
                                                <AiOutlineEyeInvisible
                                                    color={COLORS.gray}
                                                    size={25}
                                                    style={{ cursor: "pointer", marginInline: 10 }}
                                                    onClick={() => setShow(!show)}
                                                /> :
                                                <AiOutlineEye
                                                    color={COLORS.gray}
                                                    size={25}
                                                    style={{ cursor: "pointer", marginInline: 10 }}
                                                    onClick={() => setShow(!show)}
                                                />
                                            }
                                        </div>
                                    )}
                                />
                                <Controller
                                    name="cnfpassword"
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
                                                width: mobile ? "88%" : "75%",
                                                height: "45px",
                                                borderRadius: 10,
                                                marginTop: 15
                                            }}>
                                            <MdPassword color={COLORS.gray} size={25} style={{ marginInline: 10 }} />
                                            <input
                                                style={{
                                                    width: "80%",
                                                    height: "90%",
                                                    border: "none",
                                                    outline: "none",
                                                    backgroundColor: "#f0f0f0",
                                                    ...FONTS.body3,
                                                    color: COLORS.black,
                                                    padding: 0,

                                                }}
                                                type={!show ? "password" : "text"}
                                                placeholder="Confirm Password"
                                                placeholderTextColor={COLORS.black}
                                                value={value}
                                                onChange={onChange}
                                            />
                                            {show ?
                                                <AiOutlineEyeInvisible
                                                    color={COLORS.gray}
                                                    size={25}
                                                    style={{ cursor: "pointer", marginInline: 10 }}
                                                    onClick={() => setShow(!show)}
                                                /> :
                                                <AiOutlineEye
                                                    color={COLORS.gray}
                                                    size={25}
                                                    style={{ cursor: "pointer", marginInline: 10 }}
                                                    onClick={() => setShow(!show)}
                                                />
                                            }
                                        </div>
                                    )}
                                />
                                <TextButton
                                    title={"Register"}
                                    onClick={() => { }}
                                    buttonStyle={{
                                        marginTop: 15
                                    }}
                                />
                                <p style={{
                                    ...FONTS.h4,
                                    marginBlockStart: 15,
                                    color: COLORS.gray
                                }}>
                                    Already have an account?
                                    <button style={{
                                        ...FONTS.h4,
                                        marginBlockStart: 15,
                                        textDecorationLine: "underline",
                                        textDecorationColor: COLORS.Primary,
                                        color: COLORS.Primary,
                                        border: "none",
                                        outline: "none",
                                        backgroundColor: COLORS.transparent,
                                        cursor: "pointer"
                                    }}
                                        onClick={() => {
                                            setCount(0)
                                        }}>
                                        Sign In
                                    </button>
                                </p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
