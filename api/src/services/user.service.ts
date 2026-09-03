import users from '../mocks/user.mock.ts'
import type{User} from '../types/user.type.ts'

function findAllUsers(): User[] {
  return users
}

export {findAllUsers}
