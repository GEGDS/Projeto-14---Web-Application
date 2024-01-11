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
        content: req.body.post
    };

    posts.push(newPost);
    res.redirect('/posts');
});

//Exibir os posts criados
router.get('/posts', (req, res) => {
    res.render('posts', { posts });
});


//Exclusão posts
router.post('/posts/delete/:postId', (req, res) => {
    const postId = req.params.postId;
    posts = posts.filter(post => post.id !== parseInt(postId));
    res.redirect('/posts');
});

//Rotas para editar os posts
router.get('/posts/edit/:postId', (req, res) => {
    const postId = req.params.postId;
    const postToEdit = posts.find(post => post.id === parseInt(postId));
    res.render('edit', { post: postToEdit });
  });
  
  router.post('/posts/edit/:postId', (req, res) => {
    const postId = req.params.postId;
    const updatedContent = req.body.updatedContent;
    const postIndex = posts.findIndex(post => post.id === parseInt(postId));
    posts[postIndex].content = updatedContent;
    res.redirect('/posts');
});
  
  

// Exporta o objeto router
export { router };