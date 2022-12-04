export interface IOptionSelect {
    label: string
    value: string
  }


  export interface IFormSearch {
    brandOptions: any[]
    modelOptions: any[]
    yearOptions: any[]
    values: any
    handleChange: (value: any, name: string) => void
    year: any
    model: any,
  }