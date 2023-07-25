import React from 'react'
import { Box, Grid, Typography, alpha, useTheme } from '@mui/material'

import {
  CustomSearchInput,
  DashboardContainer,
  CustomButton,
  CustomBreadcrumbs,
} from '../../../components'

import {
  ChevronForwardIcon,
  LeftArrowIcon,
  LockIcon,
  RightArrowIcon,
} from '../../../icons'

import { ROUTES } from '../../../config/routes'
import { tokens } from '../../../theme'
import { $, DarkenHexColor } from '../../../utils'

import { TopicsData } from './data'

const ImproveParentingHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [search, setSearch] = React.useState('')
  const [topicsData, setTopicsData] = React.useState([])

  const [selectedTopic, setSelectedTopic] = React.useState([])
  const [selectedSubTopic, setSelectedSubTopic] = React.useState({})
  const [selectedSection, setSelectedSection] = React.useState({})

  const [renderBreadcrumbs, setRenderBreadcrumbs] = React.useState(false)
  const [topicDetailData, setTopicDetailData] = React.useState([])

  React.useEffect(() => {
    document.title = 'Improve Parenting | Parent Dashboard | KidWiz'
    setTopicsData(TopicsData || [])
    setSelectedTopic(TopicsData?.[0] || {})
    setTopicDetailData(TopicsData[0]?.subTopics || [])
  }, [])

  const HandleBeginLearning = () => {
    if (selectedSubTopic?.title && !renderBreadcrumbs) {
      setTopicDetailData(selectedSubTopic.sections)
      setRenderBreadcrumbs(true)
      return
    }

    alert(`You have selected the following:\n\nTopic: ${selectedTopic.title}\nSub Topic: ${selectedSubTopic.title}\nSection: ${selectedSection.title}`)
  }

  const handleSearch = () => {
    const filteredData = TopicsData.filter((topic) => {
      return topic.title.toLowerCase().includes(search.toLowerCase())
    })
    setTopicsData(filteredData || [])
    setSelectedTopic(filteredData?.[0] || {})
    setTopicDetailData(filteredData[0]?.subTopics || [])
  }

  return (
    <DashboardContainer containerStyle={{ paddintTop: $({ size: 32 }) }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 8 }), flex: '1' }}>
        <CustomBreadcrumbs data={[{ path: ROUTES.PARENT.IMPROVE_PARENTING.INDEX, title: 'Home' }]} />

        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          alignItems: {
            xs: 'flex-start',
            sm: 'center',
          },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: {
            xs: $({ size: 24 }),
            sm: $({ size: 16 }),
          },
        }}>
          <Typography sx={{
            fontSize: $({ size: 31.98 }),
            fontWeight: '600',
            lineHeight: $({ size: 40 }),
            color: colors.extra.grey1,
          }}>Choose a Topic</Typography>

          <CustomSearchInput
            placeholder='Search for your topic'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            containerStyle={{
              maxWidth: {
                xs: '100%',
                sm: $({ size: 352 }),
              },
              minWidth: {
                xs: '100%',
                sm: $({ size: 300 }),
              },
            }}
            handleSearch={handleSearch}
            handleSearchOnEveryKeyStroke={handleSearch}
          />
        </Box>

        {
          topicsData.length === 0 &&
          <Typography
            sx={{
              fontSize: $({ size: 24 }),
              fontWeight: '400',
              lineHeight: $({ size: 30 }),
              color: colors.extra.grey3,
              mt: `${$({ size: 24 })}`
            }}>No Topic Found...</Typography>
        }

        {
          topicsData.length > 0 &&
          <>
            <Grid container sx={{ mt: $({ size: 24 }), maxWidth: $({ size: 1536 }) }}>
              <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: $({ size: 12 }),
                  width: '100%',
                  pr: {
                    xs: 0,
                    sm: $({ size: 24 }),
                    md: $({ size: 36 }),
                  },
                  borderRight: {
                    xs: 'none',
                    sm: `${$({ size: 1 })} solid ${colors.extra.grey4}`,
                    md: `${$({ size: 1 })} solid ${colors.extra.grey4}`
                  },
                  borderBottom: {
                    xs: `${$({ size: 1 })} solid ${colors.extra.grey4}`,
                    sm: 'none',
                    md: 'none',
                  },
                  pb: {
                    xs: $({ size: 16 }),
                    sm: 0,
                    md: 0,
                  }
                }}>
                  {
                    topicsData.map((topic, index) => {
                      return (
                        <Box key={index}
                          onClick={() => {
                            if (!topic.isEnabled) return

                            setSelectedTopic(topic)
                            setSelectedSubTopic({})
                            setSelectedSection({})

                            setTopicDetailData(topic.subTopics)
                            setRenderBreadcrumbs(false)
                          }}
                          sx={{
                            display: 'flex',
                            justifyContent: topic.isEnabled ? 'space-between' : 'flex-start',
                            alignItems: 'center',
                            gap: $({ size: 12 }),
                            borderRadius: $({ size: 8 }),
                            padding: `${$({ size: 14 })} ${$({ size: 24 })}`,
                            backgroundColor: topic.id === selectedTopic?.id
                              ? colors.greenAccent[400]
                              : 'transparent',
                            width: '100%',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: topic.id === selectedTopic?.id
                                ? colors.greenAccent[400]
                                : topic.isEnabled
                                  ? alpha(colors.greenAccent[400], 0.25)
                                  : alpha(colors.extra.grey1, 0.05)
                            },
                          }}>
                          <Typography sx={{
                            fontWeight: topic.id === selectedTopic?.id ? '600' : '500',
                            fontSize: $({ size: 18 }),
                            lineHeight: $({ size: 24 }),
                            color: topic.isEnabled ? colors.solids.black : colors.extra.grey3,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}>{topic.title}</Typography>

                          {
                            !topic.isEnabled &&
                            <Box sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}><LockIcon size={$({ size: 14, numeric: true })} color={colors.extra.grey2} /></Box>
                          }

                          {
                            topic.id === selectedTopic?.id &&
                            <Box sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}><ChevronForwardIcon size={$({ size: 14, numeric: true })} color={colors.extra.grey2} /></Box>
                          }
                        </Box>
                      )
                    })
                  }
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={7} xl={8}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  pl: {
                    xs: 0,
                    sm: $({ size: 24 }),
                    md: $({ size: 36 }),
                  },
                  // width: 'fit-content',
                  width: {
                    xs: '100%',
                    sm: '100%',
                    md: 'fit-content'
                  },
                  gap: $({ size: 16 }),
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: $({ size: 16 }),
                    width: '100%',
                    visibility: renderBreadcrumbs ? 'visible' : 'hidden',
                    margin: {
                      xs: renderBreadcrumbs ? `${$({ size: 24 })} 0 ${$({ size: 16 })} 0` : 0,
                      sm: renderBreadcrumbs ? `0 ${$({ size: 24 })}` : 0,
                      md: 0
                    }
                  }}>
                    <Box
                      onClick={() => {
                        setTopicDetailData(selectedTopic.subTopics)
                        setSelectedSubTopic({})
                        setSelectedSection({})
                        setRenderBreadcrumbs(false)
                      }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}>
                      <LeftArrowIcon size={$({ size: 24, numeric: true })} />
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      cursor: 'pointer',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: $({ size: 8 }),
                      overflow: 'hidden'
                    }}>
                      <Typography
                        onClick={() => {
                          setTopicDetailData(selectedTopic.subTopics)
                          setSelectedSubTopic({})
                          setSelectedSection({})
                          setRenderBreadcrumbs(false)
                        }}
                        sx={{
                          fontSize: $({ size: 13.5 }),
                          fontWeight: '400',
                          lineHeight: $({ size: 25 }),
                          color: colors.extra.grey2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}>{selectedTopic?.title || 'N/A'}
                      </Typography>

                      <Typography sx={{
                        fontSize: $({ size: 15 }),
                        fontWeight: '400',
                        lineHeight: $({ size: 25 }),
                        color: colors.extra.grey2,
                      }}>{'>'}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(auto-fill, minmax(${$({ size: 160 })}, 1fr))`,
                    gridAutoRows: `minmax(${$({ size: 160 })}, auto)`, // to make all the rows the same height
                    gridGap: $({ size: 20 }),
                    width: {
                      xs: '100%',
                      lg: $({ size: (160 * 2) + (40 * 2) }),
                      xl: $({ size: (160 * 3) + (40 * 3) }),
                    },
                    maxHeight: {
                      // xs: 'none',
                      xs: $({ size: (160 * 2) + (20 * 1) }),
                      md: $({ size: (160 * 2) + (20 * 1) })
                    },
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': {
                      width: $({ size: 12 }),
                      borderRadius: $({ size: 12 }),
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: colors.extra.grey3,
                      borderRadius: $({ size: 12 }),
                    },
                    pr: {
                      xs: 0,
                      sm: $({ size: 24 }),
                      md: $({ size: 36 }),
                    },
                  }}>
                    {
                      topicDetailData.map((topicDetail, index) => {
                        return (
                          <Box key={index}
                            onClick={() => {
                              if (renderBreadcrumbs) {
                                setSelectedSection(topicDetail)
                                return
                              }

                              setSelectedSubTopic(topicDetail)
                            }}
                            sx={{
                              padding: $({ size: 16 }),
                              borderRadius: $({ size: 16 }),
                              boxShadow: `0 0 ${$({ size: 2 })} ${alpha(colors.solids.black, 0.25)
                                }`,
                              backgroundColor: (
                                renderBreadcrumbs
                                  ? topicDetail.id === selectedSection.id
                                  : topicDetail.id === selectedSubTopic.id
                              )
                                ? DarkenHexColor({ hex: colors.greenAccent[400], percentage: 20 })
                                : colors.greenAccent[400],
                              gap: $({ size: 8 }),
                              display: 'inline-flex',
                              flexDirection: 'column',
                              cursor: 'pointer',
                              maxWidth: {
                                xs: '100%',
                                lg: $({ size: 160 }),
                              },
                            }}>
                            <Typography sx={{
                              fontSize: $({ size: 18 }),
                              fontWeight: '500',
                              lineHeight: $({ size: 24 }),
                              color: colors.solids.black,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              width: '100%',
                              whiteSpace: 'break-spaces',
                              maxWidth: {
                                xs: '100%',
                                lg: $({ size: 160 }),
                              },
                            }}>{topicDetail.title}</Typography>
                          </Box>
                        )
                      })
                    }
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ flex: '1' }} />

            {
              selectedSubTopic?.title &&
              <CustomButton
                onClick={HandleBeginLearning}
                label='Begin Learning'
                sx={{ maxWidth: 'max-content', alignSelf: 'flex-end', mt: $({ size: 16 }) }}
                rightIcon={<RightArrowIcon size={$({ size: 24, numeric: true })} />}
              />
            }
          </>
        }
      </Box>
    </DashboardContainer>
  )
}

export default ImproveParentingHome