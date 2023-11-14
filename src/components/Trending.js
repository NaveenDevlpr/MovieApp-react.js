import { Box, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { options,fetchData } from '../utils/fetch';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TrendingCard from './TrendingCard';

const TrendingBanner = () => {

    const [trending,setTrending]=useState([])

    useEffect(() => {
        const getTrending=async()=>{
            const trendingData=await fetchData(`https://api.themoviedb.org/3/trending/movie/day?language=ta-IN`,options)
            setTrending(trendingData.results);
        }
        getTrending();
    }, [])


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
            Trending :
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
           trending.map((e)=>{
                return(
                    <SwiperSlide>
                    <TrendingCard
                    key={e.id}
                    title={e.title}
                    imageURLs={e.poster_path}
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

export default TrendingBanner