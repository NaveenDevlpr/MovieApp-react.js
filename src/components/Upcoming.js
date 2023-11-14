import { Box, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { options,fetchData } from '../utils/fetch';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import UpcomingCard from './UpcomingCard';

const UpcomingBanner = () => {
    const [upcomings,setUpcoming]=useState([]);

    useEffect(() => {
        const getUpcoming=async()=>{
            const upcomingData=await fetchData('https://api.themoviedb.org/3/movie/upcoming',options);
            setUpcoming(upcomingData.results);
        }       
        getUpcoming();
    }, [])
console.log(upcomings)
  return (
    <Box
    sx={{
        marginTop:'30px'
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
            Upcoming :
        </Typography>
       </Box>
        <Swiper
        style={{
            margin:'20px 0px'
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
   
        slidesPerView={5}
        navigation
        spaceBetween={250}
        pagination={{ clickable: true }}
        >
          {
            upcomings.map((e)=>{
                return(
                    <SwiperSlide>
                        <UpcomingCard
                            title={e.title}
                            imageURLs={e.poster_path}
                            key={e.id}
                            id={e.id}
                        />
                    </SwiperSlide>
                )
            })
          }
        </Swiper>
    </Box>
  )
}

export default UpcomingBanner
