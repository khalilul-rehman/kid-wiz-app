import React from 'react'
import { Box, Typography, InputBase } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'
import { $ } from '../../utils'

const CustomTextInput = ({
  value = '',
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  disabled = false,
  onChange = () => { },
  containerStyle = {},
  labelStyle = {},
  inputContainerStyle = {},
  inputStyle = {},
  leftIcon = null,
  rightIcon = null,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{ ...containerStyle }}>
      {
        label &&
        <Typography sx={{
          fontSize: $({ size: 18 }),
          fontWeight: '500',
          color: colors.solids.black,
          lineHeight: $({ size: 30 }),
          paddingBottom: $({ size: 8 }),
          ...labelStyle
        }}>{label}</Typography>
      }

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: colors.grey[900],
        boxShadow: `inset 0 0 ${$({ size: 3 })} ${alpha(colors.solids.black, 0.30)}`,
        padding: `${$({ size: 9 })} ${$({ size: 24 })}`,
        borderRadius: $({ size: 16 }),
        gap: $({ size: 12 }),
        width: '100%',
        ...inputContainerStyle
      }}>
        {leftIcon}
        <InputBase
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          type={type}
          sx={{
            fontSize: $({ size: 18 }),
            fontWeight: '400',
            color: colors.extra.grey2,
            lineHeight: $({ size: 30 }),
            '&::placeholder': {
              color: colors.extra.grey2,
              opacity: 0.7,
              ...inputStyle?.['&::placeholder'],
            },
            ...inputStyle,
          }}
        />
        {rightIcon}
      </Box>

      {/* <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            ...inputStyle?.['& .MuiOutlinedInput-root'],
            '& input': {
              fontSize: $({ size: 18 }),
              fontWeight: '400',
              color: colors.extra.grey2,
              lineHeight: $({ size: 30 }),
              background: colors.grey[900],
              boxShadow: `inset 0px 0px ${$({ size: 3 })} ${alpha(colors.solids.black, 0.30)}`,
              padding: `${$({ size: 14 })} ${$({ size: 24 })}`,
              borderRadius: $({ size: 16 }),
              '&::placeholder': {
                color: colors.extra.grey2,
                opacity: 0.7,
              },
              ...inputStyle?.['& .MuiOutlinedInput-root']?.['& input'],
            },
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        InputProps={{
          startAdornment: leftIcon,
          endAdornment: rightIcon,
        }}
      /> */}
    </Box>
  )
}

export default CustomTextInput