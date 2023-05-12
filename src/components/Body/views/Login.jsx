import { useState } from 'react'
import InputBox from '../../misc/InputBox'
import { NavLink } from 'react-router-dom'
import Icon from '../../misc/Icon'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        //Login logic after you click sign in


    }




  return (
    <div className='container px-4 lg: mx-auto'>
        <div className='text-md text-center'>
            Sign in
        </div>

        <div class="relative h-8 mt-14">
            <div class="absolute left-1/2 top-0 bg-black w-[1px] h-full"></div>
        </div>
        <div className="text-3xl text-center mt-2 font-medium">
            Welcome Back!
        </div>
        <p className='text-center mt-4 font-light'>Sign in to continue</p>

        <InputBox classes="" label='Email' type='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
        <InputBox label='Password' type='password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required={true} />

        <div className='flex justify-between'>
            <div className='text-gray-600'>
                <input className="" type='checkbox' id='remember' checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                <label htmlFor='remember' className='ml-2'>Remember me</label>
            </div>
            <NavLink className='hover:underline cursor-pointer'>Forgot password?</NavLink>
        </div>

        <button className='bg-black hover:bg-blue-600 text-white w-full py-2 rounded-3xl mt-11'>Sign in</button>

        <div className='text-center mt-4 text-gray-600'>
            Don't have an account? <NavLink to='/register' className='text-black hover:underline cursor-pointer'>Sign up</NavLink>
        </div>

        <div className='flex justify-center mt-8'>
            <Icon to='/' button='hover:bg-blue-400 text-blue-600 w-10 h-10 rounded-full flex justify-center items-center' icon='fab fa-facebook-f' />
            <Icon to='/' button='hover:bg-blue-300 text-blue-400 w-10 h-10 rounded-full flex justify-center items-center ml-4' icon='fab fa-twitter' />
            <Icon to='/' button='bg-white hover:bg-red-300 text-red-500 w-10 h-10 rounded-full flex justify-center items-center ml-4' icon='fab fa-google' />
        </div>
    </div>
  )
}

export default Login