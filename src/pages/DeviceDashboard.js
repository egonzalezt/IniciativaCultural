import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  AppRealtimeMetrics
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DeviceDashboard() {

  return (
    <>
      <Helmet>
        <title> Dispositivo | AgroLab </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Información del dispositivo
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={100}>
            <AppRealtimeMetrics
              title="Temperatura ambiente"
              min={10}
              max={25}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={20}>
            <AppRealtimeMetrics
              title="Humedad del suelo"
              min={10}
              max={120}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Novedades recientes"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: sample([
                  'Anormalidad en las temperaturas',
                  'Dispositivo desconectado',
                  'Baja humedad',
                  'Incremento de temperaturas en un 5%',
                  'Humedad alta',
                  'Reducción de temperaturas en un 5%',
                ]),
                description: sample([
                  'Se registra una temperatura diferente al promedio',
                  'Perdida de conexión con el dispositivo, reviselo porfavor',
                  'Se registran bajos niveles de humedad en el suelo, esto podría afectar su cultivo, riegue sus plantas',
                  'La temperatura aumento en un 5% del promedio actual',
                  'El suelo tiene altos niveles de humedad, debido a las lluvias, se deshabilita el riego de las plantas hasta alcanzar niveles normales',
                  'La temperatura bajo en un 5% del promedio actual',
                ]),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Historial de novedades"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Desconexión dispositivo',
                  'Altas temperaturas',
                  'Humedad baja',
                  'Actualizacion del dispositivo ',
                  'Desconexión por mas de 1 hora',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
