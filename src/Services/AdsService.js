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

export const enableAd = ( adUid ) => {
  return fetch( `${baseUrl}/ads/${adUid}/enable`, {
    method: 'POST'
  } )
    .then( handleErrors )
}

export const disableAd = ( adUid ) => {
  return fetch( `${baseUrl}/ads/${adUid}/disable`, {
    method: 'POST'
  } )
    .then( handleErrors )
}

export const createAd = ( ad ) => {
  return fetch( `${baseUrl}/ads`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(ad)
    },
  ).then( handleErrors )
    .catch( err => {
      console.log( err )
    } )
}

function handleErrors ( response ) {
  if ( !response.ok ) {
    console.log( response )
    if ( response.status === 404 ) {
      throw { status: response.status, message: response.message }
    }
    console.log( response.message )
    throw Error( response.status )
  }
  return response
}
