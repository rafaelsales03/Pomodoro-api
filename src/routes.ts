import { Router } from 'express';

import packageJson from '../package.json';
import { AuthController } from './contollers/auth.controller';
import { FocusTimeController } from './contollers/focus-time.controller';
import { HabitsController } from './contollers/habits.controller';
import { authMiddleware } from './middlewares/auth.middleware';

export const routes = Router();

const habitsController = new HabitsController();
const focusTimeController = new FocusTimeController();
const authController = new AuthController();

routes.get('/', (request, response) => {
  const { name, description, version } = packageJson;

  return response.status(200).json({ name, description, version });
});

routes.get('/auth', authController.auth);

routes.get('/auth/callback', authController.authCallback);

routes.use(authMiddleware);

routes.get('/habits', habitsController.index);

routes.get('/habits/:id/metrics', habitsController.metrics);

routes.post('/habits', habitsController.store);

routes.delete('/habits/:id', habitsController.remove);

routes.patch('/habits/:id/toggle', habitsController.toggle);

routes.post('/focus-time', focusTimeController.store);

routes.get('/focus-time', focusTimeController.index);

routes.get('/focus-time/metrics', focusTimeController.metricsByMonth);
