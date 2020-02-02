const Categories = require('../models/categories-model');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let object = { name: 'Test Category' };
    return categories.create(object)
      .then(record => {
        Object.keys(object).forEach(key => {
          expect(record[key]).toEqual(object[key]);
        });
      })
      .catch(e => console.error('ERROR', e));
  });

  it('can get() a category', () => {
    let object = { name: 'Test Category' };
    return categories.create(object)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(object).forEach(key => {
              expect(category[0][key]).toEqual(object[key]);
            });
          });
      });
  });

  it('can update() a category', () => {
    let object = { name: 'Test Category' };
    let updatedObject = { name: 'Updated Category' };
    return categories.create(object)
      .then(record => {
        return categories.update(record.id, updatedObject)
          .then(category => {
            Object.keys(object).forEach(key => {
              expect(category[key]).not.toEqual(object[key]);
            });
          });
      });
  });

  it('can delete() a category', () => {
    let object = { name: 'Test Category' };
    return categories.create(object)
      .then(record => {
        return categories.delete(record.id)
          .then(category => {
            expect(category).toBeUndefined();
          });
      });
  });
});