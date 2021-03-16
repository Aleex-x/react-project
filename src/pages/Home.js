import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ categoryId }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </>
)
