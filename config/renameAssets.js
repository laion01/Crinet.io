const fs = require('fs')
const path = require('path')

const dist = path.resolve(__dirname, '../dist/template/resources')

function renameDir (dir = 'js') {
  fs.readdir(path.resolve(dist, dir), (err, files) => {
    if (err) throw err

    files.some(file => {
      if (/main.*/.test(file)) {
        fs.rename(path.resolve(dist, dir, file), path.resolve(dist, dir, `main.${dir}`), (err) => {
          if (err) throw err
          console.log(`Renamed: ${file} -> main.${dir}`)
        })
        return true
      } else {
        return false
      }
    })
  })
}

function renameAssets () {
  renameDir('js')
  renameDir('css')
}

module.exports = renameAssets