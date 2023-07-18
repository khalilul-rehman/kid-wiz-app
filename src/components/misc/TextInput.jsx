import React from 'react'
import { TextField, Box, Typography, } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { tokens } from '../../theme'

const TextInput = ({
  value = '',
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  onChange = () => { },
  topSpace = null,
  bottomSpace = null,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{ marginTop: topSpace || 'none', marginBottom: bottomSpace || 'none' }}>
      <Typography sx={{
        fontSize: '16px',
        fontWeight: '400',
        color: colors.solids.black,
        lineHeight: '30px',
        paddingBottom: '4px',
      }}>{label}</Typography>

      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
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
              }
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

export default TextInput