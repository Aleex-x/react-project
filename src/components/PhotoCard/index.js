import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { UseLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const [show, element] = useNearScreen()
  const { toggleLikePhoto } = UseLikeMutation()
  const handleFavClick = () => {
    toggleLikePhoto({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton
              liked={liked}
              likes={likes}
              onClick={handleFavClick}
            />
          </>
      }
    </Article>
  )
}

/* <Query query={query} variables={{ id }}>
            {
                ({ loading, error, data = { photo: {} } }) => {
                    const { photo = {} } = data;
                    return (< PhotoCard {...photo} ></PhotoCard>)
                }
            }
        </Query > */
