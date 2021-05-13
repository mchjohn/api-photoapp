const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 8877

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")

  app.use(cors())
  next()
})
app.use(express.json())

app.get('/', (req, res) => res.json({ msg: 'Rota raiz' }))

app.get('/photos', (req, res) => {
  res.json({
    "photos": [
      {
        "id": "1",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620855359/photoapp/boy-sid_c5pbi2.jpg"
      },
      {
        "id": "2",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620855359/photoapp/boy-girl-love_cihtzl.jpg"
      },
      {
        "id": "3",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620855383/photoapp/just-married_xujw4g.jpg"
      },
      {
        "id": "4",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620855401/photoapp/girl-sit_weprc9.jpg"
      },
      {
        "id": "5",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620855383/photoapp/girl-boy-home_stlsmq.jpg"
      },
      {
        "id": "6",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620855396/photoapp/girl-camera_rvvaa2.jpg"
      },
      {
       "id": "7",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620947207/photoapp/pexels-victoria-borodinova_qxctcj.jpg"
      },
      {
       "id": "8",
        "url": "https://res.cloudinary.com/sk84all/image/upload/v1620947563/photoapp/skate-ollie-bw_ehg9kb.jpg"
      }
    ]
  })
})

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))
