import Home from '../pages'
import PageA from '../pages/A-series/PageA'
import PageA_1 from '../pages/A-series/PageA_1'
import PageB from '../pages/PageB'

export default [
  {
    label: 'Home',
    path: '/',
    component: Home,
  },
  {
    label: 'A series',
    subMenus: [{
      label: 'PageA',
      path: '/PageA',
      component: PageA,
    }, {
      label: 'PageA_1',
      path: '/PageA_1',
      component: PageA_1,
    }]
  },
  {
    label: 'PageB',
    path: '/PageB',
    component: PageB,
  }
]