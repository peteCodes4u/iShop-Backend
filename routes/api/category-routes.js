const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
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
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne(
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json((categoryData));
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

router.post('/seed', (req, res) => {
  Category.bulkCreate([
    {
      category_name: 'Shirts',
    },
    {
      category_name: 'Shorts',
    },
    {
      category_name: 'Music',
    },
    {
      category_name: 'Hats',
    },
    {
      category_name: 'Shoes',
    },
  ])
  .then(()=> {
    res.status(200).json({message: "Categories table seeded"})
  })
})

module.exports = router;
