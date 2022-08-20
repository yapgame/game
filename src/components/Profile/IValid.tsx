export interface IValid {
  values: Record<string, string>,
  errors: Record<string, string>,
  isValid: boolean,
  handleChange: (data: any) => void,
}
