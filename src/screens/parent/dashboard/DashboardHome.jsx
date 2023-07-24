import React from 'react'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { Pie } from '@nivo/pie'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton,
  CustomLabel,
  QuestionProgressBar,
} from '../../../components'

import {
  RightArrowIcon,
  BigFivePersonalityTestIcon,
  ChestIcon,
  ScienceIcon,
  EnglishIcon,
  MathIcon,
  RibbonIcon,
  CompassIcon,
  CaretUpIcon,
  CaretDownIcon
} from '../../../icons'

import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const DashboardHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const navigate = useNavigate()

  const childData = [
    { fullname: 'Liam Johnson', email: 'labanovskiy@gmail.com', photo: ASSETS.ON_BOARDING.CHILD },
    { fullname: 'Alex Johnson', email: 'samhar25@gmail.com', photo: ASSETS.ON_BOARDING.CHILD },
    { fullname: 'Mike Johnson', email: 'mikeluther1@gmail.com', photo: ASSETS.ON_BOARDING.CHILD },
  ]

  const [childDropDownOpen, setChildDropDownOpen] = React.useState(false)
  const [selectedChild, setSelectedChild] = React.useState(childData[0])

  const [datesDropDownOpen, setDatesDropDownOpen] = React.useState(false)
  const [selectedDates, setSelectedDates] = React.useState({})

  const [isPersonalityTestCompleted, setIsPersonalityTestCompleted] = React.useState(false)

  const personalityData = [
    { title: 'Openness', value: 76, color: colors.personality.openness },
    { title: 'Conscientious', value: 49, color: colors.personality.conscientious },
    { title: 'Extraversion', value: 81, color: colors.personality.extraversion },
    { title: 'Agreeableness', value: 81, color: colors.personality.agreeableness },
    { title: 'Neuroticism', value: 94, color: colors.personality.neuroticism },
  ]

  const gradeGraphData = [
    { id: 'A+', label: 'A+', value: 30, color: colors.verticalFiller[400] },
    { id: 'B+', label: 'B+', value: 25, color: colors.verticalFiller[300] },
    { id: 'B-', label: 'B-', value: 15, color: colors.verticalFiller[100] },
    { id: 'C+', label: 'C+', value: 15, color: colors.verticalFiller[200] },
    { id: 'D+', label: 'D+', value: 15, color: colors.verticalFiller[500] },
  ]

  const highestGradeData = [
    { subject: 'Science', topic: 'Earth & Space', grade: 'A+', icon: <ScienceIcon /> },
    { subject: 'Science', topic: 'Weather & Climate', grade: 'A+', icon: <ScienceIcon /> },
    { subject: 'English', topic: 'Drama', grade: 'A+', icon: <EnglishIcon /> },
    { subject: 'Math', topic: 'Problem Solving', grade: 'A+', icon: <MathIcon /> },
    { subject: 'Math', topic: 'Geometry', grade: 'A+', icon: <MathIcon /> },
  ]

  const lowestGradeData = [
    { subject: 'Science', topic: 'Animals', grade: 'D', icon: <ScienceIcon /> },
    { subject: 'English', topic: 'Dialogue', grade: 'D', icon: <EnglishIcon /> },
    { subject: 'Math', topic: 'Problem Solving & Login', grade: 'D+', icon: <MathIcon /> },
    { subject: 'Money', topic: 'Currencies', grade: 'C+', icon: <EnglishIcon /> },
    { subject: 'Money', topic: 'Management', grade: 'C+', icon: <EnglishIcon /> },
  ]

  const RenderCover = ({ color }) => {
    return (
      <Box
        onClick={() => {
          setChildDropDownOpen(false)
          setDatesDropDownOpen(false)
        }}
        sx={{
          background: alpha(color, 0.4),
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: $({ size: 12 }),
          zIndex: 80,
        }} />
    )
  }

  return (
    <Grid container sx={{ height: 'max-content', minHeight: '100%' }}>
      <Grid item xs={12} lg={3} sx={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: $({ size: 24 }),
      }}>
        <Grid container sx={{
          backgroundColor: colors.white[800],
          boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(colors.solids.black, 0.25)}`,
          borderRadius: $({ size: 12 }),
          height: '100%',
          padding: $({ size: 24 }),
          position: 'relative'
        }}>
          <Grid item xs={12} md={6} lg={12} sx={{
            padding: {
              xs: `0 ${$({ size: 24 })} 0 0`,
              lg: `0 0 ${$({ size: 24 })} 0`,
            },
          }}>
            {
              (childDropDownOpen || datesDropDownOpen) && <RenderCover color={colors.extra.grey1} />
            }

            <CustomLabel label='Child' labelStyle={{
              fontWeight: '600',
              fontSize: $({ size: 13.5 }),
              lineHeight: $({ size: 25 }),
            }} />

            <Box sx={{ position: 'relative' }}>
              <Box
                onClick={() => {
                  if (childDropDownOpen) return
                  setChildDropDownOpen(true)
                }}
                sx={{
                  borderRadius: $({ size: 12 }),
                  background: colors.extra.grey5,
                  boxShadow: `inset 0 0 ${$({ size: 2 })} ${alpha(colors.solids.black, 0.25)}`,
                  padding: `${$({ size: 12 })} ${$({ size: 24 })}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  cursor: 'pointer',
                  gap: $({ size: 12 }),
                  visibility: childDropDownOpen ? 'hidden' : 'visible',
                }}>
                <Typography sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '400',
                  color: colors.extra.grey1,
                  lineHeight: $({ size: 25 }),
                }}>Choose a child</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CaretDownIcon size={$({ size: 11, numeric: true })} />
                </Box>
              </Box>

              {
                childDropDownOpen &&
                <Box
                  onClick={() => { setChildDropDownOpen(false) }}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    background: colors.extra.grey5,
                    borderRadius: $({ size: 12 }),
                    boxShadow: `0 0 ${$({ size: 2 })} ${alpha(colors.solids.black, 0.25)}`,
                    padding: `${$({ size: 12 })} ${$({ size: 24 })}`,
                    zIndex: 100,
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{
                      fontSize: $({ size: 13.5 }),
                      fontWeight: '400',
                      color: colors.extra.grey1,
                      lineHeight: $({ size: 25 }),
                    }}>Choose a child</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CaretUpIcon size={$({ size: 11, numeric: true })} />
                    </Box>
                  </Box>

                  {
                    childData.map((item, index, data) => {
                      return (
                        <Box
                          onClick={() => { setSelectedChild(item) }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: $({ size: 12 }),
                            paddingTop: $({ size: 8 }),
                            paddingBottom: index === data.length - 1 ? 0 : $({ size: 8 }),
                            borderBottom: index === data.length - 1 ? 'none' : `${$({ size: 1 })} solid ${colors.extra.grey4}`,
                            cursor: 'pointer',
                          }}>
                          <img
                            src={item.photo}
                            alt={item.fullname}
                            style={{
                              width: $({ size: 40 }),
                              height: $({ size: 40 }),
                              borderRadius: $({ size: 40 }),
                              border: `${$({ size: 1 })} solid ${colors.extra.grey4}`,
                              objectFit: 'cover',
                            }}
                          />
                          <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                          }}>
                            <Typography sx={{
                              fontSize: $({ size: 13.5 }),
                              fontWeight: '500',
                              color: colors.extra.grey1,
                              lineHeight: $({ size: 22 }),
                            }}>{item.fullname}</Typography>
                            <Typography sx={{
                              fontSize: $({ size: 12 }),
                              fontWeight: '400',
                              color: colors.extra.grey2,
                              lineHeight: $({ size: 22 }),
                            }}>{item.email}</Typography>
                          </Box>
                        </Box>
                      )
                    })
                  }
                </Box>
              }
            </Box>

            <Box height={`${$({ size: 24 })}`} />

            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '600',
              lineHeight: $({ size: 25 }),
              color: colors.extra.grey3,
              visibility: selectedChild.fullname ? 'visible' : 'hidden',
            }}>Currently Selected</Typography>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: $({ size: 16 }),
              marginTop: $({ size: 8 }),
              visibility: selectedChild.fullname ? 'visible' : 'hidden',
            }}>
              <Avatar
                src={selectedChild?.photo || ''}
                sx={{
                  width: $({ size: 40 }),
                  height: $({ size: 40 }),
                  borderRadius: $({ size: 40 }),
                  border: `${$({ size: 2 })} solid ${colors.greenAccent[500]}`,
                }}
              />

              <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <Typography sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '500',
                  lineHeight: $({ size: 25 }),
                  color: colors.extra.grey1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>{selectedChild?.fullname || ''}</Typography>

                <Typography sx={{
                  fontSize: $({ size: 12 }),
                  fontWeight: '400',
                  color: colors.extra.grey2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>{selectedChild?.email || ''}</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <CustomLabel label='Dates' labelStyle={{
              fontWeight: '600',
              fontSize: $({ size: 13.5 }),
              lineHeight: $({ size: 25 }),
            }} />

            <Box sx={{ position: 'relative' }}>
              <Box
                onClick={() => {
                  if (datesDropDownOpen) return
                  setDatesDropDownOpen(true)
                }}
                sx={{
                  borderRadius: $({ size: 12 }),
                  background: colors.extra.grey5,
                  boxShadow: `inset 0 0 ${$({ size: 2 })} ${alpha(colors.solids.black, 0.25)}`,
                  padding: `${$({ size: 12 })} ${$({ size: 24 })}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  cursor: 'pointer',
                  gap: $({ size: 12 }),
                  visibility: datesDropDownOpen ? 'hidden' : 'visible',
                }}>
                <Typography sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '400',
                  color: colors.extra.grey1,
                  lineHeight: $({ size: 25 }),
                }}>Choose dates</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CaretDownIcon size={$({ size: 11, numeric: true })} />
                </Box>
              </Box>

              {
                datesDropDownOpen &&
                <Box
                  onClick={() => { setDatesDropDownOpen(false) }}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    background: colors.extra.grey5,
                    borderRadius: $({ size: 12 }),
                    boxShadow: `0 0 ${$({ size: 2 })} ${alpha(colors.solids.black, 0.25)}`,
                    padding: `${$({ size: 12 })} ${$({ size: 24 })}`,
                    zIndex: 100,
                  }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{
                      fontSize: $({ size: 13.5 }),
                      fontWeight: '400',
                      color: colors.extra.grey1,
                      lineHeight: $({ size: 25 }),
                    }}>Choose dates</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CaretUpIcon size={$({ size: 11, numeric: true })} />
                    </Box>
                  </Box>
                </Box>
              }
            </Box>

            <Box height={`${$({ size: 24 })}`} />

            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '600',
              color: colors.extra.grey3
            }}>Currently Selected</Typography>
            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '500',
              color: colors.extra.grey1
            }}>April 9, 2023 🡢 May 6, 2023</Typography>
          </Grid>
        </Grid>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: colors.white[800],
          boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(colors.solids.black, 0.25)}`,
          width: '100%',
          borderRadius: $({ size: 12 }),
          height: '100%',
          padding: $({ size: 24 }),
          gap: $({ size: 24 }),
          position: 'relative',
        }}>
          {
            (childDropDownOpen || datesDropDownOpen) && <RenderCover color={colors.extra.grey1} />
          }

          <Box sx={{ display: 'flex', gap: $({ size: 24 }), flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: $({ size: 12 }), }}>
              <Box sx={{
                borderRadius: $({ size: 150 }),
                backgroundColor: colors.extra.grey5,
                padding: $({ size: 16 }),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
              }}>
                <BigFivePersonalityTestIcon
                  color={colors.extra.grey1}
                  size={$({ size: 36, numeric: true })}
                />
              </Box>

              <Typography sx={{
                fontSize: $({ size: 16 }),
                fontWeight: '600',
                color: colors.extra.grey1
              }}>Your Personality</Typography>
            </Box>

            {
              isPersonalityTestCompleted
                ?
                <Box>
                  {
                    personalityData.map((item, index) => (
                      <Box display='flex' gap={`${$({ size: 8 })}`} key={index}>
                        <Typography sx={{
                          fontSize: $({ size: 16 }),
                          fontWeight: '500',
                          color: item.color
                        }}>{item.title}</Typography>
                        <Typography sx={{
                          fontSize: $({ size: 16 }),
                          fontWeight: '600',
                          color: colors.extra.grey1
                        }}>{`${item.value}%`}</Typography>
                      </Box>
                    ))
                  }
                </Box>
                :
                <Box>
                  <Typography sx={{ fontSize: $({ size: 16 }), fontWeight: '500', color: colors.extra.grey1, display: 'inline' }}>
                    Take the
                  </Typography>
                  <Typography sx={{ fontSize: $({ size: 16 }), fontWeight: '600', color: colors.extra.grey1, display: 'inline' }}>
                    {' Big Five personality test '}
                  </Typography>
                  <Typography sx={{ fontSize: $({ size: 16 }), fontWeight: '500', color: colors.extra.grey1, display: 'inline' }}>
                    for a more customized experience
                  </Typography>
                </Box>
            }
          </Box>

          <CustomButton
            label='Result'
            rightIcon={<RightArrowIcon size={$({ size: 22, numeric: true })} />}
            sx={{
              width: 'fit-content',
              alignSelf: 'flex-end',
              backgroundColor: colors.extra.grey1,
              '&:hover': { backgroundColor: alpha(colors.extra.grey1, 0.8) },
              textTransform: 'none',
              fontSize: $({ size: 13.5 }),
              padding: `${$({ size: 6 })} ${$({ size: 28 })}`,
              fontWeight: '600',
            }}
            onClick={() => { setIsPersonalityTestCompleted(!isPersonalityTestCompleted) }}
          />
        </Box>
      </Grid>

      {
        selectedChild.fullname &&
        <Grid item xs={12} lg={9} sx={{
          flex: '1',
          padding: {
            xs: `${$({ size: 20 })} 0 0 0`,
            lg: `0 0 0 ${$({ size: 20 })}`,
          },
          position: 'relative',
        }}>
          {
            (childDropDownOpen || datesDropDownOpen) &&
            <Box sx={{
              padding: {
                xs: `${$({ size: 20 })} 0 0 0`,
                lg: `0 0 0 ${$({ size: 20 })}`,
              },
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
              <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
                <RenderCover color={colors.extra.grey1} />
              </Box>
            </Box>
          }

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: colors.white[800],
            boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(colors.solids.black, 0.25)}`,
            width: '100%',
            borderRadius: $({ size: 12 }),
            height: '100%',
            padding: $({ size: 24 }),
            gap: $({ size: 24 }),
          }}>
            <Box sx={{ display: 'flex', gap: $({ size: 24 }), alignItems: 'center' }}>
              <Avatar
                src={selectedChild.photo}
                sx={{
                  width: $({ size: 112 }),
                  height: $({ size: 112 }),
                  borderRadius: $({ size: 112 }),
                  border: `${$({ size: 3 })} solid ${colors.greenAccent[500]}`,
                }}
              />

              <Box sx={{ width: { xs: '100%', md: '70%', lg: '50%' } }}>
                <Typography sx={{ fontWeight: '600', fontSize: $({ size: 24 }), color: colors.solids.black, marginBottom: $({ size: 8 }) }}>
                  {selectedChild.fullname}
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
              backgroundColor: colors.extra.grey5,
              borderRadius: $({ size: 14 }),
              padding: $({ size: 24 }),
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              gap: $({ size: 8 }),
              marginTop: $({ size: 12 }),
            }}>

              <Typography sx={{ fontWeight: '600', fontSize: $({ size: 18 }), color: colors.extra.grey1 }}>
                Overall Grade
              </Typography>

              <Box sx={{ display: 'flex', gap: $({ size: 24 }), flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ position: 'relative', height: $({ size: 160 }), width: $({ size: 160 }) }}>
                  <Pie
                    data={gradeGraphData}
                    innerRadius={0.65}
                    padAngle={0}
                    legends={[]}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    isInteractive={false}
                    width={$({ size: 160, numeric: true })}
                    height={$({ size: 160, numeric: true })}
                    animate={false}
                    fit={true}
                    colors={(d) => d.data.color}
                    sortByValue={true}
                  />

                  <Typography sx={{
                    fontWeight: '700', fontSize: $({ size: 42 }), color: colors.extra.grey1,
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                  }}>B-</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: $({ size: 12 }), flex: '1', width: '100%', flexDirection: { xs: 'column', lg: 'row' } }}>
                  <Box sx={{ display: 'flex', gap: $({ size: 8 }), flexDirection: 'column', flex: '1' }}>
                    <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey1 }}>
                      Hightest Grade
                    </Typography>
                    {
                      highestGradeData.map((item, index) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: $({ size: 8 }) }} key={index}>
                          <Box sx={{
                            flex: `0 0 ${$({ size: 16 })}`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>{item.icon}</Box>
                          <Box>
                            <Typography sx={{ fontWeight: '500', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                              {`${item.subject} > ${item.topic}: `}
                            </Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                              {item.grade}
                            </Typography>
                          </Box>
                        </Box>
                      ))
                    }
                  </Box>
                  <Box sx={{ display: 'flex', gap: $({ size: 8 }), flexDirection: 'column', flex: '1' }}>
                    <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey1 }}>
                      Lowest Grade
                    </Typography>
                    {
                      lowestGradeData.map((item, index) => (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: $({ size: 8 }) }} key={index}>
                          {/* TODO: REPLACE ICON WITH SVG PATH */}
                          <Box sx={{
                            flex: `0 0 ${$({ size: 16 })}`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>{item.icon}</Box>
                          <Box>
                            <Typography sx={{ fontWeight: '500', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                              {`${item.subject} > ${item.topic}: `}
                            </Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: $({ size: 13.5 }), color: colors.extra.grey1, display: 'inline' }}>
                              {item.grade}
                            </Typography>
                          </Box>
                        </Box>
                      ))
                    }
                  </Box>
                </Box>
              </Box>

              <Box sx={{ flex: '1' }} />

              <CustomButton
                label='Full Report'
                rightIcon={<RightArrowIcon size={$({ size: 22, numeric: true })} />}
                sx={{
                  width: 'fit-content',
                  alignSelf: 'flex-end',
                  backgroundColor: colors.extra.grey1,
                  '&:hover': {
                    backgroundColor: alpha(colors.extra.grey1, 0.8)
                  },
                  textTransform: 'none',
                  fontSize: $({ size: 13.5 }),
                  padding: `${$({ size: 6 })} ${$({ size: 24 })}`,
                  fontWeight: '600',
                }}
                onClick={() => { }}
              />
            </Box>

            <Grid container sx={{ display: 'flex' }}>
              <Grid item xs={12} lg={6} sx={{
                padding: {
                  xs: `0 0 ${$({ size: 24 })} 0`,
                  lg: `0 ${$({ size: 12 })} 0 0`,
                },
                display: 'flex',
              }}>
                <Box sx={{
                  backgroundColor: colors.extra.grey5,
                  borderRadius: $({ size: 14 }),
                  padding: $({ size: 24 }),
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: $({ size: 8 }),
                }}>
                  <Box sx={{ display: 'flex', gap: $({ size: 12 }), alignItems: 'center' }}>
                    <Box sx={{
                      backgroundColor: colors.white[800],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: $({ size: 50 }),
                      padding: $({ size: 10 }),
                    }}>
                      <RibbonIcon size={$({ size: 28, numeric: true })} />
                    </Box>
                    <Typography sx={{ fontWeight: '600', fontSize: $({ size: 18 }), color: colors.extra.grey1 }}>
                      Daily Quiz
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: '500', fontSize: $({ size: 18 }), color: colors.extra.grey1, display: 'inline' }}>
                      {`Today's daily quiz is about `}
                    </Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: $({ size: 18 }), color: colors.greenAccent[600], display: 'inline' }}>
                      {`Animals and Their Habitats`}
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: $({ size: 18 }), color: colors.extra.grey1, display: 'inline' }}>
                      {'!'}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: '1' }} />

                  <CustomButton
                    label='Quiz'
                    rightIcon={<RightArrowIcon size={$({ size: 22, numeric: true })} />}
                    sx={{
                      width: 'fit-content',
                      alignSelf: 'flex-end',
                      backgroundColor: colors.extra.grey1,
                      '&:hover': { backgroundColor: alpha(colors.extra.grey1, 0.8) },
                      textTransform: 'none',
                      fontSize: $({ size: 13.5 }),
                      padding: `${$({ size: 6 })} ${$({ size: 24 })}`,
                      fontWeight: '600',
                    }}
                    onClick={() => { navigate(ROUTES.PARENT.DAILY_QUIZ) }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} lg={6} sx={{
                padding: {
                  xs: '0 0 0 0',
                  lg: `0 0 0 ${$({ size: 12 })}`,
                },
                display: 'flex',
              }}>
                <Box sx={{
                  backgroundColor: colors.extra.grey5,
                  borderRadius: $({ size: 14 }),
                  padding: $({ size: 24 }),
                  flex: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: $({ size: 8 }),
                }}>
                  <Box sx={{ display: 'flex', gap: $({ size: 12 }), alignItems: 'center' }}>
                    <Box sx={{
                      backgroundColor: colors.white[800],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: $({ size: 50 }),
                      padding: $({ size: 10 }),
                    }}>
                      <CompassIcon size={28} />
                    </Box>
                    <Typography sx={{ fontWeight: '600', fontSize: $({ size: 18 }), color: colors.extra.grey1 }}>
                      Explore Subjects
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: '500', fontSize: $({ size: 18 }), color: colors.extra.grey1, display: 'inline' }}>
                      {`Spin the wheel of fortune and try your chance with a `}
                    </Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: $({ size: 18 }), color: colors.extra.grey1, display: 'inline' }}>
                      {`random subject`}
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: $({ size: 18 }), color: colors.extra.grey1, display: 'inline' }}>
                      {'!'}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: '1' }} />

                  <CustomButton
                    label='Explore'
                    rightIcon={<RightArrowIcon size={$({ size: 22, numeric: true })} />}
                    sx={{
                      width: 'fit-content',
                      alignSelf: 'flex-end',
                      backgroundColor: colors.extra.grey1,
                      '&:hover': {
                        backgroundColor: alpha(colors.extra.grey1, 0.8)
                      },
                      textTransform: 'none',
                      fontSize: $({ size: 13.5 }),
                      padding: `${$({ size: 6 })} ${$({ size: 24 })}`,
                      fontWeight: '600',
                    }}
                    onClick={() => { }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      }
    </Grid>
  )
}

export default DashboardHome