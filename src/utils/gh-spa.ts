export function spa() {
  let { redirect } = sessionStorage;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
};
