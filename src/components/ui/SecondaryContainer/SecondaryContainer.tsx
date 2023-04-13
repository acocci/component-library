import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import ListMenu from '../menus/ListMenu';

import { ISecondaryContainer } from './SecondaryContainer.types';

const SecondaryContainer = ({
  children,
  expandAll,
  menuItems,
  menuType,
  navWidth,
  sx,
}: ISecondaryContainer) => (
  <Grid container sx={sx}>
    {menuItems && menuType && (
      <Grid {...navWidth} className="nav">
        <ListMenu menuItems={menuItems} menuType={menuType} expandAll={expandAll} />
      </Grid>
    )}
    <Grid xs className="content">
      <Box p={2}>{children}</Box>
    </Grid>
  </Grid>
);

export default SecondaryContainer;
