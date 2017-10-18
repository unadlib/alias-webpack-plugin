import path from 'path'
import { exec } from 'child_process'
import aliasWebpackPlugin, { resolvePath } from '../dist'

test(`The custom alias file is empty`, () => {
  expect(aliasWebpackPlugin('./test.json')).toEqual({})
})

test(`The custom  Alias file is exist`, () => {
  expect(aliasWebpackPlugin('./__test__/test.json').test).toEqual(path.resolve(path.resolve(__dirname, '../'), require('./test.json').test))
})

test(`Defult alias file is empty`, () => {
  expect(aliasWebpackPlugin()).toEqual({})
})

test(`Defult  Alias file is exist`, () => {
  const execProcess = exec('mv ./__test__/testboo/alias.json ./alias.json && npx babel-node ./__test__/testboo/boo.js', (error, stdout, stderr) =>{
    expect(JSON.parse(stdout).test).toEqual(
      path.resolve(path.resolve(__dirname, '../'), require('../alias.json').test)
    )
  })
  execProcess.on('exit',()=>{
    exec('mv ./alias.json ./__test__/testboo/alias.json')
  });
})

test(`Test 'resolvePath' function`, () => {
  expect(resolvePath('a.js')).toEqual(
    path.resolve(__dirname, '../a.js')
  )
})
