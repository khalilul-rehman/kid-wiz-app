import React from 'react'
import { TextField, Box, Typography, } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { tokens } from '../../theme'

const CustomTextInput = ({
  value = '',
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  onChange = () => { },
  containerStyle = {},
  labelStyle = {},
  inputStyle = {},
  disabled = false,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{ ...containerStyle }}>
      {
        label &&
        <Typography sx={{
          fontSize: '16px',
          fontWeight: '500',
          color: colors.solids.black,
          lineHeight: '30px',
          paddingBottom: '4px',
          ...labelStyle
        }}>{label}</Typography>
      }

      <TextField
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
              fontSize: '16px',
              fontWeight: '400',
              color: colors.grey[500],
              lineHeight: '30px',
              background: colors.grey[900],
              boxShadow: `inset 0px 0px 3px ${alpha(colors.solids.black, 0.30)}`,
              padding: '14px 24px',
              borderRadius: '16px',
              '&::placeholder': {
                color: colors.grey[500],
                opacity: 1,
              },
              ...inputStyle?.['& .MuiOutlinedInput-root']?.['& input'],
            },
            '& fieldset': {
              border: 'none',
            },
          },
        }}
      />
    </Box>
  )
}

export default CustomTextInput