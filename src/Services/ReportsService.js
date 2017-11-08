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
  const usersData = {
    '2017-05': {
      users: 1,
      premiumUsers: 0
    },
    '2017-06': {
      users: 3,
      premiumUsers: 1
    },
    '2017-07': {
      users: 5,
      premiumUsers: 2
    },
    '2017-08': {
      users: 4,
      premiumUsers: 3
    },
    '2017-09': {
      users: 10,
      premiumUsers: 7
    }
  }
  return Promise.resolve(usersData)
  // TODO: Uncomment me
  // return fetch(`${baseUrl}/analytics/users?startDate=${startDate}&endDate=${endDate}`)
  //   .then(handleErrors)
  //   .then(res => res.json())
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
