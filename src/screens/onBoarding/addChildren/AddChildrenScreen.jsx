import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  CustomButton,
} from '../../../components'

import {
  AddIcon,
  ChildrenGroupIcon,
  EditIcon,
  LockIcon,
  PersonIcon,
  TrashIcon,
  RightArrowIcon,
} from '../../../icons'

import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const ChildInfoCard = ({
  fullname = 'Child Name',
  age = '?',
  gender = '?',
  difficulty = '?',
  hasInfo = true,
  disabled = false,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const backgroundColor = hasInfo
    ? colors.greenAccent[400]
    : disabled
      ? colors.extra.grey5
      : colors.extra.grey4

  const detailHeadingColor = hasInfo
    ? colors.greenAccent[600]
    : disabled
      ? colors.extra.grey4
      : colors.extra.grey3

  const detailColor = disabled
    ? colors.extra.grey3
    : colors.grey[100]

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: $({ size: 24 }),
      alignItems: 'center',
    }}>
      <Box sx={{
        borderRadius: $({ size: 24 }),
        backgroundColor: backgroundColor,
        padding: `${$({ size: 16 })} ${$({ size: 24 })}`,
        display: 'flex',
        maxWidth: $({ size: 450 }),
        width: $({ size: 320 }),
        position: 'relative',
      }}>
        {
          hasInfo &&
          <img
            alt='child'
            src={ASSETS.ON_BOARDING.CHILD}
            style={{
              width: $({ size: 80 }),
              height: $({ size: 80 }),
              borderRadius: $({ size: 80 }),
              marginRight: $({ size: 16 }),
            }} />
        }

        {
          !hasInfo &&
          <Box sx={{
            width: $({ size: 80 }),
            height: $({ size: 80 }),
            borderRadius: $({ size: 80 }),
            marginRight: $({ size: 16 }),
            backgroundColor: colors.white[800],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}><PersonIcon
              size={$({ size: 50, numeric: true })}
              color={disabled ? colors.extra.grey3 : colors.grey[100]} />
          </Box>
        }

        {
          disabled &&
          <Box sx={{ position: 'absolute', top: $({ size: 16 }), right: $({ size: 16 }) }}>
            <LockIcon />
          </Box>
        }

        <Box>
          <Typography sx={{
            fontSize: $({ size: 18 }),
            fontWeight: '600',
            lineHeight: $({ size: 30 }),
            color: detailColor,
            marginBottom: $({ size: 8 }),
          }}>{disabled ? 'Add Child' : fullname}</Typography>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: detailHeadingColor
            }}>Age:&nbsp;</Typography>

            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '600',
              lineHeight: $({ size: 25 }),
              color: detailColor,
            }}>{age}</Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: detailHeadingColor
            }}>Gender:&nbsp;</Typography>

            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '600',
              lineHeight: $({ size: 25 }),
              color: detailColor,
            }}>{gender}</Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: detailHeadingColor
            }}>Difficulty:&nbsp;</Typography>

            <Typography sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '600',
              lineHeight: $({ size: 25 }),
              color: detailColor,
            }}>{difficulty}</Typography>
          </Box>
        </Box>
      </Box>

      {
        hasInfo &&
        <Box sx={{ display: 'flex', gap: $({ size: 24 }) }}>
          <span onClick={() => { alert('Coming Soon...') }}>
            <TrashIcon size={$({ size: 32, numeric: true })} />
          </span>
          <span onClick={() => { alert('Coming Soon...') }}>
            <EditIcon size={$({ size: 32, numeric: true })} />
          </span>
        </Box>
      }

      {
        !hasInfo && !disabled &&
        <CustomButton
          label='Add Child'
          rightIcon={<AddIcon />}
          sx={{
            backgroundColor: colors.extra.grey1,
            '&:hover': {
              backgroundColor: alpha(colors.extra.grey1, 0.8),
            },
            maxWidth: $({ size: 450 }),
            width: $({ size: 320 }),
          }}
        />
      }
    </Box>
  )
}

const AddChildrenScreen = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const navigate = useNavigate()

  return (
    <Box sx={{
      backgroundColor: colors.grey[900],
      height: 'max-content',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: $({ size: 40 }),
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
          <Box component='img' src={ASSETS.LOGO} sx={{
            width: $({ size: 160 }),
            alignSelf: 'flex-start',
            margin: `${$({ size: 40 })} 0 0 ${$({ size: 40 })}`
          }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{
              borderRadius: $({ size: 160 }),
              backgroundColor: colors.extra.iconBackground,
              padding: $({ size: 48 }),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'fit-content',
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
            minWidth: $({ size: 320 }),
            width: $({ size: (320 * 3) + (24 * 2) }),
            maxWidth: '100%',
            rowGap: $({ size: 24 }),
          }}>
            <Grid item xs={12} md={6} lg={4}>
              <ChildInfoCard fullname='Eddie Johnson' age='08' gender='Male' difficulty='Medium' />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ChildInfoCard hasInfo={false} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <ChildInfoCard hasInfo={false} disabled={true} />
            </Grid>
          </Grid>
        </Box>

        <CustomButton
          label='Continue'
          rightIcon={<RightArrowIcon />}
          sx={{
            width: 'fit-content',
            marginBottom: $({ size: 40 }),
            marginRight: $({ size: 40 }),
            alignSelf: 'flex-end'
          }}
          onClick={() => {
            navigate(ROUTES.ON_BOARDING.PERSONALITY_TESTS)
          }}
        />
      </Box>
    </Box>
  )
}

export default AddChildrenScreen