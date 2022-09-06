const googleSearch = require('./script');

dbMock = ['dogs.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

test('silly test', () => {
  expect('hello').toBe('hello');
});
test('is running', () => {
  expect(googleSearch('dog', dbMock)).toExist;
});

test('is is working', () => {
  expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com']);
});

test('works with undefined and null input', () => {
  expect(googleSearch(undefined, dbMock)).toEqual([]);
  expect(googleSearch(null, dbMock)).toEqual([]);
});

test('does not return more than 3 matches', () => {
  expect(googleSearch('.com', dbMock).length).toEqual(3);
});
