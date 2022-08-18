export class AutoSubmitForm extends HTMLElement {
  connectedCallback(): void {
    this.addEventListener('change', this.onSubmit)
  }

  disconnectedCallback(): void {
    this.removeEventListener('change', this.onSubmit)
  }

  onSubmit = (event: Event): void => {
    const target = event.target as HTMLElement
    if (target instanceof HTMLInputElement && target.files?.length === 0) {
      return
    }

    const form = target.closest('form')
    if (form?.requestSubmit) {
      form.requestSubmit()
    } else {
      form?.submit()
    }
  }
}

declare global {
  interface Window {
    AutoSubmitForm: typeof AutoSubmitForm
  }
}

if (!window.customElements.get('auto-submit-form')) {
  window.AutoSubmitForm = AutoSubmitForm
  window.customElements.define('auto-submit-form', AutoSubmitForm)
}
