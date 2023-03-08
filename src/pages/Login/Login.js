import React from 'react'

const Login = () => {
  
  return (
    <div className='form-page mt-5 text-white'>
      <h1>Login</h1>
      <form autoComplete='off'>
        <input 
          type='email'
          name='email'
          placeholder='example@example.com'
        />
        <input 
          type='password'
          placeholder='Ingrese su clave'
        />

        <button type='submit' className='btn btn-outline-light'>
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default Login
