import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton,
  QuestionProgressBar,
  LikertScale,
} from '../../../components'

import {
  RightArrowIcon,
  ThunderstormIcon,
} from '../../../icons'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const ConflictResolutionStyleTestQuestionsScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const navigate = useNavigate()

  React.useEffect(() => {
    const _ = Array(10).fill('This is a question ').map((question, i) => `${question} ${i + 1}.`)
    setQuestions(_)
  }, [])

  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState([])

  const [currentQuestion, setCurrentQuestion] = React.useState(1)
  const [likertScaleValue, setLikertScaleValue] = React.useState(2)

  const HandleNext = () => {
    setAnswers([...answers, likertScaleValue])
    setCurrentQuestion(currentQuestion + 1)
    setLikertScaleValue(2)
  }

  const HandleSubmit = () => {
    setAnswers([...answers, likertScaleValue])
    navigate(ROUTES.ON_BOARDING.CONFLICT_RESOLUTION_STYLE.RESULT)
  }

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
              <ThunderstormIcon size={64} />
            </Box>

            <Typography sx={{
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '40px',
              textAlign: 'center',
              color: colors.grey[200],
              margin: '24px 0px',
            }}>Conflict Resolution Style</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '450px',
            gap: '24px',
          }}>
            <QuestionProgressBar totalQuestions={questions.length} currentQuestion={currentQuestion} />

            <Typography sx={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '30px',
              color: colors.extra.grey1,
              alignSelf: 'flex-start',
            }}>{questions[currentQuestion - 1]}</Typography>

            <LikertScale
              max={4}
              value={likertScaleValue}
              onChange={(e, value) => setLikertScaleValue(value)}
            />

            <CustomButton
              onClick={questions.length === currentQuestion ? HandleSubmit : HandleNext}
              label={questions.length === currentQuestion ? 'Submit' : 'Next'}
              sx={{ maxWidth: '175px', alignSelf: 'flex-end', marginTop: '16px' }}
              rightIcon={<RightArrowIcon />}
              rightIconSx={{ marginLeft: '16px' }} />
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

export default ConflictResolutionStyleTestQuestionsScreen
