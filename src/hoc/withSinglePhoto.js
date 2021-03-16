import { gql } from '@apollo/client'

/**
 * a good practice to the query strings
 * is to have this kind of name
 * SINGLE_PHOTO
 */
export const withSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
