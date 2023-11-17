import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'
import ProductCard from '../../Component/ProductCard';
import FlatList from 'flatlist-react/lib';
import CircularCard from '../../Component/CircularCard';
export default function CatInfo() {
  const { state } = useLocation();
  const { id, item } = state;
  const [cond, setCond] = React.useState(item?.subcategories?.length >= 2);
  const [cat, setCat] = React.useState(item?.subcategories[0]?.name);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
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
        <p>{item?.name}</p>
      </div>
      <p style={{
        ...FONTS.h1,
        color: COLORS.black,
        textAlign: "center",
        marginBlock: 0,
      }}>
        {item?.name}<span style={{ color: COLORS.Primary }}>.</span>
      </p>
      <div style={{
        flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        marginBlock: "20px",
      }}>
        <FlatList
          list={cond ? item?.subcategories : item?.subcategories[0]?.Scategory}
          renderItem={(item) => cond ?
            <CircularCard item={item} /> :
            <ProductCard cat={cat}  item={item} />
          }
          renderWhenEmpty={() => <div>List is empty!</div>}
          display={{ grid: true, columns: 3, gap: 20 }}
        />
      </div>
    </div>
  )
}
