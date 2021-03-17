import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

const Registro = ({ activateAuth }) => {
  const { register, loading, error } = RegisterMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }

    register({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
  }

  const errorMsg = error && 'El usuario ya existe o hay algún problema'

  return (
    <UserForm
      onSubmit={onSubmit}
      disabled={loading}
      title='Registrarse'
      error={errorMsg}
    />
  )
}

const Login = ({ activateAuth }) => {
  const { login, loading, error } = LoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }

    login({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
  }

  const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

  return (
    <UserForm
      onSubmit={onSubmit}
      disabled={loading}
      title='Iniciar Sesion'
      error={errorMsg}
    />
  )
}

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <Registro title='Registrarse' activateAuth={activateAuth} />
      <Login title='Registrarse' activateAuth={activateAuth} />
    </>
  )
}
