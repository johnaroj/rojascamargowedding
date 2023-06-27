"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import Image from 'next/image';
import HeroCaption from './HeroCaption';

type Props = {}

function Hero({ }: Props) {
    return (
        <div className='relative'>
            <Swiper
                className='h-screen w-full'
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
            >
                <SwiperSlide className='relative'>
                    <Image alt="carousel-1" src='/images/carousel-1.jpg' fill style={{ objectFit: 'cover' }} />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image alt="carousel-2" src='/images/carousel-2.jpg' fill style={{ objectFit: 'cover' }} />
                </SwiperSlide>
            </Swiper>
            <HeroCaption />
        </div>

    )
}

export default Hero