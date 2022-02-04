const storeScrollPosition = () => {
  // save current menu scroll position in session storage
  const sidebar = document.querySelector('mcc-sheet aside > .mcc-menu')
  sessionStorage.setItem('MDS_ScrollTop', sidebar.scrollTop)
}

const setScrollPosition = () => {
  // read menu scroll position from storage and apply
  const scrollTop = sessionStorage.getItem('MDS_ScrollTop')
  const sidebar = document.querySelector('mcc-sheet aside > .mcc-menu')
  sidebar.scrollTop = scrollTop
}

const highlightCurrentPage = () => {
  // highlight current page in nav sidebar
  const currentPath = window.location.pathname
  const navButton = document.querySelector(`mcc-sheet aside > .mcc-menu a[href="${currentPath}"]`)
  navButton.classList.add('mu-is-active')
  navButton.closest('details').open = true
  navButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

document.addEventListener('DOMContentLoaded', _ => {
  document.querySelectorAll('mcc-sheet aside > .mcc-menu a')
    .forEach(a => {
      a.addEventListener('click', _ => {
        storeScrollPosition()
      })
    })

  setScrollPosition()
  highlightCurrentPage()
})

const navSheet = document.getElementById('site-nav-sheet')
function toggleNavSheet() {
  navSheet.classList.toggle('mcc-sheet--in-view')
}

const desktop = window.matchMedia('(min-width: 960px)')
console.log(desktop)
if (desktop.matches) {
  navSheet.setAttribute('modal', 'true')
  navSheet.setAttribute('scrim', 'false')
  navSheet.classList.add('mcc-sheet--in-view')
}

const mobile = window.matchMedia('(max-width: 960px)')
console.log(mobile)
if (mobile.matches) {
  navSheet.setAttribute('modal', 'false')
  navSheet.setAttribute('scrim', 'true')
  navSheet.classList.remove('mcc-sheet--in-view')
}

// Window resize
window.addEventListener('resize', function() {
  const sheet = document.getElementById('site-nav-sheet')
  if (window.innerWidth > 960) {
    sheet.setAttribute('modal', 'true')
    sheet.setAttribute('scrim', 'false')
    sheet.classList.add('mcc-sheet--in-view')
  } else if (window.innerWidth < 960) {
    sheet.setAttribute('modal', 'false')
    sheet.setAttribute('scrim', 'true')
    sheet.classList.remove('mcc-sheet--in-view')
  }
});