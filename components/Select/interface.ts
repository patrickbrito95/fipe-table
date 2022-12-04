export interface ISelectProps {
  options: { label: string; value: number }[]
  label: string
  placeholder: string
  onChange: (any: any) => void
  value: {
    label: string
    value: number
  }[] | null
}