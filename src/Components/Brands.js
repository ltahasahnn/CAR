import { setCar } from '../store/features/UserManagement';
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'

const Brands = () => {
  const { cars } = useSelector((state) => state.UserManagement);
  const dispatch = useDispatch()
  return (
    <div
      id='brands'
      className='
      lg:container 
      lg:m-auto
      '>
      <div
        className="
        brands-item 
        xl:justify-center
        ">
        {cars.map((item, index) => (
          <div
            key={index}
            className="brandCard"
            onClick={() => { dispatch(setCar(index)) }}
          >
            <div className="image">
              <img
                src={item.logo}
                draggable="false"
                className='images'
                alt=""
              />
            </div>
            <div className="text">
              <span>
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
