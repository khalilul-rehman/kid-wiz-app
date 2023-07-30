import React from 'react'
import { Box, Typography, useTheme, alpha } from '@mui/material'
import { Pie } from '@nivo/pie'

import {
  CustomDropDown,
  CustomTextInput,
  VerticalFiller,
} from '../../../components'

import {
  InfoIcon, SearchIcon
} from '../../../icons'

import { tokens } from '../../../theme'
import { $, DarkenHexColor } from '../../../utils'

const SubjectDetailsTab = ({
  topSectionHeight = 0,
  subjectDetails = {},
  subjectsData = [],
  searchDropDownOpen = false,
  setSearchDropDownOpen = () => { },
  setRenderSubjectDetails = () => { },
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [search, setSearch] = React.useState('')
  const [filteredSubjectData, setFilteredSubjectData] = React.useState(subjectsData || [])

  const handleSearch = () => {
    const filteredData = subjectsData.filter((subject) => {
      return subject.title.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredSubjectData(filteredData)
  }

  // TO CALCULATE TOP SECTION HEIGHT
  const headerSectionRef = React.useRef(null)
  // const [headerSectionHeight, setHeaderSectionHeight] = React.useState(0)

  // React.useEffect(() => {
  //   setHeaderSectionHeight(headerSectionRef.current?.offsetHeight || 0)
  // }, [headerSectionRef.current?.offsetHeight])

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: $({ size: 24 }),
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: {
          xs: $({ size: 8 }),
          md: 0
        },
        width: '100%',
      }} ref={headerSectionRef}>
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
              setRenderSubjectDetails({
                render: false,
                details: {},
              })
            }}
            sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: colors.extra.grey2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>{'Subjects'}</Typography>

          <Typography sx={{
            fontSize: $({ size: 15 }),
            fontWeight: '400',
            lineHeight: $({ size: 25 }),
            color: colors.extra.grey2,
          }}>{'>'}</Typography>

          <Typography
            onClick={() => { }}
            sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: colors.extra.grey2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>{subjectDetails?.title || 'Subject Title'}</Typography>
        </Box>
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
          <Box>
            <Typography sx={{
              fontSize: $({ size: 31.98 }),
              fontWeight: '600',
              lineHeight: $({ size: 40 }),
              color: DarkenHexColor({ hex: subjectDetails?.color || colors.extra.grey1 }),
              display: 'inline'
            }}>{`${subjectDetails?.title || 'Subject Title'} `}</Typography>
            <Typography sx={{
              fontSize: $({ size: 31.98 }),
              fontWeight: '600',
              lineHeight: $({ size: 40 }),
              color: colors.extra.grey1,
              display: 'inline'
            }}>Performance</Typography>
          </Box>

          <Box sx={{
            position: 'relative',
          }}>
            <CustomDropDown
              preventDefault={true}
              value='Choose subject'
              placeholder='Choose subject'
              dropDownOpen={searchDropDownOpen}
              setDropDownOpen={setSearchDropDownOpen}
              placeholderClosedStyle={{
                fontSize: $({ size: 13.5 }),
                lineHeight: $({ size: 25 }),
                minWidth: $({ size: 224 }),
              }}
              placeholderOpenStyle={{
                fontSize: $({ size: 13.5 }),
                lineHeight: $({ size: 25 }),
                minWidth: $({ size: 224 }),
              }}
              itemContainerStyle={{
                '&:hover': {
                  backgroundColor: alpha(colors.extra.grey4, 0.5),
                },
              }}
              itemsContainerStyle={{
                maxHeight: $({ size: 224 }),
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                  width: $({ size: 6 }),
                  borderRadius: $({ size: 6 }),
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: colors.extra.grey3,
                  borderRadius: $({ size: 6 }),
                },
                userSelect: 'none',
              }}
              header={
                <CustomTextInput
                  placeholder='Search a subject'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  label={null}
                  containerStyle={{
                    mt: $({ size: 16 }),
                    mb: $({ size: 6 }),
                  }}
                  onEnter={handleSearch}
                  onKeyUp={handleSearch}
                  inputContainerStyle={{
                    backgroundColor: colors.extra.grey4,
                    padding: `${$({ size: 8 })} ${$({ size: 20 })}`,
                  }}
                  inputStyle={{
                    fontSize: $({ size: 13.5 }),
                    fontWeight: '400',
                    lineHeight: $({ size: 25 }),
                  }}
                  rightIcon={
                    <Box
                      onClick={() => { }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}>
                      <SearchIcon size={$({ size: 18, numeric: true })} color={colors.extra.grey2} />
                    </Box>
                  }
                />
              }
              data={
                filteredSubjectData.map(item => {
                  return {
                    onClick: () => {
                      setRenderSubjectDetails({
                        render: true,
                        details: item,
                      })
                      setSearchDropDownOpen(false)
                    },
                    component: (
                      <>
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: $({ size: 32 }),
                          height: $({ size: 32 }),
                          ml: $({ size: 12 }),
                        }}>
                          <img
                            src={item.iconPath}
                            alt={item.title}
                            style={{
                              height: $({ size: 14 }), objectFit: 'cover',
                              filter: 'invert(0.5)'
                            }}
                          />
                        </Box>
                        <Box sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          width: '100%',
                          overflow: 'hidden',
                        }}>
                          <Typography sx={{
                            fontSize: $({ size: 13.5 }),
                            fontWeight: '400',
                            color: colors.extra.grey1,
                            lineHeight: $({ size: 25 }),
                            width: '100%',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                          }}>{item.title}</Typography>
                        </Box>
                      </>
                    )
                  }
                })
              }
            />
          </Box>
        </Box>
      </Box>


      <Box
        sx={{
          // display: 'flex',
          // flexDirection: 'column',
          mt: {
            xs: $({ size: 16 }),
            md: 0,
          },
          // maxHeight: {
          //   xs: 'unset',
          //   md: `calc(100vh - ${topSectionHeight + headerSectionHeight}px - ${$({
          //     numeric: true,
          //     size: (
          //       60 + // TOP BAR HEIGHT
          //       24 + // PARENT CONTAINER TOP PADDING
          //       24 + // PARENT  CONTAINER BOTTOM PADDING
          //       40 + // WRAPPER CONTAINER TOP PADDING
          //       40 + // WRAPPER CONTAINER BOTTOM PADDING
          //       24 + // HEADER SECTION GAP
          //       -8   // ADJUSTMENT
          //     ),
          //   })}px)`,
          // },
          // overflowY: 'scroll',
          // overflowX: 'hidden',
          mr: {
            xs: `-${$({ size: 6 })}`,
            md: `-${$({ size: 8 })}`,
          },
          pr: {
            xs: 0,
            md: $({ size: 16 }),
          },
          '&::-webkit-scrollbar': {
            width: $({ size: 8 }),
            borderRadius: $({ size: 8 }),
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.extra.grey3,
            borderRadius: $({ size: 8 }),
          },
          gap: $({ size: 24 }),
        }}>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: {
            xs: $({ size: 24 }),
            md: $({ size: 32 }),
          },
        }}>
          <Box sx={{ width: $({ size: 224 }), height: $({ size: 224 }), position: 'relative' }}>
            <Box sx={{ filter: `drop-shadow(0 0 ${$({ size: 5 })} ${alpha(colors.solids.black, 0.1)})` }}>
              <Pie
                data={[
                  {
                    color: subjectDetails?.color || colors.extra.grey1,
                    value: subjectDetails?.details?.percentage || 0
                  },
                  {
                    color: colors.extra.grey4,
                    value: (100 - subjectDetails?.details?.percentage || 0)
                  },
                ]}
                innerRadius={0.725}
                padAngle={0}
                legends={[]}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                isInteractive={false}
                width={$({ size: 224, numeric: true })}
                height={$({ size: 224, numeric: true })}
                animate={false}
                fit={true}
                colors={(d) => d.data.color}
              />
            </Box>

            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Typography sx={{
                fontSize: $({ size: 72 }),
                fontWeight: '700',
                lineHeight: $({ size: 70 }),
                color: colors.extra.grey1,
                textAlign: 'center',
              }}>{subjectDetails?.grade || 'A'}</Typography>
              <Typography sx={{
                fontSize: $({ size: 24 }),
                fontWeight: '600',
                lineHeight: $({ size: 35 }),
                color: colors.extra.grey2,
                textAlign: 'center',
              }}>{(subjectDetails?.details?.percentage || 0).toFixed(0)}%</Typography>
            </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: $({ size: 16 }),
            mt: {
              xs: 0,
              md: $({ size: 24 })
            }
          }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: $({ size: 16 }), }}>
              <Typography sx={{
                fontSize: $({ size: 18 }),
                fontWeight: '600',
                color: colors.extra.grey1,
              }}>Summary</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <InfoIcon size={$({ size: 16, numeric: true })} color={colors.extra.grey2} />
              </Box>
            </Box>
            <Typography sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '400',
              lineHeight: $({ size: 28 }),
              color: colors.solids.black,
              maxWidth: {
                xs: '100%',
                md: $({ size: 525 })
              },
            }}>{subjectDetails?.details?.summary || 'Subject Summary'}</Typography>
          </Box>


        </Box>

        <Box
          sx={{
            mt: $({ size: 24 }),
            width: '100%',
            overflowX: 'scroll',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
              height: $({ size: 8 }),
              borderRadius: $({ size: 8 }),
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: colors.extra.grey3,
              borderRadius: $({ size: 8 }),
            },
            pb: {
              xs: $({ size: 12 }),
              md: $({ size: 12 })
            },
            userSelect: 'none',
          }}>
          <VerticalFiller
            sx={{
              padding: 0,
              justifyContent: 'flex-start',
              maxWidth: $({ size: 10 }),
              width: $({ size: 10 }),
            }}
            data={
              subjectDetails?.details?.topics?.map((topic) => {
                return {
                  labelStyle: {
                    maxWidth: {
                      sm: $({ size: 88 }),
                      md: $({ size: 104 }),
                      lg: $({ size: 120 }),
                    }
                  },
                  label: topic.title,
                  value: topic.percentage / 100,
                  color: subjectDetails?.color || colors.extra.grey1,
                }
              })
            }
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SubjectDetailsTab