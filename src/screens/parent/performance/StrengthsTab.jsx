import React from 'react'
import { Box, Typography, alpha, useTheme } from '@mui/material'

import { tokens } from '../../../theme'
import { $, DarkenHexColor } from '../../../utils'

import { StrengthsData } from './data'

const StrengthsTab = ({ topSectionHeight = 0 }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [strengthsData, setStrengthsData] = React.useState([])

  React.useEffect(() => {
    document.title = 'Performance | Parent Dashboard | KidWiz'
    setStrengthsData(StrengthsData)
  }, [])

  // TO CALCULATE TOP SECTION HEIGHT
  const headerSectionRef = React.useRef(null)
  const [headerSectionHeight, setHeaderSectionHeight] = React.useState(0)

  React.useEffect(() => {
    setHeaderSectionHeight(headerSectionRef.current?.offsetHeight || 0)
  }, [headerSectionRef.current?.offsetHeight])

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
        <Typography
          sx={{
            fontSize: $({ size: 18 }),
            fontWeight: '400',
            lineHeight: $({ size: 30 }),
            color: colors.solids.black,
          }}>{'Find out which specific areas your child excels at the most!'}</Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${$({ size: 160 })}, 1fr))`,
        gridGap: {
          xs: $({ size: 24 }),
          md: $({ size: 24 }),
        },
        gridAutoRows: '1fr', // to make all the rows the same height
        maxHeight: {
          xs: 'unset',
          md: `calc(100vh - ${topSectionHeight + headerSectionHeight}px - ${$({
            numeric: true,
            size: (
              60 + // TOP BAR HEIGHT
              24 + // PARENT CONTAINER TOP PADDING
              24 + // PARENT  CONTAINER BOTTOM PADDING
              40 + // WRAPPER CONTAINER TOP PADDING
              40 + // WRAPPER CONTAINER BOTTOM PADDING
              24 + // HEADER SECTION GAP
              -8   // ADJUSTMENT
            ),
          })}px)`,
        },
        overflowY: 'scroll',
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
      }}>
        {
          strengthsData.map((subject, index) => {
            return (
              <Box key={index}
                sx={{
                  padding: $({ size: 16 }),
                  borderRadius: $({ size: 16 }),
                  boxShadow: `0 0 ${$({ size: 2 })} ${alpha(colors.solids.black, 0.25)}`,
                  backgroundColor: subject.color,
                  gap: $({ size: 8 }),
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{
                    backgroundColor: colors.white[800],
                    width: $({ size: 40 }),
                    height: $({ size: 40 }),
                    borderRadius: $({ size: 40 }),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: $({ size: 8 }),
                  }}>
                    <img
                      src={subject.iconPath}
                      alt={subject.title}
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </Box>

                  <Typography sx={{
                    fontSize: $({ size: 31.98 }),
                    fontWeight: '700',
                    lineHeight: $({ size: 40 }),
                    color: DarkenHexColor({ hex: subject.color, percentage: 30 })
                  }}>{subject.grade}</Typography>
                </Box>
                <Typography sx={{
                  fontSize: $({ size: 18 }),
                  fontWeight: '500',
                  lineHeight: $({ size: 24 }),
                  color: colors.solids.black,
                }}>{`${subject.subject} > ${subject.topic}`}</Typography>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default StrengthsTab
