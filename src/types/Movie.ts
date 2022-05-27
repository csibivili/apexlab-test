import { Cast } from './Cast'

export type Movie = {
  id: string
  name: string
  overview: string
  releaseDate: string
  cast: Cast[]
}
