# &lt;auto-submit-form&gt; element

Auto submit form element.

## Installation

```
$ npm install --save @sonicgarden/auto-submit-form-element
```

## Usage

### Script

Import as ES modules:

```js
import '@sonicgarden/auto-submit-form-element'
```

### Html

**Basic**

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

**With `submitter` attribute**

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

**With `events` attribute**

```html
<auto-submit-form events="blur">
  <form action="/" method="get">
    <input type="text" name="search" placeholder="Search...">
  </form>
</auto-submit-form>
```

**With multiple events**

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

**Attributes**

- `events`: Event names to listen for auto-submission, comma-separated. (default: `change`)
- `submitter`: Submitter selector. (default: `undefined`)

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
