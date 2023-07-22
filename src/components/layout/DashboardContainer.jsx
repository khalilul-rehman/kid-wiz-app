import React from 'react'
import { Box, Grid } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'

const DashboardContainer = ({ children, containerStyle = {} }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Grid container sx={{ height: 'max-content', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.white[800],
        boxShadow: `0px 0px 2px 0px ${alpha(colors.solids.black, 0.25)}`,
        width: '100%',
        borderRadius: '12px',
        height: '100%',
        padding: '32px',
        gap: '20px',
        flex: '1',
        ...containerStyle
      }}>{children}</Box>
    </Grid>
  )
}

export default DashboardContainer
