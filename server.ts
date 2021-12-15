import express, { Request } from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import sha256 from 'crypto-js/sha256'
import connectHistory from 'connect-history-api-fallback'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(connectHistory())
app.use(express.static('dist/spa'))
app.use(bodyParser.json());

interface WorksRequest extends Request {
  body: {
    url: string
  },
  user: User | undefined
}

interface MessageRequest extends Request {
  body: {
    text: string
  }
}

interface User {
  id: number,
  login: string,
  password: string
}

interface AuthorizationRequest extends Request {
  user: User
}

interface AuthRequest extends Request {
  body: {
    login: string,
    password: string
  }
}

const tokenKey = sha256('ShaSha').toString()

const users = [
  {
    'id': 1,
    'login': 'superuser',
    'password': 'cGWHcycs'
  }
]

app.use((req, res, next) => {
  if (req.headers.authorization) {
    console.log(req.headers)
    jwt.verify(
      req.headers.authorization,
      tokenKey,
      (err, payload) => {
        if (err) next()
        else if (payload) {
          const user = users.find(u => u.id === payload.id)
          if (user) {
            const request = req as AuthorizationRequest
            request.user = user
          }
          next()
        }
      }
    )
  }

  next()
})

app.post('/api/auth', (req: AuthRequest, res) => {
  const user = users.find(u => u.login === req.body.login && u.password === req.body.password)
  if (!!user) {
    return res.status(200).json({
      id: user.id,
      login: user.login,
      token: jwt.sign({ id: user.id }, tokenKey),
    })
  }
  return res.status(404).json({ message: 'User not found' })
})

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

app.post('/api/works', (req, res) => {
  if ((req as WorksRequest).user) {
    links.push((req as WorksRequest).body.url)
    return res.status(200).json((req as WorksRequest).user)
  } else {
    return res.status(401).json({ message: 'Not authorized' })
  }
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

app.get('/api/me', (req, res) => {
  const user = (req as AuthorizationRequest).user
  if (!!user)
    res.json({
      id: user.id,
      login: user.login,
      token: jwt.sign({ id: user.id }, tokenKey),
    })
  else
    res
      .status(401)
      .json({ message: 'Not authorized' })
})

app.listen(port, () => console.log(`App listening at http://0.0.0.0:${port}`));
