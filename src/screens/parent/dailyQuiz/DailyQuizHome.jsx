import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import {
  CustomButton,
  CustomTextInput,
  DashboardContainer,
  QuestionProgressBar,
} from '../../../components'

import {
  RightArrowIcon,
} from '../../../icons'

import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const DailyQuizHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  React.useEffect(() => {
    const _ = Array(10).fill('This is a question ').map((question, i) => `${question} ${i + 1}.`)
    setQuestions(_)
  }, [])

  const [questions, setQuestions] = React.useState([])
  const [currentQuestion, setCurrentQuestion] = React.useState(1)

  const [answers, setAnswers] = React.useState([])
  const [currentAnswer, setCurrentAnswer] = React.useState('')

  const [isChecked, setIsChecked] = React.useState(false)
  const [isCorrect, setIsCorrect] = React.useState(false)

  const HandleAnswer = () => {
    if (currentQuestion === -1) return

    setIsCorrect(Math.random() > 0.5)
    setIsChecked(true)
  }

  const HandleNext = () => {
    if (currentQuestion === -1) return

    setCurrentAnswer('')
    setAnswers([...answers, currentAnswer])
    setIsChecked(false)
    setCurrentQuestion(currentQuestion + 1)
  }

  const HandleSubmit = () => {
    if (currentQuestion === -1) return

    setCurrentAnswer('')
    setAnswers([...answers, currentAnswer])
    setIsChecked(false)
    setCurrentQuestion(-1)
  }

  return (
    <DashboardContainer containerStyle={{ gap: $({ size: 24 }) }}>
      <Box>
        <Typography sx={{ fontSize: $({ size: 31.98 }), fontWeight: '600', color: colors.extra.grey1, display: 'inline' }}>
          {`Daily Quiz: `}
        </Typography>
        <Typography sx={{ fontSize: $({ size: 31.98 }), fontWeight: '600', color: colors.greenAccent[600], display: 'inline' }}>
          {`Animals and Their Habitats`}
        </Typography>
      </Box>

      <QuestionProgressBar
        totalQuestions={questions.length}
        currentQuestion={currentQuestion === -1 ? questions.length : currentQuestion}
      />

      <Typography sx={{ fontSize: $({ size: 18 }), fontWeight: '400', color: colors.extra.grey1 }}>
        {questions[currentQuestion - 1]}
      </Typography>

      <CustomTextInput
        label={null}
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        placeholder={'Type in your answer...'}
        disabled={isChecked}
        inputContainerStyle={{
          ...(isChecked && { boxShadow: `inset 0 0 0 ${$({ size: 3 })} ${isCorrect ? colors.greenAccent[500] : colors.redAccent[500]}`, })
        }}
      />

      <CustomButton
        onClick={
          questions.length === currentQuestion
            ? isChecked ? HandleSubmit : HandleAnswer
            : isChecked ? HandleNext : HandleAnswer
        }
        label={
          questions.length === currentQuestion
            ? isChecked ? 'Submit' : 'Answer'
            : isChecked ? 'Next' : 'Answer'
        }
        sx={{ maxWidth: $({ size: 175 }), alignSelf: 'flex-end' }}
        rightIcon={<RightArrowIcon size={$({ size: 24, numeric: true })} />}
      />

      {
        isChecked &&
        <Box marginTop={`-${$({ size: 8 })}`}>
          {
            isCorrect
              ?
              <Typography sx={{ fontSize: $({ size: 18 }), fontWeight: '700', color: colors.greenAccent[500] }}>
                Correct!
              </Typography>
              :
              <Typography sx={{ fontSize: $({ size: 18 }), fontWeight: '700', color: colors.redAccent[500] }}>
                False!
              </Typography>
          }

          <Typography sx={{ fontSize: $({ size: 18 }), fontWeight: '400', color: colors.extra.grey1 }}>
            {
              isCorrect
                ? <>Yes, Your Answer Is Correct!</>
                : <>No, Your Answer Is Incorrect!</>
            }
          </Typography>
        </Box>
      }

    </DashboardContainer>
  )
}

export default DailyQuizHome
