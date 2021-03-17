import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/Home'
import NewProfile from '@/components/NewProfile'
import EditProfile from '@/components/EditProfile'
import ExportProfile from '@/components/ExportProfile'
import ViewProfile from '@/components/ViewProfile'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/new',
        name: 'new-profile',
        component: NewProfile
      },
      {
        path: '/edit/:profile_id',
        name: 'edit-profile',
        component: EditProfile
      },
      {
        path: '/export/:profile_id',
        name: 'export-profile',
        component: ExportProfile
      },
      {
        path: '/:profile_id',
        name: 'view-profile',
        component: ViewProfile
      }
];
const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;
