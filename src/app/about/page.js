import React from 'react'
import { resolve } from 'styled-jsx/css'

async function takeTime(){

  await new Promise(resolve=>{
    setTimeout(resolve,3000);
  })
}


async function about() {
  await takeTime();
  return (
    <div>about</div>
  )
}

export default about