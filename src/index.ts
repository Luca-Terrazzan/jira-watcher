import { Jira } from './jira';
import express from 'express';

const app = express();
const jira = new Jira();

app.get('/', async (req, res) => {
    try {
      res.send(
        await jira.getDefects()
      );
    } catch (e) {
      console.error('error:', e);
    }
  }
);

app.listen(3000, () => {
    console.log('Serving on localhost 3000');
  }
);
