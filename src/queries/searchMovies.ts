import { gql, DocumentNode } from '@apollo/client'

export const searchMovies = (query: string): DocumentNode => {
  return gql`query SearchMovies {
    searchMovies(query: "${query}") {
      id
      name
      overview
      releaseDate
      cast {
        id
        person {
          name
        }
        role {
          ... on Cast {
            character
          }
        }
      }
    }
  }`
}
