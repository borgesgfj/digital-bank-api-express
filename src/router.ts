import { Request, Response, Router } from 'express'

export const createRouter = (): Router => {
  const route = Router()

  route.get('/', (req: Request, res: Response): void => {
    res.json({ message: 'hello world with Typescript' })
  })

  return route
}
