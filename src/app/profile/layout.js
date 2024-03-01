import React from 'react'

function layout({children}) {
  return (
    <>
    <div>This is the Profile header</div>
    {children}
    <div>This is the Profile Footer</div>
    </>
  )
}

export default layout