const router = require('express').Router();
const authMiddleware = require('../middlewares/auth');

const Company = require('../models/Company');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const companies = await Company.find().populate(['user']);

        return res.send({ companies });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading companies' });
    }
});

router.get('/:companyId', async (req, res) => {
    try {
        const company = await Company.findById(req.params.companyId).populate(['user']);

        return res.send({ company });

    } catch (err) {
        return res.status(400).send({ error: 'Error loading company' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, about } = req.body
        
        const company = await Company.create({ name, about, user: req.userId });

        return res.send({ company });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error creating new company' });
    }
});

router.put('/:companyId', async (req, res) => {
    try {
        const { name, about } = req.body
        
        const company = await Company.findByIdAndUpdate(req.params.companyId, { 
            name, 
            about
        }, { new: true });

        return res.send({ company });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error updating company' });
    }
});

router.delete('/:companyId', async (req, res) => {
    try {
        await Company.findByIdAndRemove(req.params.companyId);

        return res.send("Removido");

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting company' });
    }
});

module.exports = (app) => app.use('/company', router);