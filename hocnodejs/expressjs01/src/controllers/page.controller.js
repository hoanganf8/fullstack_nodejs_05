module.exports = {
  about: (req, res) => {
    console.log(req.session.message);
    res.render("pages/about");
  },
  contact: (req, res) => {
    const user = req.user;
    console.log(user);
    res.render("pages/contact");
  },
};
