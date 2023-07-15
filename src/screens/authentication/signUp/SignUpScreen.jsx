import React from 'react'
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  AuthenticationFormBackground,
  TextInput,
  Button
} from '../../../components'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const SignUpScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  const [fullname, setFullname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [agreeToTerms, setAgreeToTerms] = React.useState(false)

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      backgroundColor: colors.grey[900],
      height: 'max-content',
      minHeight: '100%'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '37%'
      }}>
        <AuthenticationFormBackground title='Create an account'>
          <Box>
            <TextInput
              label='Full Name'
              placeholder='First Last'
              topSpace='16px'
              value={fullname}
              onChange={e => setFullname(e.target.value)}
            />

            <TextInput
              label='Email address'
              placeholder='you@email.com'
              type='email'
              topSpace='16px'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <TextInput
              label='Password'
              placeholder='•••••••••'
              type='password'
              topSpace='16px'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <FormControlLabel
              control={
                <Checkbox checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                  sx={{
                    color: colors.grey[100],
                    padding: '0px',
                    marginTop: '4px',
                    '&.Mui-checked': { color: colors.greenAccent[500] },
                    '&:hover': { backgroundColor: 'transparent' },
                  }} />
              }
              label={
                <Typography sx={{
                  fontSize: '13.5px',
                  fontWeight: '400',
                  lineHeight: '25px',
                  marginLeft: '8px',
                  color: colors.grey[100]
                }}>By creating an account you agree to the
                  <Box component='span'
                    onClick={() => { alert('Coming Soon...') }}
                    sx={{
                      color: colors.solids.purpleBright,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}>{' terms of use '}</Box>
                  and our
                  <Box component='span'
                    onClick={() => { alert('Coming Soon...') }}
                    sx={{
                      color: colors.solids.purpleBright,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}>{' privacy policy'}</Box>
                  .
                </Typography>
              }
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                margin: '16px 0px',
                padding: '0px'
              }}
            />

            <Button
              label='Create Account'
              onClick={() => { navigate(ROUTES.AUTHENTICATION.CONFIRMATION) }}
              topSpace='16px'
              bottomSpace='16px' />

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              margin: '16px 0px',
              padding: '0px'
            }}>
              <Box sx={{
                height: '1.5px',
                width: '100%',
                backgroundColor: colors.grey[800]
              }} />
              <Typography sx={{
                fontSize: '13.5px',
                fontWeight: '400',
                lineHeight: '25px',
                margin: '0 8px',
                color: colors.grey[500]
              }}>or</Typography>
              <Box sx={{
                height: '1.5px',
                width: '100%',
                backgroundColor: colors.grey[800]
              }} />
            </Box>

            <Button label='Continue with Google'
              onClick={() => { }}
              topSpace='16px'
              sx={{
                backgroundColor: colors.white[800],
                fontWeight: '400',
                color: colors.solids.black,
                textTransform: 'none',
                '&:hover': { backgroundColor: colors.grey[900] },
              }}
              leftIcon={
                <Box component='img' src={ASSETS.AUTHENTICATION.ICONS.GOOGLE}
                  alt='google-icon' sx={{ height: '18px' }}
                />
              }
            />

            <Button label='Continue with Facebook'
              onClick={() => { }}
              topSpace='16px'
              bottomSpace='16px'
              sx={{
                backgroundColor: colors.white[800],
                fontWeight: '400',
                color: colors.solids.black,
                textTransform: 'none',
                '&:hover': { backgroundColor: colors.grey[900] },
              }}
              leftIcon={
                <Box component='img' src={ASSETS.AUTHENTICATION.ICONS.FACEBOOK}
                  alt='facebook-icon' sx={{ height: '18px' }}
                />
              }
            />
          </Box>

          <Box sx={{ marginBottom: '8%' }}>
            <Typography sx={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '27px',
              color: colors.grey[100],
              margin: '16px 0px',
              textAlign: 'center',
            }}>{'Already have an account? '}
              <Box component='span'
                onClick={() => { navigate(ROUTES.AUTHENTICATION.LOGIN) }}
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  lineHeight: '27px',
                  color: colors.solids.purpleBright,
                  cursor: 'pointer',
                }}>Log in</Box>
            </Typography>
          </Box>
        </AuthenticationFormBackground>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '62.5%',
        padding: '5%',
        alignItems: 'center',
      }}>
        <Typography sx={{
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '25px',
          fontStyle: 'italic',
          margin: '5% 0'
        }}>
          "The future of early childhood education lies in unlocking the limitless potential of every child, nurturing their curiosity, and empowering them to become lifelong learners."
        </Typography>
        <Box
          component='img'
          src={ASSETS.AUTHENTICATION.MAIN_BACKGROUND}
          alt='main-background'
          sx={{
            width: '70%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </Box>
    </Box>
  )
}

export default SignUpScreen
