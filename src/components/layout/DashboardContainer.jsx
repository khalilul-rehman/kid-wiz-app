import React from 'react'
import { Box, Grid } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'
import { $ } from '../../utils'

const DashboardContainer = ({ children, containerStyle = {} }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Grid container sx={{ height: 'max-content', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.white[800],
        boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(colors.solids.black, 0.25)}`,
        width: '100%',
        borderRadius: $({ size: 12 }),
        height: '100%',
        padding: $({ size: 40 }),
        gap: $({ size: 40 }),
        flex: '1',
        ...containerStyle
      }}>{children}</Box>
    </Grid>
  )
}

export default DashboardContainer
