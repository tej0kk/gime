const Payment = require('../models/Payment');

module.exports = {
    index: async (req, res) => {
        const payment = await Payment.find();
        const alertMsg = req.flash('alertMsg');
        const alertStatus = req.flash('alertStatus');
        const alert = {message: alertMsg, status: alertStatus};
        res.render('pages/payment', {payment, alert});
    },
    store: async (req, res) => {
        try {
            const { name, paymentStep } = req.body;
            console.log(req.body);
            await Payment.create({
                name,
                paymentStep,
            });
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/payment');
        } catch (error) {
            console.log(error.message);
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/payment');
        }
    },
    update: async (req, res) => {
        try {
            const { id, name, paymentStep } = req.body;
            await Payment.updateOne({ _id: id }, {
                name: name,
                paymentStep: paymentStep,
            });
            req.flash('alertMsg', 'Berhasil diupdate, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/payment');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/payment');
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        await Payment.deleteOne({ _id: id });
        res.redirect('/payment');
    }
}