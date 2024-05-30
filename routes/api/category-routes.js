const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({
      include: [{ all: true, nested: true }],
    });

    res.status(200).json((categoryData));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne(
      { where: { id: req.params.id }, returning: true },
      { include: [{ all: true, nested: true }] },
    )
    if (!categoryData) {
      return res.status(422).json({ message: `an error has occurred, category with id ${req.params.id} is not found in our records` });
    }
    res.status(200).json((categoryData));
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err });
  }

});

router.post('/', async (req, res) => {
  try {
    await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json({ message: `new category ${req.body.category_name} successfully created!` })
  } catch (err) {
    res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err });
  };
});

router.put('/:id', async (req, res) => {
  try {
    const [rowsAffected, [updatedCategory]] = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id }, returning: true }
    )
    if (rowsAffected === 0) {
      return res.status(422).json({ message: `an error has occurred, category with id ${req.params.id} is not found in our records` });

    }
    res.status(200).json({ message: `category with id ${req.params.id} has been successfully updated to ${req.body.category_name}!` })
  } catch (err) { res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err }); }
});

router.delete('/:id', async (req, res) => {

  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }, returning: true
    })
    if (!deletedCategory) {
      return res.status(422).json({ message: `an error has occurred, category with id ${req.params.id} is not found in our records` })
    }
    res.status(200).json({ message: `category with id ${req.params.id} has been deleted!` })
  }
  catch (err) { res.status(422).json({ message: "Sorry, your request could not be processed because of the follwoing error - " + err }) }


});

module.exports = router;
