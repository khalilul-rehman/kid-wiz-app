import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  Button,
} from '../../../components'

import {
  RightArrowIcon,
  EmotionalIntelligenceIcon,
} from '../../../icons'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const EmotionalIntelligenceTestIntroScreen = () => {
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
      padding: '2.5%',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.white[800],
        boxShadow: `0px 0px 8px 0px ${alpha(colors.solids.black, 0.25)}`,
        width: '100%',
        borderRadius: '12px',
        flexGrow: 1,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <Box component='img' src={ASSETS.LOGO} sx={{
            width: '200px',
            alignSelf: 'flex-start',
            margin: '40px 0px 0px 40px',
          }} />

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Box sx={{
              borderRadius: '150px',
              backgroundColor: colors.extra.iconBackground,
              padding: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'fit-content',
            }}>
              <EmotionalIntelligenceIcon size={64} />
            </Box>

            <Typography sx={{
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '40px',
              textAlign: 'center',
              color: colors.grey[200],
              margin: '24px 0px',
            }}>Emotional Intelligence Assessment</Typography>

            <Typography sx={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '24px',
              textAlign: 'center',
              color: colors.solids.black,
              width: '60%',
              margin: '-8px 0 24px 0',
            }}>
              By completing this test, we are able to personalize your experience according to your emotional intelligence.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '24px', margin: '24px 0' }}>
            <Button
              label='Skip'
              isSecondary
              sx={{ maxWidth: '220px' }}
              onClick={() => {
                navigate(ROUTES.ON_BOARDING.CONFLICT_RESOLUTION_STYLE.INTRO)
              }}
            />
            <Button
              label='Take Test'
              sx={{ maxWidth: '220px' }}
              rightIcon={<RightArrowIcon />}
              rightIconSx={{ marginLeft: '16px' }}
              onClick={() => {
                navigate(ROUTES.ON_BOARDING.EMOTIONAL_INTELLIGENCE.QUESTIONS)
              }}
            />
          </Box>

          <Box component='span' sx={{
            minHeight: '40px',
            maxHeight: '112px',
          }} />
        </Box>
      </Box>
    </Box>
  )
}

export default EmotionalIntelligenceTestIntroScreen