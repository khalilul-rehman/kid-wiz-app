import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import {
  CustomTextInput,
  CustomButton
} from '../../../components'

import { ASSETS } from '../../../config/assets'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

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
        boxShadow: `0 0 ${$({ size: 8 })} 0 ${alpha(colors.solids.black, 0.25)}`,
        borderRadius: $({ size: 24 }),
        padding: `${$({ size: 64 })}`,
        margin: `${$({ size: 16 })}`,
        maxWidth: $({ size: 600 }),
        gap: $({ size: 32 }),
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: $({ size: 48 }) }}>
          <img
            src={ASSETS.LOGO}
            alt='logo'
            style={{ height: $({ size: 65 }) }} />
          <Typography sx={{
            fontSize: $({ size: 31.98 }),
            fontWeight: '600',
            lineHeight: $({ size: 40 }),
            textAlign: 'center',
            color: colors.solids.black,
          }}>Recover your password</Typography>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: $({ size: 32 }) }}>
          <CustomTextInput
            label='Email address'
            placeholder='you@email.com'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <CustomButton
            label='Reset Password'
            onClick={() => { }} />
        </Box>
      </Box>
    </Box>
  )
}

export default ResetPasswordScreen