import {assert} from '@open-wc/testing'
import '../src/auto-submit-form'

describe('custom-element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('auto-submit-form')
      assert.equal('AUTO-SUBMIT-FORM', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.AutoSubmitForm()
      assert.equal('AUTO-SUBMIT-FORM', el.nodeName)
    })
  })
})
