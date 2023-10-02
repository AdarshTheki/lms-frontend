import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsPersonCircle } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout';
import { createAccount } from '../redux/authSlice';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signUpDetails, setSignUpDetails] = useState({
    email: '',
    fullName: '',
    password: '',
    avatar: '',
  });

  const [previewImage, setPreviewImage] = useState('');

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value,
    });
  }

  function handleImage(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (!uploadedImage) return;
    setSignUpDetails({
      ...signUpDetails,
      avatar: uploadedImage,
    });
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedImage);
    fileReader.addEventListener('load', function () {
      setPreviewImage(this.result);
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    // console.log(signUpDetails);
    if (!signUpDetails.email || !signUpDetails.password || !signUpDetails.fullName) {
      toast.error('Please fill all the details');
      return;
    }
    if (signUpDetails.fullName.length < 5) {
      toast.error('Name should be at least of 5 characters');
      return;
    }
    // if (!isEmail(signUpDetails.email)) {
    //   toast.error('Invalid email provided');
    //   return;
    // }
    // if (!isValidPassword(signUpDetails.password)) {
    //   toast.error(
    //     'Invalid password provided, password should 6-16 character long with atleast a number and a special character'
    //   );
    //   return;
    // }

    const response = await dispatch(createAccount(signUpDetails));

    if (response?.payload?.data) {
      setSignUpDetails({
        email: '',
        fullName: '',
        password: '',
        avatar: '',
      });
      setPreviewImage('');
      navigate('/');
    }
  }

  return (
    <HomeLayout>
      <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
        <form
          onSubmit={onFormSubmit}
          noValidate
          className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-35'>
          <h1 className='text-2xl text-center font-bold'>Registration Page</h1>
          <label htmlFor='image_uploads' className='cursor-pointer'>
            {previewImage ? (
              <img className='w-24 h-24 rounded-full m-auto' src={previewImage} />
            ) : (
              <div className='relative'>
                <BsPersonCircle className='w-24 h-24 rounded-full m-auto relative' />
                <FaEdit className='text-3xl text-white rounded-full m-auto absolute top-16 right-12' />
              </div>
            )}
          </label>
          <input
            onChange={handleImage}
            type='file'
            className='hidden'
            name='image_uploads'
            id='image_uploads'
            accept='.jpg, .jpeg, .png, .svg'
          />
          <div className='flex flex-col gap-1'>
            <label htmlFor='fullName' className='font-semibold'>
              Name
            </label>
            <input
              onChange={handleUserInput}
              value={signUpDetails.fullName}
              required
              type='text'
              name='fullName'
              className='bg-transparent px-2 py-1 border'
              placeholder='enter your username...'
              id='fullName'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-semibold'>
              Email
            </label>
            <input
              onChange={handleUserInput}
              value={signUpDetails.email}
              required
              type='text'
              name='email'
              className='bg-transparent px-2 py-1 border'
              placeholder='enter your Email...'
              id='email'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='password' className='font-semibold'>
              Password
            </label>
            <input
              required
              onChange={handleUserInput}
              value={signUpDetails.password}
              type='password'
              name='password'
              className='bg-transparent px-2 py-1 border'
              placeholder='enter your Password...'
              id='password'
            />
          </div>
          <button className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg'>
            Create account
          </button>
          <p className='text-center'>
            Already have an account ?{' '}
            <Link
              to='/login'
              className='cusror-pointer hover:text-blue-500 text-xl font-semibold uppercase text-accent'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default SignUp;
