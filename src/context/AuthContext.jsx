import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { decodeToken } from 'react-jwt'

import { api } from "../services/api"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [userInfo, setUserInfo] = useState({})

  async function signIn({ login, password }) {
    try {
      const { data } = await axios.post(
        '/auth/login', 
        { login, password }, 
        { 
          baseURL: process.env.REACT_APP_BASE_URL,
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' }
        }
      )

      setIsAuthenticated(true)
      
			api.defaults.headers.Authorization = `Bearer ${data.accessToken}`

      const { staff, sub } = decodeToken(data.accessToken)

      return { data: { staff, sub } }
    } catch (error) {      
      if (error?.response?.status === 401) {
        setIsAuthenticated(false)
        return error.response
      } else {
        console.log(error?.response?.data)
      }
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        setIsAuthenticated, 
        setUserInfo, 
        userInfo, 
        signIn 
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}