import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FavButton = ({
  liked,
  likes,
  onClick
}) => {
  /**
   * uppercase becase its a component!!
   */
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

/**
 * you can return this
 * export const FavButton = ({
  liked,
  likes,
  onClick
}) => (
  <Button onClick={() => setLiked(!liked)}>
    <Icon size='32px' /> likes!
  </Button>
)

or instead of use () you can return a function
 */
