import React, { useEffect, useState } from 'react'
import { StarIcon, HeartIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Recommend = () => {
  const { selectCar, cars } = useSelector((state) => state.UserManagement);
  const [favorite, setFavorite] = useState(true)
  const [carColor, setCarColor] = useState()
  const [color, setColor] = useState()

  const [carState, setCarState] = useState()

  useEffect(() => {
    setCarState([cars])
    setCarColor(cars[selectCar].imageBlue)

    if (color === 0)
      setCarColor(cars[selectCar].imageBlue)

    if (color === 1)
      setCarColor(cars[selectCar].imageGreen)

    if (color === 2)
      setCarColor(cars[selectCar].imageRed)

  }, [cars, selectCar, color])

  return (
    <div
      id='recommends'
      className='
      max-lg:p-2 
      py-4 
      pb-10
      '>
      {
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
          recommend-item 
          w-[62.5%] 
          max-lg:w-4/5"
        >
          <div
            className="
            row 
            between
            align
            ">
            <div
              className="
              row 
              align
              text-yellow-500
              ">
              <StarIcon className='h-6 mr-2' />
              <span>{cars[selectCar].star}</span>
            </div>
            <div
              className="
              row
              align
              content
              text-[#333333]
              ">
              {favorite ?
                <img
                  src="images/heart.png"
                  className='h-6 w-6 favorite'
                  onClick={() => { setFavorite(!favorite) }}
                  alt=""
                /> :
                <HeartIcon
                  className='h-6 w-6 favorite'
                  onClick={() => { setFavorite(!favorite) }}
                />
              }
            </div>
          </div>
          <div className="recommend-image">
            <img
              src={carColor}
              className='images'
              draggable="false"
              alt=""
            />
          </div>
          <div className="col border-b pb-2">
            <div className="row">
              <span>
                {cars[selectCar].name}
              </span>
              <span>
                {cars[selectCar].model}
              </span>
            </div>
            <div className="row">
              <span>
                {cars[selectCar].year}
              </span>
            </div>
          </div>
          <div className="row max-md:flex-col">
            <div className="carDetails text-xl max-xl:text-sm">
              <div className='item'>
                <LocationMarkerIcon className='h-5 mr-2' />
                <span className='item-detail'>
                  {cars[selectCar].enterPrise}
                </span>
              </div>
              <div className='item'>
                <img
                  src="images/gear.png"
                  className='
                  w-8  
                  h-8 
                  mr-1
                  '
                  alt=""
                />
                <span className='item-detail'>
                  {cars[selectCar].gear}
                </span>
              </div>
              <div className='item'>
                <span className='font-bold mr-2'>
                  <span className='item-detail'>
                    {cars[selectCar].price}
                  </span>
                </span>
              </div>
            </div>
            <div className="colorDetails">
              <span
                className='
                color 
                flex 
                max-md:hidden
                '>
              </span>
              <div onClick={() => {
                setColor(0)
              }}
                className="
                box 
                blue
                "></div>
              <div onClick={() => {
                setColor(1)
              }}
                className="
                box 
                green
                "></div>
              <div onClick={() => {
                setColor(2)
              }}
                className="
                box 
                red
                "></div>
            </div>

          </div>
        </motion.div>
      }

    </div>
  )
}

export default Recommend