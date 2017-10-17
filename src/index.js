import fs from 'fs'
import path from 'path'

const DEFAULT_FILE_PATH = './alias.json'

export const resolvePath = (relativePath) => {
  const currentDirectory = fs.realpathSync(process.cwd())
  return path.resolve(currentDirectory, relativePath)
}

export default (filePath = DEFAULT_FILE_PATH) => {
  const aliasPath = resolvePath(filePath)
  const isExists = fs.existsSync(aliasPath)
  let aliasSetting = {}
  if (isExists) {
    const aliasOptions = require(aliasPath)
    Object.entries(aliasOptions).forEach(([key, relativePath]) => {
      aliasSetting[key] = resolvePath(relativePath)
    })
  }
  return aliasSetting
}
