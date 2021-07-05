import namedImports from '../posts/namedImports'


export function getAllPostIds() {
  const fileNames = Object.keys(namedImports)
  return fileNames.map(fileName => (
    { params: {id: fileName} }
  ))
}

export function getPostData(id) {
  let data = namedImports[id]

  return {
    id,
    data,
  }
}