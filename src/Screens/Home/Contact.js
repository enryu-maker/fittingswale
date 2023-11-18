import React from 'react'
import { COLORS, FONTS } from '../../Assets/Theme'
import useMediaQuery from '../../Component/useMediaQuery'
import { Controller, useForm } from 'react-hook-form';
import TextButton from '../../Component/TextButton';
import { Link } from 'react-router-dom';
export default function Contact() {
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
        justifyContent: 'center',
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
        <p>Contact Us</p>
      </div>
      <div style={{
        width: "100%",
        height: mobile ? "auto" : "75%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: COLORS.white,
        marginBlockEnd: 40,
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          width: mobile ? "90%" : "45%",
        }}>
          <p style={{
            textAlign: 'left',
            ...FONTS.h1,
            marginBlockEnd: 0,
          }}>Contact Us<span style={{
            color: COLORS.Primary
          }}>.</span></p>
          <div>
            <p style={{
              textAlign: 'left',
              ...FONTS.h2,
            }}>Corporate Office<span style={{
              color: COLORS.Primary
            }}>.</span></p>
            <p style={{
              textAlign: 'left',
              ...FONTS.body3,
            }}>- Mittal bhawan gol building manaitand dhanbad jharkhand 826001</p>
            <p style={{
              textAlign: 'left',
              ...FONTS.body3,
            }}>- TEL : +919155511522</p>
            <p style={{
              textAlign: 'left',
              ...FONTS.body3,
              marginBlockEnd: 0,
            }}>- Email : support@fittingswale.com</p>
          </div>
          <div>
            <p style={{
              textAlign: 'left',
              width: mobile ? "90%" : "100%",
              ...FONTS.h2,
            }}>For Support<span style={{
              color: COLORS.Primary
            }}>.</span></p>
            <p style={{
              textAlign: 'left',
              ...FONTS.body3,
            }}>- TEL : +919155511522</p>
            <p style={{
              textAlign: 'left',
              ...FONTS.body3,
            }}>- Email : support@fittingswale.com</p>
            <p style={{
              textAlign: 'left',
              ...FONTS.body3,
            }}>- 9:30-7:00(Monday to Sunday)</p>
          </div>
        </div>
        {/* Form */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 20,
          width: mobile ? "90vw" : "40vw",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          height: mobile ? "auto" : "60vh",
        }}>
          <p style={{
            textAlign: 'left',
            width: mobile ? "90%" : "100%",
            ...FONTS.h2,
          }}>Contact Form<span style={{
            color: COLORS.Primary
          }}>.</span></p>
          <Controller
            name='name'
            control={control}
            defaultValue=''
            rules={{
              required: {
                value: true,
                message:
                  'Name Cannot be Empty',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <input
                  style={{
                    height: 35,
                    width: mobile ? "90%" : "40vw",
                    border: "2px solid lightGray",
                    borderRadius: 6,
                    ...FONTS.body3,
                    paddingInline: 10,
                    color: "lightgray"
                  }}
                  placeholder='Full Name*'
                  // value={passwordText}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                />
                {errors?.name && (
                  <p style={{

                  }}>
                    {errors?.name?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name='email'
            control={control}
            defaultValue=''
            rules={{
              required: {
                value: true,
                message:
                  'Email Cannot be Empty',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <input
                  style={{
                    height: 35,
                    width: mobile ? "90%" : "40vw",
                    border: "2px solid lightGray",
                    borderRadius: 6,
                    ...FONTS.body3,
                    paddingInline: 10,
                    color: "lightgray"
                  }}
                  placeholder='Email Address*'
                  // value={passwordText}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                />
                {errors?.email && (
                  <p style={{

                  }}>
                    {errors?.email?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name='mobile'
            control={control}
            defaultValue=''
            rules={{
              required: {
                value: true,
                message:
                  'Mobile Cannot be Empty',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <input
                  style={{
                    height: 35,
                    width: mobile ? "90%" : "40vw",
                    border: "2px solid lightGray",
                    borderRadius: 6,
                    ...FONTS.body3,
                    paddingInline: 10,
                    color: "lightgray"
                  }}
                  placeholder='Mobile*'
                  // value={passwordText}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                />
                {errors?.mobile && (
                  <p style={{

                  }}>
                    {errors?.mobile?.message}
                  </p>
                )}
              </>
            )}
          />
          <Controller
            name='message'
            control={control}
            defaultValue=''
            rules={{
              required: {
                value: true,
                message:
                  'Mobile Cannot be Empty',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <textarea
                  style={{
                    height: mobile ? 80 : 100,
                    marginBlock: mobile ? 10 : 0,
                    width: mobile ? "90%" : "40vw",
                    border: "2px solid lightGray",
                    borderRadius: 6,
                    ...FONTS.body3,
                    padding: 10,
                    color: "lightgray"
                  }}
                  placeholder='Type Text*'
                  // value={passwordText}
                  onChangeText={(text) => {
                    onChange(text);
                  }}
                />
                {errors?.message && (
                  <p style={{

                  }}>
                    {errors?.message?.message}
                  </p>
                )}
              </>
            )}
          />
          <TextButton
            title={"Send"}
          />
        </div>
      </div>
    </div>
  )
}
