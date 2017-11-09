import { baseUrl } from '../Constants'

export const loadComplaintsByType = (startDate, endDate) => {
  return fetch(`${baseUrl}/analytics/complaints/type?startDate=${startDate}&endDate=${endDate}`)
    .then(handleErrors)
    .then(res => res.json())
}

export const loadDisabledUsersForType = type => {
  return fetch(`${baseUrl}/analytics/complaints/disabled?type=${type}`)
    .then(handleErrors)
    .then(res => res.json())
}

export const loadUsersPerMonth = (startDate, endDate) => {
  return fetch(`${baseUrl}/analytics/users?startDate=${startDate}&endDate=${endDate}`)
    .then(handleErrors)
    .then(res => res.json())
}

function handleErrors (response) {
  if (!response.ok) {
    console.log('Error:')
    console.log(response)
    if (response.status === 404) {
      throw Error({ status: response.status, message: response.message })
    }
    console.log(response.message)
    throw Error(response.status)
  }
  return response
}
