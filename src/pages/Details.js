import React from 'react'
import { useState,useEffect } from 'react'
import { useParams ,Link} from 'react-router-dom'
import { Box,Modal,Stack,Typography } from '@mui/material'
import { fetchData, options } from '../utils/fetch';
import Similar from '../components/Similar';
import VideoModel from '../components/VideoModel';

const Details = ({}) => {

    
    const {id}=useParams();
    const [details,setDetails]=useState([]);
    
    const [genresDetials,setGenres]=useState([]);


    const [play,setPlay]=useState(false);
    const setActive=()=>{
        setPlay(!play)
    }
   
    useEffect(() => {
        
        const getDetails=async()=>{
            const data=await fetchData(`https://api.themoviedb.org/3/movie/${id}`,options);
            setDetails(data);
            setGenres(data.genres)
            
        }
        getDetails()
        

    }, [id])

  return (
    <Box  p='20px 40px'>
        <Box
            width='100%'
            height={'600px'}
            sx={{
                display:'flex',
                background:' rgba(255, 255, 255, 0.2)',
                borderRadius:'20px',
                backdropFilter:'blur(8px)',
                padding:'40px',
                
               
            }}
         >

          

        <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} 
                alt=""

                style={{
                    borderRadius:'15px',
                    marginLeft:'50px',
                    width:'380px',
                    height:'520px',
                    
                   
                }}></img>

            <Stack

                   ml='30px'
                   direction={'column'}
                   p={'20px'}
                   zIndex={1000}
                   
                   >
                        <Typography
                            color='#fff'
                            fontSize={'2.8rem'}
                            fontFamily={"Poppins"}
                            fontWeight={"700"}
                            
                            
                       >
                           {details.title}
                       </Typography>

                        <Typography
                              mt='20px'
                             color='#fff'
                             fontSize={'1rem'}
                                fontFamily={"Poppins"}
                                fontWeight={"600"}
                        >
                            Overview :
                        </Typography>
                       <Typography
                            mt='6px'
                            color='#fff'
                            fontSize={'1rem'}
                            fontFamily={"Poppins"}
                            fontWeight={"500"}
                            lineHeight={2.0}
                       >
                           {details.overview}
                       </Typography>

                       <Stack
                       mt='25px'
                       direction={'row'}
                       alignItems={'center'}
                
                       
                       >
                         <Typography
                              
                             color='#fff'
                             fontSize={'1rem'}
                                fontFamily={"Poppins"}
                                fontWeight={"600"}
                        >
                            Runtime :
                        </Typography>
                        <Typography
                            marginLeft={'10px'}
                            color='#fff'
                            fontSize={'1rem'}
                            fontFamily={"Poppins"}
                            fontWeight={"500"}
                            textAlign={'center'}
                       >
                           {details.runtime+" "+"minutes"}
                       </Typography>

                       
                       <Typography
                             marginLeft={'100px'}
                              color='#fff'
                              fontSize={'1rem'}
                                 fontFamily={"Poppins"}
                                 fontWeight={"600"} >
                             Rating :
                         </Typography>


                         <Typography
                            marginLeft={'10px'}
                            color='#fff'
                            fontSize={'1rem'}
                            fontFamily={"Poppins"}
                            fontWeight={"500"}
                            textAlign={'center'}
                       >
                           {Math.ceil(details.vote_average)+"/10"}
                       </Typography>
                    </Stack>
                    <Typography
                            mt='20px'          
                              color='#fff'
                              fontSize={'1rem'}
                                 fontFamily={"Poppins"}
                                 fontWeight={"600"}
                         >
                             Genre :
                         </Typography>

                   
                    <Stack direction={'row'} mt='30px'>
                        <Link onClick={setActive} 
                        
                        
                        >
                            <Box width='120px' height='50px'
                            sx={{
                                border:'2.5px solid rgb(227, 132, 255)',
                                display :'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                background:'rgb(25, 24, 37,0.75)'
                            }}
                            >
                                <Typography
                                color='#fff'
                                fontFamily={"Poppins"}
                                fontSize={'12px'}
                                fontWeight={'600'}
                                >
                                        Watch
                                </Typography>
                            </Box>
                        </Link>


                        <Box width='120px' height='50px' ml='50px'
                        sx={{
                            border:'2.5px solid rgb(227, 132, 255)',
                            display :'flex',
                            alignItems:'center',
                            justifyContent:'center',
                            background:'rgb(25, 24, 37,0.75)'
                        }}
                        >
                            <Typography
                            color='#fff'
                            fontFamily={"Poppins"}
                            fontSize={'12px'}
                            fontWeight={'600'}
                            >
                                    Discuss
                            </Typography>
                        </Box>
                    </Stack>
                    {play?<VideoModel   id={id} setActive={setActive}/>:''}
            </Stack>

        </Box>
        <Similar
        id={id}
        />
    </Box>
  )
}

export default Details