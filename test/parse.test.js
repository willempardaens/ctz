const { desired_output } = require('./expected')
const { parse_yaml } = require('../lib/parse_yaml')

describe('parse yaml', () => {
  test('test yaml parsing', () => {
    expect(parse_yaml("/test/build.yaml")).toEqual(desired_output)
  });
});

describe('File not found error handling', () => {
  test('throw on file not found', () => {
    try {
      parse_yaml('/test/output.yaml')
    } catch (error) {
      expect(error.message).toBe(/Error: ENOENT: no such file or directory/)
    }
  })
})

describe('Modules not defined error handling', () => {
  test('throw on modules not defined', () => {
    try {
      parse_yaml('/test/files/withoutModules.yaml')
    } catch (error) {
      expect(error.message).toBe(/Modules not defined/)
    }
  })
})

describe('build parameter not defined error handling', () => {
  test('throw when build parameter not defined', () => {
    try {
      parse_yaml('/test/files/incorrectParameter.yaml')
    } catch (error) {
      expect(error.message).toBe(/build parameter is invalid/)
    }
  })
})
