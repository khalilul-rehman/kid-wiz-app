import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import {
  CustomTextInput,
  CustomButton
} from '../../../components'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'

const ResetPasswordScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [email, setEmail] = React.useState('')

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
            src={ASSETS.LOGO}
            alt='logo'
            sx={{
              width: '60%',
              padding: '16px 0 48px 0px'
            }} />
          <Typography sx={{
            fontSize: '32px',
            fontWeight: '600',
            lineHeight: '40px',
            textAlign: 'center',
            color: colors.solids.black,
          }}>Recover your password</Typography>
        </Box>
        <Box sx={{ width: '100%', marginTop: '16px' }}>
          <CustomTextInput
            label='Email address'
            placeholder='you@email.com'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            containerStyle={{ margin: '8px 0px' }}
          />
          <CustomButton
            label='Reset Password'
            onClick={() => { }}
            sx={{ margin: '32px 0px 32px 0px' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default ResetPasswordScreen
