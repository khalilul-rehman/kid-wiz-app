import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import {
  CustomButton
} from '../../../components'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'

const ConfirmationScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      backgroundColor: colors.grey[900],
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white[800],
        boxShadow: `0px 0px 8px 0px ${alpha(colors.solids.black, 0.25)}`,
        borderRadius: '24px',
        padding: '48px 64px',
        marging: '16px',
        width: '37.5%',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box component='img'
            src={ASSETS.AUTHENTICATION.ICONS.CONFIRMATION_LIKE}
            alt='logo'
            sx={{
              width: '50%',
              padding: '16px 0 40px 0px'
            }} />
          <Typography sx={{
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '30px',
            textAlign: 'center',
            color: colors.solids.black,
          }}>Your account was successfully created.</Typography>
        </Box>
        <CustomButton
          label='Go to Home Page'
          onClick={() => { }}
          topSpace='48px' />
      </Box>
    </Box>
  )
}

export default ConfirmationScreen
