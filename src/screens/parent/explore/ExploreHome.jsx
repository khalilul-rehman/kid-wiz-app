import React from 'react'
import { Box, alpha, useTheme } from '@mui/material'
import { Pie } from '@nivo/pie'

import {
  DashboardContainer,
} from '../../../components'

import { tokens } from '../../../theme'
import { $ } from '../../../utils'

import { WheelData } from './data'
import Spinner from '../../../components/wheelOfFortune/spinner'

const ExploreHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const spinOnRef = React.useRef(null)
  const wheelRef = React.useRef(null)

  const [isSpinning, setIsSpinning] = React.useState(false)
  const [isAccelerating, setIsAccelerating] = React.useState(false)

  React.useEffect(() => {
    Spinner({
      actionRef: !spinOnRef,
      targetRef: wheelRef,
      isSpinning,
      setIsSpinning,
      isAccelerating,
      setIsAccelerating,
    })

  }, [isSpinning, isAccelerating])

  return (
    <DashboardContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ref={spinOnRef}>
        <Box ref={wheelRef} sx={{
          position: 'relative',
          height: $({ size: 500 }),
          width: $({ size: 500 }),
          // height: '500px',
          // width: '500px',
          userSelect: 'none',
          overflow: 'hidden',
        }}>
          <Box sx={{ filter: `drop-shadow(0 0 ${$({ size: 5 })} ${alpha(colors.solids.black, 0.1)})` }}>
            <Pie
              data={WheelData.sort(() => Math.random() - Math.random()).slice(0, 5)}
              innerRadius={0}
              padAngle={0}
              legends={[]}
              enableArcLabels={true}
              enableArcLinkLabels={false}
              isInteractive={false}
              width={$({ size: 500, numeric: true })}
              height={$({ size: 500, numeric: true })}
              // width={500}
              // height={500}
              animate={false}
              fit={true}
              colors={(d) => d.data.color}
              value={(d) => d.color.length}
              arcLabelsComponent={({ datum }) => {
                return (
                  <g>
                    {
                      [...datum.data.subjects.sort(() => Math.random() - Math.random()).slice(0, 4),]
                        .map((subject, index) => {
                          return (
                            <g key={subject.id}>
                              <circle
                                cx={0}
                                cy={0}
                                r={`${$({ size: 30, numeric: true })}px`}
                                fill='white'
                              />
                              <image
                                href={subject?.iconPath}
                                x={0 - $({ size: 35 / 2, numeric: true })}
                                y={0 - $({ size: 35 / 2, numeric: true })}
                                height={$({ size: 35, numeric: true })}
                                width={$({ size: 35, numeric: true })}
                              />
                            </g>
                          )
                        })
                    }
                  </g>
                )
              }}
            />
          </Box>
        </Box>
      </Box>
    </DashboardContainer>
  )
}

export default ExploreHome
