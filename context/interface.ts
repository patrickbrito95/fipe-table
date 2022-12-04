export interface ICarsContext {
    values: any
    handleChange: (value: any, name: string) => void 
  }

  export interface IValues {
    automobile: string
    brand: string
    model: string
    year: string
  }


  export interface IOptions {
    label: string
    value: string
  }