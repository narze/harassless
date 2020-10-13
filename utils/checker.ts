import { Dataset } from '../dataset/interface'

export function checker(dataset: Dataset[], input: string): Dataset[] {
  const out = []

  dataset.forEach((data: Dataset) => {
    data.words.forEach((word) => {
      if (input.includes(word)) {
        out.push({
          word,
          type: data.type,
        })
      }
    })
  })

  return out
}
