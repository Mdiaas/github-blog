import { CardContainer } from './styles'

interface CardProps {
  title: string
  body: string
}
export function Card({ title, body }: CardProps) {
  return (
    <CardContainer>
      <header>
        <h3>{title}</h3>
        <span>Há 1 dia</span>
      </header>
      <p>{body}</p>
    </CardContainer>
  )
}
