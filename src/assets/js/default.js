document.addEventListener('DOMContentLoaded', _ => {
  // select first tab in page
  const tabs = document.getElementById('main-tab-layout')?.querySelectorAll('input[name=page-tabs]')
  if (tabs) tabs[0].checked = true
})
