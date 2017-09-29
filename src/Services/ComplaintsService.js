const baseUrl = process.env.BASEURL || 'http://localhost:5000'

export const loadComplaints = () => {
  console.log( process.env )
  return fetch( baseUrl + '/complaints' )
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