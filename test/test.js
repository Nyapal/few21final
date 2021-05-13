const main = require('../main.ts')

test('phone formater!!', () => {
    expect(main.format('4159485545')).toBe('(415)948-5545')
})

test('phone formater!!', () => {
    expect(main.format('6196462275')).toBe('(619)646-2275')
})

test('phone formater!!', () => {
    expect(main.format('4045555674')).toBe('(404)555-5674')
})

test('phone formater!!', () => {
    expect(main.format('9293643710')).toBe('(929)364-3710')
})
