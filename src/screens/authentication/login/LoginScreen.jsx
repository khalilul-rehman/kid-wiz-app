import React from 'react'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  AuthenticationFormBackground,
  CustomTextInput,
  CustomButton
} from '../../../components'

import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

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
      <Grid container>
        <Grid item xs={12} lg={4}>
          <AuthenticationFormBackground title='Sign in to continue' sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: `calc(100% - ${$({ size: (45 + 60 + 60) + 31.98 })})`,
            gap: $({ size: 16 }),
          }}>
            <Box sx={{
              paddingTop: $({ size: 16 }),
              gap: $({ size: 16 }),
              display: 'flex',
              flexDirection: 'column',
            }}>
              <CustomTextInput
                label='Email address'
                placeholder='you@email.com'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <CustomTextInput
                label='Password'
                placeholder='•••••••••'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />

              <FormControlLabel
                control={
                  <Checkbox checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    sx={{
                      color: colors.grey[100],
                      padding: '0',
                      '&.Mui-checked': { color: colors.greenAccent[500] },
                      '&:hover': { backgroundColor: 'transparent' },
                    }} />
                }
                label={
                  <Typography sx={{
                    fontSize: $({ size: 13.5 }),
                    fontWeight: '400',
                    lineHeight: $({ size: 25 }),
                    marginLeft: $({ size: 8 }),
                    color: colors.grey[100]
                  }}>Remember me on this device</Typography>
                }
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'start',
                  margin: '0',
                  padding: '0'
                }}
              />

              <Typography
                onClick={() => { navigate(ROUTES.AUTHENTICATION.RESET_PASSWORD) }}
                sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '400',
                  lineHeight: $({ size: 25 }),
                  color: colors.solids.purpleBright,
                  cursor: 'pointer',
                }}>Forgot password?</Typography>

              <CustomButton
                label='Log in'
                onClick={() => { navigate(ROUTES.ON_BOARDING.ADD_CHILDREN) }}
              />

              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: `${$({ size: 8 })} 0`,
                gap: $({ size: 8 }),
              }}>
                <Box sx={{ height: $({ size: 1.5 }), width: '100%', backgroundColor: colors.grey[800] }} />
                <Typography sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '400',
                  lineHeight: $({ size: 25 }),
                  color: colors.grey[500]
                }}>or</Typography>
                <Box sx={{ height: $({ size: 1.5 }), width: '100%', backgroundColor: colors.grey[800] }} />
              </Box>

              <CustomButton label='Continue with Google'
                onClick={() => { }}
                sx={{
                  backgroundColor: colors.white[800],
                  fontWeight: '400',
                  color: colors.solids.black,
                  textTransform: 'none',
                  '&:hover': { backgroundColor: colors.grey[900] },
                }}
                leftIcon={
                  <img
                    alt='google-icon'
                    src={ASSETS.AUTHENTICATION.ICONS.GOOGLE}
                    sx={{ height: $({ size: 18 }) }}
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
                }}
                leftIcon={
                  <img
                    alt='facebook-icon'
                    src={ASSETS.AUTHENTICATION.ICONS.FACEBOOK}
                    sx={{ height: $({ size: 18 }) }}
                  />
                }
              />
            </Box>

            <Box sx={{ margin: `${$({ size: 12 })} 0 ${$({ size: 24 })} 0`, textAlign: 'center' }}>
              <Typography sx={{
                fontSize: $({ size: 18 }),
                fontWeight: '400',
                lineHeight: $({ size: 27 }),
                color: colors.grey[100],
                display: 'inline',
              }}>{`Don't have an account? `}</Typography>
              <Typography
                onClick={() => { navigate(ROUTES.AUTHENTICATION.SIGN_UP) }}
                sx={{
                  fontSize: $({ size: 18 }),
                  fontWeight: '600',
                  lineHeight: $({ size: 27 }),
                  color: colors.solids.purpleBright,
                  display: 'inline',
                  cursor: 'pointer',
                }}>{`Create One!`}</Typography>
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
            fontSize: $({ size: 18 }),
            fontWeight: '400',
            lineHeight: $({ size: 25 }),
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
              margin: '0 0 8% 0',
              width: '80%',
              maxHeight: $({ size: 575 }),
              maxWidth: $({ size: 650 }),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LoginScreen
