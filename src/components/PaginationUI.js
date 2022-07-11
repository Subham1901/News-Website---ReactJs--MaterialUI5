import React from 'react'
import Pagination from '@mui/material/Pagination';

export default function PaginationUI(News,NewsPerPage,CurrentPage) {

    const NewsPage=[];
    for (let index = 1; index <= Math.floor(News / NewsPerPage); index++) {
            NewsPage.push(index);
    }
    const paginate =(event,value)=>{
      setcurrentPage(value);
    }
  return (
    <Pagination 
    color="secondary"
    count={NewsPage.length}
    page={CurrentPage}
    onChange={paginate}
    />
  )
}
