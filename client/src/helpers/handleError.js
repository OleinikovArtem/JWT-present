import { path } from 'ramda'
import { toast } from 'react-toastify'

export const handleError = error => {
  const defaultError = 'Непредвиденная ошибка.'
  const errorMessage = path(['response', 'data', 'error', 'errmsg'], error)
  const errorJSON = path(['response', 'data', 'error'], error)

  toast.error(errorMessage || errorJSON || defaultError, {
    draggable: false,
    closeOnClick: false,
  })
}
