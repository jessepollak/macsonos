export const ENABLE = 'ENABLE'
export const DISABLE = 'DISABLE'

export function enable() {
  return {
    type: ENABLE
  }
}

export function disable() {
  return {
    type: DISABLE
  }
}
