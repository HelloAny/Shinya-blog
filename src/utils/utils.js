export const GMTToStr = (time) => {
  let date = new Date(time)
  let Str = date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate()
  return Str
}

export const GMTToArr = (time) => {
  let data = new Date(time)
  let Str = [data.getFullYear(), data.getMonth() + 1, data.getDate()]
  return Str
}