"use client"
import Link from 'next/link'
import { greatVibes } from '../styles/fonts'
import { LuMenu } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIsLarge, useIsSmall } from '../hooks/useMediaQuery'


function Navbar() {
    const isLarge = useIsLarge()
    const [open, setOpen] = useState(false)
    const [section, setSection] = useState<string>('')

    const handleSectionScroll = () => {
        const sectionEl = document.querySelectorAll('section')
        sectionEl.forEach((el) => {
            let top = window.scrollY;
            let offset = el.offsetTop - 100;
            let height = el.offsetHeight;
            let id = el.getAttribute('id');

            if (top >= offset && top < offset + height) {
                setSection(id!)
            }
        })

    }

    useEffect(() => {
        document.addEventListener('scroll', handleSectionScroll)
        handleSectionScroll();
        return () => {
            document.removeEventListener('scroll', handleSectionScroll);
        }
    }, [])

    return (
        <motion.nav
            initial={{
                backgroundColor: 'rgba(207,207,207,0)',
            }}
            animate={{
                backgroundColor: isLarge && section === "home" ? 'rgba(207,207,207,0)' : 'rgba(207,207,207,1)'
            }}
            transition={{
                duration: isLarge ? 1.5 : 0
            }}
            className={`flex fixed w-full flex-wrap items-center justify-between py-3 px-5 z-40 transition-all duration-300 ease-in-out`}>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className='lg:hidden z-[30] w-full flex justify-between'>
                <Link href="#home" className="py-2 text-4xl whitespace-nowrap mr-1 ">
                    <h1 className={`${greatVibes.className} text-white -mb-2`}>Fabiola  <span className={`text-[#B76E78]`}>&</span>Jonathan</h1>
                </Link>
                <button type="button" onClick={() => setOpen(!open)} className="lg:hidden border-2 border-gray-300 px-2 py-1">
                    <LuMenu className='text-gray-200 h-8 w-8' />
                </button>
            </motion.div>


            <motion.div
                className={`absolute lg:static left-0 ${open ? 'top-16' : 'top-[-480px]'} lg:flex  w-full justify-center items-start lg:items-center pl-4 bg-[rgba(207,207,207,1)] lg:bg-transparent lg:transition-none transition-all duration-300 ease-out z-[-1]`} >
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className="flex flex-col lg:flex-row">
                    <Link href="#home" onClick={() => setOpen(false)} className={`uppercase ${section === "home" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>home</Link>
                    <Link href="#about" onClick={() => setOpen(false)} className={`uppercase ${section === "about" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>About</Link>
                    <Link href="#story" onClick={() => setOpen(false)} className={`uppercase ${section === "story" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>Story</Link>
                    <Link href="#gallery" onClick={() => setOpen(false)} className={`uppercase ${section === "gallery" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>Gallery</Link>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 4
                    }}
                >
                    <Link href="#home" className="py-2 text-4xl whitespace-nowrap mx-10  hidden lg:block">
                        <h1 className={`${greatVibes.className} text-white -mb-2`}>Fabiola  <span className={`text-[#B76E78]`}>&</span>Jonathan</h1>
                    </Link>
                </motion.div>


                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className="flex flex-col lg:flex-row">
                    <Link href="#family" className={`uppercase ${section === "family" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>upload</Link>
                    <Link href="#event" className={`uppercase ${section === "event" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>Event</Link>
                    <Link href="#rsvp" className={`uppercase ${section === "rsvp" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>RSVP</Link>
                    <Link href="#contact" className={`uppercase ${section === "contact" ? 'text-[#B76E78]' : 'text-white'}  font-semibold py-3 px-2.5 `}>Contact</Link>
                </motion.div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar