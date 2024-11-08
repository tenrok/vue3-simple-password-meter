/*
 check to see if it is a common password
 */

import commonPasswords from './commonPasswords'

export const isCommonPassword = (password: string): boolean => {
  return commonPasswords.includes(password)
}
