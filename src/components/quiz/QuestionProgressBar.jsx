import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'

const QuestionProgressBar = ({
  totalQuestions = 10,
  currentQuestion = 1,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{
        color: colors.extra.grey1,
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '30px'
      }}>
        Question {currentQuestion} of {totalQuestions}
      </Typography>
      <LinearProgress
        variant='determinate'
        value={currentQuestion / totalQuestions * 100}
        sx={{
          height: 8,
          borderRadius: 66,
          backgroundColor: colors.extra.grey4,
          '& .MuiLinearProgress-bar': {
            borderRadius: 66,
            backgroundColor: colors.greenAccent[500]
          }
        }}
      />
    </Box>
  )
}

export default QuestionProgressBar