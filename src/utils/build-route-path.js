export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-z]+)/g
  console.log(path.matchAll(routeParametersRegex))
  return new RegExp()
}
