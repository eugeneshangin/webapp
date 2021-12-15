import express, { Request } from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('dist/spa'));
app.use(bodyParser.json());

interface WorksRequest extends Request {
  body: {
    url: string
  }
}

interface MessageRequest extends Request {
  body: {
    text: string
  }
}

const links = [
  'https://texterra.ru/upload/img/20-06-2018/09.jpg',
  'https://texterra.ru/upload/img/18-10-2019/3/1.jpg',
  'https://texterra.ru/upload/img/20-06-2018/04.jpg',
  'https://texterra.ru/upload/img/20-06-2018/05.jpg',
  'https://texterra.ru/upload/img/20-06-2018/07.jpg',
  'https://texterra.ru/upload/img/20-06-2018/08.jpg',
  'https://texterra.ru/upload/img/20-06-2018/06.jpg',
  'https://texterra.ru/upload/img/20-06-2018/02.jpg',
  'https://texterra.ru/upload/img/20-06-2018/03.jpg',
]

app.get('/api/works', (req, res: { json: (arg0: { url: string; }[]) => void; }) => {
  res.json(links.map(l => ({ url: l })));
})

app.post('/api/works', (req: WorksRequest) => {
  // TODO: добавить проверки
  links.push(req.body.url)
})

app.post('/api/message', (req: MessageRequest) => {
  void axios.get('https://api.telegram.org/bot5034290784:AAFmBBkZHBaEe2fg7BcRa9U8AY8-TlUU-WY/sendMessage', {
    params: {
      chat_id: -656407812,
      parse_mode: 'html',
      text: req.body.text
    }
  })
})

app.listen(port, () => console.log(`App listening at http://0.0.0.0:${port}`));
