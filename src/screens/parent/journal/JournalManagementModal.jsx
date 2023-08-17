import React from 'react';
import { Box, Grid, useTheme, alpha } from '@mui/material';

import {
  CustomButton,
  CustomDropDown,
  CustomModal,
  CustomTextInput,
} from '../../../components';

import { SaveIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const JournalManagementModal = ({
  isModalOpen = { isOpen: false, index: -1 },
  setIsModalOpen = () => {},
  currentSelectedJournal = null,
  setCurrentSelectedJournal = () => {},
  offset = {
    top: 152,
    left: 48,
    right: 48,
  },
  jounalsData = [],
  setJournalsData = () => {},
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [journalTitle, setJournalTitle] = React.useState(
    currentSelectedJournal?.title || ''
  );

  const [journalContent, setJournalContent] = React.useState(
    currentSelectedJournal?.content || ''
  );

  const [dateDropDownOpen, setDateDropDownOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    currentSelectedJournal?.date || ''
  );

  return (
    <CustomModal
      title={
        currentSelectedJournal ? 'Edit Journal Entry' : 'New Journal Entry'
      }
      onClose={() => {
        setIsModalOpen({ isOpen: false, index: -1 });
        setCurrentSelectedJournal(null);
      }}
      offset={{
        top: offset.top,
        left: offset.left,
        right: offset.right,
      }}
      containerStyle={{
        minWidth: $({ size: 760 }),
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 18 }),
      }}
      headerContainerStyle={{
        mt: `-${$({ size: 8 })}`,
      }}
      wrapperStyle={{
        left: '50%',
        transform: 'translateX(-50%)',
        width: $({ size: 760 }),
      }}>
      {dateDropDownOpen && (
        <Box
          onClick={() => {
            setDateDropDownOpen(false);
          }}
          sx={{
            background: alpha(colors.extra.grey1, 0.4),
            position: 'absolute',
            top: 0,
            left: 0,
            minWidth: $({ size: 760 }),
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
            label='Title'
            placeholder='Entry title'
            value={journalTitle}
            onChange={(e) => setJournalTitle(e.target.value)}
            labelStyle={{
              pb: 0,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}>
          <CustomDropDown
            label='Dates'
            value={selectedDate}
            placeholder='Choose date'
            dropDownOpen={dateDropDownOpen}
            setDropDownOpen={setDateDropDownOpen}
            labelStyle={{
              pb: 0,
              mt: $({ size: 4 }),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}>
          <CustomTextInput
            label='Content'
            placeholder='Write the content of the entry...'
            value={journalContent}
            onChange={(e) => setJournalContent(e.target.value)}
            multiline={true}
            labelStyle={{
              pb: 0,
              mt: $({ size: 4 }),
            }}
            containerStyle={{
              width: '100%',
              height: $({ size: 240 }),
            }}
            inputContainerStyle={{
              height: `calc(100% - ${$({ size: 55, numeric: true })}px)`,
              pr: `${$({ size: 12 })}`,
            }}
            inputStyle={{
              'height': `calc(100% - ${$({ size: 8, numeric: true })}px)`,
              'overflowY': 'scroll',
              '&::-webkit-scrollbar': {
                width: $({ size: 6 }),
                borderRadius: $({ size: 6 }),
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: colors.extra.grey3,
                borderRadius: $({ size: 6 }),
              },
              'pr': $({ size: 6 }),
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: $({ size: 24 }),
          mt: `-${$({ size: 16 })}`,
        }}>
        <CustomButton
          label='Cancel'
          isSecondary
          sx={{
            maxWidth: $({ size: 143 }),
            boxShadow: `0 0 ${$({ size: 4 })} 0 ${alpha(
              colors.solids.black,
              0.25
            )}`,
          }}
          onClick={() => {
            setIsModalOpen({ isOpen: false, index: -1 });
            setCurrentSelectedJournal(null);
          }}
        />
        <CustomButton
          label='Save'
          sx={{
            maxWidth: $({ size: 163 }),
            boxShadow: `0 0 ${$({ size: 4 })} 0 ${alpha(
              colors.solids.black,
              0.25
            )}`,
          }}
          rightIcon={<SaveIcon size={$({ size: 24, numeric: true })} />}
          onClick={() => {
            setJournalsData([
              ...(!currentSelectedJournal?.id && [
                {
                  id: `journal-${jounalsData.length + 1}`,
                  date: selectedDate || 'July 12, 2021',
                  title: journalTitle,
                  content: journalContent,
                },
              ]),
              ...jounalsData.map((subject) => {
                if (subject?.id === currentSelectedJournal?.id) {
                  return {
                    ...subject,
                    title: journalTitle,
                    content: journalContent,
                    date: selectedDate || 'July 12, 2021',
                  };
                }
                return subject;
              }),
            ]);
            setIsModalOpen({ isOpen: false, index: -1 });
            setCurrentSelectedJournal(null);
          }}
        />
      </Box>
    </CustomModal>
  );
};

export default JournalManagementModal;
