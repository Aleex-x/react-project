import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => (
  <Layout
    title='Tu app de fotos de mascotas'
    subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'
  >
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </Layout>
)

/**
 * the second parameter is a function if the category has changed
 * but if its the same, react is not going to rerender
 */
export const Home = React.memo(HomePage, (PrevProps, props) => {
  return PrevProps.categoryId === props.categoryId
})
