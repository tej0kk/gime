const Billing = require("../models/Billing")

module.exports = {
    index: async (req, res) => {
        try {
            const billing = await Billing.find().populate('gameId').populate('userId').populate('paymentId');
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = { message: alertMsg, status: alertStatus };
            res.render('pages/billing', { billing, alert });
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/billing');
        }
    },
    status: async (req, res) => {
        try {
            const {id} = req.params;
            const billing = await Billing.findOne({ _id: id });
            console.log(billing);
            if (!billing || billing.status == 'paid') {
                req.flash('alertMsg', 'Maaf, billing tidak valid !');
                req.flash('alertStatus', 'danger');
                return res.redirect('/billing'); 
            }

            await Billing.updateOne({ _id: id }, {
                status: 'paid',
            });
            req.flash('alertMsg', 'Pembayaran berhasil dikonfirmasi !');
            req.flash('alertStatus', 'success');
            return res.redirect('/billing')
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/billing');
        }
    }
}