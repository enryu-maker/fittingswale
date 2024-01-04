import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLORS, FONTS } from '../../Assets/Theme'
import ProductCard from '../../Component/ProductCard';
import FlatList from 'flatlist-react/lib';
import CircularCard from '../../Component/CircularCard';
import useMediaQuery from '../../Component/useMediaQuery';
export default function CatInfo() {
  const mobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { state } = useLocation();
  const { id, item } = state;
  const [cond, setCond] = React.useState(item?.subcategories?.length >= 2);
  const [cat, setCat] = React.useState(item?.subcategories[0]?.name);
  const [currentData, setCurrentData] = React.useState([]);
  const [current, setCurrent] = React.useState(0);
  
  React.useEffect(() => {
    setCurrentData(item?.subcategories[0]?.Scategory);
  }, [item?.subcategories]);

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
        // flexWrap: "wrap",
        display: "flex",
        justifyContent: "center",
        alignItems:"flex-start",
        marginBlock: "20px",
        width: "100%",
      }}>
        <div style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems:"flex-start",
          marginBlock: "20px",
        }}>
          <p style={{
            color: COLORS.black,
            ...FONTS.h2,
            marginBlock: 0,
          }}>
            Category<span style={{ color: COLORS.Primary }}>.</span>
          </p>
          {
            mobile ?
              null
              :
              <FlatList
                list={item?.subcategories}
                renderItem={(item, index) => (
                  <li key={index} style={{
                    ...FONTS.body3,
                    color:current===index?COLORS.Primary : COLORS.black,
                    textAlign: "center",
                    marginBlock: 5,
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                    onClick={() => {
                      setCat(item.name);
                      setCurrentData(item.Scategory);
                      setCurrent(index);
                    }}
                  >
                    {item.name}
                  </li>)}
              />
          }
        </div>
        <div style={{
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "center",
          marginBlock: "20px",
          width: "80%",
        }}>
          <FlatList
            list={ currentData }
            renderItem={(item) => 
              <ProductCard cat={cat} item={item} />
            }
            renderWhenEmpty={() => <div>List is empty!</div>}
            display={{ grid: true, columns: 3, gap: 20 }}
          />
        </div>
      </div>
    </div>
  )
}
