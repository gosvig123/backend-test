import express from 'express'
import TopicsController from '../controllers/topics.controller.js'
import EntriesController from '../controllers/entries.controller.js'

const router = express.Router()

router.get('/', (_, res) => {
  res.send('Hello World!')
})

router.get('/topics', TopicsController.getAll)
router.get('/topics/:id', TopicsController.getOne)
router.post('/topics', TopicsController.create)

router.get('/topics/:topicId/entries', EntriesController.getEntries)

export default router

