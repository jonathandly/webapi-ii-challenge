const express = require('express');

const DB = require('./data/db.js');

const router = express.Router();

router.get('/', async(req, res) => {
    
    try {
        const posts = await DB.find(req.query);
        res.status(200).json(posts);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "The posts information could not be retrieved." });
    }
});

router.get('/:id', async(req, res) => {

    try {
        const post = await DB.findById(req.params.id);

        if(!post.length) {
            res.status(404).json({ message: "The post with the specified ID does not exist." });
        } else {
            res.status(200).json(post);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "The post information could not be retrieved." });
    }
});

module.exports = router;
