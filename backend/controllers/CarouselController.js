const Carousel = require('../models/Carousel');

module.exports = {
    index: async (req, res) => {
        const carousel = await Carousel.find();
        const alertMsg = req.flash('alertMsg');
        const alertStatus = req.flash('alertStatus');
        const alert = {message: alertMsg, status: alertStatus};
        res.render('pages/carousel', {carousel, alert});
    },
    store: async (req, res) => {
        try {
            const { title, description } = req.body;
            await Carousel.create({
                title,
                description,
                coverSlide: req.file.filename,
            });
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/carousel');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/carousel');
        }
    },
    update: async (req, res) => {
        try {
            const { id, title, description } = req.body;
            if (req.file != undefined)
            {
                await Carousel.updateOne({ _id: id }, {
                    title : title,
                    description : description,
                    coverSlide: req.file.filename,
                });
            } else {
                await Carousel.updateOne({ _id: id }, {
                    title : title,
                    description : description,
                });
            }
            req.flash('alertMsg', 'Berhasil diupdate, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/carousel');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/carousel');
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await Carousel.deleteOne({ _id: id });
            req.flash('alertMsg', 'Berhasil dihapus, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/carousel');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/carousel');
        }
    }
}