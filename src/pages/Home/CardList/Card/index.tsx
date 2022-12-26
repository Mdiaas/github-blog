import { CardContainer } from './styles'

interface CardProps {
  title: string
  body: string
  id: number
}
export function Card({ title, body, id }: CardProps) {
  return (
    <CardContainer to={`/post/${id}`}>
      <header>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </header>
      <p>{body.length > 150 ? `${body.slice(0, 150)} ...` : body}</p>
    </CardContainer>
  )
}
