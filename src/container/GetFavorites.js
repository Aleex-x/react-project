import React from 'react'
import { withFavs } from '../hoc/withFavs'
import { useQuery } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(withFavs, {
    fetchPolicy: 'network-only'
  })

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  const { favs = {} } = data

  return <ListOfFavs favs={favs} />
}
