export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email || email.length <= 0) return "Email não pode ser vazio."
  if (!re.test(email)) return 'Ooops! Email inválido!'
  return ''
}
