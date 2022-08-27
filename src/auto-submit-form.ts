const isInputElement = (element: HTMLElement): element is HTMLInputElement | HTMLSelectElement => {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement
}

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

    const form = isInputElement(target) ? target.form : target.closest('form')
    const submitter = this.submitter ? form?.querySelector<HTMLElement>(this.submitter) : undefined
    if (form?.requestSubmit) {
      form.requestSubmit(submitter)
    } else {
      submitter ? submitter.click() : form?.submit()
    }
  }

  get submitter(): string | undefined {
    return this.getAttribute('submitter') || undefined
  }

  set submitter(value) {
    if (value) {
      this.setAttribute('submitter', value)
    } else {
      this.removeAttribute('submitter')
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
