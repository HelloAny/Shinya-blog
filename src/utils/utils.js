export const GMTToStr = (time) => {
  let date = new Date(time)
  let Str = date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate()
  return Str
}