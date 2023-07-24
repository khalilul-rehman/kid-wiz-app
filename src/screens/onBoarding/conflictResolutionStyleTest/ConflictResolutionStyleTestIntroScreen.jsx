import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton,
} from '../../../components'

import {
  RightArrowIcon,
  ThunderstormIcon,
} from '../../../icons'

import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const ConflictResolutionStyleTestIntroScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const navigate = useNavigate()

  return (
    <Box sx={{
      backgroundColor: colors.grey[900],
      height: 'max-content',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: $({ size: 40 }),
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.white[800],
        boxShadow: `0 0 ${$({ size: 8 })} 0 ${alpha(colors.solids.black, 0.25)}`,
        width: '100%',
        borderRadius: $({ size: 12 }),
        flexGrow: 1,
        gap: $({ size: 24 }),
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          gap: $({ size: 8 }),
        }}>
          <img
            alt='logo'
            src={ASSETS.LOGO}
            style={{
              width: $({ size: 160 }),
              alignSelf: 'flex-start',
              margin: `${$({ size: 40 })} 0 0 ${$({ size: 40 })}`
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{
              borderRadius: $({ size: 160 }),
              backgroundColor: colors.extra.iconBackground,
              padding: $({ size: 48 }),
              width: $({ size: 160 }),
              height: $({ size: 160 }),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}><ThunderstormIcon size={$({ size: 64, numeric: true })} /></Box>

            <Typography sx={{
              fontSize: $({ size: 32 }),
              fontWeight: '600',
              lineHeight: $({ size: 40 }),
              textAlign: 'center',
              color: colors.grey[200],
              margin: `${$({ size: 16 })} 0`,
            }}>Conflict Resolution Style</Typography>

            <Typography sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '400',
              lineHeight: $({ size: 24 }),
              textAlign: 'center',
              color: colors.solids.black,
              width: '100%',
              maxWidth: $({ size: 540 }),
              margin: `-${$({ size: 8 })} 0 ${$({ size: 16 })} 0`,
            }}>
              By completing this test, we are able to personalize your experience according to your conflict resolution style.
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex', width: '100%',
            justifyContent: 'center',
            gap: $({ size: 24 }),
            margin: `${$({ size: 24 })} 0 ${$({ size: 40 })} 0`
          }}>
            <CustomButton
              label='Skip'
              isSecondary
              sx={{ maxWidth: $({ size: 220 }) }}
              onClick={() => { navigate(ROUTES.ON_BOARDING.VALUES_ASSESSMENT.INTRO) }}
            />
            <CustomButton
              label='Take Test'
              sx={{ maxWidth: $({ size: 220 }) }}
              rightIcon={<RightArrowIcon size={$({ size: 24, numeric: true })} />}
              onClick={() => { navigate(ROUTES.ON_BOARDING.CONFLICT_RESOLUTION_STYLE.QUESTIONS) }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ConflictResolutionStyleTestIntroScreen
