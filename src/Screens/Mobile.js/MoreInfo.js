import React from 'react'
import { useLocation } from 'react-router-dom';
import { AddressScreen, CoinsScreen, CouponsScreen, OrdersScreen, ProfileScreen, RatingScreen, SettingScreen } from '../../Constants/ProfileContent';
export default function MoreInfo() {
  const { state } = useLocation();
  console.log(state);
  function currentSection(index) {
    switch (index) {
        case 0:
            return (
                <ProfileScreen />
            )
        case 1:
            return (
                <CoinsScreen />
            )
        case 2:
            return (
                <OrdersScreen />
            )
        case 3:
            return (
                <AddressScreen />
            )
        case 4:
            return (
                <CouponsScreen />
            )
        case 5:
            return (
                <RatingScreen />
            )
        case 6:
            return (
                <SettingScreen />
            )
        default:
    }
}
  return (
    <div
    style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    }}
    >
      {currentSection(state.index)}
    </div>
  )
}
