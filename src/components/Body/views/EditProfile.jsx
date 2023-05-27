import { useEffect, useState } from 'react';
import InputBox from '../../misc/InputBox';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { handleLogin } = authContext;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password, rememberMe);
    var result = await handleLogin(email, password, rememberMe);

    console.log(result);

    if (result) {
      setEmail('');
      setPassword('');
      setRememberMe(false);
      setPhone('');
      navigate('/');
    } else {
      let emailInput = document.getElementById('email');
      let passwordInput = document.getElementById('password');
      var errorMessage = document.getElementById('errorMessage');

      if (emailInput && passwordInput && errorMessage) {
        emailInput.classList.add('border-red-500');
        passwordInput.classList.add('border-red-500');
        errorMessage.innerHTML = 'Invalid email or password';
        setPassword('');
      }
    }
  };

  useEffect(() => {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    var errorMessage = document.getElementById('errorMessage');

    if (emailInput && passwordInput && errorMessage) {
      emailInput.classList.remove('border-red-500');
      passwordInput.classList.remove('border-red-500');
      errorMessage.innerHTML = '';
    }
  }, [email, password]);
return(
<div className='flex justify-center items-center h-screen'>
  <div className='max-w-lg w-full bg-white rounded-lg shadow-lg p-8'>
    <div className='text-md text-center mt-32'>Edit profile</div>

    <div className='relative h-8 mt-5 mb-5'>
      <div className='absolute left-1/2 top-0 bg-black w-[1px] h-full'></div>
    </div>

    <div className='flex justify-center sm:flex'>
      <div className='w-40 h-40 rounded-full border-4 border-gray-300 relative'>
        <button className='block w-full h-full bg-transparent border-none' onClick={() => { }}>
          <i className='fas fa-camera absolute right-1 bottom-8 transform translate-x-1/4 translate-y-1/4 edit-icon bg-gray-300 rounded-full p-2'></i>
        </button>
      </div>
    </div>

    <form method='put'>
    <InputBox classes='w-full' label='NAME' type='text' id='Name' name='Name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required={true}/>
      <InputBox classes='w-full' label='EMAIL' type='email' id='email' name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
      <InputBox classes='w-full' label='PHONE NUMBER' type='text' id='Phone' name='Phone' placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} required={true}/>
      <InputBox classes='w-full' label='LOCATION' type='text' id='location' name='location' placeholder='Enter your location' value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
      {/* Input fields */}
      <span id='errorMessage' className='text-red-600 text-sm'></span>

      <button className="bg-black hover:bg-blue-600 text-white w-full py-2 rounded-3xl mb-20 mt-2" onClick={handleSubmit}>
        SAVE CHANGES
      </button>
    </form>
  </div>
</div>






)
}
export default EditProfile;