import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import { CustomButton, CustomTextInput } from '../../../components';

import { SaveIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const PasswordTab = ({ topSectionHeight = 0 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 8 }),
        flex: 1,
        mt: $({ size: 15 }),
      }}>
      <Typography
        sx={{
          fontSize: $({ size: 18 }),
          fontWeight: '400',
          lineHeight: $({ size: 30 }),
          color: colors.solids.black,
        }}>
        Want to change your password? Enter your current password then enter a
        new one.
      </Typography>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: $({ size: 20 }) }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: 'center',
            gap: $({ size: 20 }),
          }}>
          <CustomTextInput
            label='Current Password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            containerStyle={{ flex: 1, width: '100%' }}
            labelStyle={{ pb: 0 }}
          />

          <Box
            sx={{
              flex: 1,
              display: {
                xs: 'none',
                md: 'block',
              },
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
            alignItems: 'center',
            gap: $({ size: 20 }),
          }}>
          <CustomTextInput
            label='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            containerStyle={{ flex: 1, width: '100%' }}
            labelStyle={{ pb: 0 }}
          />

          <CustomTextInput
            label='Confirm New Password'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            containerStyle={{ flex: 1, width: '100%' }}
            labelStyle={{ pb: 0 }}
          />
        </Box>
      </Box>

      <Box sx={{ flex: 1 }} />

      <CustomButton
        onClick={() => {}}
        label={'Save Changes'}
        sx={{
          maxWidth: $({ size: 256 }),
          alignSelf: 'flex-end',
        }}
        rightIcon={
          <SaveIcon
            size={$({ size: 24, numeric: true })}
            color={colors.white[900]}
          />
        }
      />
    </Box>
  );
};

export default PasswordTab;
