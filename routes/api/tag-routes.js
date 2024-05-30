const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ all: true, nested: true }]
    });
    res.status(200).json((tagData));
  }
  catch (err) { res.status(500).json(err); }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findOne(
      { where: { id: req.params.id }, returning: true },
      { include: [{ all: true, nested: true }] }
    )
    if (!tagData) {
      return res.status(422).json({ message: `an error has occurred, tag with id ${req.params.id} is not found in our records` })
    }
    res.status(200).json((tagData));
  }
  catch (err) { res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err }) }
});

router.post('/', async (req, res) => {
  try {
    await Tag.create({
      tag_name: req.body.tag_name
    });
    res.status(200).json({ message: `new tag ${req.body.tag_name} successfully created!` })
  }
  catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [rowsAffected, [updatedTag]] = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id }, returning: true }
    )
    if (rowsAffected === 0) {
      return res.status(422).json({ message: `an error has occurred, category with id ${req.params.id} is not found in our records` })
    }
    res.status(200).json({ message: `tag with id ${req.params.id} has been successfully updated to ${req.body.tag_name}!` })
  }
  catch (err) { res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err }); }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      }, returning: true
    })
    if (!deletedTag) {
      return res.status(422).json({ message: `an error has occurred, tag with id ${req.params.id} is not found in our records` })
    }
    res.status(200).json({ message: `tag with id ${req.params.id} has been deleted!` })
  }
  catch (err) { res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err }) }
});

module.exports = router;
