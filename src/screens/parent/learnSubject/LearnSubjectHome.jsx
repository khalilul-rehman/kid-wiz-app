import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import { MainContainer } from '../../../components'

const LearnSubjectHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box sx={{ height:"100%", width:"100%" }}>
      <MainContainer>

        <Box>
          <Box> <Typography sx={{ fontSize:"13.5px", color:colors.grey[900] }}>!!!!!!</Typography> </Box>
          <Box> <Typography>!!!!!!</Typography> </Box>
          <Box> <Typography>!!!!!!</Typography> </Box>
        </Box>
        
      </MainContainer>
    </Box>
  )
}

export default LearnSubjectHome
