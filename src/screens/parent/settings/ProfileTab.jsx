import React from 'react'
import { Avatar, Box, Typography, useTheme } from '@mui/material'

import {
  CustomButton,
  CustomTextInput
} from '../../../components'

import {
  EditIcon,
  SaveIcon
} from '../../../icons'

import { ASSETS } from '../../../config/assets'
import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const ProfileTab = ({ topSectionHeight = 0 }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 20 }), flex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: $({ size: 20 }) }}>
        <Box sx={{ position: 'relative', width: $({ size: 112 }), height: $({ size: 112 }) }}>
          <Avatar
            src={ASSETS.ON_BOARDING.CHILD}
            sx={{
              width: $({ size: 112 }),
              height: $({ size: 112 }),
              objectFit: 'cover',
            }}
          />

          <Box onClick={() => { }} sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            cursor: 'pointer',
          }}>
            <EditIcon size={$({ size: 24, numeric: true })} color={colors.extra.grey2} />
          </Box>
        </Box>

        <Typography sx={{
          fontSize: $({ size: 31.98 }),
          fontWeight: '600',
          lineHeight: $({ size: 40 }),
          color: colors.extra.grey1,
        }}>Liam Johnson</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 20 }) }}>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'center',
          gap: $({ size: 20 }),
        }}>
          <CustomTextInput
            label='First Name'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            containerStyle={{ flex: 1, width: '100%' }}
          />

          <CustomTextInput
            label='Last Name'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            containerStyle={{ flex: 1, width: '100%' }}
          />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          alignItems: 'center',
          gap: $({ size: 20 }),
        }}>
          <CustomTextInput
            label='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            containerStyle={{ flex: 1, width: '100%' }}
          />

          <CustomTextInput
            label='Phone'
            value={phone}
            onChange={e => setPhone(e.target.value)}
            type='tel'
            containerStyle={{ flex: 1, width: '100%' }}
          />
        </Box>
      </Box>

      <Box sx={{ flex: 1 }} />

      <CustomButton
        onClick={() => { }}
        label={'Save Changes'}
        sx={{
          maxWidth: $({ size: 256 }),
          alignSelf: 'flex-end'
        }}
        rightIcon={<SaveIcon size={$({ size: 24, numeric: true })} color={colors.white[900]} />}
      />
    </Box>
  )
}

export default ProfileTab
