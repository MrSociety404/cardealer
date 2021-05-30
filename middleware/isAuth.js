export default async function (ctx) {
  try {
     await ctx.app.$axios.get('https://cardealer.mrsociety404.com/api/dealers/me', {withCredentials: true })
  } catch (err) {
    console.log(err)
    ctx.redirect('/admin')
  }
}