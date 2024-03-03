const News = require('../models/News');

module.exports = {
    index: async (req, res) => {
        const news = await News.find();
        const alertMsg = req.flash('alertMsg');
        const alertStatus = req.flash('alertStatus');
        const alert = {message: alertMsg, status: alertStatus};
        res.render('pages/news', {news, alert});
    },
    store: async (req, res) => {
        try {
            const { title, publishDate, content, isPopular } = req.body;
            console.log(req.file);
            // console.log({ title, publishDate, content, image, isPopular });
            await News.create({
                title,
                publishDate,
                content,
                image: req.file.filename,
                isPopular,
            });
            req.flash('alertMsg', 'Berhasil ditambahkan, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/news');
        } catch (error) {
            console.log(error.message);
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/news');
        }
    },
    update: async (req, res) => {
        try {
            const { id, title, publishDate, content, isPopular } = req.body;
            if (req.file != undefined)
            {
                await News.updateOne({ _id: id }, {
                    title: title,
                    publishDate: publishDate,
                    content: content,
                    image: req.file.filename,
                    isPopular: isPopular
                });
            } else {
                await News.updateOne({ _id: id }, {
                    title: title,
                    publishDate: publishDate,
                    content: content,
                    isPopular: isPopular
                });
            }
            req.flash('alertMsg', 'Berhasil diupdate, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/news');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/news');
        }
    },
    delete: async (req, res) => {
        try{
            const { id } = req.params;
            await News.deleteOne({ _id: id });
            req.flash('alertMsg', 'Berhasil dihapus, terima kasih !');
            req.flash('alertStatus', 'success');
            res.redirect('/news');
        } catch (error) {
            req.flash('alertMsg', error.message);
            req.flash('alertStatus', 'warning');
            res.redirect('/news');
        }
    }
}