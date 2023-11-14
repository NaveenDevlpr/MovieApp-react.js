import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { fetchData, options } from '../utils/fetch';
import {Link} from 'react-router-dom'
const PopularCards = ({title,imageURL,id,key,description}) => {

    
    const [imageURLs,setImageURLs]=useState([]);

    useEffect(() => {
        const getImageData=async()=>{
            const data=await fetchData(`https://api.themoviedb.org/3/movie/${id}/images`,options)
            setImageURLs(data.posters[0].file_path)
           
        }
        getImageData();
    }, [id])
  return (
   <Link to={`/details/${id}`}  style={{textDecoration:"none"}}>
   <Box
    width={'300px'}
    height={'500px'}
    sx={{
       position:'relative',
       overflow:'hidden'
    }}
    >

    <Typography
                  sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    bottom:'0',
                    fontFamily:'Poppins',
                    fontSize:'12px',
                    fontWeight:'600',
                    height:'25%'
                }}    
                p='8%'
                position={'absolute'}
                color='#fff'
                zIndex={'10'}
                
                >
                    {title}
    </Typography>
            
    

       <img src={`https://image.tmdb.org/t/p/original/${imageURLs}`}
        style={{
            width:'100%',
            height:'100%',
            borderRadius:'40px',
            objectFit:'cover',
            position:'absolute'
           
        }}
        alt=''></img>
        <Box
        sx={{
            position:'absolute',
            zIndex:'3',
            height:'100%',
            width:'100%',
            background: 'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.95))',
            borderRadius:'40px'
        }}
        >

        </Box>
    </Box>
   </Link>
  )
}

export default PopularCards