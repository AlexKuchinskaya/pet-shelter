let myToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqbjNycktIekVuYXBlUXd2c2g5MXpRR0xBZ3lGYzJlbWtaRk1odE9ub0U3Z3Nmc0FWRSIsImp0aSI6Ijk5NzQ3N2RmYzJiMzdhNTA0ZmQ3ZDNhOWI3ZTk2YjRiMmM5N2JjNDk0YTM3MmFiZDM1OTRiM2RmOThlMzAyNDJmYjgwY2NiOTI5NzdiNDAzIiwiaWF0IjoxNzEwNjMzNTcxLCJuYmYiOjE3MTA2MzM1NzEsImV4cCI6MTcxMDYzNzE3MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.FMAINTuCSmd1lao9GZiszAPcBSya4PxHDsdfuJV4PLCoQ3AQRMdR8yf5ntfRNWIsZicXC-wYvJsx1n4cBLfjfAO3ktNRrD3oouN5BPlhT6OZYkkoNLJ5R782jzJGrRpj-JOHM6bBkizRvAzxBqYEJpI77TK2Ge9gNfeQv1F-QoZ9pXKQlk-CwqUgZjptQomJ2FrgAop9-wwMp7GtqXbWZvVPZ0x8w6jxVGfnRY8Fgd22MPw4Zf-2G3hWNbpY7TI_jEWR0O4irOR6ubdb97vRHHjIADFm3IbftdV9asvERdDc3nQqKLu1V84zSGKxWJeeP-RgZG9lPgc0A1m8KWO1ww'
export const useFetch = (url: string, options?: RequestInit | undefined) => {
  const requestBody = {
    "grant_type": "client_credentials",
    "client_id":"jn3rrKHzEnapeQwvsh91zQGLAgyFc2emkZFMhtOnoE7gsfsAVE",
    "client_secret":"VROpDWHPASlBwCvT2U2iZbaQQPqKycoMCPg6hfua"
}

  return fetch(url, 
    {...options, 
      headers: {
        'Authorization': `Bearer ${myToken}`,
        'Content-Type': 'application/json'
    }})
    /* .catch((error) => {
      console.log('error', error)
      //if (error.status === 401) {
        console.log('error status 403')
        return fetch('https://api.petfinder.com/v2/oauth2/token', {
          method: 'POST',
          body: JSON.stringify(requestBody)
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('data', data)
            myToken = data.access_token
          })
          //.catch((error) => console.log('second error', error))
          .then(() => {
            return fetch(url, 
              {...options, 
                headers: {
                  'Authorization': `Bearer ${myToken}`,
                  'Content-Type': 'application/json'
              }})
          })
      //}
    }) */
}

/* fetch("aoijfaosidjaoisjd", {
  method: postMessage,
  headers: {
    contentType
  }
}) */