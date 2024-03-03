const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    index: async (req, res) => {
        const user = await User.find();
        res.render('pages/user', { user });
    },
    indexRegister: async (req, res) => {
        res.render('pages/register');
    },

    indexLogin: async (req, res) => {
        try {
            const alertMsg = req.flash('alertMsg');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMsg, status: alertStatus};
            res.render('pages/login', {alert});
        } catch (error) {
            res.redirect('/login');
        }
    },

    prosesLogin: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username: username });
            if (!user) {
                req.flash('alertMsg', 'Maaf, username tidak terdaftar !');
                req.flash('alertStatus', 'danger');
                return res.redirect('/login');   
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                req.flash('alertMsg', 'Maaf, password yang anda masukkan salah !');
                req.flash('alertStatus', 'danger');
                return res.redirect('/login');
            }

            req.session.user = {
                id: user.id,
                username: user.username,
                fullname: user.fullName,
            }

            res.redirect('/');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/login');
        }
    },

    store: async(req, res) => {
        try {
            const { fullName, username, phone, email, password } = req.body;
            // console.log(req.body);
            await User.create({fullName, username, phone, email, password, role:'admin'});
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/login');
        } catch (error) {
            console.log(error.message);
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/register');
        }
    },

    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
}