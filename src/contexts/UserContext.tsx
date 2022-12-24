import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  avatar_url: string
  url: string
  name: string
  followers_url: string
  following_url: string
  blog: string
  company: string
  location: string
  html_url: string
}
interface UserContextType {
  user: User
  fetchUser: () => Promise<void>
}
interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async (query?: string) => {
    const response = await api.get('/users/mdiaas')
    const data = {
      login: response.data.login,
      avatar_url: response.data.avatar_url,
      url: response.data.url,
      name: response.data.name,
      followers_url: response.data.followers_url,
      following_url: response.data.following_url,
      blog: response.data.blog,
      company: response.data.company,
      location: response.data.location,
      html_url: response.data.html_url,
    }
    setUser(data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider
      value={{
        fetchUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
