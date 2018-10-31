// import React from 'react'
// import {BrowserRouter, Route, Link} from 'react-router-dom'

import menuConfig from '../assets/menus'
import {isArray} from '../assets/utils'

function walkMenu (menus) {
  let routes = []
  function collectRoute (menu) {
    if(menu.path && menu.component) {
      routes.push({
        path: menu.path,
        component: menu.component
      })
    } else if(isArray(menu.subMenus)) {
      menu.subMenus.forEach(collectRoute)
    }
  }
  if(isArray(menus)) {
    menus.forEach(collectRoute)
  }
  return routes
}
export default function getRoutes(extraRoutes) {
  // menuConfig
  let routes = []
  if(isArray(extraRoutes)) {
    routes = [...extraRoutes]
  }
  let menuRoutes = walkMenu(menuConfig);
  routes = [...menuRoutes, ...routes]
  console.log(routes)
  return routes
}




