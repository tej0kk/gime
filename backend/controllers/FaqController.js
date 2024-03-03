const Faq = require('../models/Faq');

module.exports = {
    index: async (req, res) => {
        const faq = await Faq.find();
        const alertMsg = req.flash('alertMsg');
        const alertStatus = req.flash('alertStatus');
        const alert = {message: alertMsg, status: alertStatus};
        res.render('pages/faq', {faq, alert});
    },
    store: async (req, res) => {
        try {
            const { answer, question } = req.body;
            await Faq.create({
                answer,
                question,
            });
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/faq');
        } catch (error) {
            console.log(error.message);
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/faq');
        }
    },
    update: async (req, res) => {
        try {
            const { id, answer, question } = req.body;
            await Faq.updateOne({ _id: id }, {
                answer: answer,
                question: question,
            });
            req.flash('alertMsg', 'Berhasil diupdate, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/faq');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/faq');
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await Faq.deleteOne({ _id: id });
            req.flash('alertMsg', 'Berhasil dihapus, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/faq');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/faq');
        }
    }
}