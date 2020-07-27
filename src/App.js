import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import Articles from './components/articles/Articles';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  articles: {
    margin: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    borderTop: '1px solid #e0e0e0',
  },
}));

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

function App() {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearchSubmit = (event) => {
    setError(null);
    fetchData();
    setSearchValue('');
    event.preventDefault();
  };

  async function fetchData() {
    try {
      const url = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${NEWS_API_KEY}`;
      const result = await axios(url);
      setNews(result.data.articles);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className={classes.container}>
      <SearchBar
        value={searchValue}
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
        placeHolder="Search for news..."
      />
      <Box className={classes.articles}>
        <Articles news={news} />
        {error && <div>{error}</div>}
      </Box>
    </div>
  );
}

export default App;
