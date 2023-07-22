import * as React from 'react'
import { Box, Typography, Select, MenuItem } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'

const CustomDropDown = ({
  placeholder = 'Placeholder',
  label = '',
  value = '',
  data = [],
  onChange = () => { },
  inputStyle = {},
  containerStyle = {},
  labelStyle = {},
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{ ...containerStyle }}>
      <Typography sx={{
        fontSize: '16px',
        fontWeight: '500',
        color: colors.solids.black,
        lineHeight: '30px',
        paddingBottom: '4px',
        ...labelStyle
      }}>{label}</Typography>

      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        sx={{
          '& .MuiSelect-select': { padding: '0px', margin: '0px' },
          width: '100%',
          fontSize: '16px',
          fontWeight: '400',
          color: colors.grey[500],
          background: colors.grey[900],
          boxShadow: `inset 0px 0px 3px ${alpha(colors.solids.black, 0.30)}`,
          padding: '14px 24px',
          borderRadius: '16px',
          '& fieldset': { border: 'none' },
          height: 'max-content',
          '& .MuiSvgIcon-root': {
            color: colors.grey[500],
            width: '30px',
            height: '30px',
            marginTop: '-4px',
          },
        }}>
        <MenuItem disabled value='' sx={{
          color: colors.grey[500],
          fontSize: '13px',
          lineHeight: '30px',
          fontWeight: '400',
          '&:hover': { background: 'none', }
        }}>{placeholder}</MenuItem>
        {
          data.map((item, index) => (
            <MenuItem key={index} value={item.value}>{item.title}</MenuItem>
          ))
        }
      </Select>
    </Box>
  )
}

export default CustomDropDown;