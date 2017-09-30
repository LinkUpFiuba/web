// const baseUrl = 'http://localhost:5000'
const baseUrl = 'https://dev-link-up-g1.herokuapp.com'

export const loadComplaints = () => {
  return fetch( baseUrl + '/complaints')
    .then( handleErrors )
    .then( res => res.json() )
}

export const loadComplaintsForUser = (userUid) => {
  return fetch( baseUrl + '/complaints/' + userUid )
    .then( handleErrors )
    .then( res => res.json() )
}

function handleErrors ( response ) {
  if ( !response.ok ) {
    if ( response.status === 404 ) {
      throw { status: response.status, message: response.message }
    }
    throw Error( response.status )
  }
  return response
}