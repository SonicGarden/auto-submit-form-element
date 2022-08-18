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
