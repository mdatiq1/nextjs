
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  WrapItem,
  Avatar
} from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
import Toast, { errorToast } from '@/Utils/Toast';
import { useRouter } from 'next/navigation';


function Form({ size }) {
  const router = useRouter();

  const initialData = {
    address: "",
    email: "",
    name: "",
    phone: "",
    role: ""

  }

  const [avatarSrc, setAvatarSrc] = useState('https://bit.ly/sage-adebayo');
  const [userDetails, setUserDetails] = useState(initialData)

  console.log(avatarSrc)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const getInputData = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserDetails((pre) => ({ ...pre, [name]: value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userDetails)
    const dataToSent = {...userDetails}
    dataToSent.profile=avatarSrc

    try {
      const resData = await axios.post('/api/players', dataToSent)
      console.log(resData)

      if (resData.data.error) {

        errorToast(resData.data.error)
        return
      } else {
        Toast(resData.data.message)
        setUserDetails(initialData)
      }
      router.push('/players');

    } catch (error) {
      console.log(error)
    }


  }

  return (

    <form onSubmit={handleSubmit}>
      <WrapItem>
        <label htmlFor="avatar-input">
          <input
            id="avatar-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <img
            src={avatarSrc}
            alt="Avatar"
            style={{ width: "10vw", height: "10vw", borderRadius: '50%' }}
          />
        </label>
      </WrapItem>
      <label htmlFor="name">Name:</label>
      <input  value={userDetails?.name} onChange={getInputData} type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input value={userDetails?.email} onChange={getInputData} type="text" id="email" name="email" required />
      <label htmlFor="phone">Phone Number:</label>
      <input value={userDetails?.phone} onChange={getInputData} type="tel" id="phone" name="phone" placeholder="123-45-678" required />
      <label htmlFor="address">Address:</label>
      <input value={userDetails?.address} onChange={getInputData} type="text" id="address" name="address" required />
      <label htmlFor="role">Role:</label>
      <select value={userDetails?.role} id="role" name="role" onChange={getInputData}>
        <option value="batsman">Batsman</option>
        <option value="bowler">Bowler</option>
        <option value="allrounder">All-Rounder</option>
      </select>
      {/* <label htmlFor="profile-picture">Profile Picture:</label>
  <input type="file" id="profile-picture" name="profile-picture" accept="image/*" /> */}
      <input type="submit" defaultValue="Submit" />
    </form>

  )
}

export default Form