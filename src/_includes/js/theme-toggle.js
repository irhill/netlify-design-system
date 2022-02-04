const toggleSwitch = document.querySelector('#theme-toggle')
const ball = document.querySelector('.ball')
const currentTheme = window.localStorage.getItem('theme')

function setDarkTheme () {
  toggleSwitch.checked = true
  ball.setAttribute('style', 'transform:translatex(24px);')
}

if (currentTheme) {
  document.documentElement.setAttribute('data-color-theme', currentTheme)
  if (currentTheme === 'dark') {
    setDarkTheme()
  }
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    setDarkTheme()
  }
}

toggleSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-color-theme', 'dark')
    window.localStorage.setItem('theme', 'dark')
    ball.setAttribute('style', 'transform:translatex(24px);')
  } else {
    document.documentElement.setAttribute('data-color-theme', 'light')
    window.localStorage.setItem('theme', 'light')
    ball.setAttribute('style', 'transform:translatex(0%);')
  }
})

function showSiteNav() {
  const sheet = document.getElementById('site-nav-sheet')
  sheet.show()

}

