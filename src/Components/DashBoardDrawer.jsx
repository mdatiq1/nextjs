
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { IoHomeOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { useRef } from 'react'
import Link from 'next/link';


function DashBoardDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <div className="sideDrawer">
      <nav className="sidenav">
        <div className="logo">
          <img src="https://t4.ftcdn.net/jpg/05/23/15/59/360_F_523155949_3LoWLHYWFh9kufJmoXMeI8D6afaa8qFH.jpg" className="w-[60px] h-[60px] pt-1 rounded-full" alt="" />
        </div>
        <ul>
          <Link href={'/dashboard'} passHref>
            <li> <IoHomeOutline /> DashBoard</li>
          </Link>
          <Link href={'/players'} passHref>
            <li> <FiUsers /> Players</li>
          </Link>
        </ul>
        <div className="profile">
          abvvd
        </div>
      </nav>
    </div>
  )
}

export default DashBoardDrawer