import { LocationMarkerIcon, ChevronDownIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline';
import { setMenu, setSelected } from '../store/features/UserManagement';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'

const Header = () => {
  const { selectCar, menu, langueage, locations, selectedItem } = useSelector((state) => state.UserManagement);
  const [selectLangHide, setSelectLangHide] = useState(false)
  const [selectLang, setSelectLang] = useState()
  const [lang, setLanguage] = useState(null)
  const [menuu, setMenuu] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLanguage(langueage)
    if (menu === false) {
      setSelectLangHide(false)
    }
  }, [langueage, menu])

  return (
    <div
      id='header'
      className='
      main-header 
      max-lg:p-2'
    >
      <div
        className="
        container 
        m-auto
        ">
        <div className="brand">
          <img
            src="images/lo.webp"
            className='images'
            draggable="false"
            alt=""
          />
        </div>
        <form
          className="
          text-[#333333]
          max-md:hidden 
          header-search
          bg-stone-100
          flex 
          ">
          <SearchIcon className='icon' />
          <input
            className='search'
            placeholder='Search cars...'
            type="text"
          />
          <i
            className="
            fa-solid 
            fa-right-left 
            icon
            ">
          </i>
        </form>
        <div
          className='
          profile 
          text-[#333333]
          '>
          <MenuIcon
            onClick={() => {
              setMenuu(!menuu)
              dispatch(setMenu(menuu))
            }}
            onBlur={() => {
              setSelectLangHide(false)
            }}
            className='
            hidden 
            max-md:flex 
            menu'
          />
          <div
            className="
            max-lg:hidden
            flex
            row 
            ">
            <LocationMarkerIcon className='icon' />
            <div
              className="col"
              onClick={() => {
                setSelectLangHide(!selectLangHide)
              }}
            >
              <h2>Your Location</h2>
              <div
                className="
                row 
                relative
                ">
                <div
                  className={`
                  selectLocation 
                  font-bold
                  `}
                  key=
                  {
                    locations.id
                  }
                >
                  {selectedItem === null ?
                    'none'
                    :
                    locations[selectedItem].loc
                  }
                  <div
                    className={`
                    selectLocationBottom
                    ${selectLangHide ?
                        'active'
                        :
                        ''
                      }
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
                <ChevronDownIcon className='icon' />

              </div>
            </div>
          </div>
          <div
            className="
            avatar 
            flex 
            max-md:hidden
            ">
            <img
              src="images/profile.jpeg"
              className='images'
              draggable="false"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header