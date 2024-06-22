import { type Request, type Response } from 'express';

export class HabitsController {
  private readonly habits: any[] = [];

  store = (request: Request, response: Response): Response => {
    const { name } = request.body;

    const newHabits = { name };

    this.habits.push({ newHabits });

    return response.status(201).json(newHabits);
  };
}
