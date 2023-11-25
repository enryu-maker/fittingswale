import React from 'react'
import { AiOutlineFileDone, AiOutlineUpload } from 'react-icons/ai';
import useMediaQuery from './useMediaQuery';
import { COLORS, FONTS } from '../Assets/Theme';
export default function Upload({
    value,
    setValue,
    title,
    disabled ,
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    return (
        <>
            <button
                style={{
                    width: mobile ? "95%" : "92%",
                    height:45,
                    border: "none",
                    outline: "none",
                    backgroundColor: mobile ? "white" : "#f5f5f5",
                    borderRadius: 5,
                    ...FONTS.body4,
                    color: COLORS.black,
                    paddingInline: 10,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    display: "flex",
                    // marginInline: 10,
                }}
                onClick={handleClick}
                disabled={disabled}
            >
                {
                    value === null ?
                        <AiOutlineUpload style={{ marginInlineEnd: "5px" }} size={20} color={COLORS.red} />
                        :
                        <AiOutlineFileDone style={{ marginInlineEnd: "5px" }} size={20} color={COLORS.green}/>
                }
                {
                    value === null ?
                        title
                        :
                        value.name
                }
            </button>
            <input
                type="file"
                onChange={(e) => {
                    setValue(e.target.files[0])
                }}
                disabled={disabled}
                ref={hiddenFileInput}
                style={{ display: 'none' }} // Make the file input element invisible
            />
        </>
    )
}