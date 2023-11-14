import React, { useState } from 'react'
import {Stack,Typography,Box} from '@mui/material'
import { Link } from 'react-router-dom'
const NavBar = () => {

 
  return (
  <Box>
     <Stack direction='row' alignItems='center' justifyContent='space-between'
   sx={{
    padding:'30px 60px'
   }}
   >      
        <Link to={'/'} style={{textDecoration:"none" }}>
            <Typography
            sx={{
                fontFamily:'Silkscreen',
                fontSize:'2rem',
                color:'rgb(227, 132, 255)'
            }}
            >
                Filme.
            </Typography>
        </Link>
        <Stack  direction='row' alignItems='center' justifyContent='space-between'  gap='50px'>
        <Link to='/' style={{textDecoration:"none" }}>
            <Typography
            sx={{
            
                fontFamily:'Poppins',
                fontSize:'18px',
                color:'rgb(227, 132, 255)',
                fontWeight:'600'
            }}
            >
                Movies
            </Typography>
        </Link>
        <Typography
        sx={{
            fontFamily:'Poppins',
            fontSize:'18px',
            color:'rgb(227, 132, 255)',
            fontWeight:'600'
        }}
        >
            Tv Series
        </Typography>
        <Typography
        sx={{
            fontFamily:'Poppins',
            fontSize:'18px',
            color:'rgb(227, 132, 255)',
            fontWeight:'600'
        }}
        >
            Search
        </Typography>
        </Stack>
        <Stack direction='row' justifyContent='center' alignItems='center' gap='30px'>
            <Box width='100px' height='40px'
            sx={{
                borderRadius:'40px',
                textTransform:'capitalize',
                background:"transparent",
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                border:'2.5px solid rgb(227, 132, 255)'
            }}
            ><Typography
            sx={{
                fontSize:'12px',
                color:'#fff',
                fontFamily:'Poppins',
                fontWeight:'600'

            }}
            >Login</Typography></Box>
           <Box width='100px' height='40px'
           sx={{
            borderRadius:'40px',
            display:'flex',
            background:"transparent",
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center',
            border:'2.5px solid rgb(227, 132, 255)'
           }}
            ><Typography
            sx={{
                fontSize:'12px',
                color:'#fff',
                fontFamily:'Poppins',
                fontWeight:'600'

            }}
            >Register</Typography></Box>
            
        </Stack>
   </Stack>
      
  </Box>
  )
}

export default NavBar