import Loadable from 'react-loadable';
const Loading = () => null;  //加载时不现实loading
 
const demoA = Loadable({ 
  loader: () => import('./demoA/demoA'), //按需加载 点击时只加载一个页面
  loading: Loading,
});
const demoB = Loadable({ 
  loader: () => import('./demoB/demoB'),
  loading: Loading,
});
export {
    demoA, demoB
  }