import NowResto from '../views/pages/now-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': NowResto, // default page
  '/now-resto': NowResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
