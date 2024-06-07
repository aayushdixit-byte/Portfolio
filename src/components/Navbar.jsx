import React from 'react'
import mylogo from '../assets/logo.png'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="nav mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-30 h-40 ' src={mylogo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            {/* <a href=""><FaInstagram/></a> */}
            {/* <a href=""><FaLinkedin/></a> */}
            <a href="https://github.com/aayushdixit-byte"><FaGithub/></a>
            {/* <a href=""><FaSquareXTwitter/></a> */}
        </div>
    </nav>
  )
}

export default Navbar
