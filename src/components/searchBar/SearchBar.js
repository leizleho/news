import React from './node_modules/react';
import Input from './node_modules/@material-ui/core/Input';
import Button from './node_modules/@material-ui/core/Button';
import { makeStyles } from './node_modules/@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-around',
  },
  searchButton: {
    marginLeft: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    border: '1px solid #424242',
    borderRadius: '25px',
  },
  input: {
    border: '1px solid #e0e0e0',
    borderRadius: '25px',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: '600px'
  },
}));

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeHolder,
  ...inputProps
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit}>
        <Input
          {...inputProps}
          value={value}
          onChange={onChange}
          disableUnderline
          className={classes.input}
          placeholder={placeHolder}
        />
        <Button
          type="submit"
          variant="outlined"
          className={classes.searchButton}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
