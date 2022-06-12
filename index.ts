type objectWithKey = {
  [key: string]: any;
}

export default function dotpath (str: string) {
  var parts = str.split('.')
  var len = parts.length

  return function parse (obj: objectWithKey) {
    var testKey: string

    for (var i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = obj[testKey]
    }

    return obj
  }
}
