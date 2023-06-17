import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { programsData } from 'src/_mock';

import CloneProgram from '../components/clone-program/clone-program';
import ProgramItem from './program-item';

export default function ProgramsList({ setCurrentProgramEdit }) {
  const { programs } = programsData;
  const [openClone, setOpenClone] = useState(false);
  const [currentProgram, setCurrentProgram] = useState(null);
  const handleOpenClone = (program) => {
    setCurrentProgram(program);
  };
  const handleCloseClone = () => {
    setCurrentProgram(null);
    setOpenClone(false);
  };

  useEffect(() => {
    if (currentProgram) {
      setOpenClone(true);
    }
  }, [currentProgram]);
  return (
    <Grid container spacing={2} pt={3}>
      {programs.map((program) => (
        <Grid key={program.id} xs={12} sm={12} md={12}>
          <ProgramItem
            program={program}
            openClone={handleOpenClone}
            setCurrentProgramEdit={setCurrentProgramEdit}
          />
        </Grid>
      ))}
      <CloneProgram open={openClone} onClose={handleCloseClone} program={currentProgram} />
    </Grid>
  );
}

ProgramsList.propTypes = {
  setCurrentProgramEdit: PropTypes.func,
};
