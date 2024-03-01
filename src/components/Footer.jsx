import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='h-40 bg-blue-600 mt-5'>
      <div className='flex p-5 justify-around items-center'>
        <div className='text-center'>
          <h1 className='text-3xl'>Welcome to Work Mangager</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nostrum?</p>
        </div>
        <div className='items-center flex flex-col'>
          <h1>Important Links</h1>
          <ul>
            <li><Link href="">FaceBook</Link></li>
            <li><Link href="">Instagram</Link></li>
            <li><Link href="">LinkedIn</Link></li>
            <li><Link href="">Twitter</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer