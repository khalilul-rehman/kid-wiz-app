import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { CustomCheckBox, CustomToggleSwitch } from '../../../components';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const NotificationsTab = ({ topSectionHeight = 0 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [emailNotifications, setEmailNotifications] = React.useState([
    {
      label: 'Weekly Newsletter',
      description: 'Receive news and promotions right in your email inbox!',
      isSelected: true,
    },
    {
      label: 'Weekly Summary',
      description:
        'Receive a weekly summary of your activity, right in your email inbox!',
      isSelected: false,
    },
  ]);

  const [websiteNotifications, setWebsiteNotifications] = React.useState([
    { label: 'New daily quiz', isSelected: false },
    { label: 'Grade updated', isSelected: true },
    { label: 'Notification text', isSelected: true },
    { label: 'New weekly quiz', isSelected: false },
    { label: 'Notification text', isSelected: false },
  ]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 20 }),
        flex: 1,
      }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 16 }) }}>
        <Typography
          sx={{
            fontSize: $({ size: 18 }),
            fontWeight: '600',
            color: colors.solids.black,
          }}>
          Email Notifications
        </Typography>

        {emailNotifications.map((item, index) => {
          return (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: $({ size: 16 }),
              }}>
              <CustomToggleSwitch
                checked={item.isSelected}
                onChange={() => {
                  let temp = [...emailNotifications];
                  temp[index].isSelected = !temp[index].isSelected;
                  setEmailNotifications(temp);
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    fontSize: $({ size: 18 }),
                    fontWeight: '500',
                    color: colors.solids.black,
                  }}>
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: $({ size: 13.5 }),
                    fontWeight: '400',
                    color: colors.solids.black,
                  }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 16 }) }}>
        <Typography
          sx={{
            fontSize: $({ size: 18 }),
            fontWeight: '600',
            color: colors.solids.black,
          }}>
          Website Notifications
        </Typography>

        {websiteNotifications.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: $({ size: 16 }),
              }}>
              <CustomCheckBox
                isChecked={item.isSelected}
                onChange={() => {
                  let temp = [...websiteNotifications];
                  temp[index].isSelected = !temp[index].isSelected;
                  setWebsiteNotifications(temp);
                }}
              />
              <Typography
                sx={{
                  fontSize: $({ size: 18 }),
                  fontWeight: '500',
                  color: colors.solids.black,
                }}>
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NotificationsTab;
