import { useState } from 'react'
import { Box, Container, CssBaseline, ThemeProvider, TextField, Button, CircularProgress } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import Footer from '../Footer'
import Navbar from '../Navbar'

import { searchMovies as searchMoviesQuery } from '../../queries/searchMovies'
import { client } from '../../utils/apolloClient'
import { Movie } from '../../types/Movie'

function App() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Movie[]>([])

  const theme = createTheme({
    palette: {
      primary: {
        main: '#EEEDDE',
        light: '#eedde7',
        dark: '#ddeee5',
        contrastText: '#141E27',
      },
      secondary: {
        main: '#203239',
        light: '#253820',
        dark: '#332038',
        contrastText: '#141E27',
      },
    },
  })

  const onSearchButtonClick = async () => {
    setLoading(true)
    try {
      const response = await client.query({ query: searchMoviesQuery(search) })
      setResults(response.data.searchMovies)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box height="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: 'primary.light',
            display: 'flex',
          }}
        >
          <Container maxWidth="xl" sx={{ paddingTop: 4, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
              <TextField
                label="movie title"
                variant="filled"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="contained" sx={{ padding: 2, ml: 1 }} onClick={onSearchButtonClick}>
                Search
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {loading && <CircularProgress color="secondary" />}
              {!loading &&
                results.map((r) => (
                  // TODO: create component
                  <Box key={r.id}>{r.name}</Box>
                ))}
            </Box>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
