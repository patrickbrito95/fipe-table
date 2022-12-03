// EXERCÍCIO 1

export function maskify(value: string) {
    if (value.length <= 1) return value
  
    const lastCharacters = value.slice(-4)
    const maskedCharacters = value.slice(0,-4).replace(/[a-zA-Z0-9!@#$&()\-`.+,/"\s]/gi, '#')
  
    return [maskedCharacters, lastCharacters].join("")
  }
  
  module.exports = maskify;