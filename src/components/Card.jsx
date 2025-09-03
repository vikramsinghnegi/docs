import React from 'react'

import { motion } from 'framer-motion'
import { FaFile } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Card() {
  return (
      <motion.div drag className=' relative w-60 h-72 py-8 px-5 text-white bg-zinc-800 rounded-[45px] overflow-hidden'>
          <FaFile />
          <p className='mt-4 font-semibold text-sm leading-tight'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur animi et aliquid qui reprehenderit officiis.</p>
          <div className='footer absolute bottom-0  w-full left-0'>
              <div className='flex items-center justify-between px-4  mb-5'>
                  <h5> .4mb</h5>
                  <span className='w-5 h-5rounded-full flex items-center justify-center'>
                      < FaArrowAltCircleDown  /></span>  
              </div>
              <div className='tag w-full  py-4 bg-green-400 flex items-center justify-center '>
                  <h3 className='text-md  font-semibold '>Download Now</h3>
              </div>
              
       </div>
      </motion.div>
  )
}

export default Card
