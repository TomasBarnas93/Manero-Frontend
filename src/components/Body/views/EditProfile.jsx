import React, { useEffect, useState, useContext } from 'react';
import InputBox from '../../misc/InputBox';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../contexts/ProfileProvider';
import { getProfile } from '../../services/ProfileService';

const EditProfile = () => {
  const navigate = useNavigate();
  const { profileData, updateProfile } = useContext(ProfileContext);

  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (profileData) {
      setFirstname(profileData.firstName);
      setLastname(profileData.lastName);
      setEmail(profileData.email);
      setPhone(profileData.phoneNumber);
      setLocation(profileData.location);
      setImageUrl(profileData.imageUrl);
    }
  }, [profileData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the profile using the updated input values
    const result = await updateProfile(
      firstName,
      lastName,
      email,
      phone,
      location,
      imageUrl
    );

    if (result) {
      // Handle successful profile update
      await getProfile();
      setFirstname(firstName);
      setEmail(email);
      navigate('/account');
      
    } else {
      // Handle profile update error
      console.log('Profile update failed.');
    }

  };


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-lg w-full bg-white rounded-lg shadow-lg p-8 mt-40'>
        <div className='text-md text-center mt-32'
        >  <button
        className='absolute   h-8 w-8 flex items-center justify-center rounded-full '
        onClick={() => navigate('/account')}
      >
        <i className='fas fa-chevron-left text-gray-500 cursor-pointer'></i>
      </button>
          Edit profile
          </div>

        <div className='relative h-8 mt-5 mb-5'>
          <div className='absolute left-1/2 top-0 bg-black w-[1px] h-full'></div>
        </div>

        <div className='flex justify-center sm:flex'>
          <div className='w-42 h-42 rounded-full border-4 border-gray-300 relative'>
            <img src={imageUrl} className='w-40 h-40 rounded-full'/>
            <button className='block w-full h-full bg-transparent border-none' onClick={() => { }}>
              <i className='fas fa-camera absolute right-1 bottom-8 transform translate-x-1/4 translate-y-1/4 edit-icon bg-gray-300 rounded-full p-2'></i>
            </button>
          </div>
        </div>

        <form method='put'>
          <InputBox classes='w-full' label='NAME' type='text' id='firstName' name='firstName' placeholder='Enter your first name' value={firstName} onChange={(e) => setFirstname(e.target.value)} required={true} />
          <InputBox classes='w-full' label='NAME' type='text' id='lastName' name='lastName' placeholder='Enter your last name' value={lastName} onChange={(e) => setLastname(e.target.value)} required={true} />
          <InputBox classes='w-full' label='EMAIL' type='email' id='email' name='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
          <InputBox classes='w-full' label='PHONE NUMBER' type='text' id='Phone' name='Phone' placeholder='Enter your phone number' value={phone} onChange={(e) => setPhone(e.target.value)} required={true} />
          <InputBox classes='w-full' label='LOCATION' type='text' id='location' name='location' placeholder='Enter your location' value={location} onChange={(e) => setLocation(e.target.value)} required={true} />
          {/* Input fields */}
          <span id='errorMessage' className='text-red-600 text-sm'></span>

          <button className="bg-black hover:bg-blue-600 text-white w-full py-2 rounded-3xl mb-20 mt-2" onClick={handleSubmit}>
            SAVE CHANGES
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
