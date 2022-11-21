import { useState, useContext } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import { AuthContext } from '../context/Authcontext'
import { useForm } from 'react-hook-form'

const SigninPage = () => {
  const {login, isLoading, isError} = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }


  const onSubmit = async (data) => {
    login(data)
  }

  return (
    <Layout>
      <main className='display-container'>
        <div className='form-container'>
          <div className='form'>
            <h3>Login to continue</h3>
            {isError ? <div className="errorBadge">Incorrect email or password</div> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' {...register('email', { required: true })} placeholder='Your email address' />
                {errors.email && <span>Email field is required</span>}
              </div>
              <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <div className='password'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                    placeholder='Your password'
                  />
                  <span onClick={handleShowPassword}>show</span>
                </div>
                {errors.email && <span>Email field is required</span>}
              </div>
              <button className='login-btn'>{isLoading ? 'Loading...' : 'Login'}</button>
              <p>
                <a className='forgetPassword' href='#'>
                  Forget password?
                </a>
              </p>
            </form>
            <h4>New to WorldRemit?</h4>
            <div className='signup'>
              <p>Signing up takes less than a minute</p>

              <Link href='/signup' passHref>
                <a className='btn-signup'>Sign up</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SigninPage
