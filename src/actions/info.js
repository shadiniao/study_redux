export const INFO_REQUEST = 'info/request'

export const INFO_SUCCESS = 'info/success'

export const INFO_ERROR = 'info/error'

export const infoRequest = () => ({type: INFO_REQUEST})

export const infoSuccess = (resp) => ({type: INFO_SUCCESS, info: resp})

export const infoError = (error) => ({type: INFO_ERROR, error})