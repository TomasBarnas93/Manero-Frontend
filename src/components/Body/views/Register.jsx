import InputBox from '../../misc/InputBox'
import { NavLink } from 'react-router-dom'
import Icon from '../../misc/Icon'

const Register = () => {
  return (
    <>
        <div className='container px-4 lg: mx-auto'>
            <div className='text-md text-center'>
                Sign up
            </div>

            <div class="relative h-8 mt-14">
                <div class="absolute left-1/2 top-0 bg-black w-[1px] h-full"></div>
            </div>

            <div className="text-3xl text-center mt-2 font-medium">
                Create an account
            </div>

            <InputBox classes="" label='Name' type='text' id='name' placeholder='Enter your name' required={true} />
            <InputBox classes="" label='Email' type='email' id='email' placeholder='Enter your email' required={true} />
            <InputBox classes="" label='Password' type='password' id='password' placeholder='Enter your password' required={true} />
            <InputBox classes="" label='Confirm Password' type='password' id='confirmPassword' placeholder='Confirm your password' required={true} />

            <button className='bg-black hover:bg-blue-600 text-white w-full py-3 rounded-3xl mt-3'>Sign up</button>

            <div className='text-center mt-4 text-gray-600'>
                Already have an account? <NavLink to='/login' className='text-black hover:underline cursor-pointer'>Sign in</NavLink>
            </div>

            <div className='flex justify-center mt-8'>
                <Icon to='/' button='hover:bg-blue-400 text-blue-600 w-10 h-10 rounded-full flex justify-center items-center' icon='fab fa-facebook-f' />
                <Icon to='/' button='hover:bg-blue-300 text-blue-400 w-10 h-10 rounded-full flex justify-center items-center ml-4' icon='fab fa-twitter' />
                <Icon to='/' button='bg-white hover:bg-red-300 text-red-500 w-10 h-10 rounded-full flex justify-center items-center ml-4' icon='fab fa-google' />
            </div>
        </div>
    
    
    </>
  )
}

export default Register