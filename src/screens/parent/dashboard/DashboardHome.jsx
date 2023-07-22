import React from 'react'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { Pie } from '@nivo/pie'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton, CustomTextInput, QuestionProgressBar,
} from '../../../components'

import {
  RightArrowIcon,
  BigFivePersonalityTestIcon,
  ChestIcon,
  ScienceIcon,
  EnglishIcon,
  MathIcon,
  RibbonIcon,
  CompassIcon
} from '../../../icons'

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

const DashboardHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const navigate = useNavigate()

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

  return (
    <Grid container sx={{ height: 'max-content', minHeight: '100%', }}>
      <Grid item xs={12} lg={3} sx={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
      }}>
        <Grid container sx={{
          backgroundColor: colors.white[800],
          boxShadow: `0px 0px 2px 0px ${alpha(colors.solids.black, 0.25)}`,
          borderRadius: '12px',
          height: '100%',
          padding: '20px',
        }}>
          <Grid item xs={12} md={6} lg={12} sx={{
            padding: {
              xs: '0px 20px 0px 0px',
              lg: '0px 0px 20px 0px',
            }
          }}>
            <CustomTextInput
              label='Child'
              placeholder='Choose a child'
              labelStyle={{ fontWeight: '600', fontSize: '13px' }}
              inputStyle={{
                '& .MuiOutlinedInput-root': {
                  '& input': {
                    fontSize: '13px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                  }
                }
              }}
            />

            <Box height='20px' />

            <Typography sx={{ fontSize: '13px', fontWeight: '600', color: colors.extra.grey3 }}>Currently Selected</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
              <Avatar
                src={ASSETS.PLACEHOLDER.CHILD}
                sx={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '36px',
                  border: `2px solid ${colors.greenAccent[500]}`,
                }}
              />

              <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <Typography sx={{
                  fontSize: '12px',
                  fontWeight: '500',
                  color: colors.extra.grey1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>Liam Johnson</Typography>

                <Typography sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: colors.extra.grey2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>labanovskiy@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <CustomTextInput
              label='Dates'
              placeholder='Choose dates'
              labelStyle={{ fontWeight: '600', fontSize: '13px' }}
              inputStyle={{
                '& .MuiOutlinedInput-root': {
                  '& input': {
                    fontSize: '13px',
                    padding: '14px 16px',
                  }
                }
              }}
            />

            <Box height='16px' />

            <Typography sx={{ fontSize: '13px', fontWeight: '600', color: colors.extra.grey3 }}>Currently Selected</Typography>
            <Typography sx={{ fontSize: '12px', fontWeight: '500', color: colors.extra.grey1 }}>April 9, 2023 🡢 May 6, 2023</Typography>
          </Grid>
        </Grid>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: colors.white[800],
          boxShadow: `0px 0px 2px 0px ${alpha(colors.solids.black, 0.25)}`,
          width: '100%',
          borderRadius: '12px',
          height: '100%',
          padding: '20px',
          gap: '20px',
        }}>
          <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Box sx={{
                borderRadius: '150px',
                backgroundColor: colors.extra.grey5,
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
              }}>
                <BigFivePersonalityTestIcon color={colors.extra.grey1} size={36} />
              </Box>

              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: colors.extra.grey1 }}>Your Personality</Typography>
            </Box>

            {
              isPersonalityTestCompleted
                ?
                <Box>
                  {
                    personalityData.map((item, index) => (
                      <Box display='flex' gap='8px' key={index}>
                        <Typography sx={{ fontSize: '16px', fontWeight: '500', color: item.color }}>{item.title}</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: colors.extra.grey1 }}>{`${item.value}%`}</Typography>
                      </Box>
                    ))
                  }
                </Box>
                :
                <Box>
                  <Typography sx={{ fontSize: '16px', fontWeight: '500', color: colors.extra.grey1, display: 'inline' }}>
                    Take the
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: '600', color: colors.extra.grey1, display: 'inline' }}>
                    {' Big Five personality test '}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', fontWeight: '500', color: colors.extra.grey1, display: 'inline' }}>
                    for a more customized experience
                  </Typography>
                </Box>
            }
          </Box>

          <CustomButton
            label='Result'
            rightIcon={<RightArrowIcon size={22} />}
            sx={{
              width: 'fit-content',
              alignSelf: 'flex-end',
              backgroundColor: colors.extra.grey1,
              '&:hover': { backgroundColor: alpha(colors.extra.grey1, 0.8) },
              textTransform: 'none',
              fontSize: '13px',
              padding: '6px 28px',
              fontWeight: '600',
            }}
            rightIconSx={{ marginLeft: '12px' }}
            onClick={() => {
              setIsPersonalityTestCompleted(!isPersonalityTestCompleted)
            }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} lg={9} sx={{
        flex: '1',
        padding: {
          xs: '20px 0px 0px 0px',
          lg: '0px 0px 0px 20px',
        },
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: colors.white[800],
          boxShadow: `0px 0px 2px 0px ${alpha(colors.solids.black, 0.25)}`,
          width: '100%',
          borderRadius: '12px',
          height: '100%',
          padding: '20px',
          gap: '20px',
        }}>
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Avatar
              src={ASSETS.PLACEHOLDER.CHILD}
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '100px',
                border: `3px solid ${colors.greenAccent[500]}`,
              }}
            />

            <Box sx={{ width: { xs: '100%', md: '70%', lg: '50%' } }}>
              <Typography sx={{ fontWeight: '600', fontSize: '24px', color: colors.solids.black, marginBottom: '8px', }}>
                Liam Johnson
              </Typography>

              <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Box sx={{ width: '100%' }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey3, marginBottom: '8px', }}>
                    Time spent learning
                  </Typography>
                  <QuestionProgressBar showQuestionNumber={false} currentQuestion={6} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                    <Box>
                      <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                        {'4 hours 20m'}
                      </Typography>
                      <Typography sx={{ fontWeight: '400', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                        {' done!'}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography sx={{ fontWeight: '400', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                        {'Goal: '}
                      </Typography>
                      <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                        {'8 hours'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{
                  backgroundColor: colors.parentDashboard[1],
                  borderRadius: '20px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ChestIcon size={18} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{
            backgroundColor: colors.extra.grey5,
            borderRadius: '14px',
            padding: '20px',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '10px',
          }}>

            <Typography sx={{ fontWeight: '600', fontSize: '18px', color: colors.extra.grey1 }}>
              Overall Grade
            </Typography>

            <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
              <Box sx={{ position: 'relative', height: '150px', width: '150px' }}>
                <Pie
                  data={gradeGraphData}
                  innerRadius={0.65}
                  padAngle={0}
                  legends={[]}
                  enableArcLabels={false}
                  enableArcLinkLabels={false}
                  isInteractive={false}
                  width={150}
                  height={150}
                  animate={false}
                  fit={true}
                  colors={(d) => d.data.color}
                  sortByValue={true}
                />

                <Typography sx={{
                  fontWeight: '700', fontSize: '42px', color: colors.extra.grey1,
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                }}>B-</Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: '12px', flex: '1', width: '100%', flexDirection: { xs: 'column', lg: 'row' } }}>
                <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column', flex: '1' }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey1 }}>
                    Hightest Grade
                  </Typography>
                  {
                    highestGradeData.map((item, index) => (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }} key={index}>
                        <Box sx={{ flex: '0 0 16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.icon}</Box>
                        <Box>
                          <Typography sx={{ fontWeight: '500', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                            {`${item.subject} > ${item.topic}: `}
                          </Typography>
                          <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                            {item.grade}
                          </Typography>
                        </Box>
                      </Box>
                    ))
                  }
                </Box>
                <Box sx={{ display: 'flex', gap: '8px', flexDirection: 'column', flex: '1' }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey1 }}>
                    Lowest Grade
                  </Typography>
                  {
                    lowestGradeData.map((item, index) => (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }} key={index}>
                        <Box sx={{ flex: '0 0 16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{item.icon}</Box>
                        <Box>
                          <Typography sx={{ fontWeight: '500', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
                            {`${item.subject} > ${item.topic}: `}
                          </Typography>
                          <Typography sx={{ fontWeight: '600', fontSize: '13px', color: colors.extra.grey1, display: 'inline' }}>
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
              rightIcon={<RightArrowIcon size={22} />}
              sx={{
                width: 'fit-content',
                alignSelf: 'flex-end',
                backgroundColor: colors.extra.grey1,
                '&:hover': { backgroundColor: alpha(colors.extra.grey1, 0.8) },
                textTransform: 'none',
                fontSize: '13px',
                padding: '6px 28px',
                fontWeight: '600',
              }}
              rightIconSx={{ marginLeft: '12px' }}
              onClick={() => { }}
            />
          </Box>

          <Grid container sx={{ display: 'flex' }}>
            <Grid item xs={12} lg={6} sx={{
              padding: {
                xs: '0px 0px 20px 0px',
                lg: '0px 10px 0px 0px',
              },
              display: 'flex',
            }}>
              <Box sx={{
                backgroundColor: colors.extra.grey5,
                borderRadius: '14px',
                padding: '20px',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Box sx={{
                    backgroundColor: colors.white[800],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50px',
                    padding: '10px',
                  }}>
                    <RibbonIcon size={28} />
                  </Box>
                  <Typography sx={{ fontWeight: '600', fontSize: '18px', color: colors.extra.grey1 }}>
                    Daily Quiz
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: '500', fontSize: '18px', color: colors.extra.grey1, display: 'inline' }}>
                    {`Today's daily quiz is about `}
                  </Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '18px', color: colors.greenAccent[600], display: 'inline' }}>
                    {`Animals and Their Habitats`}
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '18px', color: colors.extra.grey1, display: 'inline' }}>
                    {'!'}
                  </Typography>
                </Box>

                <Box sx={{ flex: '1' }} />

                <CustomButton
                  label='Quiz'
                  rightIcon={<RightArrowIcon size={22} />}
                  sx={{
                    width: 'fit-content',
                    alignSelf: 'flex-end',
                    backgroundColor: colors.extra.grey1,
                    '&:hover': { backgroundColor: alpha(colors.extra.grey1, 0.8) },
                    textTransform: 'none',
                    fontSize: '13px',
                    padding: '6px 28px',
                    fontWeight: '600',
                  }}
                  rightIconSx={{ marginLeft: '12px' }}
                  onClick={() => {
                    navigate(ROUTES.PARENT.DAILY_QUIZ)
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} lg={6} sx={{
              padding: {
                xs: '0px 0px 0px 0px',
                lg: '0px 0px 0px 10px',
              },
              display: 'flex',
            }}>
              <Box sx={{
                backgroundColor: colors.extra.grey5,
                borderRadius: '14px',
                padding: '20px',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Box sx={{
                    backgroundColor: colors.white[800],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50px',
                    padding: '10px',
                  }}>
                    <CompassIcon size={28} />
                  </Box>
                  <Typography sx={{ fontWeight: '600', fontSize: '18px', color: colors.extra.grey1 }}>
                    Explore Subjects
                  </Typography>
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: '500', fontSize: '18px', color: colors.extra.grey1, display: 'inline' }}>
                    {`Spin the wheel of fortune and try your chance with a `}
                  </Typography>
                  <Typography sx={{ fontWeight: '600', fontSize: '18px', color: colors.extra.grey1, display: 'inline' }}>
                    {`random subject`}
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '18px', color: colors.extra.grey1, display: 'inline' }}>
                    {'!'}
                  </Typography>
                </Box>

                <Box sx={{ flex: '1' }} />

                <CustomButton
                  label='Explore'
                  rightIcon={<RightArrowIcon size={22} />}
                  sx={{
                    width: 'fit-content',
                    alignSelf: 'flex-end',
                    backgroundColor: colors.extra.grey1,
                    '&:hover': { backgroundColor: alpha(colors.extra.grey1, 0.8) },
                    textTransform: 'none',
                    fontSize: '13px',
                    padding: '6px 28px',
                    fontWeight: '600',
                  }}
                  rightIconSx={{ marginLeft: '12px' }}
                  onClick={() => { }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default DashboardHome