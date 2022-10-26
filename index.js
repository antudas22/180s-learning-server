const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Our Course API');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === "07"){
        res.send(courses);
    }
    else{
        const categoryCourses = courses.filter(c => c.category_id === id);
        res.send(categoryCourses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(course => course._id === id);
    res.send(selectedCourses);
})

app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const premiumCourses = courses.find(course => course._id === id);
    res.send(premiumCourses); 
})

app.listen(port, () => {
    console.log('180s Learning', port);
})