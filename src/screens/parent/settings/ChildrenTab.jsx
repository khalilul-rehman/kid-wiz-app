import React from 'react';
import { Box } from '@mui/material';

import { $ } from '../../../utils';

import AddChildModal from './../../onBoarding/addChildren/AddChildModal';
import ChildInfoCard from './../../onBoarding/addChildren/ChildInfoCard';

const ChildrenTab = ({ topSectionHeight = 0 }) => {
  const [childrenData, setChildrenData] = React.useState([
    { hasInfo: false, disabled: false },
    { hasInfo: false, disabled: false },
    { hasInfo: false, disabled: true },
  ]);

  const [isModalOpen, setIsModalOpen] = React.useState({
    isOpen: false,
    index: -1,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        gap: $({ size: 20 }),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: $({ size: 24 }),
          justifyContent: 'center',
        }}>
        {childrenData.map((child, index) => {
          return (
            <ChildInfoCard
              key={index}
              fullname={child.fullname}
              age={child.age}
              gender={child.gender?.label}
              difficulty={child.difficulty?.label}
              profilePicture={child?.profilePicture?.src}
              hasInfo={child.hasInfo}
              disabled={child.disabled}
              handleAddChild={() => {
                setIsModalOpen({ isOpen: true, index: index });
              }}
              handleEditChild={() => {
                setIsModalOpen({ isOpen: true, index: index });
              }}
              handleDeleteChild={() => {
                const newChildrenData = [...childrenData];
                newChildrenData[index] = { hasInfo: false, disabled: false };
                setChildrenData(newChildrenData);
              }}
              wrapperStyle={{
                padding: '0',
                minWidth: $({ size: 288 }),
                flex: 1,
              }}
              addButtonStyle={{
                width: '100%',
              }}
            />
          );
        })}
      </Box>

      {isModalOpen.isOpen && (
        <AddChildModal
          currentChildData={childrenData[isModalOpen.index]}
          childrenData={childrenData}
          setChildrenData={setChildrenData}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Box>
  );
};

export default ChildrenTab;
