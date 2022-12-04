import { Box, Button, CircularProgress, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Html = () => {
  const [data,setData] = useState([])
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)


  const getData =(page)=>{
    let responce = axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:HTML&per_page=10&page=${page}`)
    .then((res)=>{
      setData(res.data.items)
    })
    .catch((err)=>{
      console.log(err)
      setLoading(true)

    })
    .finally(()=>{
      setLoading(false)
    })
  }



  useEffect(()=>{
    setLoading(true)
    getData(page)
  },[page])

  if(loading) return( <Box><CircularProgress value={30} size='120px' /></Box>)

  return (
    <Box>
      <SimpleGrid columns={[1,2,4]} spacing="10" >

      {
      data.map((el)=>{
      return  <Box border="1px solid red" >
          <Text><Heading size="md" >Repository Name:</Heading>{el.full_name}</Text>
          <Text><Heading size="md" >Language :</Heading> {el.language}</Text>
          <Text><Heading size="md" >Stars Count:</Heading>{el.watchers_count}</Text>
          <Text><Heading size="md" >Fork Count:</Heading>{el.forks_count}</Text>
          <Link to={`/HTML/${el.id}`}><Button >View detials</Button></Link>

        </Box>
      })
    }
    </SimpleGrid>
    <Button disabled={page==1} onClick={()=>setPage((prev_page)=>prev_page-1)}>-</Button>
    <Button>{page}</Button>
    <Button onClick={()=>setPage((prev_page)=>prev_page+1)}>+</Button>

    </Box>
    
    
    
    
  )
}

export default Html