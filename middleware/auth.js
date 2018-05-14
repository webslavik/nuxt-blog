export default function(context) {
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
    console.log(`You don't have a Token`)
  }
}