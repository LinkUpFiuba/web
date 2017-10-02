export const translateState = state => {
  switch (state) {
    case 'pending':
      return 'Pendiente'
    case 'approved':
      return 'Aprobada'
    case 'rejected':
      return 'Rechazada'
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
    default:
      return gender
  }
}