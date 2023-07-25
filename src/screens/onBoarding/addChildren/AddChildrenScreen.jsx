import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton,
} from '../../../components'

import {
  ChildrenGroupIcon,
  RightArrowIcon,
} from '../../../icons'

import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

import AddChildModal from './AddChildModal'
import ChildInfoCard from './ChildInfoCard'

const AddChildrenScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const navigate = useNavigate()

  const [childrenData, setChildrenData] = React.useState([
    { hasInfo: false, disabled: false },
    { hasInfo: false, disabled: false },
    { hasInfo: false, disabled: true },
  ])

  const [isModalOpen, setIsModalOpen] = React.useState({ isOpen: false, index: -1 })

  return (
    <Box sx={{
      backgroundColor: colors.grey[900],
      height: 'max-content',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: {
        xs: $({ size: 20 }),
        lg: $({ size: 40 })
      },
      position: 'relative',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.white[800],
        boxShadow: `0 0 ${$({ size: 8 })} 0 ${alpha(colors.solids.black, 0.25)}`,
        width: '100%',
        borderRadius: $({ size: 12 }),
        flexGrow: 1,
        gap: $({ size: 24 }),
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <Box
            component='img'
            alt='logo'
            src={ASSETS.LOGO}
            sx={{
              width: {
                xs: $({ size: 140 }),
                lg: $({ size: 160 }),
              },
              alignSelf: 'flex-start',
              margin: {
                xs: `${$({ size: 32 })} 0 0 ${$({ size: 32 })}`,
                lg: `${$({ size: 40 })} 0 0 ${$({ size: 40 })}`,
              }
            }}
          />

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: {
              xs: $({ size: 24 }),
              lg: 0
            }
          }}>
            <Box sx={{
              borderRadius: $({ size: 160 }),
              backgroundColor: colors.extra.iconBackground,
              padding: {
                xs: $({ size: 24 }),
                lg: $({ size: 48 }),
              },
              width: {
                xs: $({ size: 140 }),
                lg: $({ size: 160 }),
              },
              height: {
                xs: $({ size: 140 }),
                lg: $({ size: 160 }),
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}><ChildrenGroupIcon /></Box>

            <Typography sx={{
              fontSize: $({ size: 32 }),
              fontWeight: '600',
              lineHeight: $({ size: 40 }),
              textAlign: 'center',
              color: colors.grey[200],
              margin: `${$({ size: 24 })} 0`,
            }}>Your Children</Typography>
          </Box>

          <Grid container sx={{
            minWidth: {
              xs: '100%',
              lg: $({ size: 320 })
            },
            width: $({ size: (320 * 3) + (24 * 2) }),
            maxWidth: '100%',
            rowGap: $({ size: 24 }),
          }}>
            {
              childrenData.map((child, index) => {
                return (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <ChildInfoCard
                      fullname={child.fullname}
                      age={child.age}
                      gender={child.gender?.label}
                      difficulty={child.difficulty?.label}
                      profilePicture={child?.profilePicture?.src}
                      hasInfo={child.hasInfo}
                      disabled={child.disabled}
                      handleAddChild={() => { setIsModalOpen({ isOpen: true, index: index }) }}
                      handleEditChild={() => { setIsModalOpen({ isOpen: true, index: index }) }}
                      handleDeleteChild={() => {
                        const newChildrenData = [...childrenData]
                        newChildrenData[index] = { hasInfo: false, disabled: false }
                        setChildrenData(newChildrenData)
                      }}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>

        <CustomButton
          label='Continue'
          rightIcon={<RightArrowIcon />}
          sx={{
            width: 'fit-content',
            margin: {
              xs: `0 ${$({ size: 24 })} ${$({ size: 24 })} 0`,
              lg: `0 ${$({ size: 40 })} ${$({ size: 40 })} 0`,
            },
            alignSelf: 'flex-end'
          }}
          onClick={() => {
            navigate(ROUTES.ON_BOARDING.PERSONALITY_TESTS)
          }}
        />
      </Box>

      {
        isModalOpen.isOpen &&
        <AddChildModal
          currentChildData={childrenData[isModalOpen.index]}
          childrenData={childrenData}
          setChildrenData={setChildrenData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      }
    </Box>
  )
}

export default AddChildrenScreen