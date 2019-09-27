var postcss = require('postcss')

var plugin = require('./')

function run (input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
    expect(result.css).toEqual(output)
    expect(result.warnings()).toHaveLength(0)
  })
}

it('renders no-query fallback with default prefix and one media query expression in array', function () {
  return run(
    '@media (min-width: 600px) { .foo { border: 1px solid red; } } @media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    '@media (min-width: 600px) { .foo { border: 1px solid red; } } @media (min-width: 1024px) { .foo { border: 1px solid yellow; } } .no-query .foo { border: 1px solid yellow; }',
    { query: ['(min-width: 1024px)'] }
  )
})

it('renders no-query fallback with default prefix and multiple media query expressions in array', function () {
  return run(
    '@media (min-width: 600px) { .foo { border: 1px solid red; } } @media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    '@media (min-width: 600px) { .foo { border: 1px solid red; } } .no-query .foo { border: 1px solid red; } @media (min-width: 1024px) { .foo { border: 1px solid yellow; } } .no-query .foo { border: 1px solid yellow; }',
    { query: ['(min-width: 600px)', '(min-width: 1024px)'] }
  )
})

it('renders no-query fallback with custom prefix', function () {
  return run(
    '@media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    '@media (min-width: 1024px) { .foo { border: 1px solid yellow; } } .nobp .foo { border: 1px solid yellow; }',
    { prefix: '.nobp', query: ['(min-width: 1024px)'] }
  )
})

it('renders no no-query fallback if fallback is deactivated', function () {
  return run(
    '@media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    '@media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    { fallback: false, query: ['(min-width: 1024px)'] }
  )
})

it('renders no no-query fallback if query array is empty', function () {
  return run(
    '@media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    '@media (min-width: 1024px) { .foo { border: 1px solid yellow; } }',
    { query: [] }
  )
})
