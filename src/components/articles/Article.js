import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import dateformat from 'dateformat';

const useStyles = makeStyles((theme) => ({
  content: {
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    padding: theme.spacing(2),
    margin: theme.spacing(3),
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  titleAvatar: {
    width: '50px',
    height: '50px',
    marginRight: theme.spacing(2),
    borderRadius: '50%',
    backgroundColor: '#ffc107',
    flexShrink: 0,
  },
  titleText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
}));

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Box className={classes.titleBox}>
        <Box className={classes.titleAvatar}></Box>
        <Link
          className={classes.titleText}
          href={article.url}
          underline="none"
          target="_blank"
          rel="noopener"
        >
          {article.title}
        </Link>
      </Box>
      <Box m={1}>
        <Typography variant="body1" color="textSecondary">
          {dateformat(article.publishedAt, 'mmmm dS, yyyy h:MMTT')}{' · '}
          {article.author}{' · '}
          {article.source.name}
        </Typography>
      </Box>
      <Box m={1}>
        <Typography variant="h6" color="textPrimary">
          {article.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Article;