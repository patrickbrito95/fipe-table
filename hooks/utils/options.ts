export const options = (options: any) => {
    const array: any[] = []
    options?.map((item: any) => {
      array.push({ label: item.nome, value: item.codigo })
    })
    return array
  }