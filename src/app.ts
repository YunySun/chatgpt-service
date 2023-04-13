// npm i express -s
// npm i typescript @types/node @types/express -D
// 新建文件tsconfig.json
// {
//     "compilerOptions": {
//         "target": "es6",
//         "module": "commonjs",
//         "outDir": "./dist",
//         "esModuleInterop": true
//     },
//     "include": ["src/**/*"]
// }

import express from 'express';
const app = express();
const apiRouter = express.Router();

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API路由
apiRouter.post('/chat-process', (req, res) => {
    res.send('Hello API!');
});

app.use('', apiRouter)
// app.use('/api', apiRouter)

app.listen(10086, () => {
    globalThis.console.log('Server is running on port 10086')
})

// npm install -s ts-node nodemon