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
      return 'Hombres'
    case 'female':
      return 'Mujeres'
    case 'all':
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