import { gql } from '@apollo/client'

export const withFavs = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`
