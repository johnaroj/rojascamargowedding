import React from 'react'
import { greatVibes } from '../styles/fonts'
import { FaHeart } from 'react-icons/fa'

type Props = {}

function Footer({ }: Props) {
    return (
        <section className="mb-4 py-20 flex flex-col justify-center items-center bg-[rgba(207,207,207,1)]">
            <h1 className={`${greatVibes.className} text-7xl text-center py-10 text-white`}>Thank You for being a part of our new beginning</h1>
            <div className='flex items-center justify-center space-x-5 my-4 pb-10'><div className='w-[60px] h-0.5 bg-[#B76E78]'></div><FaHeart className='animate-bounce' /><div className='w-[60px] h-0.5 bg-[#B76E78]'></div></div>
            <div className="relative flex w-full mt-32">
                <p className="text-white w-1/2 text-right pr-3">info@rojascamargowedding.com</p>
                <span className="absolute left-1/2">|</span>
                <p className="text-white w-1/2 text-left pl-3">+5999 699-7796</p>
            </div>
            <p className="m-0 text-center">© <a className="text-[#B76E78]" href="info@rojascamargowedding.info">RojasCamargowedding</a> Designed by <a className="text-[#B76E78]" href="https://www.iamjohnrojas.com/">DVLP</a>
            </p>
        </section>
    )
}

export default Footer