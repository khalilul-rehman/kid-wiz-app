import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton,
  VerticalFiller,
} from '../../../components'

import {
  RightArrowIcon,
  BigFivePersonalityTestIcon
} from '../../../icons'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const BigFivePersonalityTestResultScreen = () => {
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
              <BigFivePersonalityTestIcon size={64} />
            </Box>

            <Typography sx={{
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '40px',
              textAlign: 'center',
              color: colors.grey[200],
              margin: '24px 0px',
            }}>Big Five Personality Test<br />Your Result</Typography>
          </Box>

          <Box sx={{ maxWidth: '1000px' }}>
            <VerticalFiller
              data={[
                { label: 'Openness', value: 0.76, color: colors.verticalFiller[100] },
                { label: 'Conscientiousness', value: 0.49, color: colors.verticalFiller[200] },
                { label: 'Extraversion', value: 0.81, color: colors.verticalFiller[300] },
                { label: 'Agreeableness', value: 0.81, color: colors.verticalFiller[400] },
                { label: 'Neuroticism', value: 0.94, color: colors.verticalFiller[500] },
              ]}
            />
          </Box>

          <Box component='span' sx={{
            minHeight: '40px',
            maxHeight: '112px',
          }} />
        </Box>

        <CustomButton
          label='Continue'
          rightIcon={<RightArrowIcon />}
          sx={{ width: 'fit-content', marginBottom: '40px', marginRight: '40px', alignSelf: 'flex-end' }}
          rightIconSx={{ marginLeft: '16px' }}
          onClick={() => {
            navigate(ROUTES.ON_BOARDING.EMOTIONAL_INTELLIGENCE.INTRO)
          }} />
      </Box>
    </Box>
  )
}

export default BigFivePersonalityTestResultScreen
