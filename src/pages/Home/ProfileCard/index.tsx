import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, InfoContainer, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
export function ProfileCard() {
  return (
    <ProfileContainer>
      <Avatar src="https://github.com/mdiaas.png" alt=""></Avatar>
      <InfoContainer>
        <h2>Mateus Dias</h2>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            mdiaas
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            GlobalData
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />2 seguidores
          </span>
        </footer>
      </InfoContainer>
      <a href="https://github.com/mdiaas" target="_blank" rel="noreferrer">
        github
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
      </a>
    </ProfileContainer>
  )
}
