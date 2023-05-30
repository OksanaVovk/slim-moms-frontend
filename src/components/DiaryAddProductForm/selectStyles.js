import { theme } from '../Theme';

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: 700,
    lineHeight: 1.17,
    color: theme.colors.textFirst,
    backgroundColor: state.isFocused ? theme.colors.accent : theme.colors.white,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: theme.fontWeights.bold,
    lineHeight: 1.2,
    color: theme.colors.textFirst,
  }),
  control: state => ({
    width: 240,
    '@media only screen and (max-width: 767px)': {
      width: 280,
    },
    '&:hover': {
      borderBottom: theme.borders.normal + theme.colors.accent,
    },
    borderBottom: state.isFocused
      ? theme.borders.normal + theme.colors.accent
      : theme.borders.normal + theme.colors.grey,
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  container: () => ({
    position: 'relative',
  }),
  valueContainer: provided => ({
    ...provided,
    marginBottom: 0,
    padding: 0,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    textAlign: 'left',
    fontWeight: theme.fontWeights.bold,
    lineHeight: 1.2,
    color: theme.colors.textFirst,
    display: state.isFocused && 'none',
    bottom: !state.isFocused && '4px',
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),

  input: provided => ({
    ...provided,
    fontWeight: theme.fontWeights.bold,
    lineHeight: 1.2,
    color: theme.colors.textFirst,
    height: '48px',
  }),
};
