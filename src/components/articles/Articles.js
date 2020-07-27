import React from 'react';
import Article from './Article';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    padding: theme.spacing(2),
  },
}));

export default function Articles({ news }) {
  const classes = useStyles();
  let newsContent = null;

  if (news && news.length > 0) {
    newsContent = news.map((content, index) => (
      <Article key={index} article={content} />
    ));
  }

  return (
    <Box className={classes.container}>
      {newsContent}
    </Box>
  );
}
