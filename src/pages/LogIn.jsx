import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

import HomeLayout from '../layouts/HomeLayout';
import { login } from '../redux/authSlice';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [LoginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginDetails({
      ...LoginDetails,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(LoginDetails);
    if (!LoginDetails.email || !LoginDetails.password) {
      toast.error('Please fill all the details');
      return;
    }
    // if (!isEmail(LoginDetails.email)) {
    //   toast.error('Invalid email provided');
    //   return;
    // }

    const response = await dispatch(login(LoginDetails));
    console.log(response);
    if (response?.payload?.data) {
      navigate('/');
    }
    setLoginDetails({
      email: '',
      password: '',
    });
  }

  return (
    <HomeLayout>
      <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
        <form
          onSubmit={onFormSubmit}
          noValidate
          className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-35'>
          <h1 className='text-2xl text-center font-bold'>Login Page</h1>
          <div className='relative'>
            <BsPersonCircle className='w-24 h-24 rounded-full m-auto relative' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-semibold'>
              Email
            </label>
            <input
              onChange={handleUserInput}
              value={LoginDetails.email}
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
              value={LoginDetails.password}
              type='password'
              name='password'
              className='bg-transparent px-2 py-1 border'
              placeholder='enter your Password...'
              id='password'
            />
          </div>
          <button className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg'>
            Login
          </button>
          <p className='text-center'>
            You don't have an account ?{' '}
            <Link
              to='/signup'
              className='cusror-pointer hover:text-blue-500 text-xl font-semibold uppercase text-accent'>
              Register
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
