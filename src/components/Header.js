import { Box, Typography } from '@mui/material';
import React from 'react'
import { Card, CardText, CardTitle,Button } from 'reactstrap';
import ReadMoreReact from 'read-more-react';
export default function Header() {
  return (

    <Box bgcolor="black" component="div" 
      boxShadow={5}
      borderRadius={1}
      padding={0.5}>
      <Typography color="white" variant="h4" gutterBottom component="div">
        News ExploreDaily
      </Typography>
      </Box>

  )
}
