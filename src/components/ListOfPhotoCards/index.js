import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/client'
import { withPhotos } from '../../hoc/withPhotos'

export const ListOfPhotoCards = ({
  categoryId = 1
}) => {
  // this object has a lot of valuable information
  const { loading, error, data } = useQuery(withPhotos, {
    variables: { categoryId }
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {
        data.photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))
      }
    </ul>
  )
}

/* const ListOfPhotoCardsComponent = (props) => {
  console.log(props)
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => <PhotoCard key={id} id={id} />)
      }
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
 */
