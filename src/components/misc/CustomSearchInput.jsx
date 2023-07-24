import React from 'react'
import { Box, InputBase, alpha, useTheme } from '@mui/material'

import {
  CustomTextInput,
} from '../../components'

import {
  SearchIcon,
} from '../../icons'

import { tokens } from '../../theme'
import { $ } from '../../utils'

const CustomSearchInput = ({
  placeholder = 'Search...',
  value = '',
  onChange = () => { },
  containerStyle = {},
  inputContainerStyle = {},
  inputStyle = {},
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <CustomTextInput
      label={null}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      containerStyle={{ ...containerStyle }}
      inputContainerStyle={{ paddingRight: $({ size: 12 }), ...inputContainerStyle }}
      inputStyle={{ ...inputStyle }}
      rightIcon={
        <Box sx={{
          minHeight: $({ size: 32 }),
          minWidth: $({ size: 32 }),
          background: colors.greenAccent[100],
          borderRadius: $({ size: 32 }),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          paddingBottom: $({ size: 2 }),
          paddingRight: $({ size: 2 }),
        }}>
          <SearchIcon size={$({ size: 16, numeric: true })} />
        </Box>
      }
    />
  )
}

export default CustomSearchInput
