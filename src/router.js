import {
    demoA, demoB,
  } from './pages' //导入页面
  //通过组件配置路由
  const routes = [{
    path: '/demoA',
    component: demoA
  }, {
    path: '/demoB',
    component: demoB
  },
  ];
  export default routes