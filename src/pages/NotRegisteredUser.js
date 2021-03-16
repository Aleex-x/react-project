import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

const Registro = ({ activateAuth }) => {
  const { register, loading, error } = RegisterMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }

    register({ variables })
      .then(res => {
        activateAuth()
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

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <>
            <Registro title='Registrarse' activateAuth={activateAuth} />
            <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
          </>
        )
      }
    }
  </Context.Consumer>
)
