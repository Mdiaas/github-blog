import { Cardlist } from './CardList'
import { FormSearch } from './FormSearch'
import { ProfileCard } from './ProfileCard'
import { MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <ProfileCard></ProfileCard>
      <FormSearch></FormSearch>
      <Cardlist />
    </MainContainer>
  )
}
