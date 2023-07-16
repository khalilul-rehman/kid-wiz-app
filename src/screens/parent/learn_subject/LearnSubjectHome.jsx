import { Box, Typography, useTheme } from '@mui/material'

const LearnSubjectHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box>
        <Typography>Learn Subject</Typography>
    </Box>
  )
}

export default LearnSubjectHome
