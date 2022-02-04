const showVariant = variantName => {
  const id = variantName.toLowerCase().replace(/\s+/g, '_')
  const variants = document.getElementsByClassName('variant-container')

  // make sure all variants are hidden
  Array.from(variants).forEach(p => {
    p.classList.remove('mu-d-flex')
    p.classList.add('mu-d-none')
  })

  // show selected variant
  const selectedVariant = document.getElementById(id)
  selectedVariant.classList.remove('mu-d-none')
  selectedVariant.classList.add('mu-d-flex')

  // update variant title
  const nameElem = document.getElementById('variant-name')
  nameElem.innerText = variantName

  // close variant selector dropdown
  const variantSelector = document.getElementById('variant-selector')
  variantSelector.open = false
}

const modifyVariant = (template) => {
  // get classes
  const classForms = document.querySelectorAll('div.variant-container:not(.mu-d-none) div.variant-modifiers form.class-form')
  const classes = Array.from(classForms).map(form => {
    const { selector, value } = form.querySelector('input[type=radio]:checked').dataset
    return { selector, value }
  })

  // get attributes
  const attributeForm = document.querySelector('div.variant-container:not(.mu-d-none) div.variant-modifiers form.attribute-form')
  const attributes = Array.from(attributeForm.querySelectorAll('input[type=checkbox]')).map(attr => {
    const { selector, attributeDetails } = attr.dataset
    const { attribute, value } = JSON.parse(attributeDetails)
    const checked = attr.checked
    return { selector, attribute, value, checked }
  })

  // get handle container to and reset template
  const container = document.querySelector('div.variant-container:not(.mu-d-none) div.variant-template')
  container.innerHTML = template

  // apply classes
  classes.forEach(toApply => {
    const elem = container.querySelector(toApply.selector)
    elem.classList.add(toApply.value)
  })

  // apply attributes
  attributes.forEach(attr => {
    const elem = container.querySelector(attr.selector)
    attr.checked ? elem.setAttribute(attr.attribute, attr.value || "") : elem.removeAttribute(attr.attribute)
  })
}

document.addEventListener('DOMContentLoaded', _ => {
  // trigger first variant into view
  const selectorElem = document.getElementById('variant-selector')
  const firstItem = selectorElem.querySelector('ul.mcc-dropdown__menu li:first-of-type button')
  firstItem.click()

  // set initial state for each variant
  const variants = document.querySelectorAll('div.variant-container')
  Array.from(variants).forEach(variant => {
    // set initial form values
    const classForms = variant.querySelectorAll('div.variant-modifiers form.class-form')
    const classesToApply = Array.from(classForms).map(form => {
      const firstOption = form.querySelector('input[type=radio]:first-of-type')
      firstOption.checked = true

      const { selector, value } = firstOption.dataset
      return { selector, value }
    })

    // modify the variant state
    const container = variant.querySelector('div.variant-template')
    classesToApply.forEach(toApply => {
      const elem = container.querySelector(toApply.selector)
      elem.classList.add(toApply.value)
    })
  })
})
