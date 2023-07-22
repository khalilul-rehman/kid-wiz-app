import React from 'react'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  AuthenticationFormBackground,
  CustomTextInput,
  CustomButton
} from '../../../components'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const LoginScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [rememberMe, setRememberMe] = React.useState(false)

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      backgroundColor: colors.grey[900],
      height: 'max-content',
      minHeight: '100%'
    }}>
      <Grid container sx={{
        display: 'flex',
        width: '100%',
      }}>
        <Grid item xs={12} lg={4}>
          <AuthenticationFormBackground title='Sign in to continue'>
            <Box>
              <CustomTextInput
                label='Email address'
                placeholder='you@email.com'
                type='email'
                topSpace='5px'
                value={email}
                onChange={e => setEmail(e.target.value)}
                containerStyle={{ marginTop: '8px' }}
              />

              <CustomTextInput
                label='Password'
                placeholder='•••••••••'
                type='password'
                topSpace='16px'
                value={password}
                onChange={e => setPassword(e.target.value)}
                containerStyle={{ marginTop: '8px' }}
              />

              <FormControlLabel
                control={
                  <Checkbox checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    sx={{
                      color: colors.grey[100],
                      padding: '0px',
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
                  }}>Remember me on this device</Typography>
                }
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'start',
                  margin: '12px 0px',
                  padding: '0px'
                }}
              />

              <Typography sx={{
                fontSize: '13.5px',
                fontWeight: '400',
                lineHeight: '25px',
                color: colors.solids.purpleBright,
                cursor: 'pointer',
              }} onClick={() => {
                navigate(ROUTES.AUTHENTICATION.RESET_PASSWORD)
              }}>Forgot password?</Typography>

              <CustomButton
                label='Log in'
                onClick={() => {
                  navigate(ROUTES.ON_BOARDING.ADD_CHILDREN)
                }}
                sx={{ margin: '12px 0px' }}
              />

              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '12px 0px',
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

              <CustomButton label='Continue with Google'
                onClick={() => { }}
                sx={{
                  backgroundColor: colors.white[800],
                  fontWeight: '400',
                  color: colors.solids.black,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: colors.grey[900] },
                  margin: '12px 0px'
                }}
                leftIcon={
                  <Box component='img' src={ASSETS.AUTHENTICATION.ICONS.GOOGLE}
                    alt='google-icon' sx={{ height: '18px' }}
                  />
                }
              />

              <CustomButton label='Continue with Facebook'
                onClick={() => { }}
                sx={{
                  backgroundColor: colors.white[800],
                  fontWeight: '400',
                  color: colors.solids.black,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: colors.grey[900] },
                  margin: '12px 0px'
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
                margin: '12px 0px',
                textAlign: 'center',
              }}>{`Don't have an account? `}
                <Box component='span'
                  onClick={() => { navigate(ROUTES.AUTHENTICATION.SIGN_UP) }}
                  sx={{
                    fontSize: '18px',
                    fontWeight: '600',
                    lineHeight: '27px',
                    color: colors.solids.purpleBright,
                    cursor: 'pointer',
                  }}>Create One!</Box>
              </Typography>
            </Box>
          </AuthenticationFormBackground>
        </Grid>
        <Grid item xs={12} lg={8} sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '25px',
            fontStyle: 'italic',
            alignSelf: 'start',
            padding: '5%',
            width: {
              xs: '100%',
              md: '65%'
            }
          }}>
            "The future of early childhood education lies in unlocking the limitless potential of every child, nurturing their curiosity, and empowering them to become lifelong learners."
          </Typography>
          <Box
            component='img'
            src={ASSETS.AUTHENTICATION.MAIN_BACKGROUND}
            alt='main-background'
            sx={{
              objectFit: 'contain',
              objectPosition: 'center',
              margin: '0px 0px 8% 0px',
              width: '80%',
              maxHeight: '500px',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LoginScreen
