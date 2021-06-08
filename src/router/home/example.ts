export default [{
  path: '/example',
  name: 'Example',
  component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "Example" */ '@/views/Home/Example/Index.vue'),
}];
