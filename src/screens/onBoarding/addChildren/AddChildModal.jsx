import React from 'react'
import { Box, Grid, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Pie } from '@nivo/pie'

import {
  CustomButton,
  CustomDropDown,
  CustomFileUploader,
  CustomModal,
  CustomSubjectFoucsSlider,
  CustomTextInput,
} from '../../../components'

import {
  SaveIcon,
} from '../../../icons'

import { tokens } from '../../../theme'
import { $ } from '../../../utils'

const AddChildModal = ({
  currentChildData = {},
  childrenData = [],
  setChildrenData = () => { },
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => { },
  offset = {}
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [fullname, setFullname] = React.useState(currentChildData.fullname || '')
  const [age, setAge] = React.useState(currentChildData.age || '')
  const [profilePicture, setProfilePicture] = React.useState(currentChildData.profilePicture || null)
  const [gender, setGender] = React.useState(currentChildData.gender || '')
  const [difficulty, setDifficulty] = React.useState(currentChildData.difficulty || '')

  const [genderDropDownOpen, setGenderDropDownOpen] = React.useState(false)
  const [difficultyDropDownOpen, setDifficultyDropDownOpen] = React.useState(false)

  const [subjectFocusGraphData, setSubjectFocusGraphData] = React.useState(currentChildData.subjectFocusGraphData || [
    {
      id: '1',
      label: 'Science, biology, & Environment',
      color: colors.subjectsFocus[100],
      value: Math.floor(Math.random() * 100)
    },
    {
      id: '2',
      label: 'Social Study & Languages',
      color: colors.subjectsFocus[200],
      value: Math.floor(Math.random() * 100)
    },
    {
      id: '3',
      label: 'English & Coding',
      color: colors.subjectsFocus[300],
      value: Math.floor(Math.random() * 100)
    },
    {
      id: '4',
      label: 'Logic, Life Skills, Emotions, & Innovation',
      color: colors.subjectsFocus[400],
      value: Math.floor(Math.random() * 100)
    },
    {
      id: '5',
      label: 'Math, Money, & Music',
      color: colors.subjectsFocus[500],
      value: Math.floor(Math.random() * 100)
    },
  ])

  const [errors, setErrors] = React.useState({
    fullname: '',
    age: '',
    profilePicture: '',
    gender: '',
    difficulty: '',
  })

  const Validate = ({
    fullname,
    age,
    profilePicture,
    gender,
    difficulty,
  }) => {
    const _errors = { ...errors }

    if (!fullname) _errors.fullname = 'Required!'
    else if (fullname.length < 3) _errors.fullname = 'Minimum 3 characters!'
    else if (fullname.length > 50) _errors.fullname = 'Maximum 50 characters!'
    else _errors.fullname = ''

    if (!age) _errors.age = 'Required!'
    else if (isNaN(age)) _errors.age = 'Must be a number!'
    else if (age < 1 || age > 100) _errors.age = 'Must be between 1 and 25!'
    else _errors.age = ''

    if (!profilePicture) _errors.profilePicture = 'Required!'
    else if (profilePicture?.file?.size > (1024 * 1024 * 2)) _errors.profilePicture = 'Maximum file size is 2MB!'
    else _errors.profilePicture = ''

    if (!gender) _errors.gender = 'Required!'
    else _errors.gender = ''

    if (!difficulty) _errors.difficulty = 'Required!'
    else _errors.difficulty = ''

    setErrors(_errors)

    for (const key in _errors) if (_errors[key]) return false
    return true
  }

  return (
    <CustomModal
      showBackdrop={true}
      title='New Child'
      onClose={() => setIsModalOpen({ isOpen: false, index: -1 })}
      offset={offset}
      containerStyle={{
        maxWidth: $({ size: 1040 }),
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 20 }),
      }}
      wrapperStyle={{
        left: '50%',
        transform: 'translateX(-50%)',
        width: $({ size: 1040 }),
      }}>
      {
        (genderDropDownOpen || difficultyDropDownOpen) &&
        <Box
          onClick={() => {
            setGenderDropDownOpen(false)
            setDifficultyDropDownOpen(false)
          }}
          sx={{
            background: alpha(colors.extra.grey1, 0.4),
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: $({ size: 20 }),
            borderRadius: $({ size: 12 }),
            zIndex: 80,
          }}
        />
      }

      <Grid container rowGap={$({ size: 16 })} columnSpacing={$({ size: 32 })}>
        <Grid item xs={12} md={6}>
          <CustomTextInput
            label='Full name'
            placeholder='e.g. John Doe'
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            error={errors.fullname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextInput
            label='Age'
            placeholder='e.g. 8'
            value={age}
            onChange={e => setAge(e.target.value)}
            error={errors.age}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomFileUploader
            label='Profile Picture'
            placeholder={profilePicture?.file ? profilePicture?.file?.name : 'Upload picture'}
            onClick={(file) => setProfilePicture(file)}
            error={errors.profilePicture}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomDropDown
            value={gender?.label || ''}
            placeholder='Choose gender'
            label='Gender'
            dropDownOpen={genderDropDownOpen}
            setDropDownOpen={setGenderDropDownOpen}
            data={
              [
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Oher', value: 'other' },
              ].map(item => {
                return {
                  onClick: () => { setGender(item) },
                  component: <Typography sx={{
                    fontSize: $({ size: 18 }),
                    fontWeight: gender.value === item.value ? '600' : '400',
                    color: colors.extra.grey1,
                    lineHeight: $({ size: 30 }),
                  }}>{item.label}</Typography>
                }
              })
            }
            error={errors.gender}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomDropDown
            value={difficulty?.label || ''}
            placeholder='Choose difficulty'
            label='Difficulty'
            dropDownOpen={difficultyDropDownOpen}
            setDropDownOpen={setDifficultyDropDownOpen}
            data={
              [
                { label: 'Easy', value: 'easy' },
                { label: 'Medium', value: 'medium' },
                { label: 'Hard', value: 'hard' },
                { label: 'Very Hard', value: 'very-hard' }
              ].map(item => {
                return {
                  onClick: () => { setDifficulty(item) },
                  component: <Typography sx={{
                    fontSize: $({ size: 18 }),
                    fontWeight: difficulty?.value === item.value ? '600' : '400',
                    color: colors.extra.grey1,
                    lineHeight: $({ size: 30 }),
                  }}>{item.label}</Typography>
                }
              })
            }
            error={errors.difficulty}
          />
        </Grid>
      </Grid>

      <Box>
        <Typography sx={{ fontSize: $({ size: 18 }), fontWeight: '500', lineHeight: $({ size: 30 }), color: colors.solids.black, }}>
          Focus
        </Typography>

        <Typography sx={{ fontSize: $({ size: 13.5 }), fontWeight: '400', lineHeight: $({ size: 25 }), color: colors.solids.black, }}>
          The more the level of focus of a category is, the more we emphasize on it in your child’s learning journey. Choose wisely!
        </Typography>
      </Box>

      <Grid container rowGap={$({ size: 20 })} columnSpacing={$({ size: 20 })} sx={{ pr: $({ size: 20 }) }}>
        <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ position: 'relative', height: $({ size: 280 }), width: $({ size: 280 }) }}>
            <Box sx={{ filter: `drop-shadow(0 0 ${$({ size: 5 })} ${alpha(colors.solids.black, 0.1)})` }}>
              <Pie
                data={subjectFocusGraphData}
                innerRadius={0.65}
                padAngle={0}
                legends={[]}
                enableArcLabels={false}
                enableArcLinkLabels={false}
                isInteractive={false}
                width={$({ size: 280, numeric: true })}
                height={$({ size: 280, numeric: true })}
                animate={false}
                fit={true}
                colors={(d) => d.data.color}
              />
            </Box>

            <Typography sx={{
              fontWeight: '700',
              fontSize: $({ size: 18 }),
              color: colors.extra.grey2,
              position: 'absolute',
              lineHeight: $({ size: 30 }),
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: $({ size: 150 }),
              textAlign: 'center',
            }}>Subjects Focus</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={8} >
          <Grid container rowGap={$({ size: 16 })} columnSpacing={$({ size: 32 })}>
            {
              subjectFocusGraphData.map((item, index) => {
                return (
                  <Grid item xs={12} lg={6} key={index}>
                    <CustomSubjectFoucsSlider
                      label={item.label}
                      color={item.color}
                      value={item.value}
                      onChange={(e) => {
                        const newData = [...subjectFocusGraphData]
                        newData[index].value = e.target.value
                        setSubjectFocusGraphData(newData)
                      }}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: $({ size: 24 }) }}>
        <CustomButton
          label='Cancel'
          isSecondary
          sx={{
            maxWidth: $({ size: 160 }),
            boxShadow: `0 0 ${$({ size: 4 })} 0 ${alpha(colors.solids.black, 0.25)}`,
          }}
          onClick={() => { setIsModalOpen({ isOpen: false, index: -1 }) }}
        />
        <CustomButton
          label='Save'
          sx={{
            maxWidth: $({ size: 160 }),
            boxShadow: `0 0 ${$({ size: 4 })} 0 ${alpha(colors.solids.black, 0.25)}`,
          }}
          rightIcon={<SaveIcon size={$({ size: 24, numeric: true })} />}
          onClick={() => {
            const isValid = Validate({
              fullname,
              age,
              profilePicture,
              gender,
              difficulty,
            })

            if (!isValid) return

            setIsModalOpen({ isOpen: false, index: -1 })

            const newData = [...childrenData]
            newData[isModalOpen.index] = {
              hasInfo: true,
              disabled: false,
              fullname: fullname,
              age: age,
              profilePicture: profilePicture,
              gender: gender,
              difficulty: difficulty,
              subjectFocusGraphData: subjectFocusGraphData,
            }

            setChildrenData(newData)

            setFullname('')
            setAge('')
            setProfilePicture(null)
            setGender('')
            setDifficulty('')
            setSubjectFocusGraphData([
              {
                id: '1',
                label: 'Science, biology, & Environment',
                color: colors.subjectsFocus[100],
                value: Math.floor(Math.random() * 100)
              },
              {
                id: '2',
                label: 'Social Study & Languages',
                color: colors.subjectsFocus[200],
                value: Math.floor(Math.random() * 100)
              },
              {
                id: '3',
                label: 'English & Coding',
                color: colors.subjectsFocus[300],
                value: Math.floor(Math.random() * 100)
              },
              {
                id: '4',
                label: 'Logic, Life Skills, Emotions, & Innovation',
                color: colors.subjectsFocus[400],
                value: Math.floor(Math.random() * 100)
              },
              {
                id: '5',
                label: 'Math, Money, & Music',
                color: colors.subjectsFocus[500],
                value: Math.floor(Math.random() * 100)
              },
            ])
          }}
        />
      </Box>
    </CustomModal>
  )
}

export default AddChildModal