import React from 'react'
import { Data } from '../../Constants/Data'
import FlatList from 'flatlist-react/lib';
import { useNavigate } from 'react-router-dom';
import CircularCard from '../../Component/CircularCard';
import { COLORS, FONTS } from '../../Assets/Theme';
import useMediaQuery from '../../Component/useMediaQuery';
export default function Cat() {
    const navigate = useNavigate();
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            backgroundColor: "#f5f5f5",
            alignItems: "center",
        }}>
            <>
                <p style={{
                    textAlign: 'center',
                    width: mobile ? "90%" : "92%",
                    ...FONTS.h1,
                }}>Shop By Category<span style={{
                    color: COLORS.Primary
                }}>.</span></p>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}>
                    <FlatList
                        list={Data.Category}
                        renderItem={(item, index) => {
                            return (
                                <CircularCard
                                    item={item}
                                />
                            )
                        }}
                        renderWhenEmpty={() => <div>List is empty!</div>}
                        display={{ grid: true, columns: 5, gap: 10 }}
                    />
                </div>
            </>
        </div>
    )
}
