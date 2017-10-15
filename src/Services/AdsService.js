import { baseUrl } from '../Constants'

export const loadAds = () => {
  return fetch( `${baseUrl}/ads` )
    .then( handleErrors )
    .then( res => res.json() )
}

export const deleteAd = ( adUid ) => {
  return fetch( `${baseUrl}/ads/${adUid}`, {
    method: 'DELETE'
  } )
    .then( handleErrors )
}

function handleErrors ( response ) {
  if ( !response.ok ) {
    console.log( 'Error:' )
    console.log( response )
    if ( response.status === 404 ) {
      throw { status: response.status, message: response.message }
    }
    console.log( response.message )
    throw Error( response.status )
  }
  return response
}
