import { Box, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { options,fetchData } from '../utils/fetch';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PopularCards from './PopularCards';
const PopularBanner = () => {


const [popular,setPopular]=useState([]);

useEffect(() => {
    const fetchPopular=async()=>{
        const data=await fetchData('https://api.themoviedb.org/3/movie/popular',options);
        setPopular(data.results)
}
fetchPopular();
}, [])

  return (
    <Box
    sx={{
        marginTop:'20px'
    }}>
       <Box
       sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'10px 20px'
       }}
       >
       <Typography
        sx={{
            fontSize:'1.5rem',
            color:'#fff',
            fontFamily:'Poppins',
            fontWeight:'600',
        }}
        >
            Popular :
        </Typography>
       </Box>
        <Swiper
        style={{
            margin:'20px 0px'
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        slidesPerView={5}
        
        spaceBetween={250}
        pagination={{ clickable: true }}
        >
          {
            popular.map((e)=>{
                return(
                    <SwiperSlide>
                        <PopularCards
                        key={e.id}
                        title={e.title}
                        imageURL={e.poster_path}
                        id={e.id}
                        description={e.overview}
                        />
                    </SwiperSlide>
                )
            })
          }
        </Swiper>
    </Box>
  )
}

export default PopularBanner