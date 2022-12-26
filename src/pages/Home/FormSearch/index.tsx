import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import { FormSearchContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function FormSearch() {
  const { fetchIssues, issues } = useContext(UserContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }
  return (
    <FormSearchContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <h2>Publicações</h2>
        <span>{issues?.total_count} Publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </FormSearchContainer>
  )
}
