import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from '@apollo/client/react/components'
import { withSinglePhoto } from '../hoc/withSinglePhoto'

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  else {
    const { photo = {} } = data
    return <PhotoCard {...photo} />
  }
}

/**
 * a good practice is to get out the render propss
 * from the component
 */
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={withSinglePhoto} variables={{ id }}>
    {renderProp}
  </Query>
)

/*
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (loading) return null
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data } = { photo: {} }) => {
        const { photo = {} } = data
        return (<PhotoCard {...photo} />)
      }
    }
  </Query>
)
 */
