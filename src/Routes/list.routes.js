import { Router } from 'express'
import { verifyToken } from '../Middlewares/jwt.js'
import { sanitizeNewList, sanitizePositionList } from '../Middlewares/sanitizeInputs.js'
import { validateInputs } from '../Middlewares/validateInput.js'
import { getListsByBoardId, createList, updateListPosition, deleteList } from '../Controllers/list.controller.js'

const router = Router()

router.get('/:boardId', verifyToken, getListsByBoardId)
router.post('/', verifyToken, sanitizeNewList, validateInputs, createList)
router.patch('/', verifyToken, sanitizePositionList, updateListPosition)
router.delete('/:listId', verifyToken, deleteList)

export default router
