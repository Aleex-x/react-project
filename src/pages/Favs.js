import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

/**
 * Here could be export const Favs
 */

export default () => (
  <Layout
    title='Tus favoritos'
    subtitle='aqui puedes encontrar tus favs'
  >
    <FavsWithQuery />
  </Layout>
)
