import Home from './components/home/Home.vue'
import Create from './components/create/Create.vue'

export const routes = [
  { path: '', component: Home, title: 'Home', id: 0 },
  { path: '/create', component: Create, title: 'Create', id: 1 }
];

