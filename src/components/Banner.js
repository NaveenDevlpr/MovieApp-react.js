
import React from 'react'

import PopularBanner from './popular';
import TrendingBanner from './Trending';
import { Box } from '@mui/material';
import UpcomingBanner from './Upcoming';
const Banner = () => {



  return (
    <Box>
        
   <PopularBanner/>
   <TrendingBanner/>
   <UpcomingBanner/>
    </Box>
  )
}

export default Banner