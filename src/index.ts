import { Jira } from './jira';
import express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = express();
const jira = new Jira();

app.set('views', path.join(__dirname, '../../views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

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

app.get('/board', async (req, res) => {
    res.render('index', {
      boardName: (await jira.getDefectsBoard()).name,
      issues: await jira.getDefects()
    })
  }
);

app.listen(3000, () => {
    console.log('Serving on localhost 3000');
  }
);
