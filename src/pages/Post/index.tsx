import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import {
  ContentContainer,
  InfoContainer,
  LinkPrevious,
  LinksContainer,
  MainContainer,
  ParagrapherContainer,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function Post() {
  const { id } = useParams()
  const { getIssue } = useContext(UserContext)
  const [item, setItem] = useState()
  useEffect(() => {
    const item = getIssue(id)
    setItem(item)
  }, [getIssue, id])
  console.log(item)
  return (
    <MainContainer>
      <InfoContainer>
        <LinksContainer>
          <LinkPrevious to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </LinkPrevious>
          <a href={item?.html_url}>
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
          </a>
        </LinksContainer>
        <ContentContainer>
          <h1>{item?.title}</h1>
          <div>
            <span>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              {item?.user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faCalendar} />
              {item?.created_at}
            </span>
            <span>
              <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
              {item?.comments}
            </span>
          </div>
        </ContentContainer>
      </InfoContainer>

      <ParagrapherContainer>{item?.body}</ParagrapherContainer>
    </MainContainer>
  )
}
