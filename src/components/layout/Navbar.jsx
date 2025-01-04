import React from 'react'
import { Link } from 'react-router'
import { ModeToggle } from './../mode-toggle';

export default function Navbar() {
  return (
    <nav className='max-w-7xl mx-auto flex justify-between items-center p-4'>
<div>
  <h1>Logo</h1>
</div>
<Link to='/'>Home</Link>
<Link to='/'>Task</Link>
<Link to='/users'>Users</Link>
<div>
< ModeToggle/>
</div>
    </nav>
  )
}
