import { FormSearchContainer } from './styles'

export function FormSearch() {
  return (
    <FormSearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 públicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" id="search" />
    </FormSearchContainer>
  )
}
