import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';

export default function Health() {
    //API Data State
    const[feeds,setFeeds] = useState([]);
    //Pagination states
    const[newsPerpage] = useState(2);
    const[currentPage , setcurrentPage] = useState(1);

    const fetchFeeds = ()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=33ffd68430c54f0da761531dfda8c41b')
        .then((response)=>{
            setFeeds(response.data.articles);
            console.log(response.data);
        },(error)=>{
            console.log(error);
        })
    }
    //Fecth APi
    useEffect(()=>{
        fetchFeeds();
    } ,[])
  
    const indexOfLastNews = currentPage * newsPerpage;
    const indexOfFirstNews  = indexOfLastNews - newsPerpage;
    const currentNews = feeds.slice(indexOfFirstNews,indexOfLastNews);

    console.log(currentNews);
    const NewsPage=[];
    for (let index = 1; index <= Math.ceil(feeds.length / newsPerpage); index++) {
            NewsPage.push(index);
    }
    //Set page
    const paginate =(event,value)=>{
      setcurrentPage(value);
    }
  return (
    <div>
         <Typography gutterBottom variant="h5" component="div" padding={2}>
          Health
        </Typography>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
      {currentNews.map((feeditems)=>(
      <Grid  key={feeditems.title} item xs={6}>
        <Card sx={{maxWidth: 600, padding: 2,margin:0.5 ,boxShadow:10,height:590}}>
            <CardMedia
            component="img"
            height="250"
            image={feeditems.urlToImage}
            alt={feeditems.title}
            />
            <Typography gutterBottom variant="h5" component="div" padding={2}>
            {feeditems.title}
            </Typography>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {feeditems.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary" variant="contained" target="_blank" 
                      rel="noreferrer noopener" 
                      underline="none"
                      href={feeditems.url}  size="small"
                      sx={{
                        ':hover': {
                          color: 'white',
                        },
                      }}
              >
                Read More
            </Button>
            </CardActions>
        </Card>
       </Grid>
    ))}
    </Grid>
    <div class="row mx-md-n5" style={{marginTop:20}}>
    <Pagination 
    
    color="secondary"
    count={NewsPage.length}
    page={currentPage}
    onChange={paginate}
    />
</div>
    </div>
      );
    }
    