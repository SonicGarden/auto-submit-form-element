const isInputElement = (element: HTMLElement): element is HTMLInputElement | HTMLSelectElement => {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement
}

export class AutoSubmitForm extends HTMLElement {
  private registeredEvents: readonly string[] = []

  connectedCallback(): void {
    const events = this.events
    this.registeredEvents = events
    for (const event of events) {
      this.addEventListener(event, this.onSubmit)
    }
  }

  disconnectedCallback(): void {
    for (const event of this.registeredEvents) {
      this.removeEventListener(event, this.onSubmit)
    }

    this.registeredEvents = []
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

  get events(): readonly string[] {
    const eventsAttr = this.getAttribute('events')
    if (eventsAttr) {
      return eventsAttr
        .split(',')
        .map(event => event.trim())
        .filter(event => event.length > 0)
    }
    return ['change']
  }

  set events(value: string[]) {
    if (value && value.length > 0) {
      this.setAttribute('events', value.join(','))
    } else {
      this.removeAttribute('events')
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
