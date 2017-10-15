import { baseUrl } from '../Constants'

export const loadAds = () => {
  return fetch( `${baseUrl}/ads` )
    .then( handleErrors )
    .then( res => res.json() )
}

export const createAd = ( ad ) => {
  console.log( ad )
  return fetch( `${baseUrl}/ads`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        title: ad.title,
        image: ad.image,
        state: ad.state
      })
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
