import { GET, POST } from './api'
import { ReadObject, SaveObject } from './storage'

export const DoRegister = async params => {
	return await POST(`/users`, params)
}

export const DoLogin = async params => { 
	const response = await POST(`/auth/local`, params) 
	if (response?.jwt) {
		await SaveObject('authentication', response)
	}
	return response
}

export const DoLogout = async () => {
	SaveObject('authentication', {})
	return true
} 
  
export const DoForgotPassword = async params => {
	return await POST(`/auth/forgot-password`, params)
}

export const DoResetPassword = async params => {
	return await POST(`/auth/reset-password`, params)
}

export const IsLogged = async () => {
	const authentication = ReadObject('authentication')
	return authentication?.jwt
}

export const ReadMe = async () => {
	return await GET(`/users/me`, true)
}  