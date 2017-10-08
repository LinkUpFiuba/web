// const baseUrl = 'http://localhost:5000'
// const baseUrl = 'https://dev-link-up-g1.herokuapp.com'
const baseUrl = 'https://link-up-g1.herokuapp.com'

export const loadComplaints = () => {
  return fetch( `${baseUrl}/complaints` )
    .then( handleErrors )
    .then( res => res.json() )
}

export const loadComplaintsForUser = ( userUid ) => {
  return fetch( `${baseUrl}/complaints/${userUid}` )
    .then( handleErrors )
    .then( res => res.json() )
}

export const disableUser = ( userUid ) => {
  return fetch( `${baseUrl}/users/${userUid}/disable`, { method: 'POST' } )
    .then( handleErrors )
    .then( res => res.json() )
}

export const enableUser = ( userUid ) => {
  return fetch( `${baseUrl}/users/${userUid}/enable`, { method: 'POST' } )
    .then( handleErrors )
    .then( res => res.json() )
}

function handleErrors ( response ) {
  if ( !response.ok ) {
    console.log(response)
    if ( response.status === 404 ) {
      throw { status: response.status, message: response.message }
    }
    console.log(response.message)
    throw Error( response.status )
  }
  return response
}