import { BtnDefaultPink1 } from '../BtnDefaultPink1'
import { api } from '../../../services/api'
import { useHistory } from 'react-router-dom'

export default function LogoutButton() {
  const history = useHistory()
  
  const handleLogout = () => {
    api.delete('/auth/logout')
      .then(() => {
        localStorage.clear()
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