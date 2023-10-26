import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectCar: 0,
  menu: false,
  langueage: null,
  selectedItem: null,
  cars: [
    {
      imageBlue: "images/tesla-mavi.png",
      imageGreen: "images/tesla-yesil.png",
      imageRed: "images/tesla-kirmizi.png",
      logo: "images/tesla-logo.png",
      name: "Tesla",
      year: "2012",
      model: "S",
      star: "4.8",
      enterPrise: "California",
      gear: "Automatic",
      price: "42,990 $",
    },
    {
      imageBlue: "images/mercedes-mavi.png",
      imageGreen: "images/mercedes-yesil.png",
      imageRed: "images/mercedes-kirmizi.png",
      logo: "images/mercedes-logo.png",
      name: "Mercedes",
      year: "2014",
      model: "Benz E Class",
      star: "4.0",
      enterPrise: "Germany",
      gear: "Automatic",
      price: "92,000 $",
    },
    {
      imageBlue: "images/gtr-mavi.png",
      imageGreen: "images/gtr-yesil.png",
      imageRed: "images/gtr-kirmizi.png",
      logo: "images/nissan-logo.png",
      name: "Nissan",
      year: "2007",
      model: "GTR",
      star: "4.7",
      enterPrise: "Thailand",
      gear: "Automatic",
      price: "350,000 $",
    },
    {
      imageBlue: "images/audi-mavi.png",
      imageGreen: "images/audi-yesil.png",
      imageRed: "images/audi-kirmizi.png",
      logo: "images/audi-logo.png",
      name: "Audi",
      year: "2017",
      model: "A6",
      star: "4.3",
      enterPrise: "Thailand",
      gear: "Automatic",
      price: "266,500 $",
    },
    {
      imageBlue: "images/ford-mustang-mavi.png",
      imageGreen: "images/ford-mustang-yesil.png",
      imageRed: "images/ford-mustang-kirmizi.png",
      logo: "images/ford-logo.png",
      name: "Ford",
      year: "2015",
      model: "Mustang",
      star: "4.2",
      enterPrise: "Chine",
      gear: "Automatic",
      price: "152,000 $",
    },
    {
      imageBlue: "images/peugeot-mavi.png",
      imageGreen: "images/peugeot-yesil.png",
      imageRed: "images/peugeot-kirmizi.png",
      logo: "images/peugeot_logo.png",
      name: "Peugeot",
      year: "2015",
      model: "508",
      star: "3.9",
      enterPrise: "France",
      gear: "Automatic",
      price: "63,900 $",
    },
    {
      imageBlue: "images/mazda-mavi.png",
      imageGreen: "images/mazda-yesil.png",
      imageRed: "images/mazda-kirmizi.png",
      logo: "images/mazda-logo.png",
      name: "Mazda",
      year: "2022",
      model: "MX-5",
      star: "4.5",
      enterPrise: "Japanese",
      gear: "Automatic",
      price: "71,000 $",
    },
    {
      imageBlue: "images/taycan-mavi.png",
      imageGreen: "images/taycan-yesil.png",
      imageRed: "images/taycan-kirmizi.png",
      logo: "images/porsche-logo.png",
      name: "Porsche",
      year: "2019",
      model: "Taycan",
      star: "4.6",
      enterPrise: "Frankfurt",
      gear: "Automatic",
      price: "150,000 $",
    },
    {
      imageBlue: "images/bakir-mavi.png",
      imageGreen: "images/bakir_yesil.png",
      imageRed: "images/bakir_kırmızı.png",
      logo: "images/mitsubishi-logo.png",
      name: "Mitsubishi",
      year: "2017",
      model: "L200",
      star: "3.8",
      enterPrise: "Thailand",
      gear: "Automatic",
      price: "35,400 $",
    },
  ],
  locations: [
    {
      id: 0,
      loc: "Turkey"
    },
    {
      id: 1,
      loc: "Russia"
    },
    {
      id: 2,
      loc: "ABD"
    },
    {
      id: 3,
      loc: "Ukraine"
    },
  ],
}
const UserManagement = createSlice({
  name: "UserManagement",
  initialState,
  reducers: {
    setCar: (state, action) => {
      state.selectCar = action.payload
    },
    setMenu: (state, action) => {
      state.menu = action.payload
    },
    setLanguage: (state, action) => {
      state.langueage = action.payload
    },
    setSelected: (state, action) => {
      state.selectedItem = action.payload
    }
  }
})

export const { setCar, setMenu, setLanguage, setSelected } = UserManagement.actions;
export default UserManagement.reducer