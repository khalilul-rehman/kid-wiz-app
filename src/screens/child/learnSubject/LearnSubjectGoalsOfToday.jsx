import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'

import {
  QuestionProgressBar,
} from '../../../components'

import {
  ChestIcon,
} from '../../../icons'

import { tokens } from '../../../theme'
import { $ } from '../../../utils'

import { GoalsOfTodayData } from './data'

const LearnSubjectGoalsOfToday = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: $({ size: 28 }),
      gap: $({ size: 24 }),
    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: $({ size: 8 }),
      }}>
        <Box sx={{
          backgroundColor: colors.parentDashboard[1],
          borderRadius: $({ size: 20 }),
          padding: $({ size: 8 }),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}><ChestIcon size={$({ size: 18, numeric: true })} /></Box>

        <Typography sx={{
          fontWeight: '600',
          fontSize: $({ size: 18 }),
          lineHeight: $({ size: 24 }),
          color: colors.solids.black,
        }}>Goals of Today</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 4 }) }}>
        <Typography sx={{
          fontWeight: '600',
          fontSize: $({ size: 13.5 }),
          lineHeight: $({ size: 25 }),
          color: colors.solids.black,
        }}>Total Goal</Typography>
        <QuestionProgressBar showQuestionNumber={false} currentQuestion={GoalsOfTodayData.percentage} totalQuestions={100} />
        <Box>
          <Typography sx={{
            fontWeight: '500',
            fontSize: $({ size: 13.5 }),
            lineHeight: $({ size: 24 }),
            color: colors.extra.grey1,
            display: 'inline',
          }}>{`${GoalsOfTodayData.remainingTime} `}</Typography>
          <Typography sx={{
            fontWeight: '400',
            fontSize: $({ size: 13.5 }),
            lineHeight: $({ size: 24 }),
            color: colors.extra.grey1,
            display: 'inline',
          }}>to go!</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 16 }) }}>
        <Typography sx={{
          fontWeight: '600',
          fontSize: $({ size: 13.5 }),
          color: colors.solids.black,
        }}>Goal by Subjects</Typography>

        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
            lg: 'column',
          },
          gap: $({ size: 16 }),
          flexWrap: 'wrap',
        }}>
          {
            GoalsOfTodayData.subjectVise.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: $({ size: 6 }),
                    width: {
                      xs: '100%',
                      sm: `calc(50% - ${$({ size: 16 })})`,
                      lg: '100%',
                    },
                  }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: $({ size: 8 }),
                    alignItems: 'center'
                  }}>
                    <Box sx={{
                      borderRadius: $({ size: 4 }),
                      minHeight: $({ size: 24 }),
                      minWidth: $({ size: 24 }),
                      backgroundColor: item.color,
                    }} />
                    <Typography sx={{
                      fontSize: $({ size: 13.5 }),
                      fontWeight: '500',
                      color: colors.extra.grey1,
                      lineHeight: $({ size: 16 }),
                    }}>{item.title}</Typography>
                  </Box>

                  <QuestionProgressBar
                    showQuestionNumber={false}
                    currentQuestion={item.percentage}
                    totalQuestions={100}
                    progressBarStyle={{
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: item.color
                      },
                    }}
                  />

                  <Box>
                    <Typography sx={{
                      fontWeight: '500',
                      fontSize: $({ size: 13.5 }),
                      color: colors.extra.grey1,
                      display: 'inline',
                    }}>{`${item.remainingTime} `}</Typography>
                    <Typography sx={{
                      fontWeight: '400',
                      fontSize: $({ size: 13.5 }),
                      color: colors.extra.grey1,
                      display: 'inline',
                    }}>to go!</Typography>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default LearnSubjectGoalsOfToday
