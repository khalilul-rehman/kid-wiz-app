import React from 'react';
import { Box, Grid, Typography, useTheme, alpha } from '@mui/material';

import {
  CustomButton,
  CustomCheckBox,
  CustomDropDown,
  CustomFileUploader,
  CustomLabel,
  CustomModal,
  CustomTextInput,
} from '../../../components';

import { AddIcon, EditIcon, SaveIcon, TrashIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

import { Colors } from './data';

const SubjectManagementModal = ({
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => {},
  currentSelectedSubject = null,
  setCurrentSelectedSubject = () => {},
  setIsSubSubjectModalOpen = () => {},
  setCurrentSelectedSubSubject = () => {},
  setSubjectsData = () => {},
  offset = {
    top: 24,
    left: 48,
    right: 48,
  },
  subSubjects = [],
  setSubSubjects = () => {},
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [subjectTitle, setSubjectTitle] = React.useState(
    currentSelectedSubject ? currentSelectedSubject.title : ''
  );

  const [subjectDescription, setSubjectDescription] = React.useState(
    currentSelectedSubject ? currentSelectedSubject.description : ''
  );

  const [minAge, setMinAge] = React.useState(
    currentSelectedSubject ? currentSelectedSubject.minAge : ''
  );

  const [maxAge, setMaxAge] = React.useState(
    currentSelectedSubject ? currentSelectedSubject.maxAge : ''
  );

  const [tierDropDownOpen, setTierDropDownOpen] = React.useState(false);
  const [tier, setTier] = React.useState({
    label: currentSelectedSubject?.tier || '',
    value: currentSelectedSubject?.tier.toLowerCase() || '',
  });

  const [subjectIcon, setSubjectIcon] = React.useState(null);

  const [colorDropDownOpen, setColorDropDownOpen] = React.useState(false);
  const [color, setColor] = React.useState({
    label: currentSelectedSubject?.color?.label || '',
    value: currentSelectedSubject?.color?.value || '',
  });

  const [overrideDefaultPrompt, setOverrideDefaultPrompt] =
    React.useState(false);

  const [prompt, setPrompt] = React.useState(
    currentSelectedSubject ? currentSelectedSubject.prompt : ''
  );

  const [subSubject, setSubSubject] = React.useState('');
  // const [subSubjects, setSubSubjects] = React.useState(
  //   currentSelectedSubject ? currentSelectedSubject.subSubjects : []
  // );

  return (
    <CustomModal
      showBackdrop={true}
      title={currentSelectedSubject ? 'Edit Subject' : 'New Subject'}
      onClose={() => {
        setIsModalOpen({ isOpen: false, index: -1 });
        setCurrentSelectedSubject(null);
        setCurrentSelectedSubSubject(null);
        setSubSubjects([]);
      }}
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
      {(tierDropDownOpen || colorDropDownOpen) && (
        <Box
          onClick={() => {
            setTierDropDownOpen(false);
            setColorDropDownOpen(false);
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
        columnSpacing={$({ size: 16 })}>
        <Grid
          item
          xs={12}
          md={4}>
          <CustomTextInput
            label='Subject Title'
            placeholder='Subject title'
            value={subjectTitle}
            onChange={(e) => setSubjectTitle(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}>
          <CustomTextInput
            label='Description'
            placeholder='Short description'
            value={subjectDescription}
            onChange={(e) => setSubjectDescription(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={1.5}>
          <CustomTextInput
            label='Min Age'
            placeholder='e.g. 5'
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={1.5}>
          <CustomTextInput
            label='Max Age'
            placeholder='e.g. 10'
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}>
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
          md={4}>
          <CustomFileUploader
            label='Icon'
            placeholder={
              subjectIcon?.file ? subjectIcon?.file?.name : 'Upload an icon'
            }
            onClick={(file) => setSubjectIcon(file)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}>
          <CustomDropDown
            value={color?.label || ''}
            placeholder='Choose a color'
            label='Color'
            dropDownOpen={colorDropDownOpen}
            setDropDownOpen={setColorDropDownOpen}
            data={Colors.map((item) => {
              return {
                onClick: () => {
                  setColor(item);
                },
                component: (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: $({ size: 16 }),
                    }}>
                    <Box
                      sx={{
                        backgroundColor: item.value,
                        width: $({ size: 48 }),
                        height: $({ size: 24 }),
                        borderRadius: $({ size: 24 }),
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: $({ size: 18 }),
                        fontWeight: color.value === item.value ? '600' : '400',
                        color: colors.extra.grey1,
                        lineHeight: $({ size: 30 }),
                      }}>
                      {item.label}
                    </Typography>
                  </Box>
                ),
              };
            })}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: $({ size: 16 }),
            }}>
            <CustomLabel label='Prompt' />

            <Box
              onClick={() => setOverrideDefaultPrompt(!overrideDefaultPrompt)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: $({ size: 8 }),
                cursor: 'pointer',
                userSelect: 'none',
              }}>
              <CustomCheckBox
                isChecked={overrideDefaultPrompt}
                onChange={() =>
                  setOverrideDefaultPrompt(!overrideDefaultPrompt)
                }
                checkedIconSize={$({ size: 16, numeric: true })}
                uncheckedIconSize={$({ size: 16, numeric: true })}
              />
              <Typography
                sx={{
                  fontSize: $({ size: 16 }),
                  fontWeight: '400',
                  color: colors.extra.grey1,
                }}>
                Override default prompt (write own prompt)
              </Typography>
            </Box>
          </Box>
          <CustomTextInput
            label={null}
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, felis in eleifend tristique, nisi justo facilisis magna, quis fermentum risus ex vel nulla. Fusce tincidunt non massa ut hendrerit. Nunc bibendum urna a turpis facilisis, sit amet congue arcu volutpat.'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            multiline={true}
            containerStyle={{
              width: '100%',
              height: $({ size: 200 }),
            }}
            inputContainerStyle={{
              height: `100%`,
            }}
            inputStyle={{
              height: `calc(100% - ${$({ size: 8, numeric: true })}px)`,
              overflowY: 'scroll',
            }}
          />
        </Grid>
      </Grid>

      <Box>
        <CustomLabel label='Sub-Subjects' />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: $({ size: 16 }),
            maxWidth: $({ size: 500 }),
          }}>
          <CustomTextInput
            label={null}
            placeholder='Enter title of new sub-subject to add...'
            value={subSubject}
            onChange={(e) => setSubSubject(e.target.value)}
            containerStyle={{
              width: '100%',
            }}
            inputContainerStyle={{
              padding: `${$({ size: 6 })} ${$({ size: 20 })}`,
            }}
          />

          <Box
            onClick={() => {
              if (!subSubject) return;
              setSubSubjects([
                ...subSubjects,
                {
                  id: `sub-subject-${subSubjects.length + 1}`,
                  title: subSubject,
                  description: '',
                  prompt: '',
                },
              ]);
              setSubSubject('');
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
            <AddIcon
              color={colors.solids.mainButton}
              size={$({ size: 36, numeric: true })}
            />
          </Box>
        </Box>

        <Box
          sx={{
            'display': 'flex',
            'flexDirection': 'row',
            'gap': $({ size: 16 }),
            'marginTop': $({ size: 16 }),
            'overflowX': 'scroll',
            'paddingBottom': $({ size: 16 }),
            '&::-webkit-scrollbar': {
              height: $({ size: 8 }),
              borderRadius: $({ size: 8 }),
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: colors.extra.grey3,
              borderRadius: $({ size: 8 }),
            },
          }}>
          {subSubjects.map((subSubject, index) => {
            return (
              <Box
                key={`sub-subject-${index + 1}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: $({ size: 8 }),
                  alignItems: 'center',
                }}>
                <Typography
                  sx={{
                    fontSize: $({ size: 13.5 }),
                    fontWeight: '500',
                    width: 'max-content',
                  }}>
                  {subSubject.title}
                </Typography>

                <Box sx={{ display: 'flex', gap: $({ size: 16 }) }}>
                  <Box
                    onClick={() => {
                      setCurrentSelectedSubject({
                        ...currentSelectedSubject,
                        title: subjectTitle,
                        description: subjectDescription,
                        minAge: minAge,
                        maxAge: maxAge,
                        tier: tier.label,
                        color: {
                          label: color.label,
                          value: color.value,
                        },
                        prompt: prompt,
                        subSubjects: subSubjects,
                      });
                      setIsModalOpen({ isOpen: false, index: -1 });

                      setCurrentSelectedSubSubject({ ...subSubject });
                      setIsSubSubjectModalOpen({ isOpen: true, index: -1 });
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}>
                    <EditIcon
                      size={$({ size: 18, numeric: true })}
                      color={colors.extra.grey3}
                    />
                  </Box>

                  <Box
                    onClick={() => {}}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}>
                    <TrashIcon
                      size={$({ size: 18, numeric: true })}
                      color={colors.extra.grey3}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: $({ size: 24 }),
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
            setCurrentSelectedSubject(null);
            setCurrentSelectedSubSubject(null);
            setIsModalOpen({ isOpen: false, index: -1 });
            setSubSubjects([]);
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
          onClick={() => {
            setSubjectsData((prev) => {
              return prev.map((subject) => {
                if (subject.id === currentSelectedSubject.id) {
                  return {
                    ...subject,
                    title: subjectTitle,
                    description: subjectDescription,
                    minAge: minAge,
                    maxAge: maxAge,
                    tier: tier.label,
                    iconPath: subjectIcon?.src || subject.iconPath,
                    color: {
                      label: color.label,
                      value: color.value,
                    },
                    prompt: prompt,
                    subSubjects: subSubjects,
                  };
                }
                return subject;
              });
            });
            setCurrentSelectedSubject(null);
            setCurrentSelectedSubSubject(null);
            setSubSubjects([]);
            setIsModalOpen({ isOpen: false, index: -1 });
          }}
        />
      </Box>
    </CustomModal>
  );
};

export default SubjectManagementModal;
