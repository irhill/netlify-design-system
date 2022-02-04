---
title: Sheet
navigation: /sheet
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
  example: fdsafdsafsaf
  body: dfsafdsafdsafsafdsa
  preview:
    variants:
      - template:
          lang: html
          code: >-
            <mcc-sheet id="preview-top-sheet" modal="true" class="mcc-sheet--top
            mcc-sheet--absolute">
              <div style="padding: var(--spacing-07); background-color: var(--ui-01, #fff); height: 100%;">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus..</p>
                <button class="mcc-button mcc-button--secondary" onclick="hideTopSheet()">Hide sheet</button>
              </div>
            </mcc-sheet>

            <button class="mcc-button mcc-button--primary" onclick="showTopSheet()">Show Sheet</button>


            <script>
               function showTopSheet() {
                 const topSheet = document.getElementById(`preview-top-sheet`)
                 topSheet.show()
               }
               function hideTopSheet() {
                 const topSheet = document.getElementById(`preview-top-sheet`)
                 topSheet.hide()
               }
            </script>
        name: Top
      - template:
          lang: html
          code: >-
            <mcc-sheet id="preview-bottom-sheet" modal="true"
            class="mcc-sheet--bottom mcc-sheet--absolute">
              <div style="padding: var(--spacing-07); background-color: var(--ui-01, #fff); height: 100%;">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus..</p>
                <button class="mcc-button mcc-button--secondary" onclick="hideBottomSheet()">Hide sheet</button>
              </div>
            </mcc-sheet>

            <button class="mcc-button mcc-button--primary" onclick="showBottomSheet()">Show Sheet</button>


            <script>
               function showBottomSheet() {
                 const bottomSheet = document.getElementById(`preview-bottom-sheet`)
                 bottomSheet.show()
               }
               function hideBottomSheet() {
                 const bottomSheet = document.getElementById(`preview-bottom-sheet`)
                 bottomSheet.hide()
               }
            </script>
        name: Bottom
      - template:
          lang: html
          code: >-
            <mcc-sheet id="preview-left-sheet" modal="true"
            class="mcc-sheet--left mcc-sheet--absolute">
              <div style="padding: var(--spacing-07); background-color: var(--ui-01, #fff); height: 100%;">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus..</p>
                <button class="mcc-button mcc-button--secondary" onclick="hideLeftSheet()">Hide sheet</button>
              </div>
            </mcc-sheet>

            <button class="mcc-button mcc-button--primary" onclick="showLeftSheet()">Show Sheet</button>


            <script>
               function showLeftSheet() {
                 const leftSheet = document.getElementById(`preview-left-sheet`)
                 leftSheet.show()
               }
               function hideLeftSheet() {
                 const leftSheet = document.getElementById(`preview-left-sheet`)
                 leftSheet.hide()
               }
            </script>
        name: Left
      - template:
          lang: html
          code: >-
            <mcc-sheet id="preview-right-sheet" modal="true"
            class="mcc-sheet--right mcc-sheet--absolute">
              <div style="padding: var(--spacing-07); background-color: var(--ui-01, #fff); height: 100%;">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus..</p>
                <button class="mcc-button mcc-button--secondary" onclick="hideRightSheet()">Hide sheet</button>
              </div>
            </mcc-sheet>

            <button class="mcc-button mcc-button--primary" onclick="showRightSheet()">Show Sheet</button>


            <script>
               function showRightSheet() {
                 const rightSheet = document.getElementById(`preview-right-sheet`)
                 rightSheet.show()
               }
               function hideRightSheet() {
                 const rightSheet = document.getElementById(`preview-right-sheet`)
                 rightSheet.hide()
               }
            </script>
        name: Right
---
