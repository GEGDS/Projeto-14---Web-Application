import express from 'express';
const router = express.Router();


//Array para armazenar os posts 
let posts = [];

//Rota para exibir formulário de criação de posts
router.get("/", (req,res) => {
    res.render('index.ejs');
});


//Rota post para criação de posts novos
router.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        content: req.body.postContent
    };

    posts.push(newPost);
    res.redirect('/posts');
});

//Exibir os posts criados
router.get('/posts', (req, res) => {
    res.render('posts', { posts });
});



// Exporta o objeto router
export { router };