import path from 'path'
import { exec, execSync } from 'child_process'
import aliasWebpackPlugin, { resolvePath, getAliasPath } from '../dist'

test(`The custom alias file is empty`, () => {
  expect(aliasWebpackPlugin('./test.json')).toEqual({})
})

test(`The custom  Alias file is exist`, () => {
  expect(aliasWebpackPlugin('./__test__/test.json').test).toEqual(path.resolve(path.resolve(__dirname, '../'), require('./test.json').test))
})

test(`Defult alias file is empty`, () => {
  expect(aliasWebpackPlugin()).toEqual({})
})

test(`Defult  'alias.json' alias file is exist`, () => {
  exec('mv ./__test__/testboo/alias.json ./alias.json && npx babel-node ./__test__/testboo/boo.js', (error, stdout, stderr) =>{
    expect(JSON.parse(stdout).test).toEqual(
      path.resolve(path.resolve(__dirname, '../'), require('../alias.json').test)
    )
  })
  exec('mv ./alias.json ./__test__/testboo/alias.json')
})

test(`Defult 'alias.config.js' alias file is exist`, () => {
  exec('mv ./__test__/testboo/alias.config.js ./alias.config.js && npx babel-node ./__test__/testboo/boo.js', (error, stdout, stderr) =>{
    expect(JSON.parse(stdout).test).toEqual(
      path.resolve(path.resolve(__dirname, '../'), require('../alias.config.js').test)
    )
  })
  exec('mv ./alias.config.js ./__test__/testboo/alias.config.js')
})

test(`Test 'resolvePath' function`, () => {
  expect(resolvePath('a.js')).toEqual(
    path.resolve(__dirname, '../a.js')
  )
})

test(`Test 'getAliasPath' function`, () => {
  expect(getAliasPath([])).toEqual(undefined)
})

test(`Test 'resolvePath' function`, () => {
  expect(getAliasPath(['../test.json'])).toEqual(
    undefined
  )
})

test(`Test 'resolvePath' function`, () => {
  expect(getAliasPath(['./__test__/test.json'])).toEqual(
    path.resolve(__dirname, './test.json')
  )
})

test(`Test 'resolvePath' function`, () => {
  expect(getAliasPath([undefined,'./__test__/test.json'])).toEqual(
    path.resolve(__dirname, './test.json')
  )
})


