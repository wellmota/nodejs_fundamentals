export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-z]+)/g

  const pathWithParams = path.replace(routeParametersRegex, '([a-z0-9-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}`)
  console.log(pathRegex)

  return pathRegex
}
