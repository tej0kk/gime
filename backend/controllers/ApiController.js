const About = require("../models/About");
const Cart = require("../models/Cart");
const Carousel = require("../models/Carousel");
const Billing = require("../models/Billing");
const Faq = require("../models/Faq");
const Feature = require("../models/Feature");
const Payment = require("../models/Payment");
const Game = require("../models/Game");
const News = require("../models/News");
const User = require("../models/User");
const Library = require("../models/Library");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    indexPayment: async (req, res) =>
    {
        const payment = await Payment.find();
        res.status(200).json({ payment });
    },
    indexAbout: async (req, res) =>
    {
        const about = await About.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json({ about });
    },
    indexFaq: async (req, res) =>
    {
        const faq = await Faq.find();
        res.status(200).json({ faq });
    },
    indexCarousel: async (req, res) =>
    {
        const carousel = await Carousel.find();
        res.status(200).json({ carousel });
    },
    indexFeature: async (req, res) =>
    {
        const feature = await Feature.find();
        res.status(200).json({ feature });
    },
    indexNews: async (req, res) =>
    {
        const news = await News.find();
        res.status(200).json({ news });
    },
    showNews: async (req, res) =>
    {
        const { id } = req.params;
        const news = await News.findOne({ _id: id });
        res.status(200).json({ news });
    },
    indexCart: async (req, res) =>
    {
        const cart = await Cart.find().populate('gameId');
        res.status(200).json({ cart });
    },
    postCart: async (req, res) =>
    {
        const { gameId } = req.body;
        // console.log(req.body);
        const game = await Game.findOne({ _id: gameId });
        if (!game) {
            return res.status(400).json({ message : 'Maaf, Game tidak tersedia'});
        }
        const cart = await Cart.findOne({ _id: gameId });
        if (!cart) {
            return res.status(400).json({ message : 'Maaf, Game telah ada di Keranjang'});
        }
        Cart.create({ gameId });
        return res.status(200).json({ message: 'Game berhasil dimasukkan ke dalam keranjang' });
    },
    indexBilling: async (req, res) => 
    {
        const billing = await Billing.find().populate('gameId').populate('userId');
        res.status(200).json({ billing });
    },
    postBilling: async (req, res) =>
    {
        const { gameId, userId, paymentId } = req.body;
        const game = Game.findOne({ _id: gameId });
        const user = User.findOne({ _id: userId });
        const payment = Payment.findOne({ _id: userId });
        if (!game && !user && !payment)
        {
            return res.status(400).json({ message: 'Maaf Data Anda tidak valid !' });
        }
        
        await Billing.create({
            gameId,
            userId,
            paymentId,
            status: 'unpaid'
        });
        
        return res.status(200).json({ message: 'Terima Kasih, Silahkan lakukan pembayaran !' });
    },
    indexLibrary: async (req, res) =>
    {
        const library = await Library.find().populate('gameId').populate('userId');
        res.status(200).json({ library });
    },
    postLibrary: async (req, res) => 
    {
        const { gameId, userId } = req.body;
        const game = await Game.findOne({ _id: gameId });
        const user = await User.findOne({ _id: userId });

        if (!game && !user)
        {
            return res.status(400).json({ message: 'Maaf data anda tidak lengkap !' });
        }

        await Library.create({ gameId, userId });
        return res.status(200).json({ message: 'Data berhasil ditambahkan !' });
    },
    indexGame: async (req, res) =>
    {
        const game = await Game.find();
        res.status(200).json({ game });
    },
    showGame: async (req, res) =>
    {
        const { id } = req.params;
        const game = await Game.findOne({ _id: id });
        res.status(200).json({ game });
    },
    postUser: async(req, res) => {
        try {
            const { fullName, username, phone, email, password } = req.body;
            await User.create({fullName, username, phone, email, password, role: 'pengguna'});
            res.status(200).json({message: 'Terima Kasih telah mendaftar, silahkan masuk !'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    postLogin: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username: username });
            if (!user) {
                return res.status(401).json({message: 'Maaf, username tidak terdaftar !'});   
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(401).json({message: 'Maaf, password yang anda masukkan salah !'});
            }

            if (user.role != 'pengguna')
            {
                return res.status(401).json({message: 'Maaf, akun anda tidak valid !'});
            }

            const token = jwt.sign({
                userId: user._id,
                username: user.username,
                fullname: user.fullName
            },
                "RANDOM-TOKEN", { expiresIn: "3h" }
            );
            return res.status(200).json({ token, username: user.username, fullname: user.fullName });
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    },
}