import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, InfoContainer, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
export function ProfileCard() {
  const { user } = useContext(UserContext)
  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt=""></Avatar>
      <InfoContainer>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />2 seguidores
          </span>
        </footer>
      </InfoContainer>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        github
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
      </a>
    </ProfileContainer>
  )
}
