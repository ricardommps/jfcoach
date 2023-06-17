'use client';

// @mui
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { closeSnackbar, SnackbarProvider as NotistackProvider } from 'notistack';
import PropTypes from 'prop-types';
import { useRef } from 'react';

//
import Iconify from '../iconify';
import { useSettingsContext } from '../settings';
//
import { StyledIcon, StyledNotistack } from './styles';

// ----------------------------------------------------------------------

export default function SnackbarProvider({ children }) {
  const settings = useSettingsContext();

  const isRTL = settings.themeDirection === 'rtl';

  const notistackRef = useRef(null);

  return (
    <NotistackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={8000}
      TransitionComponent={isRTL ? Collapse : undefined}
      variant="warning" // Set default variant
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      iconVariant={{
        info: (
          <StyledIcon color="info">
            <Iconify icon="eva:info-fill" width={24} />
          </StyledIcon>
        ),
        success: (
          <StyledIcon color="success">
            <Iconify icon="eva:checkmark-circle-2-fill" width={24} />
          </StyledIcon>
        ),
        warning: (
          <StyledIcon color="warning">
            <Iconify icon="eva:alert-triangle-fill" width={24} />
          </StyledIcon>
        ),
        error: (
          <StyledIcon color="error">
            <Iconify icon="solar:danger-bold" width={24} />
          </StyledIcon>
        ),
      }}
      Components={{
        default: StyledNotistack,
        info: StyledNotistack,
        success: StyledNotistack,
        warning: StyledNotistack,
        error: StyledNotistack,
      }}
      // with close as default
      action={(snackbarId) => (
        <IconButton size="small" onClick={() => closeSnackbar(snackbarId)} sx={{ p: 0.5 }}>
          <Iconify width={16} icon="mingcute:close-line" />
        </IconButton>
      )}
    >
      {children}
    </NotistackProvider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
};
