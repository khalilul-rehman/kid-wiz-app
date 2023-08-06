import React from 'react';
import { Box, Typography, alpha, useTheme } from '@mui/material';
import { Pie } from '@nivo/pie';

import {
  CustomTextInput,
  CustomButton,
  CustomSubjectFoucsSlider,
} from '../../../components';

import { AlarmIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const GoalSettingTab = ({ topSectionHeight = 0 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [hours, setHours] = React.useState({ tens: '', ones: '' });
  const [minutes, setMinutes] = React.useState({ tens: '', ones: '' });

  const [goalGraphData, setGoalGraphData] = React.useState([
    {
      id: '1',
      label: 'Science, biology, & Environment',
      color: colors.subjectsFocus[100],
      value: Math.floor(Math.random() * 100),
    },
    {
      id: '2',
      label: 'Social Study & Languages',
      color: colors.subjectsFocus[200],
      value: Math.floor(Math.random() * 100),
    },
    {
      id: '3',
      label: 'English & Coding',
      color: colors.subjectsFocus[300],
      value: Math.floor(Math.random() * 100),
    },
    {
      id: '4',
      label: 'Logic, Life Skills, Emotions, & Innovation',
      color: colors.subjectsFocus[400],
      value: Math.floor(Math.random() * 100),
    },
    {
      id: '5',
      label: 'Math, Money, & Music',
      color: colors.subjectsFocus[500],
      value: Math.floor(Math.random() * 100),
    },
  ]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 20 }),
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: {
            xs: $({ size: 8 }),
            md: 0,
          },
          width: '100%',
        }}>
        <Typography
          sx={{
            fontSize: $({ size: 18 }),
            fontWeight: '400',
            lineHeight: $({ size: 30 }),
            color: colors.solids.black,
          }}>
          {'Set the daily time goal for your child’s learning journey!'}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: $({ size: 20 }),
          alignItems: 'center',
        }}>
        <Box
          sx={{ display: 'flex', gap: $({ size: 8 }), alignItems: 'center' }}>
          <CustomTextInput
            label={null}
            placeholder={'0'}
            value={hours.tens}
            onChange={(e) => {
              if (e.target.value.length > 1) return;
              if (e.target.value && isNaN(e.target.value)) return;
              if (Number(e.target.value) > 2) return;
              if (e.target.value === '2' && Number(hours.ones) > 3) return;
              setHours({ ...hours, tens: e.target.value });
            }}
            containerStyle={{ width: $({ size: 32 }) }}
            inputContainerStyle={{
              padding: `${$({ size: 3 })} ${$({ size: 6 })}`,
            }}
            inputStyle={{
              'fontWeight': '600',
              'lineHeight': $({ size: 30 }),
              '& input': { textAlign: 'center' },
            }}
          />

          <CustomTextInput
            label={null}
            placeholder={'0'}
            value={hours.ones}
            onChange={(e) => {
              if (e.target.value.length > 1) return;
              if (e.target.value && isNaN(e.target.value)) return;
              if (Number(e.target.value) > 9) return;
              if (hours.tens === '2' && Number(e.target.value) > 3) return;
              setHours({ ...hours, ones: e.target.value });
            }}
            containerStyle={{ width: $({ size: 32 }) }}
            inputContainerStyle={{
              padding: `${$({ size: 3 })} ${$({ size: 6 })}`,
            }}
            inputStyle={{
              'fontWeight': '600',
              'lineHeight': $({ size: 30 }),
              '& input': { textAlign: 'center' },
            }}
          />

          <Typography
            sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '500',
              lineHeight: $({ size: 30 }),
              color: colors.extra.grey2,
            }}>
            Hours
          </Typography>
        </Box>

        <Box
          sx={{ display: 'flex', gap: $({ size: 8 }), alignItems: 'center' }}>
          <CustomTextInput
            label={null}
            placeholder={'0'}
            value={minutes.tens}
            onChange={(e) => {
              if (e.target.value.length > 1) return;
              if (e.target.value && isNaN(e.target.value)) return;
              if (Number(e.target.value) > 5) return;
              setMinutes({ ...minutes, tens: e.target.value });
            }}
            containerStyle={{ width: $({ size: 32 }) }}
            inputContainerStyle={{
              padding: `${$({ size: 3 })} ${$({ size: 6 })}`,
            }}
            inputStyle={{
              'fontWeight': '600',
              'lineHeight': $({ size: 30 }),
              '& input': { textAlign: 'center' },
            }}
          />

          <CustomTextInput
            label={null}
            placeholder={'0'}
            value={minutes.ones}
            onChange={(e) => {
              if (e.target.value.length > 1) return;
              if (e.target.value && isNaN(e.target.value)) return;
              if (Number(e.target.value) > 9) return;
              setMinutes({ ...minutes, ones: e.target.value });
            }}
            containerStyle={{ width: $({ size: 32 }) }}
            inputContainerStyle={{
              padding: `${$({ size: 3 })} ${$({ size: 6 })}`,
            }}
            inputStyle={{
              'fontWeight': '600',
              'lineHeight': $({ size: 30 }),
              '& input': { textAlign: 'center' },
            }}
          />

          <Typography
            sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '500',
              lineHeight: $({ size: 30 }),
              color: colors.extra.grey2,
            }}>
            Minutes
          </Typography>
        </Box>

        <CustomButton
          onClick={() => {}}
          label='Set!'
          rightIcon={
            <AlarmIcon
              size={$({ size: 15, numeric: true })}
              color={colors.white[800]}
            />
          }
          sx={{
            padding: `${$({ size: 6 })} ${$({ size: 16 })}`,
            width: 'fit-content',
            gap: $({ size: 10 }),
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          gap: {
            xs: $({ size: 20 }),
            md: $({ size: 36 }),
          },
          width: '100%',
          alignItems: {
            xs: 'flex-start',
            md: 'center',
          },
          mt: $({ size: 12 }),
        }}>
        <Box
          sx={{
            position: 'relative',
            height: $({ size: 280 }),
            width: $({ size: 280 }),
            userSelect: 'none',
          }}>
          <Box
            sx={{
              filter: `drop-shadow(0 0 ${$({ size: 5 })} ${alpha(
                colors.solids.black,
                0.1
              )})`,
            }}>
            <Pie
              data={goalGraphData}
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

          <Box
            sx={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: $({ size: 150 }),
              textAlign: 'center',
              position: 'absolute',
            }}>
            {[
              { text: `${hours.tens}${hours.ones || 0}`, isBold: true },
              { text: 'hrs ', isBold: false },
              { text: `${minutes.tens}${minutes.ones || 0}`, isBold: true },
              { text: 'mins', isBold: false },
              { text: 'daily goal!', isBold: false },
            ].map((item, index, data) => {
              return (
                <Typography
                  key={`goal-setting-tab-total-${index}`}
                  sx={{
                    fontWeight: item.isBold ? '600' : '400',
                    fontSize: $({ size: 18 }),
                    color: colors.solids.black,
                    lineHeight: $({ size: 30 }),
                    display: data.length - 1 === index ? 'block' : 'inline',
                  }}>
                  {item.text}
                </Typography>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: $({ size: 440 }),
            display: 'flex',
            flexDirection: 'column',
            gap: $({ size: 12 }),
          }}>
          {goalGraphData.map((item, index) => {
            return (
              <CustomSubjectFoucsSlider
                key={`goal-setting-tab-subject-focus-slider-${index}`}
                label={item.label}
                color={item.color}
                value={item.value}
                onChange={(e) => {
                  const newData = [...goalGraphData];
                  newData[index].value = e.target.value;
                  setGoalGraphData(newData);
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default GoalSettingTab;
