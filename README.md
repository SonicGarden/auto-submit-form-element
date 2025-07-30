# &lt;auto-submit-form&gt; element

A custom element that automatically submits forms when input values change, providing a seamless user experience for filtering, searching, and real-time form interactions.

## Features

- 🚀 **Zero configuration**: Works out of the box with any form
- ⚡ **Flexible events**: Listen to `change`, `blur`, or custom events
- 🎯 **Targeted submission**: Use specific submit buttons with the `submitter` attribute
- 🌐 **Framework agnostic**: Pure Web Components, works with any framework
- 📱 **Lightweight**: Minimal footprint with no dependencies

## Installation

```bash
npm install @sonicgarden/auto-submit-form-element
```

## Usage

### Import

Import as ES modules:

```js
import '@sonicgarden/auto-submit-form-element'
```

### Examples

#### Basic Auto-Submit

The most common use case - automatically submit a form when a select dropdown changes. Perfect for filtering lists or search results.

```html
<auto-submit-form>
  <form action="/" method="get">
    <select name="filter">
      <option></option>
      <option value="1">option1</option>
      <option value="2">option2</option>
    </select>
  </form>
</auto-submit-form>
```

#### Using a Specific Submit Button

When you have multiple submit buttons in a form and want to use a specific one for auto-submission. The `submitter` attribute specifies which button should be used.

```html
<form action="/" method="post">
  <auto-submit-form submitter="#filter-country">
    <select name="country">
      <option></option>
      <option value="jp">JP</option>
      <option value="us">US</option>
    </select>
    <input type="submit" id="filter-country" name="filter" formnovalidate hidden />
  </auto-submit-form>
  <select name="city">
  </select>
  <input type="submit" value="Save" />
</form>
```

#### Auto-Submit on Blur

Useful for search inputs where you want to submit when the user finishes typing and moves away from the field.

```html
<auto-submit-form events="blur">
  <form action="/" method="get">
    <input type="text" name="search" placeholder="Search...">
  </form>
</auto-submit-form>
```

#### Multiple Event Types

Listen to multiple events for more responsive behavior. This example submits both when the value changes and when the user moves away from the field.

```html
<auto-submit-form events="change,blur">
  <form action="/" method="get">
    <select name="filter">
      <option></option>
      <option value="1">option1</option>
      <option value="2">option2</option>
    </select>
  </form>
</auto-submit-form>
```

### Attributes

| Attribute | Description | Default |
|-----------|-------------|---------|
| `events` | Event names to listen for auto-submission, comma-separated. Supports any DOM event like `change`, `blur`, `input`, etc. | `change` |
| `submitter` | CSS selector for the submit button to use when auto-submitting. If not specified, the form's default submission behavior is used. | `undefined` |

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].
- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## License

Distributed under the MIT license. See LICENSE for details.
