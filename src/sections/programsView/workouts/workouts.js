import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
import { workoutsData } from 'src/_mock';
import Iconify from 'src/components/iconify/iconify';

import { WorkoutsList } from './workouts-list/workouts-list';

export default function Workouts({ open, currentTraining, openForm, ...other }) {
  const training_id = currentTraining?.id;
  const { workouts } = workoutsData;
  return (
    <Grid xs={12} md={4} disabled>
      <Card
        {...other}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Backdrop open={!open} sx={{ position: 'absolute' }}>
          <div />
        </Backdrop>
        <CardHeader title="Exercícios" sx={{ mb: 2 }} />
        <CardContent>
          <Button
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
            disabled={!open}
          >
            Adicionar
          </Button>
          {open && training_id && <WorkoutsList workouts={workouts} />}
        </CardContent>
      </Card>
    </Grid>
  );
}

Workouts.propTypes = {
  open: PropTypes.bool,
  currentTraining: PropTypes.object,
  openForm: PropTypes.bool,
};
