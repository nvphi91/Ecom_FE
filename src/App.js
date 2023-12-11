import { loginStore } from 'pages/login';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultComponent from './components/defaultComponent/DefaultComponent';
import { routes } from './routers';
import { globalStore } from 'stores';
import { jwtDecode } from "jwt-decode";
import { observer } from 'mobx-react';



const App = () => {

  useEffect(() => {
    // const token = localStorage.getItem('access_token');
    // if (token) {
    //   window.token = token
    //   const decoded = jwtDecode(token);
    //   console.log(decoded);
    //   console.log(window.token);
    //   if (decoded.payload.id) {
    //     globalStore.getUserInfo(decoded.payload.id)
    //   }
    // }

    const { decodeJWT, expJWT } = handleDecoded()

    const currentTime = new Date()
    if (expJWT < currentTime.getTime() / 1000) {
      const refesh_token = localStorage.getItem('refesh_token');
      window.token = refesh_token
      globalStore.getRefeshToken()
    } else if (decodeJWT.id) {
      globalStore.getUserInfo(decodeJWT.id)
    }

    console.log(process.env);
  }, [])

  const handleDecoded = () => {
    const token = localStorage.getItem('access_token');
    var decodeJWT = {}
    var expJWT = {}
    if (token != ''
      && token != null
      && token != 'undefined') {
      window.token = token
      console.log('xxx');
      console.log(token);
      const decoded = jwtDecode(token);
      console.log(decoded);
      console.log(window.token);
      if (decoded.payload.id) {
        decodeJWT = decoded.payload
      }
      expJWT = decoded.exp
    }
    return { decodeJWT, expJWT }
  }
  return (
    
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => {
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            })
          }
        </Routes>
      </BrowserRouter>
  );
}

export default observer(App);
