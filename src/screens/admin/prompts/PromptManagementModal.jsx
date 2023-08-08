import React from 'react';
import { Box, Grid, Typography, useTheme, alpha } from '@mui/material';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

import {
  CustomButton,
  CustomCheckBox,
  CustomDropDown,
  CustomModal,
  CustomTextInput,
} from '../../../components';

import {
  CrossIcon,
  ReorderThreeIcon,
  RightArrowIcon,
  SaveIcon,
} from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const SortablePromptItem = SortableElement((props) => {
  const { prompt, prompts, setPrompts, currentIndex, colors } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: $({ size: 12 }),
        width: '100%',
      }}>
      <Box
        sx={{
          background: colors.extra.grey5,
          padding: `${$({ size: 9 })} ${$({
            size: 14,
          })}`,
          borderRadius: $({ size: 12 }),
          overflow: 'hidden',
          width: '100%',
          userSelect: 'none',
        }}>
        <Typography
          sx={{
            fontSize: $({ size: 13.5 }),
            fontWeight: '400',
            color: colors.solids.black,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}>
          {prompt}
        </Typography>
      </Box>

      <Box sx={{ cursor: 'pointer' }}>
        <ReorderThreeIcon
          size={$({ size: 16, numeric: true })}
          color={colors.extra.grey3}
        />
      </Box>

      <Box
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          setPrompts([
            ...prompts.slice(0, currentIndex),
            ...prompts.slice(currentIndex + 1),
          ]);
        }}>
        <CrossIcon
          size={$({ size: 16, numeric: true })}
          color={colors.extra.grey3}
        />
      </Box>
    </Box>
  );
});

const SortablePromptContainer = SortableContainer(({ children, colors }) => {
  return (
    <Grid
      item
      xs={12}
      md={5.7}
      sx={{
        'mt': {
          xs: $({ size: 0 }),
          md: $({ size: 36 }),
        },
        'maxHeight': $({ size: 244 }),
        'overflowY': 'scroll',
        'pr': $({ size: 12 }),
        '&::-webkit-scrollbar': {
          width: $({ size: 8 }),
          borderRadius: $({ size: 8 }),
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: colors.extra.grey3,
          borderRadius: $({ size: 8 }),
        },
        'display': 'flex',
        'flexDirection': 'column',
        'gap': $({ size: 8 }),
      }}>
      {children}
    </Grid>
  );
});

const PromptManagementModal = ({
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => {},
  initialPrompt = 'foundational',
  currentSelectedPrompt = null,
  setCurrentSelectedPrompt = () => {},
  offset = {
    top: 24,
    left: 48,
    right: 48,
  },
  promptsData = [],
  setPromptsData = () => {},
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [promptType, setPromptType] = React.useState(
    initialPrompt || currentSelectedPrompt?.type || 'foundational'
  );

  const [promptTitle, setPromptTitle] = React.useState(
    currentSelectedPrompt?.title || ''
  );

  const [buttonLabel, setButtonLabel] = React.useState(
    currentSelectedPrompt?.buttonLabel || ''
  );

  const [buttonId, setButtonId] = React.useState(
    currentSelectedPrompt?.buttonId || ''
  );

  const [scoring, setScoring] = React.useState(
    currentSelectedPrompt?.scoring || false
  );

  const [prompts, setPrompts] = React.useState(
    currentSelectedPrompt?.prompts || [
      'Prompt example 1',
      'Prompt example 2',
      'Prompt example 3',
      'Prompt example 4',
      'Prompt example 5',
      'Prompt example 6',
    ]
  );

  const [prompt, setPrompt] = React.useState('');

  const [tier, setTier] = React.useState({
    label: currentSelectedPrompt?.tier || '',
    value: currentSelectedPrompt?.tier.toLowerCase() || '',
  });

  const [tierDropDownOpen, setTierDropDownOpen] = React.useState(false);

  return (
    <CustomModal
      showBackdrop={true}
      title={currentSelectedPrompt ? 'Edit Prompt' : 'New Prompt'}
      onClose={() => {
        setIsModalOpen({ isOpen: false, index: -1 });
        setCurrentSelectedPrompt(null);
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

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: $({ size: 20 }),
          userSelect: 'none',
        }}>
        {['Foundational', 'Buttons', 'Chat-Command'].map((item, index) => {
          return (
            <Box
              key={`prompt-type-${index}`}
              onClick={() => setPromptType(item.toLowerCase())}
              sx={{
                padding: `${$({ size: 14 })} ${$({ size: 20 })}`,
                borderRadius: $({ size: 12 }),
                backgroundColor:
                  promptType === item.toLowerCase()
                    ? colors.solids.mainButton
                    : 'transparent',
              }}>
              <Typography
                sx={{
                  color:
                    promptType === item.toLowerCase()
                      ? colors.solids.white
                      : colors.solids.black,
                  fontSize: $({ size: 18 }),
                  fontWeight: '500',
                }}>
                {item.split('-').join(' ')}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Grid
        container
        rowGap={$({ size: 16 })}
        columnSpacing={$({ size: 0 })}>
        <Grid
          item
          xs={12}
          md={5.7}>
          <CustomTextInput
            label='Prompt Title'
            placeholder='Prompt title'
            value={promptTitle}
            onChange={(e) => setPromptTitle(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={0.6}></Grid>
        {(promptType === 'buttons' || promptType === 'chat-command') && (
          <Grid
            item
            xs={12}
            md={5.7}>
            <CustomTextInput
              label='Button Label'
              placeholder='Title'
              value={buttonLabel}
              onChange={(e) => setButtonLabel(e.target.value)}
            />
          </Grid>
        )}
        {promptType === 'buttons' && (
          <>
            <Grid
              item
              xs={12}
              md={5.7}>
              <CustomTextInput
                label='Button ID'
                placeholder='e.g. 546'
                value={buttonId}
                onChange={(e) => setButtonId(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={0.6}></Grid>
          </>
        )}
        <Grid
          item
          xs={12}
          md={5.7}>
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
        {promptType === 'chat-command' && (
          <>
            <Grid
              item
              xs={12}
              md={0.6}></Grid>
            <Grid
              item
              xs={12}
              md={5.7}></Grid>
          </>
        )}
        <Grid
          item
          xs={12}
          md={5.7}>
          <CustomTextInput
            label='Prompts'
            placeholder='Separate prompts by a comma e.g. Prompt example 1, prompt example 2, prompt example 3, ...'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            multiline={true}
            containerStyle={{
              width: '100%',
              height: $({ size: 280 }),
            }}
            inputContainerStyle={{
              height: $({ size: 240 }),
            }}
            inputStyle={{
              height: $({ size: 220 }),
              overflowY: 'scroll',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={0.6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            onClick={() => {
              if (prompt) {
                setPrompts([prompt, ...prompts]);
                setPrompt('');
              }
            }}
            sx={{
              display: 'flex',
              width: $({ size: 64 }),
              alignItems: 'center',
              justifyContent: 'center',
              mt: $({ size: 32 }),
              cursor: 'pointer',
            }}>
            <RightArrowIcon
              color={colors.solids.mainButton}
              size={$({ size: 32, numeric: true })}
            />
          </Box>
        </Grid>
        <SortablePromptContainer
          colors={colors}
          // distance={1}
          pressDelay={120}
          onSortEnd={({ oldIndex, newIndex }) => {
            setPrompts(arrayMoveImmutable(prompts, oldIndex, newIndex));
          }}>
          {prompts.map((prompt, index) => {
            return (
              <SortablePromptItem
                key={`prompt-${index}`}
                index={index}
                currentIndex={index}
                prompts={prompts}
                setPrompts={setPrompts}
                prompt={prompt}
                colors={colors}
              />
            );
          })}
        </SortablePromptContainer>
      </Grid>

      {promptType === 'buttons' && (
        <Box
          onClick={() => setScoring(!scoring)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: $({ size: 12 }),
            cursor: 'pointer',
            userSelect: 'none',
          }}>
          <CustomCheckBox
            checkedIconSize={$({ size: 22, numeric: true })}
            uncheckedIconSize={$({ size: 22, numeric: true })}
            isChecked={scoring}
          />
          <Typography
            sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '400',
              color: colors.solids.black,
            }}>
            Activate Scoring
          </Typography>
        </Box>
      )}

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
            setIsModalOpen({ isOpen: false, index: -1 });
            setCurrentSelectedPrompt(null);
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
            setPromptsData([
              ...(currentSelectedPrompt?.id
                ? []
                : [
                    {
                      id: `${promptType}-${promptsData.length + 1}`,
                      title: promptTitle,
                      tier: tier.label,
                      type: promptType,
                      buttonLabel: buttonLabel,
                      buttonId: buttonId,
                      scoring: scoring,
                      prompts: prompts,
                    },
                  ]),
              ...promptsData.map((prompt) => {
                if (prompt?.id === currentSelectedPrompt?.id) {
                  return {
                    ...prompt,
                    title: promptTitle,
                    tier: tier.label,
                    type: promptType,
                    buttonLabel: buttonLabel,
                    buttonId: buttonId,
                    scoring: scoring,
                    prompts: prompts,
                  };
                }
                return prompt;
              }),
            ]);

            setIsModalOpen({ isOpen: false, index: -1 });
            setCurrentSelectedPrompt(null);
          }}
        />
      </Box>
    </CustomModal>
  );
};

export default PromptManagementModal;
