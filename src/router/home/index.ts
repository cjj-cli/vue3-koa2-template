const children: any[] = [];
const files = require.context('.', false, /\.ts$/);

files.keys().forEach((key) => {
  if (key === './index.ts') return;
  children.push(...files(key).default);
});

export default [
  {
    path: '/',
    name: 'HomeIndex',
    component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "HomeIndex" */ '@/views/Home/Index.vue'),
    children,
  },
];
