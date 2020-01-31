import { Jira } from './jira';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('👍🏿👌🏿');
  }
);

app.listen(3000, () => {
    console.log('Serving on localhost 3000');
  }
);
