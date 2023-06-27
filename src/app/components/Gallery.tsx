"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { greatVibes } from '../styles/fonts'
import { FaHeart } from 'react-icons/fa6'
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { storage } from '@/appwrite'
import { URL } from 'url'


type Props = {}

function Gallery({ }: Props) {
    const [imageList, setImageList] = React.useState<URL[]>()

    const getImages = async () => {
        const response = await storage.listFiles('649411534bb9e80a6583');
        const images = await Promise.all(response.files.map((file) => storage.getFilePreview(file.bucketId, file.$id)))
        setImageList(images)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div className='h-screen relative overflow-hidden'>
            <Image
                alt="gallery"
                src='/images/kiss.jpg'
                fill
                sizes="100vh"
                className='object-cover z-0'
            />
            <div
                className="absolute inset-0 flex flex-col items-center mt-32 text-white text-4xl font-bold z-20 space-y-6 text-center"
            >
                <h3 className='uppercase text-[#B76E78] text-lg mb-3 font-semibold tracking-widest'>Gallery</h3>
                <h1 className={`${greatVibes.className} text-6xl lg:text-8xl  font-bold`}>Our Photo Gallery</h1>
                <div className='flex items-center justify-center space-x-5'><div className='w-[60px] h-0.5 bg-[#B76E78]'></div><FaHeart className='animate-bounce' /><div className='w-[60px] h-0.5 bg-[#B76E78]'></div></div>
            </div>
            <div className='absolute inset-0 bg-gray-950 opacity-50'></div>



            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                style={{
                    zIndex: 20
                }}
                className='absolute top-[380px] md:top-[480px] w-[340px] h-[420px]'
            >
                {
                    imageList?.map((image, index) => (
                        <SwiperSlide className='relative rounded-lg' key={index}>
                            <Image
                                alt="gallery"
                                src={image.href}
                                fill
                                sizes='100vh'
                                className='object-cover' />

                        </SwiperSlide>))
                }
            </Swiper>
        </div>
    )
}

export default Gallery