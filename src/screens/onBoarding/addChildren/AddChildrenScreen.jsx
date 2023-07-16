import React from 'react'
import { Box, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

import {
  Button,
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

import { tokens } from '../../../theme'
import { ASSETS } from '../../../config/assets'
import { ROUTES } from '../../../config/routes'

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
      gap: '24px',
      alignItems: 'center',
    }}>
      <Box sx={{
        borderRadius: '24px',
        backgroundColor: backgroundColor,
        padding: '16px 24px',
        display: 'flex',
        minWidth: '350px',
        position: 'relative',
      }}>
        {
          hasInfo &&
          <Box component='img' src={ASSETS.ON_BOARDING.CHILD} sx={{
            width: '110px',
            height: '110px',
            borderRadius: '110px',
            marginRight: '24px',
          }} />
        }

        {
          !hasInfo &&
          <Box sx={{
            width: '110px',
            height: '110px',
            borderRadius: '110px',
            marginRight: '24px',
            backgroundColor: colors.white[800],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}><PersonIcon size={50} color={disabled ? colors.extra.grey3 : colors.grey[100]} /></Box>
        }

        {
          disabled &&
          <Box sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
          }}>
            <LockIcon />
          </Box>
        }

        <Box>
          <Typography sx={{
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '30px',
            color: detailColor,
            marginBottom: '8px',
          }}>{disabled ? 'Add Child' : fullname}</Typography>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '400',
              lineHeight: '25px',
              color: detailHeadingColor
            }}>Age:&nbsp;</Typography>

            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '600',
              lineHeight: '25px',
              color: detailColor,
            }}>{age}</Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '400',
              lineHeight: '25px',
              color: detailHeadingColor
            }}>Gender:&nbsp;</Typography>

            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '600',
              lineHeight: '25px',
              color: detailColor,
            }}>{gender}</Typography>
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '400',
              lineHeight: '25px',
              color: detailHeadingColor
            }}>Difficulty:&nbsp;</Typography>

            <Typography sx={{
              fontSize: '13.5px',
              fontWeight: '600',
              lineHeight: '25px',
              color: detailColor,
            }}>{difficulty}</Typography>
          </Box>
        </Box>
      </Box>

      {
        hasInfo &&
        <Box sx={{ display: 'flex', gap: '24px' }}>
          <Box component='span' onClick={() => { alert('Coming Soon...') }}>
            <TrashIcon />
          </Box>
          <Box component='span' onClick={() => { alert('Coming Soon...') }}>
            <EditIcon />
          </Box>
        </Box>
      }

      {
        !hasInfo && !disabled &&
        <Button
          label='Add Child'
          rightIcon={<AddIcon />}
          sx={{
            backgroundColor: colors.extra.grey1,
            '&:hover': {
              backgroundColor: alpha(colors.extra.grey1, 0.8),
            },
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
      padding: '2.5%',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.white[800],
        boxShadow: `0px 0px 8px 0px ${alpha(colors.solids.black, 0.25)}`,
        width: '100%',
        borderRadius: '12px',
        flexGrow: 1,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
          <Box component='img' src={ASSETS.LOGO} sx={{
            width: '200px',
            alignSelf: 'flex-start',
            margin: '40px 0px 0px 40px',
          }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{
              borderRadius: '150px',
              backgroundColor: colors.extra.iconBackground,
              padding: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'fit-content',
            }}><ChildrenGroupIcon /></Box>

            <Typography sx={{
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '40px',
              textAlign: 'center',
              color: colors.grey[200],
              margin: '24px 0px',
            }}>Your Children</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '24px' }}>
            <ChildInfoCard fullname='Eddie Johnson' age='08' gender='Male' difficulty='Medium' />
            <ChildInfoCard hasInfo={false} />
            <ChildInfoCard hasInfo={false} disabled={true} />
          </Box>
        </Box>

        <Button
          label='Continue'
          rightIcon={<RightArrowIcon />}
          sx={{ width: 'fit-content', marginBottom: '40px', marginRight: '40px', alignSelf: 'flex-end' }}
          rightIconSx={{ marginLeft: '16px' }}
          onClick={() => {
            navigate(ROUTES.ON_BOARDING.PERSONALITY_TESTS)
          }}
        />
      </Box>
    </Box>
  )
}

export default AddChildrenScreen
