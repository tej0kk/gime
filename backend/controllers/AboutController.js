const About = require('../models/About');

module.exports = {
    index: async (req, res) => {
        const about = await About.findOne().sort({ _id: -1 }).limit(1);
        const alertMsg = req.flash('alertMsg');
        const alertStatus = req.flash('alertStatus');
        const alert = {message: alertMsg, status: alertStatus};
        res.render('pages/about', {about, alert});
    },
    store: async (req, res) => {
        try {
            const { corporateName, location, description, address, phone } = req.body;
            await About.create({
                corporateName,
                location,
                description,
                address,
                phone
            });
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/');
        } catch (error) {
            console.log(error.message);
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/about');
        }
    },
    update: async (req, res) => {
        try {
            const { corporateName, location, description, address, phone } = req.body;
            await About.updateOne({ _id: id }, {
                corporateName: corporateName,
                location: location,
                description: description,
                address: address,
                phone: phone,
            });
            req.flash('alertMsg', 'Berhasil diupdate, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/about');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/about');
        }
    },
}