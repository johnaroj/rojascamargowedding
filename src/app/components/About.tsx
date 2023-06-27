"use client"
import React from 'react'
import { greatVibes } from '../styles/fonts'
import { FaFemale, FaHeart, FaMale } from 'react-icons/fa'
import { motion, animate } from 'framer-motion'
import Image from 'next/image'
type Props = {}

function About({ }: Props) {

    return (
        <div className='flex flex-col pt-10 max-w-6xl px-10 mx-auto items-center'>
            <div className="mb-4 pt-20 flex flex-col justify-center items-center">
                <h6 className="uppercase text-[#B76E78] text-md mb-3 font-semibold tracking-widest">About</h6>
                <h1 className={`${greatVibes.className} text-4xl`}>Groom &amp; Bride</h1>
                <div className='flex items-center justify-center space-x-5'><div className='w-[60px] h-0.5 bg-[#B76E78]'></div><FaHeart className='animate-bounce' /><div className='w-[60px] h-0.5 bg-[#B76E78]'></div></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="text-center md:text-right bg-[#EDF5F7] ">
                    <div className="h-full p-12 flex flex-col">
                        <h3 className='mb-3 text-2xl lg:text-3xl font-medium'>The Groom</h3>
                        <p className='text-[#818491]'>To Jonathan, Fabiola is not only his partner but also his best friend, confidante, and the person he turns to in times of both joy and sorrow. Her unwavering belief in him has given him the courage to pursue his dreams, and her love has provided him with a solid foundation from which he can grow and thrive.</p>
                        <h3 className={`${greatVibes.className} text-2xl py-2 text-[#6c757d]`}>
                            <FaMale className='inline-block mr-2 text-[#B76E78]' />
                            Jonathan
                        </h3>
                    </div>
                </div>
                <motion.div
                    initial={{
                        x: +100,
                        opacity: 0
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className='relative min-h-[380px]'>
                    <Image
                        alt="about-1"
                        src='/images/about-1.jpg'
                        fill
                        className='object-cover'
                    />

                </motion.div>
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className='relative min-h-[380px] mt-10 md:mt-0'>
                    <Image
                        alt="about-2"
                        src='/images/about-2.jpg'
                        fill
                        className='object-cover'
                    />

                </motion.div>
                <div className="text-center md:text-right bg-[#EDF5F7] ">
                    <div className="h-full p-12 flex flex-col">
                        <h3 className='mb-3 text-3xl font-semibold'>The Bride</h3>
                        <p className='text-[#818491]'>Fabiola considers herself incredibly lucky to have found a partner who not only supports her dreams but also encourages her to soar to new heights. Jonathan's unwavering belief in her abilities has helped her discover her own strength and unleash her true potential. With him by her side, she feels invincible and ready to conquer any obstacle that may come their way.</p>
                        <h3 className={`${greatVibes.className} text-2xl py-2 text-[#6c757d]`}>
                            <FaFemale className='inline-block mr-2 text-[#B76E78]' />
                            Fabiola
                        </h3>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About