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
  bio: string
  company: string
  location: string
  html_url: string
}
interface Itens {
  id: number
  title: string
  body: string
}
interface Issues {
  total_count: number
  items: Itens[]
  incomplete_results: boolean
}
interface UserContextType {
  user: User
  fetchIssues: (query?: string) => Promise<void>
  issues: Issues
  getIssue: (id: string) => Itens | undefined
}
interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState({} as Issues)

  const fetchUser = useCallback(async (query?: string) => {
    const response = await api.get('/users/mdiaas')
    const data = {
      login: response.data.login,
      avatar_url: response.data.avatar_url,
      url: response.data.url,
      name: response.data.name,
      followers_url: response.data.followers_url,
      following_url: response.data.following_url,
      bio: response.data.bio,
      company: response.data.company,
      location: response.data.location,
      html_url: response.data.html_url,
    }
    setUser(data)
  }, [])

  const fetchIssues = useCallback(async (query: string = '') => {
    const response = await api.get('search/issues', {
      params: {
        q: `${query}repo:mdiaas/github-blog`,
      },
    })
    setIssues(response.data)
  }, [])

  function getIssue(id: any) {
    const item = issues.items.find((item) => item.id === parseInt(id))

    return item
  }
  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <UserContext.Provider
      value={{
        user,
        fetchIssues,
        issues,
        getIssue,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
