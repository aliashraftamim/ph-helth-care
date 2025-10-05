import { userRoutes } from "../modules/user/user.routes";

const routes = [{ path: "/user", route: userRoutes }];

const router = (app: any) => {
  routes.forEach((route) => {
    app.use(route.path, route.route);
  });
};

export default router;
