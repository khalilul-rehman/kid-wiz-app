import React from 'react';
import { Box, Grid, Typography, useTheme, alpha } from '@mui/material';

import {
  CustomButton,
  CustomDropDown,
  CustomModal,
  CustomTextInput,
} from '../../../components';

import { SaveIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

import { Subjects } from './data';

const QuizManagementModal = ({
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => {},
  currentSelectedQuiz = null,
  setCurrentSelectedQuiz = () => {},
  offset = {
    top: 24,
    left: 48,
    right: 48,
  },
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [quizTitle, setQuizTitle] = React.useState(
    currentSelectedQuiz?.title || ''
  );

  const [prompt, setPrompt] = React.useState(currentSelectedQuiz?.prompt || '');

  const [tierDropDownOpen, setTierDropDownOpen] = React.useState(false);
  const [tier, setTier] = React.useState({
    label: currentSelectedQuiz?.tier || '',
    value: currentSelectedQuiz?.tier.toLowerCase() || '',
  });

  const [subjectDropDownOpen, setSubjectDropDownOpen] = React.useState(false);
  const [subject, setSubject] = React.useState({
    label: currentSelectedQuiz?.subject.label || '',
    value: currentSelectedQuiz?.subject.value || '',
  });

  return (
    <CustomModal
      showBackdrop={true}
      title={currentSelectedQuiz ? 'Edit Quiz' : 'New Quiz'}
      onClose={() => setIsModalOpen({ isOpen: false, index: -1 })}
      offset={{
        top: offset.top,
        left: offset.left,
        right: offset.right,
      }}
      containerStyle={{
        maxWidth: $({ size: 1240 }),
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 20 }),
      }}
      wrapperStyle={{
        left: '50%',
        transform: 'translateX(-50%)',
        width: $({ size: 1240 }),
      }}>
      {(tierDropDownOpen || subjectDropDownOpen) && (
        <Box
          onClick={() => {
            setTierDropDownOpen(false);
            setSubjectDropDownOpen(false);
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
      )}

      <Grid
        container
        rowGap={$({ size: 16 })}
        columnSpacing={$({ size: 48 })}>
        <Grid
          item
          xs={12}
          md={12}>
          <CustomTextInput
            label='Quiz Title'
            placeholder='Quiz title'
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}>
          <CustomDropDown
            value={tier?.label || ''}
            placeholder='Choose a tier'
            label='Tier'
            dropDownOpen={tierDropDownOpen}
            setDropDownOpen={setTierDropDownOpen}
            data={[
              { label: 'Basic', value: 'basic' },
              { label: 'Premium', value: 'premium' },
              { label: 'Pro', value: 'pro' },
            ].map((item) => {
              return {
                onClick: () => {
                  setTier(item);
                },
                component: (
                  <Typography
                    sx={{
                      fontSize: $({ size: 18 }),
                      fontWeight: tier.value === item.value ? '600' : '400',
                      color: colors.extra.grey1,
                      lineHeight: $({ size: 30 }),
                    }}>
                    {item.label}
                  </Typography>
                ),
              };
            })}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}>
          <CustomDropDown
            value={subject?.label || ''}
            placeholder='Choose a Subject'
            label='Subject'
            dropDownOpen={subjectDropDownOpen}
            setDropDownOpen={setSubjectDropDownOpen}
            data={Subjects.map((item) => {
              return {
                onClick: () => {
                  setSubject(item);
                },
                component: (
                  <Typography
                    sx={{
                      fontSize: $({ size: 18 }),
                      fontWeight: subject.value === item.value ? '600' : '400',
                      color: colors.extra.grey1,
                      lineHeight: $({ size: 30 }),
                    }}>
                    {item.label}
                  </Typography>
                ),
              };
            })}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}>
          <CustomTextInput
            label='Prompts'
            placeholder='Write the prompt that generates this quiz'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            multiline={true}
            containerStyle={{
              width: '100%',
              height: $({ size: 240 }),
            }}
            inputContainerStyle={{
              height: `calc(100% - ${$({ size: 40, numeric: true })}px)`,
            }}
            inputStyle={{
              height: `calc(100% - ${$({ size: 8, numeric: true })}px)`,
              overflowY: 'scroll',
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: $({ size: 24 }),
          marginTop: $({ size: 20 }),
        }}>
        <CustomButton
          label='Cancel'
          isSecondary
          sx={{
            maxWidth: $({ size: 160 }),
            boxShadow: `0 0 ${$({ size: 4 })} 0 ${alpha(
              colors.solids.black,
              0.25
            )}`,
          }}
          onClick={() => {
            setIsModalOpen({ isOpen: false, index: -1 });
          }}
        />
        <CustomButton
          label='Save'
          sx={{
            maxWidth: $({ size: 160 }),
            boxShadow: `0 0 ${$({ size: 4 })} 0 ${alpha(
              colors.solids.black,
              0.25
            )}`,
          }}
          rightIcon={<SaveIcon size={$({ size: 24, numeric: true })} />}
          onClick={() => {}}
        />
      </Box>
    </CustomModal>
  );
};

export default QuizManagementModal;
