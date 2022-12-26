import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { Card } from './Card'
import { CardListContainer } from './styles'

export function Cardlist() {
  const { issues } = useContext(UserContext)
  return (
    <CardListContainer>
      {issues.items?.map((item) => {
        return <Card key={item.id} title={item.title} body={item.body}></Card>
      })}
    </CardListContainer>
  )
}
