import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-10'>
            <div className='texy-center'>
                <h1 style={{ fontSize: "40px", fontWeight: "600", marginTop: "6px", textAlign: "center" }} className=' mx-auto mb-2'>Mohd Faiz</h1>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className="w-6" />
                    faizturkey2019@gamil.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>&copy; 2025 Mohd Faiz. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/FaizTurkey">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mohdfaiz12">LinkedIn</a></li>
                    <li><a target='_blank' href="https://leetcode.com/u/Mohd__Faiz/">LeetCode</a></li>
                    <li><a target='_blank' href=" https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=3avfv3z">Instagram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
