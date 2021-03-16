import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

/**
 * this is a custom Hook, kinda similar to @custom-event
 * in vuejs you return your stuff using
 * the useState method or whatever you want
 */
const useCagetoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCagetoriesData()
  /* useState is the coolest way right now to modify the state
   of our application, you need to define first
   the variable to modify and next the method
   who is going to modify the state */

  const [showFixed, setShowFixed] = useState(false)

  /**
   * USEEFFECT !!!
   * this method is going to be executed when the component is rendered
     this could happens when a change of state happens
     also or when our component receives new properties
     or most important when is the first time our component is mounted
  */

  /* the last variable is the dependence
  only when the dependence changes
  this method is going the be executed */
  useEffect(() => {
    /**
     * first newShowFixed is true when scrollY > 200
     * later showFixed is the current value of the state
     * THIS IS LIKE VERY GOOD WAY TO DOO!!
     * you are like making a condition and instead of
     * doing an IF you are typing a &&
     * and if the condition is not correct
     * the code after the && is not going to be executed
     * and if the code after && is executed is going to
     * put the newShowFixed value to the STATE!!
     * this could be this way
     * if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed)
      }
     */
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    /* this adds an event you are adding a event listener
    to the document, when you do scroll
    u gonna execute the method onScroll */
    document.addEventListener('scroll', onScroll)

    // clean the effect
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  // className={fixed ? 'fixed animated' : ''} this is not a good way to do it
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          )
          )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {/* doing magic not using the if but using the && */}
      {showFixed && renderList(true)}
    </>
  )
}

/* this is an example how to do the fetch with async await
    although we have to install
    npm install @babel/plugin-transform-runtime --save-dev
    and we have to add it to webpack configuration
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        ['@babel/plugin-transform-runtime', { regenerator: true }]
      ]
    }

    const fetchCategories = async () => {
      const response = await window.fetch(
        'https://petgram-server-edsf8xpy2.now.sh/categories'
      )
      const data = await response.json()
      setCategories(data)
    }

    fetchCategories()
  */

/*
  other way to pass information to a component is
  for example
  <Category
    cover = {category.cover}
    path = {category.path}
    emoji = {category.emoji}
  />
  but in this case we use {...category} what it works nicer!
*/
