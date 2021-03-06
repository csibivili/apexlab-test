import React, { FC, ReactElement } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.light',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="primary.dark" variant="h5">
              Apexlab Test
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.dark" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
