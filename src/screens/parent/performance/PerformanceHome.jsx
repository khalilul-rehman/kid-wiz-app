import React from 'react'
import { Box, Grid, Typography, alpha, useTheme } from '@mui/material'

import {
  DashboardContainer,
  CustomButton,
  CustomModal,
  CustomTextInput,
  CustomDropDown,
  CustomFileUploader,
  CustomSubjectFoucsSlider
} from '../../../components'

import { tokens } from '../../../theme'
import { $ } from '../../../utils'
import { Pie } from '@nivo/pie'
import { SaveIcon } from '../../../icons'

const PerformanceHome = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [open, setOpen] = React.useState(false)

  const [fullname, setFullname] = React.useState('')
  const [age, setAge] = React.useState('')
  const [profilePicture, setProfilePicture] = React.useState(null)
  const [gender, setGender] = React.useState('')
  const [difficulty, setDifficulty] = React.useState('')

  const [genderDropDownOpen, setGenderDropDownOpen] = React.useState(false)
  const [difficultyDropDownOpen, setDifficultyDropDownOpen] = React.useState(false)

  const [subjectFocusGraphData, setSubjectFocusGraphData] = React.useState([
    { id: '1', label: 'Science, biology, & Environment', value: 30, color: colors.subjectsFocus[100] },
    { id: '2', label: 'Social Study & Languages', value: 25, color: colors.subjectsFocus[200] },
    { id: '3', label: 'English & Coding', value: 15, color: colors.subjectsFocus[300] },
    { id: '4', label: 'Logic, Life Skills, Emotions, & Innovation', value: 15, color: colors.subjectsFocus[400] },
    { id: '5', label: 'Math, Money, & Music', value: 15, color: colors.subjectsFocus[500] },
  ])

  return (
    <DashboardContainer containerStyle={{ position: 'relative' }}>
      {
        open &&
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: $({ size: 12 }),
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />
      }

      <CustomButton
        label="Open Modal"
        onClick={() => setOpen(!open)}
      />


    </DashboardContainer>
  )
}

export default PerformanceHome