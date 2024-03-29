const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    const redirect_url = req.session.redirect_url;

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.redirect_url = redirect_url; // stores user's intended destination before login page

      res.status(200).json({ user: userData, redirect_url: redirect_url });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const redirect_url = req.session.redirect_url;

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.redirect_url = redirect_url; // stores user's intended destination before login page

      res.json({ user: userData, message: 'You are now logged in!', redirect_url: redirect_url });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/', async (req, res) => {
  try {
  const userData = await User.findAll({
    include: [{ model: Post }], 
    attributes: { exclude: ['password'] },
  })

  const users = userData.map((user) => user.get({plain: true}))
  res.status(200).json(users);

} catch (err) { 
  res.status(400).json(err)
}
});


module.exports = router;
