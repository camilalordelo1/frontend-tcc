import Routes from "./routes";
import { CookiesProvider } from 'react-cookie'

export default function App() {
  return (
    <CookiesProvider>
      <Routes />
    </CookiesProvider>
  )
} 