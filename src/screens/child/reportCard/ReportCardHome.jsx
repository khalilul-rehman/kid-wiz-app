import React from 'react'
import { Avatar, Box, Typography, alpha, useTheme } from '@mui/material'
import { Pie } from '@nivo/pie'

import {
  DashboardContainer,
  QuestionProgressBar,
} from '../../../components'

import {
  ChestIcon,
} from '../../../icons'

import { ASSETS } from '../../../config/assets'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const ReportCardHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const reportData = React.useMemo(() => {
    return {
      fullname: 'Liam Johnson',
      email: 'labanovskiy@gmail.com',
      photo: ASSETS.ON_BOARDING.CHILD,
      report: {
        graph: [
          { id: '1', label: 'A', color: '#BDEE77', value: 47 },
          { id: '2', label: 'B', color: '#ECC283', value: 18 },
          { id: '3', label: 'B', color: '#A1D8E4', value: 16 },
          { id: '4', label: 'C', color: '#FC99CE', value: 10 },
          { id: '5', label: 'C+', color: '#C792C8', value: 14 },
        ],
        grade: 'B-',
        title: 'Good job!',
        summary: 'Your child has demonstrated a basic understanding of the subject matter in all areas. They meet minimum expectations, but there are areas that could benefit from improvement. Encourage them to continue working hard!',
        legend: [
          { label: 'Science, biology, & Environment', color: '#BDEE77' },
          { label: 'English & Coding', color: '#ECC283' },
          { label: 'Math, Money, & Music', color: '#A1D8E4' },
          { label: 'Social Study & Languages', color: '#FC99CE' },
          { label: 'Logic, Life Skills, Emotions, & Innovation', color: '#C792C8' },
        ]
      }
    }
  }, [])

  return (
    <DashboardContainer containerStyle={{
      padding: {
        xs: $({ size: 20 }),
        md: $({ size: 24 }),
      },
    }}>
      <Box id='child-info-section'
        sx={{
          display: 'flex',
          gap: $({ size: 24 }),
          alignItems: { xs: 'flex-start', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}>
        <Avatar
          src={reportData?.photo || ''}
          sx={{
            width: $({ size: 112 }),
            height: $({ size: 112 }),
            borderRadius: $({ size: 112 }),
            border: `${$({ size: 3 })} solid ${colors.greenAccent[500]}`,
            objectFit: 'cover',
          }}
        />

        <Box sx={{ width: { xs: '100%', md: '70%', lg: '50%' }, maxWidth: $({ size: 800 }) }}>
          <Typography sx={{ fontWeight: '600', fontSize: $({ size: 24 }), color: colors.solids.black, marginBottom: $({ size: 8 }) }}>
            {reportData?.fullname || ''}
          </Typography>

          <Box sx={{ display: 'flex', gap: $({ size: 24 }), alignItems: 'center' }}>
            <Box sx={{ width: '100%' }}>
              <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey3, marginBottom: $({ size: 8 }) }}>
                Time spent learning
              </Typography>
              <QuestionProgressBar showQuestionNumber={false} currentQuestion={6} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: $({ size: 4 }) }}>
                <Box>
                  <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                    {'4 hours 20m'}
                  </Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                    {' done!'}
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: '400', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                    {'Goal: '}
                  </Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                    {'8 hours'}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{
              backgroundColor: colors.parentDashboard[1],
              borderRadius: $({ size: 20 }),
              padding: $({ size: 8 }),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ChestIcon size={$({ size: 18, numeric: true })} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 20 }),
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: {
            xs: $({ size: 20 }),
            md: $({ size: 36 }),
          },
          width: '100%',
          alignItems: {
            xs: 'flex-start',
            md: 'center'
          },
        }}>
          <Box sx={{
            userSelect: 'none',
            position: 'relative',
            height: $({ size: 280 + (2 * (70 / 2.5)) + (2 * (2 * 1.5)) }),
            width: $({ size: 280 + (2 * (70 / 2.5)) + (2 * (2 * 1.5)) }),
          }}>
            <Box sx={{ filter: `drop-shadow(0 0 ${$({ size: 5 })} ${alpha(colors.solids.black, 0.1)})` }}>
              <Pie
                data={reportData.report.graph}
                innerRadius={0.65}
                padAngle={0}
                legends={[]}
                enableArcLabels={true}
                enableArcLinkLabels={false}
                isInteractive={false}
                width={$({ size: 280 + (2 * (70 / 2.5) + (2 * (2 * 1.5))), numeric: true })}
                height={$({ size: 280 + (2 * (70 / 2.5) + (2 * (2 * 1.5))), numeric: true })}
                animate={false}
                fit={true}
                colors={(d) => d.data.color}
                margin={{
                  top: $({ size: (70 / 2.5) + (2 * (2 * 1.5)), numeric: true }),
                  left: $({ size: (70 / 2.5) + (2 * (2 * 1.5)), numeric: true }),
                  right: $({ size: (70 / 2.5) + (2 * (2 * 1.5)), numeric: true }),
                  bottom: $({ size: (70 / 2.5) + (2 * (2 * 1.5)), numeric: true }),
                }}
                arcLabelsComponent={({ datum }) => {
                  const arc = datum.arc
                  const radiusOfLabelCircle = $({ size: 70 / 2.5, numeric: true })
                  const x = 100 + radiusOfLabelCircle
                  const y = 0
                  const theta = (arc.endAngle - arc.startAngle) / 2 + arc.startAngle

                  const newX = x * Math.cos(theta) - y * Math.sin(theta)
                  const newY = x * Math.sin(theta) + y * Math.cos(theta)

                  const rotationAngle = -90

                  const rotatedX = newX * Math.cos(rotationAngle * (Math.PI / 180)) - newY * Math.sin(rotationAngle * (Math.PI / 180))
                  const rotatedY = newX * Math.sin(rotationAngle * (Math.PI / 180)) + newY * Math.cos(rotationAngle * (Math.PI / 180))

                  return (
                    <g>
                      <filter id='shadow'>
                        <feDropShadow dx='1.5' dy='1.5' stdDeviation='1.5' floodColor='rgba(0, 0, 0, 0.25)' />
                      </filter>

                      <circle cx={rotatedX} cy={rotatedY} r={radiusOfLabelCircle} fill='white' filter='url(#shadow)' />
                      <text
                        x={rotatedX}
                        y={rotatedY - $({ size: 18 / 2, numeric: true })}
                        textAnchor='middle'
                        dominantBaseline='central'
                        style={{
                          fontSize: $({ size: 18 }),
                          fontWeight: '600',
                          fill: colors.solids.black
                        }}
                      >{`${datum.value}%`}</text>

                      <text
                        x={rotatedX}
                        y={rotatedY + $({ size: 18 / 2, numeric: true })}
                        textAnchor='middle'
                        dominantBaseline='central'
                        style={{
                          fontSize: $({ size: 18 }),
                          fontWeight: '500',
                          fill: colors.extra.grey2
                        }}>{datum.label}</text>
                    </g>
                  )
                }}
              />
            </Box>

            <Typography
              sx={{
                fontWeight: '700',
                fontSize: $({ size: 80 }),
                color: colors.extra.grey1,
                lineHeight: $({ size: 70 }),
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: $({ size: 150 }),
                textAlign: 'center',
                position: 'absolute',
              }}>{reportData.report.grade}</Typography>
          </Box>

          <Box sx={{
            width: '100%',
            // maxWidth: {
            //   xs: '100%',
            //   md: $({ size: 440 })
            // },
            display: 'flex',
            flexDirection: 'column',
            gap: $({ size: 12 }),
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: $({ size: 16 }),
              // mt: { xs: 0, md: $({ size: 24 }) }
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: $({ size: 16 }), }}>
                <Typography sx={{ fontSize: $({ size: 42.63 }), fontWeight: '600', color: colors.solids.black }}>
                  {reportData.report.title}
                </Typography>
              </Box>
              <Typography sx={{
                fontSize: $({ size: 18 }),
                fontWeight: '400',
                lineHeight: $({ size: 28 }),
                color: colors.solids.black,
                maxWidth: {
                  xs: '100%',
                  md: $({ size: 800 })
                },
              }}>{reportData.report.summary}</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: $({ size: 16 }),
          // mt: $({ size: 16 }),
          p: { xs: $({ size: 12 }), md: $({ size: 20 }) }
        }}>
          {
            reportData.report.legend.map((item, index) => {
              return (
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: $({ size: 12 }), alignItems: 'center' }} key={index}>
                  <Box sx={{
                    borderRadius: $({ size: 4 }),
                    height: $({ size: 24 }),
                    width: $({ size: 24 }),
                    backgroundColor: item.color,
                  }} />
                  <Typography sx={{
                    fontSize: $({ size: 13.5 }),
                    fontWeight: '500',
                    color: colors.extra.grey1,
                    lineHeight: $({ size: 25 }),
                  }}>{item.label}</Typography>
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </DashboardContainer>
  )
}

export default ReportCardHome