const list = require.context('../src/', true, /\.js/)

let dirs = list.keys()
  .map(item => item.split('/')[1])
  .filter(item => !item.includes('.js') && item !== 'utils')
dirs = Array.from(new Set(dirs))

const routes = []

dirs.forEach(dir => {
  routes.push({
    title: dir,
    id: dir,
    children: list.keys().filter(item => {
      return item.startsWith('./' + dir + '/')
    }).map(item => {
      const id = item.split('/').pop().replace('.js', '')
      return {
        title: id,
        id,
      }
    })
  })
})

module.exports = routes
