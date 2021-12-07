import Routes from "./routes";
import { CookiesProvider } from 'react-cookie'
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </CookiesProvider>
  )
} 