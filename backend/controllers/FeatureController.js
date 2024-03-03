const Feature = require('../models/Feature');

module.exports = {
    index: async (req, res) => {
        const feature = await Feature.find();
        const alertMsg = req.flash('alertMsg');
        const alertStatus = req.flash('alertStatus');
        const alert = {message: alertMsg, status: alertStatus};
        res.render('pages/feature', {feature, alert});
    },
    store: async (req, res) => {
        try {
            const { featureName, description } = req.body;
            await Feature.create({
                featureName,
                description,
                image: req.file.filename,
            });
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/feature');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/feature');
        }
    },
    update: async (req, res) => {
        try {
            const { id, featureName, description } = req.body;
            if (req.file != undefined)
            {
                await Feature.updateOne({ _id: id }, {
                    featureName : featureName,
                    description : description,
                    image: req.file.filename,
                });
            } else {
                await Feature.updateOne({ _id: id }, {
                    featureName : featureName,
                    description : description,
                });
            }
            req.flash('alertMsg', 'Berhasil diupdate, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/feature');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/feature');
        }
    },
    delete: async (req, res) => {
        try{
            const { id } = req.params;
            await Feature.deleteOne({ _id: id });
            req.flash('alertMsg', 'Berhasil dihapus, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/feature');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/feature');
        }
    }
}