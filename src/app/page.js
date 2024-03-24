'use client'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react';
import Form from '@/Components/Form';
import Navbar from '@/Components/NavBar';

function Home() {
 


  return (
    <div  >
      <ToastContainer />
<Navbar/>
<div className="container flex justify-center">

<Form/>
</div>
    </div>

  );
}

export default Home;