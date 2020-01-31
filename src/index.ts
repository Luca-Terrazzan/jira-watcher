import { Jira } from './jira';
import express from 'express';

const app = express();
const jira = new Jira();

app.get('/', async (req, res) => {
    res.send(
      await jira.getIssue('DOC-9661')
    );
  }
);

app.listen(3000, () => {
    console.log('Serving on localhost 3000');
  }
);
