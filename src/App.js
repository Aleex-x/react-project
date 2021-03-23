import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
/* import { Favs } from './pages/Favs' */
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))

/**
 * rendered prop
 * this component is rendering a function
 * and i can pass some properties to the function
 *
 * <Father props={Children}>
 *  <Children />
 * </Father>
const UserLogged = ({ children }) => {
  return children({
    isAuth: false
  })
}

if a route doesnt exist
you can add the property 'default' in reach router
to show always a page for this kind of routes
*/

/**
 * if you are going to use React lazy
 * you also need to use Suspense
 */

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}

/**
 * export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </div>
)

this was the previous solution
const urlParams = new window.URLSearchParams(
    window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <Detail path='/detail/:detailId' />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
          </Router>
      }
    </>
  )

 */
