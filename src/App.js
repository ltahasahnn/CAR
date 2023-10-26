import React, { useEffect, useState } from 'react'
import { store } from './store/store'
import { ChevronDownIcon, LocationMarkerIcon, OutlineHeart, SearchIcon } from '@heroicons/react/outline';
import Header from './Components/Header';
import Brands from './Components/Brands';
import Recommend from './Components/Recommend';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setSelected } from './store/features/UserManagement';
import { motion } from 'framer-motion';

export const App = () => {
  const { selectCar, menu, langueage, locations, selectedItem } = useSelector((state) => state.UserManagement);
  const [lang, setLanguage] = useState(null)
  const [selectLang, setSelectLang] = useState()
  const [selectLangHide, setSelectLangHide] = useState(false)

  useEffect(() => {
    setLanguage(langueage)
    if (menu === false) {
      setSelectLangHide(false)
    }
  }, [langueage, menu])

  const dispatch = useDispatch()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='
      w-full 
      min-h-[100vh]
      bg-stone-100
      relative
      '>
      <Header />
      <Brands />
      <Recommend />
      <div className={`rightMenu block md:hidden ${menu ? 'active' : ''}`}>
        <div className="col">
          <div className="avatar">
            <img src="images/profile.jpeg" className='images' draggable="false" alt="" />
          </div>
          <form
            className="
            rightMenu-search
            text-cyan-600 
            bg-stone-200 
            flex 
            ">
            <SearchIcon className='icon' />
            <input className='search' placeholder='Search cars...' type="text" />
            <i className="fa-solid fa-right-left icon"></i>
          </form>
        </div>
        <div
          className="
          location
          text-cyan-500
          ">
          <h2>
            Your Location
          </h2>
          <span
            className='
            font-bold
            '>
            {selectedItem === null ? "none" : locations[selectedItem].loc}
          </span>
          <div
            onClick={() => {
              setSelectLangHide(!selectLangHide)
            }}
            onBlur={() => {
              setSelectLangHide(!selectLangHide)
            }}
            className={`
            selectLocation 
            text-white
            bg-cyan-500
            `}
            key={locations.id}
          >
            {selectedItem === null ? 'none' : locations[selectedItem].loc}
            <div
              className={`
              selectLocationBottom
              ${selectLangHide ? 'active' : ''}
              `}>
              <ul className='list'>
                {locations.map((location, index) => (
                  <li
                    className='list-item'
                    key={index}
                    onClick={() => {
                      dispatch(setSelected(index))
                    }}
                  >
                    {location.loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;