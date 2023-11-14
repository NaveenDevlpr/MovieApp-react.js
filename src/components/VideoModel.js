import React, { useState ,useEffect} from 'react'
import { Box, Typography,Stack } from '@mui/material'
import { fetchData,options } from '../utils/fetch';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const VideoModel = ({id,setActive}) => {

    const closeFrame=()=>{
        document.getElementById('YtVideo').remove();
    }


    const [vidId,setVidId]=useState([]);

    useEffect(() => {
        const getId=async()=>{
            const dataId=await fetchData(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
            setVidId(dataId.results)
        }
        getId();
    }, [id])

  return (
    <Stack 
    color='#fff'
    bgcolor={'black'}
    width='1000'
    height={'900'}
    position={'absolute'}
    zIndex={'1000'}
    sx={{
        marginBottom:'70px',
       
       
    }}
    
    >
        <Link style={{textDecoration:'none', textAlign:'end'}} onClick={setActive}>
           <Typography
           color={'#fff'}
           fontWeight={'700'}
           fontSize={'25px'}
           marginRight={'20px'}
           >
            close
           </Typography>
        </Link>
       
        {
            vidId.map((e,i)=>{
                if(i===0){
                    return(
                        <iframe 
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${e.key}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title=' '
                   >
                       
                   </iframe>
                    )
                }
            })
        }
       
    </Stack>
  )
}


export default VideoModel