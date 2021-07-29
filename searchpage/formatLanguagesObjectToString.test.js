const formatLanguagesObjectToString = require('./formatLanguagesObjectToString');

const testLangObj = [
  {
    iso639_1: 'en',
    iso639_2: 'eng',
    name: 'English',
    nativeName: 'English',

  },
  {
    iso639_1: 'ru',
    iso639_2: 'rus',
    name: 'Russian',
    nativeName: 'Русский',
  },
];

test('This will return all the names of the languages of the object in a string format', () => {
  expect(formatLanguagesObjectToString(testLangObj)).toBe(' English, Russian');
});
