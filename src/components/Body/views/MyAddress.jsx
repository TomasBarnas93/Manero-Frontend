import {useState} from 'react'
import InputBox from '../../misc/InputBox';

const MyAddress = () => {
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');







  return (
    <div className='text-center'>
        <h1 className='text-xl'>My Address</h1>
    </div>
  )
}

export default MyAddress