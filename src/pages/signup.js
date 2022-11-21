import { useState, useContext } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { Col, Row, Form } from 'react-bootstrap'
import { AuthContext } from '../context/Authcontext'

const SignPage = () => {
  const { signup, isLoading } = useContext(AuthContext)
  const [showAdmin, setShowAdmin] = useState(true)
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
    signup(data)
  }

  const handleShowAdmin = () => {
    setShowAdmin(!showAdmin)
  }

  return (
    <Layout>
      <main className='container display-container'>
        <div className='signup-container'>
          <div className='form'>
            <h3 className='signout-title'>Create an account. Its free!</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='text'>First name</label>
                    <input
                      type='text'
                      {...register('firstname', { required: true })}
                      placeholder='Your firstname'
                    />
                    {errors.firstname && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='lastname'>Last name</label>
                    <input
                      type='text'
                      {...register('lastname', { required: true })}
                      placeholder='Your Last name'
                    />
                    {errors.lastname && <span>This field is required</span>}
                  </div>
                </Col>
                {/* <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='accountNum'>Account Number</label>
                    <input
                      type='text'
                      {...register('accountNum', { required: true })}
                      placeholder='Your Account Number'
                    />
                    {errors.accountNum && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='6'>
                  <div className='input-group'>
                    <label htmlFor='accountName'>Account Name</label>
                    <input
                      type='text'
                      {...register('accountName', { required: true })}
                      placeholder='Your Account Name'
                    />
                    {errors.accountNum && <span>This field is required</span>}
                  </div>
                </Col> */}
                <Col lg='12'>
                  <div className='input-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      {...register('email', { required: true })}
                      placeholder='Your email address'
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                </Col>
                <Col lg='12'>
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
                    {errors.password && <span>This field is required</span>}
                  </div>
                </Col>
                {/* <button className="showBtn" onClick={handleShowAdmin}>{showAdmin ? 'Show more' : 'show less'}</button>
                <div className={showAdmin ? 'hideForm' : "showContainer"}>
                  <Row>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='email'>Currency</label>
                        <select {...register('currency')}>
                          <option value='ZAR'>ZAR</option>
                          <option value='NGN'>NGN</option>
                          <option value='Pula'>Pula</option>
                          <option value='NAD'>NAD</option>
                          <option value='N$'>ZMW</option>
                          <option value='N$'>SZL</option>
                          <option value='N$'>LSL</option>
                        </select>
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='refNum'>Reference Number</label>
                        <input
                          type='text'
                          {...register('referenceNum', { required: true })}
                          placeholder='Your reference Number'
                        />
                        {errors.referenceNum && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='voulcherNum'>Voulcher Number</label>
                        <input
                          type='text'
                          {...register('voulcherNum', { required: true })}
                          placeholder='Your voulcher Number'
                        />
                        {errors.voulcherNum && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='refNum'>Tax code</label>
                        <input
                          type='text'
                          {...register('taskCode', { required: true })}
                          placeholder='Your tax code'
                        />
                        {errors.taskCode && <span>This field is required</span>}
                      </div>
                    </Col>

                    <h5 className='mt-4'>Modal Details</h5>
                    <hr />
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='Reciever'>Reciever Name</label>
                        <input
                          type='text'
                          {...register('reciever', { required: true })}
                          placeholder='Reciever Name'
                        />
                        {errors.reciever && <span>This field is required</span>}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='SendAmount'>Send Amount</label>
                        <input
                          type='text'
                          {...register('sendAmount', { required: true })}
                          placeholder='Send Amount'
                        />
                        {errors.sendAmount && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='Recieve Amount'>Recieve Amount</label>
                        <input
                          type='text'
                          {...register('recieveAmount', { required: true })}
                          placeholder='Recieve Amount'
                        />
                        {errors.recieveAmount && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='refNum'>Recieve Method</label>
                        <input
                          type='text'
                          placeholder='Recieve Method'
                          {...register('recieveMethod', { required: true })}
                        />
                        {errors.recieveMethod && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='transationDate'>Transaction Date</label>
                        <input
                          type='date'
                          {...register('transationDate', { required: true })}
                        />
                        {errors.transationDate && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <div className='formControl'>
                        <label htmlFor='pickup'>Pickup Date</label>
                        <input
                          type='date'
                          {...register('pickupDate', { required: true })}
                        />
                        {errors.pickupDate && (
                          <span>This field is required</span>
                        )}
                      </div>
                    </Col>
                    <Col xl='6'>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicCheckbox'
                      >
                        <Form.Check
                          type='checkbox'
                          {...register('isPaid')}
                          label='Local Agent Charge'
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div> */}
              </Row>

              <button className='login-btn'>
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default SignPage
