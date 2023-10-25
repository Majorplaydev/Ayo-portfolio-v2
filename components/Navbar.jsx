
import React from 'react';
import Link from 'next/link';
import AnimatedLink from './AnimatedLink';
import { Logo2 } from '../public/assets/Images/index';
import Image from 'next/image';

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About me", href: "/" },
  { title: "My projects", href: "/" },
  { title: "Testimonials", href: "/" },
  { title: "Holla me", href: "/" },
  { title: "Socials", href: "/" },

]

const Navbar = () => {
  return (
    <>
         <div className='max-container flex items-start pt-[46px] font-titillium text-2xl tracking-[2px] uppercase justify-between  w-full '>
          
          <Image 
           src={Logo2}
           alt='Logo'
           width={80}
           height={50} 
           
           />
          
            {navLinks.map((Link, i) => {
              return(
                <div className=" relative ">
                 <AnimatedLink title={Link.title} />
                </div>
              );
            })}
         </div>
        </>
  )
}

export default Navbar