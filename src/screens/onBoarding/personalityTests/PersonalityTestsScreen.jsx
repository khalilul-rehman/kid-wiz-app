import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  Button,
} from '../../../components'

import {
  RightArrowIcon,
  BigFivePersonalityTestIcon,
  EmotionalIntelligenceIcon,
  ShapesIcon,
  PersonalityTestIcon,
  ThunderstormIcon,
  CheckIcon
} from '../../../icons'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const TestInfoCard = ({
  icon = <></>,
  title = '',
  description = '',
  isCompleted = false,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      borderRadius: '16px',
      backgroundColor: colors.greenAccent[500],
      padding: '16px',
      minWidth: '220px',
      maxWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Box sx={{
          width: '40px',
          height: '40px',
          borderRadius: '40px',
          backgroundColor: colors.white[800],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>{icon}</Box>

        {
          isCompleted &&
          <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '500',
              lineHeight: '25px',
              color: colors.white[800],
            }}>Completed</Typography>
            <CheckIcon />
          </Box>
        }
      </Box>

      <Typography sx={{
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '24px',
        color: colors.white[800],
      }}>{title}</Typography>

      <Typography sx={{
        fontSize: '13.5px',
        fontWeight: '400',
        lineHeight: '20px',
        color: colors.white[800],
      }}>{description}</Typography>
    </Box>
  )
}

const PersonalityTestsScreen = () => {
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
              width: '150px',
              height: '150px',
            }}>
              <PersonalityTestIcon />
            </Box>

            <Typography sx={{
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '40px',
              textAlign: 'center',
              color: colors.grey[200],
              margin: '24px 0px',
            }}>Personality Tests</Typography>

            <Typography sx={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '24px',
              textAlign: 'center',
              color: colors.solids.black,
              width: '60%',
              margin: '-8px 0 24px 0',
            }}>
              Taking any of these tests and quizzes is optional and will allow us to personalize your experience more.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            <TestInfoCard
              icon={<BigFivePersonalityTestIcon />}
              title='Big Five Personality Test'
              description='Assess your personality traits in five dimensions.'
              isCompleted={true}
            />

            <TestInfoCard
              icon={<EmotionalIntelligenceIcon />}
              title='Emotional Intelligence'
              description='Measure your ability to perceive and manage emotions.'
              isCompleted={false}
            />

            <TestInfoCard
              icon={<ThunderstormIcon />}
              title='Conflict Resolution Style'
              description='Determine your preferred approach to resolving conflicts.'
              isCompleted={false}
            />

            <TestInfoCard
              icon={<ShapesIcon />}
              title='Values Assessment'
              description='Explore and learn about your core values.'
              isCompleted={false}
            />
          </Box>
        </Box>

        <Button
          label='Continue'
          rightIcon={<RightArrowIcon />}
          sx={{ width: 'fit-content', marginBottom: '40px', marginRight: '40px', alignSelf: 'flex-end' }}
          rightIconSx={{ marginLeft: '16px' }}
          onClick={() => {
            navigate(ROUTES.ON_BOARDING.BIG_FIVE_PERSONALITY.INTRO)
          }}
        />
      </Box>
    </Box>
  )
}

export default PersonalityTestsScreen