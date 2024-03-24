'use client'

import DashBoardDrawer from "@/Components/DashBoardDrawer"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  import axios from "axios"
  import {useState,useEffect} from 'react'

function Players() {
  
    const [playerData,setPlayerData]=useState([])
    
    useEffect(()=>{
    const fetchPlayers = async()=>{
    try{
        const res = await axios.get(`/api/players`)
        console.log(res)
        setPlayerData(res.data.user)

    }catch(error){
console.log(error)
    }
    }

    fetchPlayers ()

    },[])


  return (
    <div className="dashboard flex gap-5 ">
        <DashBoardDrawer/>

        {/* @tables is here  */}

        <TableContainer>
  <Table variant='simple' h={'60vh'} >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Phone</Th>
        <Th>Address</Th>
        <Th>Role</Th>
        <Th>Profile</Th>
      
      </Tr>
    </Thead>
    <Tbody>
        {playerData && playerData.map((player)=><Tr>
        <Td>{player?.name}</Td>
        <Td>{player?.email}</Td>
        <Td>{player?.phone}</Td>
        <Td>{player?.address}</Td>
        <Td>{player?.role}</Td>
        <Td>
            <img src={player?.profile}  className="w-[80px] h-[80px] rounded-full"/>
        </Td>
      
      </Tr>
    )}
      
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default Players