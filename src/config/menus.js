import Home from '../pages'
import PageA from '../pages/A-series/PageA'
import PageA_1 from '../pages/A-series/PageA_1'
import PageB from '../pages/PageB'
import PageC from '../pages/PageC'
 
export default [
  {
    label: 'Home(No async data)',
    path: '/',
    component: Home,
  },
  {
    label: 'A series',
    subMenus: [{
      label: 'PageA(withAsyncData)',
      path: '/A/PageA',
      component: PageA,
    }, {
      label: 'PageA_1(withAsyncData)',
      path: '/A/PageA_1',
      component: PageA_1,
    }]
  },
  {
    label: 'PageB(RouteComponent demo)',
    path: '/PageB',
    component: PageB,
  },
  {
    label: 'PageC(异步action)',
    path: '/PageC',
    component: PageC,
  }
]