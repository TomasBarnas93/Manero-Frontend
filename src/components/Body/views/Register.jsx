import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import InputBox from '../../misc/InputBox';
import Icon from '../../misc/Icon';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const authContext = useContext(AuthContext);
  const { handleRegister } = authContext;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain a special character.'
      );
      return;
    }

    setError('');

    try {
      await handleRegister(firstName, lastName, email, password);
      navigate('/login');
    } catch (error) {
      setError(error.message || 'An error occurred during registration. Please try again.');
    }
  };

  return (
    <>
      <div className='container px-4 lg: mx-auto'>
        <div className='text-md text-center'>Sign up</div>
        <div className='relative h-8 mt-14'>
          <div className='absolute left-1/2 top-0 bg-black w-[1px] h-full'></div>
        </div>
        <div className='text-3xl text-center mt-2 font-medium'>Create an account</div>
        <InputBox classes='' label='First Name' type='text' id='firstName' placeholder='Enter your firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} required={true}/>
        <InputBox classes='' label='Last Name' type='text' id='LastName' placeholder='Enter your lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} required={true}/>
        <InputBox classes='' label='Email' type='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
        <InputBox classes='' label='Password' type='password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
        <InputBox classes='' label='Confirm Password' type='password' id='confirmPassword' placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required={true}/>
        {error && <div className='text-red-500 mt-2'>{error}</div>}
        <button className='bg-black hover:bg-blue-600 text-white w-full py-3 rounded-3xl mt-3' onClick={handleSubmit}> Sign up </button>
        <div className='text-center mt-4 text-gray-600'>
          Already have an account?{' '}
           <NavLink to='/login' className='text-black hover:underline cursor-pointer'>Sign in </NavLink>
        </div>

        <div className='flex justify-center mt-8'>
          <Icon to='/' button='hover:bg-blue-400 text-blue-600 w-10 h-10 rounded-full flex justify-center items-center' icon='fab fa-facebook-f' />
          <Icon to='/' button='hover:bg-blue-300 text-blue-400 w-10 h-10 rounded-full flex justify-center items-center ml-4' icon='fab fa-twitter' />
          <Icon to='/' button='bg-white hover:bg-red-300 text-red-500 w-10 h-10 rounded-full flex justify-center items-center ml-4' icon='fab fa-google' />
        </div>
      </div>
    </>
  );
};

export default Register;
