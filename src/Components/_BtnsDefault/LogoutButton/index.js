import { BtnDefaultPink1 } from '../BtnDefaultPink1'
import { api } from '../../../services/api'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function LogoutButton() {
  const history = useHistory()
  const { setIsAuthenticated } = useContext(AuthContext)
  
  const handleLogout = () => {
    api.delete('/auth/logout')
      .then(() => {
        localStorage.clear()
        setIsAuthenticated(null)
        api.defaults.headers.Authorization = null
        history.push('/adm')
      })
  }
  
  return (
    <BtnDefaultPink1 
      type="button" 
      value="Sair" 
      onClick={handleLogout}
    />
  )
}