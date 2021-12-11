const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('dist/spa'));

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

const works = links.map(l => ({ url: l }))

app.get('/api/works', (req, res) => {
  res.json(works);
});

app.listen(port, () => console.log(`App listening at http://0.0.0.0:${port}`));
