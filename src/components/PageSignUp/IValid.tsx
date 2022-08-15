export interface IValid {
  values: Record<string, string>,
  errors: any,
  isValid: boolean,
  // eslint-disable-next-line no-unused-vars
  handleChange: (data: any) => void,
}
