import React from 'react'
import { Link } from 'react-router'
import { ModeToggle } from './../mode-toggle';

export default function Navbar() {
  return (
    <nav className='max-w-7xl shadow-orange-400 shadow-md mx-auto flex justify-between items-center p-4'>
<div>
  <h1>Logo</h1>
</div>
<div className='flex space-x-4 font-serif' >
<Link to='/'>Home</Link>
<Link to='/'>Task</Link>
<Link to='/users'>Users</Link>
</div>
<div>
< ModeToggle/>
</div>
    </nav>
  )
}
