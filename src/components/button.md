---
title: Button
navigation: button
tabs:
  - title: Usage
    body: "## this is the content from the usage tab"
  - title: Style
    body: "## this is the content from the style tab"
  - title: Code
    hook: code
  - title: Accessibility
    body: "## this is the content from the accessibility tab"
code:
  example: <button class="mcc-button">Button text</button>
  body: |-
    ## This is the code section and here's a code block

    ```html
    <button class="mcc-button">Button text</button>
    ```

    # Preview
  preview:
    variants:
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
            </button>
        name: Default
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: With icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <span class="mcc-button__label">Button</span>
              <mcc-icon name="arrows_long_right" aria-hidden="true"></mcc-icon>
            </button>
        name: With trailing icon
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--primary
              - name: Secondary
                value: mcc-button--secondary
              - name: Success
                value: mcc-button--success
              - name: Danger
                value: mcc-button--danger
              - name: Warning
                value: mcc-button--warning
              - name: Info
                value: mcc-button--info
              - name: Light
                value: mcc-button--light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As outline
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--outline-primary
              - name: Secondary
                value: mcc-button--outline-secondary
              - name: Success
                value: mcc-button--outline-success
              - name: Danger
                value: mcc-button--outline-danger
              - name: Warning
                value: mcc-button--outline-warning
              - name: Info
                value: mcc-button--outline-info
              - name: Light
                value: mcc-button--outline-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--text-primary
              - name: Secondary
                value: mcc-button--text-secondary
              - name: Success
                value: mcc-button--text-success
              - name: Danger
                value: mcc-button--text-danger
              - name: Warning
                value: mcc-button--text-warning
              - name: Info
                value: mcc-button--text-info
              - name: Light
                value: mcc-button--text-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--outline-primary
              - name: Secondary
                value: mcc-button--outline-secondary
              - name: Success
                value: mcc-button--outline-success
              - name: Danger
                value: mcc-button--outline-danger
              - name: Warning
                value: mcc-button--outline-warning
              - name: Info
                value: mcc-button--outline-info
              - name: Light
                value: mcc-button--outline-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
      - template:
          lang: html
          code: |-
            <button class="mcc-button mcc-button--icon-only">
              <mcc-icon name="home" aria-hidden="true"></mcc-icon>
              <span class="mcc-button__label">Button</span>
            </button>
        name: As text and icon only
        modifiers:
          - name: Colour
            selector: button
            classes:
              - name: Primary
                value: mcc-button--text-primary
              - name: Secondary
                value: mcc-button--text-secondary
              - name: Success
                value: mcc-button--text-success
              - name: Danger
                value: mcc-button--text-danger
              - name: Warning
                value: mcc-button--text-warning
              - name: Info
                value: mcc-button--text-info
              - name: Light
                value: mcc-button--text-light
          - name: Size
            selector: button
            classes:
              - name: Default
                value: mcc-button
              - name: Small
                value: mcc-button--sm
              - name: Large
                value: mcc-button--lg
        attributes:
          - name: Disabled
            attribute: disabled
            selector: button
---
