import { LitElement, customElement, css, html } from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    :host > h1,
    :host > span {
      width: 100%;
      text-align: center;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1>lit-element-parcel</h1>
        <span>Make changes in <b>public/src/</b> and refresh this page</span>
      </div>
    `;
  }
}
