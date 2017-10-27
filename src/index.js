import fs from 'fs'
import path from 'path'

const DEFAULT_ALIAS_PATH = [
  './alias.json',
  './alias.config.js'
]

export const resolvePath = (relativePath) => {
  const currentDirectory = fs.realpathSync(process.cwd())
  return path.resolve(currentDirectory, relativePath)
}

export const getAliasPath = (aliasFileList) => {
  let aliasPath
  for (const aliasFile of aliasFileList) {
    if (aliasFile) {
      const aliasFilePath = resolvePath(aliasFile)
      const isExists = fs.existsSync(aliasFilePath)
      if (isExists) {
        aliasPath = aliasFilePath
        break
      }
    }
  }
  return aliasPath
}

export default (filePath) => {
  const aliasPath = getAliasPath([
    filePath,
    ...DEFAULT_ALIAS_PATH,
  ])
  const aliasSetting = {}
  if (aliasPath) {
    const aliasOptions = require(aliasPath)
    Object.entries(aliasOptions).forEach(([key, relativePath]) => {
      aliasSetting[key] = resolvePath(relativePath)
    })
  }
  return aliasSetting
}
