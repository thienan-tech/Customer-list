import express from 'express';
import path from 'path';
import customerRoutes from './routes/customerRoutes.js';


const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use(express.static(path.join(process.cwd(), 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/customer', customerRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});