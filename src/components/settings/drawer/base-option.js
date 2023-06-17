// @mui
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';

//
import SvgColor from '../../svg-color';

// ----------------------------------------------------------------------

export default function BaseOptions({ icons, options, value, onChange }) {
  return (
    <Stack direction="row" spacing={2}>
      {options.map((option) => {
        const selected = value === option;

        return (
          <ButtonBase
            key={option}
            onClick={() => onChange(option)}
            sx={{
              width: 1,
              height: 80,
              borderRadius: 1,
              border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
              ...(selected && {
                bgcolor: 'background.paper',
                boxShadow: (theme) =>
                  `-24px 8px 24px -4px ${alpha(
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[500]
                      : theme.palette.common.black,
                    0.08,
                  )}`,
              }),
              '& .svg-color': {
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.grey[500]} 0%, ${theme.palette.grey[600]} 100%)`,
                ...(selected && {
                  background: (theme) =>
                    `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                }),
              },
            }}
          >
            <SvgColor
              src={`/assets/icons/setting/ic_${option === 'light' ? icons[0] : icons[1]}.svg`}
            />
          </ButtonBase>
        );
      })}
    </Stack>
  );
}

BaseOptions.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
};
