import React from 'react';
import { Box, Grid, Typography, useTheme, alpha } from '@mui/material';

import {
  CustomButton,
  CustomCheckBox,
  CustomLabel,
  CustomModal,
  CustomTextInput,
} from '../../../components';

import { SaveIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const RolePlayingSubTopicManagementModal = ({
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => {},
  currentSelectedRolePlayingSubTopic = null,
  setCurrentSelectedRolePlayingSubTopic = () => {},
  setIsRolePlayingTopicModalOpen = () => {},
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

  const [rolePlayingSubTopicTitle, setRolePlayingSubTopicTitle] =
    React.useState(
      currentSelectedRolePlayingSubTopic
        ? currentSelectedRolePlayingSubTopic.title
        : ''
    );

  const [rolePlayingSubTopicDescription, setRolePlayingSubTopicDescription] =
    React.useState(
      currentSelectedRolePlayingSubTopic
        ? currentSelectedRolePlayingSubTopic.description
        : ''
    );

  const [overrideDefaultPrompt, setOverrideDefaultPrompt] =
    React.useState(false);

  const [prompt, setPrompt] = React.useState(
    currentSelectedRolePlayingSubTopic
      ? currentSelectedRolePlayingSubTopic.prompt
      : ''
  );

  return (
    <CustomModal
      showBackdrop={true}
      title={
        currentSelectedRolePlayingSubTopic
          ? 'Edit Roleplaying Sub-Subject'
          : 'New Roleplaying Sub-Subject'
      }
      onClose={() => {
        setIsModalOpen({ isOpen: false, index: -1 });
        setIsRolePlayingTopicModalOpen({ isOpen: true, index: -1 });
        setCurrentSelectedRolePlayingSubTopic(null);
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
            value={rolePlayingSubTopicTitle}
            onChange={(e) => setRolePlayingSubTopicTitle(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}>
          <CustomTextInput
            label='Description'
            placeholder='Short description'
            value={rolePlayingSubTopicDescription}
            onChange={(e) => setRolePlayingSubTopicDescription(e.target.value)}
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: $({ size: 24 }),
        }}>
        <CustomButton
          label='Back'
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
            setIsRolePlayingTopicModalOpen({ isOpen: true, index: -1 });
            setCurrentSelectedRolePlayingSubTopic(null);
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
            setRolePlayingSubTopics(
              rolePlayingSubTopics.map((subSubject) => {
                if (subSubject.id === currentSelectedRolePlayingSubTopic.id) {
                  return {
                    ...subSubject,
                    title: rolePlayingSubTopicTitle,
                    description: rolePlayingSubTopicDescription,
                    prompt: prompt,
                  };
                }
                return subSubject;
              })
            );
            setIsModalOpen({ isOpen: false, index: -1 });
            setIsRolePlayingTopicModalOpen({ isOpen: true, index: -1 });
            setCurrentSelectedRolePlayingSubTopic(null);
          }}
        />
      </Box>
    </CustomModal>
  );
};

export default RolePlayingSubTopicManagementModal;
