import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import BodyParser from 'body-parser';
import postsRouter from './routes/posts';

const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
	'mongodb+srv://admin:admin@cluster0.dd9rkf2.mongodb.net/?retryWrites=true&w=majority';

const app: Express = express();

app.use(BodyParser.json({ limit: '30mb', extended: true }));
app.use(BodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// подключаем роуты для постов
app.use('/posts', postsRouter);

// подключаемся к монге и запускаем приложение
mongoose
	.connect(CONNECTION_URL, {})
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch((error) => console.log('Server is failure :(' + error.message));

// mongoose.set('useFindAndModify', false);
