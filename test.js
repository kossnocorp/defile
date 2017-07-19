import test from 'ava'
import defile from '.'

const passArgs = (...whatever) => whatever

test('it generates link component with predefined href prop', t => {
  const Component = defile(passArgs, '/path/to/file')
  const [tag, props, children] = Component({ children: 42 })
  t.true(tag === 'a')
  t.deepEqual(props, { href: '/path/to/file' })
  t.true(children === 42)
})

test('it pass children arrays', t => {
  const Component = defile(passArgs, '/path/to/file')
  const [, , c1, c2, c3] = Component({ children: [1, 2, 3] })
  t.true(c1 === 1)
  t.true(c2 === 2)
  t.true(c3 === 3)
})

test('it passes extra props to the tag element', t => {
  const Component = defile(passArgs, '/path/to/file')
  const args = Component({ children: 42, a: 1, b: 2 })
  t.deepEqual(args, ['a', { href: '/path/to/file', a: 1, b: 2 }, 42])
})

test('it allows to redefine the tag name', t => {
  const Component = defile(passArgs, '/path/to/file', {tag: 'b'})
  const args = Component({ children: 42 })
  t.deepEqual(args, ['b', { href: '/path/to/file' }, 42])
})

test('it allows to redefine the href prop name', t => {
  const Component = defile(passArgs, '/path/to/file', {tag: 'audio', prop: 'src'})
  const args = Component({ children: 42 })
  t.deepEqual(args, ['audio', { src: '/path/to/file' }, 42])
})

test('it allows to pass default props', t => {
  const Component = defile(passArgs, '/path/to/file', {defaultProps: {target: '_blank'}})
  const args = Component({ children: 42 })
  t.deepEqual(args, ['a', { href: '/path/to/file', target: '_blank' }, 42])
})
