const requiredValidation = (value: any, required: boolean) => {
  if (required && !value) return 'This field is required.'
  else if (required && value && typeof value === 'object' && value.length === 0)
    return 'This field is required.'
}

const maxValidation = (value: any, max: number) => {
  if (max && value && value.length > max)
    return `This field must be equal or less than ${max} characters.`
}

const minValidation = (value: any, min: number) => {
  if (min && value && value.length < min)
    return `This field must be equal or more than ${min} characters.`
}

const laterValidation = (value: any, later: boolean) => {
  if (later && value) {
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const start = new Date(value)
    const currentYear = new Date().getFullYear()
    const year = new Date(value).getFullYear()
    if (start <= today) {
      return 'The date should be later than today.'
    }
    if (year < currentYear - 100 || year > currentYear + 100)
      return 'Bad format'
  }
}

const precentValidation = (value: any) => {
  if (parseFloat(value) < 0 || parseFloat(value) > 100)
    return 'This field mut be between 0 and 100.'
}

const hoursValidation = (value: any) => {
  if (parseInt(value) < 0 || parseInt(value) > 24)
    return 'This field must be between 0 and 24.'
}

const minutesValidation = (value: any) => {
  if (parseInt(value) < 0 || parseInt(value) > 60)
    return 'This field mut be between 0 and 60.'
}

const numberValidation = (value: any) => {
  if (value && typeof value === 'string')
    if (
      value.match('^[+-]?([0-9]+.?[0-9]*|.[0-9]+)$') === null ||
      value.match('^[+-]?([0-9]+.?[0-9]*|.[0-9]+)$')?.length === 0
    )
      return 'This field must be number without space.'
}

export {
  requiredValidation,
  maxValidation,
  minValidation,
  laterValidation,
  precentValidation,
  hoursValidation,
  minutesValidation,
  numberValidation,
}
