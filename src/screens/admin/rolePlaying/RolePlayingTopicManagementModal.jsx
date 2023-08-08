import React from 'react';
import { Box, Grid, Typography, useTheme, alpha } from '@mui/material';

import {
  CustomButton,
  CustomCheckBox,
  CustomDropDown,
  CustomLabel,
  CustomModal,
  CustomTextInput,
} from '../../../components';

import { AddIcon, EditIcon, SaveIcon, TrashIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const RolePlayingTopicManagementModal = ({
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => {},
  currentSelectedRolePlayingTopic = null,
  setCurrentSelectedRolePlayingTopic = () => {},
  setIsSubRolePlayingSubTopicModalOpen = () => {},
  setCurrentSelectedRolePlayingSubTopic = () => {},
  setRolePlayingTopicsData = () => {},
  offset = {
    top: 24,
    left: 48,
    right: 48,
  },
  rolePlayingSubTopics = [],
  setRolePlayingSubTopics = () => {},
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rolePlayingTopicTitle, setRolePlayingTopicTitle] = React.useState(
    currentSelectedRolePlayingTopic ? currentSelectedRolePlayingTopic.title : ''
  );

  const [rolePlayingTopicDescription, setRolePlayingTopicDescription] =
    React.useState(
      currentSelectedRolePlayingTopic
        ? currentSelectedRolePlayingTopic.description
        : ''
    );

  const [tierDropDownOpen, setTierDropDownOpen] = React.useState(false);
  const [tier, setTier] = React.useState({
    label: currentSelectedRolePlayingTopic?.tier || '',
    value: currentSelectedRolePlayingTopic?.tier.toLowerCase() || '',
  });

  const [overrideDefaultPrompt, setOverrideDefaultPrompt] =
    React.useState(false);

  const [prompt, setPrompt] = React.useState(
    currentSelectedRolePlayingTopic
      ? currentSelectedRolePlayingTopic.prompt
      : ''
  );

  const [rolePlayingSubTopic, setRolePlayingSubTopic] = React.useState('');

  return (
    <CustomModal
      showBackdrop={true}
      title={
        currentSelectedRolePlayingTopic
          ? 'Edit Roleplaying Topic'
          : 'New Roleplaying Topic'
      }
      onClose={() => {
        setIsModalOpen({ isOpen: false, index: -1 });
        setCurrentSelectedRolePlayingTopic(null);
        setCurrentSelectedRolePlayingSubTopic(null);
        setRolePlayingSubTopics([]);
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
      {tierDropDownOpen && (
        <Box
          onClick={() => {
            setTierDropDownOpen(false);
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
          md={6}>
          <CustomTextInput
            label='Roleplaying Topic Title'
            placeholder='Topic title'
            value={rolePlayingTopicTitle}
            onChange={(e) => setRolePlayingTopicTitle(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}>
          <CustomTextInput
            label='Description'
            placeholder='Description'
            value={rolePlayingTopicDescription}
            onChange={(e) => setRolePlayingTopicDescription(e.target.value)}
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
          md={6}></Grid>
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
        <CustomLabel label='Sub-Topic' />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: $({ size: 16 }),
            maxWidth: $({ size: 500 }),
          }}>
          <CustomTextInput
            label={null}
            placeholder='Enter title of new sub-topic to add...'
            value={rolePlayingSubTopic}
            onChange={(e) => setRolePlayingSubTopic(e.target.value)}
            containerStyle={{
              width: '100%',
            }}
            inputContainerStyle={{
              padding: `${$({ size: 6 })} ${$({ size: 20 })}`,
            }}
          />

          <Box
            onClick={() => {
              if (!rolePlayingSubTopic) return;
              setRolePlayingSubTopics([
                ...rolePlayingSubTopics,
                {
                  id: `sub-role-playing-topic-${
                    rolePlayingSubTopics.length + 1
                  }`,
                  title: rolePlayingSubTopic,
                  description: '',
                  prompt: '',
                },
              ]);
              setRolePlayingSubTopic('');
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
          {rolePlayingSubTopics.map((rolePlayingSubTopic, index) => {
            return (
              <Box
                key={`sub-role-playing-topic-${index + 1}`}
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
                  {rolePlayingSubTopic.title}
                </Typography>

                <Box sx={{ display: 'flex', gap: $({ size: 16 }) }}>
                  <Box
                    onClick={() => {
                      setCurrentSelectedRolePlayingTopic({
                        ...currentSelectedRolePlayingTopic,
                        title: rolePlayingTopicTitle,
                        description: rolePlayingTopicDescription,
                        tier: tier.label,
                        prompt: prompt,
                        subRolePlayingTopics: rolePlayingSubTopics,
                      });
                      setIsModalOpen({ isOpen: false, index: -1 });

                      setCurrentSelectedRolePlayingSubTopic({
                        ...rolePlayingSubTopic,
                      });
                      setIsSubRolePlayingSubTopicModalOpen({
                        isOpen: true,
                        index: -1,
                      });
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
            setCurrentSelectedRolePlayingTopic(null);
            setCurrentSelectedRolePlayingSubTopic(null);
            setIsModalOpen({ isOpen: false, index: -1 });
            setRolePlayingSubTopics([]);
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
            setRolePlayingTopicsData((prev) => {
              return prev.map((subject) => {
                if (subject.id === currentSelectedRolePlayingTopic.id) {
                  return {
                    ...subject,
                    title: rolePlayingTopicTitle,
                    description: rolePlayingTopicDescription,
                    tier: tier.label,
                    prompt: prompt,
                    subRolePlayingTopics: rolePlayingSubTopics,
                  };
                }
                return subject;
              });
            });
            setCurrentSelectedRolePlayingTopic(null);
            setCurrentSelectedRolePlayingSubTopic(null);
            setRolePlayingSubTopics([]);
            setIsModalOpen({ isOpen: false, index: -1 });
          }}
        />
      </Box>
    </CustomModal>
  );
};

export default RolePlayingTopicManagementModal;
