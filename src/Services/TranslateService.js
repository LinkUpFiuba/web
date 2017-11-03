export const translateState = state => {
  switch (state) {
    case 'seen':
      return 'Vista'
    case 'new':
      return 'Nueva'
    default:
      return state
  }
}

export const translateGender= gender => {
  switch (gender) {
    case 'male':
      return 'Hombre'
    case 'female':
      return 'Mujer'
    case 'All':
      return 'Todos'
    default:
      return gender
  }
}

export const translateCondition= condition => {
  switch (condition) {
    case 'Active':
      return 'Activo'
    case 'Disabled':
      return 'Deshabilitado'
    default:
      return condition
  }
}

export const translateAdState= state => {
  switch (state) {
    case 'Active':
      return 'Activa'
    case 'Disabled':
      return 'Deshabilitada'
    default:
      return state
  }
}