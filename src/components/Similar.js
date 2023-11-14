import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchData, options } from '../utils/fetch';
import {Link} from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SimilarCards from './SimilarCards';

const Similar = ({id}) => {


    const [similar,setSimilar]=useState([]);

    useEffect(() => {
        const fetchSimilar=async()=>{
            const data=await fetchData(`https://api.themoviedb.org/3/movie/${id}/similar`,options);
            setSimilar(data.results)
    }
    fetchSimilar();
    }, [id])
    


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
        padding:'10px 50px'
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
            Similar :
        </Typography>
       </Box>
        <Swiper
        style={{
            margin:'20px 40px'
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
   
        slidesPerView={5}
        navigation
        spaceBetween={250}
        pagination={{ clickable: true }}
        >
          {
            similar.map((e)=>{
                return(
                    <SwiperSlide>
                        <SimilarCards
                        title={e.title}
                        id={e.id}
                        imageURL={e.poster_path}
                        />
                    </SwiperSlide>
                )
            })
          }
        </Swiper>
    </Box>
  )
}

export default Similar