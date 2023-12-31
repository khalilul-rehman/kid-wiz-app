import React from 'react';
import { Box, useTheme, Typography, Grid } from '@mui/material';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

import { DashboardContainer, CustomTextInput } from '../../../components';

import { CrossIcon, ReorderThreeIcon, RightArrowIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const SortableNotificationKeywordItem = SortableElement((props) => {
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

const SortableNotificationKeywordsContainer = SortableContainer(
  ({ children, colors }) => {
    return (
      <Grid
        item
        xs={12}
        md={6.7}
        sx={{
          'mt': {
            xs: $({ size: 0 }),
            md: $({ size: 36 }),
          },
          // 'maxHeight': $({ size: 244 }),
          'height': '100%',
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
  }
);

const KeywordsAlertHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [notificationKeywords, setNotificationKeywords] = React.useState([
    ...Array(20)
      .fill('Notification Keyword')
      .map((item, index) => {
        return `${item} ${index + 1}`;
      }),
  ]);

  const [notificationKeyword, setNotificationKeyword] = React.useState('');

  // TO CALCULATE TOP SECTION HEIGHT
  const topSectionRef = React.useRef(null);
  const [topSectionHeight, setTopSectionHeight] = React.useState(0);

  React.useEffect(() => {
    setTopSectionHeight(topSectionRef.current?.offsetHeight || 0);
  }, [topSectionRef.current?.offsetHeight]);

  return (
    <DashboardContainer
      wrapperStyle={{ position: 'relative' }}
      containerStyle={{
        pb: $({ size: 20 }),
        gap: {
          xs: $({ size: 16 }),
          md: $({ size: 20 }),
        },
      }}>
      <Box
        ref={topSectionRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: $({ size: 12 }),
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            alignItems: {
              xs: 'flex-start',
              sm: 'center',
            },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: {
              xs: $({ size: 24 }),
              sm: $({ size: 16 }),
            },
          }}>
          <Typography
            sx={{
              fontSize: $({ size: 31.98 }),
              fontWeight: '600',
              color: colors.extra.grey1,
            }}>
            Keywords Alert Notifications
          </Typography>

          <Typography
            sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '400',
              color: colors.solids.black,
            }}>
            If a keyword on the list is in the AI generated text, then you will
            receive a notification to alert you about it.
          </Typography>
        </Box>
      </Box>

      <Grid
        sx={{
          height: `calc(100vh - ${topSectionHeight}px - ${$({
            numeric: true,
            // ADJUSTMENT
            size:
              60 + // TOP BAR HEIGHT
              24 + // PARENT CONTAINER TOP PADDING
              24 + // PARENT  CONTAINER BOTTOM PADDING
              40 + // WRAPPER CONTAINER TOP PADDING
              40 + // WRAPPER CONTAINER BOTTOM PADDING
              20 + // HEADER SECTION GAP
              24,
          })}px)`,
        }}
        container
        rowGap={$({ size: 16 })}
        columnSpacing={$({ size: 0 })}>
        <Grid
          item
          xs={12}
          md={4.7}>
          <CustomTextInput
            label='Notification Keywords'
            placeholder='Separate keywords by a comma e.g. Keyword, keyword, keyword, ...'
            value={notificationKeyword}
            onChange={(e) => setNotificationKeyword(e.target.value)}
            multiline={true}
            containerStyle={{
              width: '100%',
              height: '100%',
            }}
            inputContainerStyle={{
              height: `calc(100% - ${$({ size: 40, numeric: true })}px)`,
            }}
            inputStyle={{
              height: `calc(100% - ${$({ size: 8, numeric: true })}px)`,
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
              if (notificationKeyword) {
                setNotificationKeywords([
                  notificationKeyword,
                  ...notificationKeywords,
                ]);
                setNotificationKeyword('');
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
        <SortableNotificationKeywordsContainer
          colors={colors}
          // distance={1}
          pressDelay={120}
          onSortEnd={({ oldIndex, newIndex }) => {
            setNotificationKeywords(
              arrayMoveImmutable(notificationKeywords, oldIndex, newIndex)
            );
          }}>
          {notificationKeywords.map((prompt, index) => {
            return (
              <SortableNotificationKeywordItem
                key={`prompt-${index}`}
                index={index}
                currentIndex={index}
                prompts={notificationKeywords}
                setPrompts={setNotificationKeywords}
                prompt={prompt}
                colors={colors}
              />
            );
          })}
        </SortableNotificationKeywordsContainer>
      </Grid>
    </DashboardContainer>
  );
};

export default KeywordsAlertHome;
