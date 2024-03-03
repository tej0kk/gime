const Game = require('../models/Game');
const Specification = require('../models/Specification');

module.exports = {
    index: async (req, res) => {
        try {
            const games = await Game.find();
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMsg, status: alertStatus};
            res.render('pages/game', {games, alert});
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/game');
        }
    },
    store: async (req, res) => {
        try {
            const { name, price, description, trailer, isRecommendation, isFree, isOnSale, isSpecialOffer, min_os, min_processor, min_memory, min_graphic, req_os, req_processor, req_memory, req_graphic } = req.body;
            let minSpecification = await Specification.create({
                os: min_os,
                processor: min_processor,
                memory: min_memory,
                graphic: min_graphic,
                category: 'min'
            });
            let reqSpecification = await Specification.create({
                os: req_os,
                processor: req_processor,
                memory: req_memory,
                graphic: req_graphic,
                category: 'req'
            });
            let newGame = await Game.create({
                name,
                price,
                description,
                trailer,
                isRecommendation,
                isFree,
                isOnSale,
                isSpecialOffer,
                cover: req.file.filename,
            });

            newGame.specificationId.push({ _id: minSpecification._id });
            newGame.specificationId.push({ _id: reqSpecification._id });
            await newGame.save();

            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/game');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/game');
        }
    },
    delete: async (req, res) => {
        try{
            const { id } = req.params;
            await Game.deleteOne({ _id: id });
            req.flash('alertMsg', 'Berhasil dihapus, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/game');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/game');
        }
    }
}