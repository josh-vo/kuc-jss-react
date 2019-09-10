import { ColorPicker } from '@kintone/kintone-ui-component';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Plugin extends React.Component {
  constructor(props) {
      super(props);
      this.state = {color: ''};
  };
  render() {
      return (
          <ColorPicker color={this.state.color} />
      );
  }
}
kintone.events.on('app.record.index.show', (event) => {
  ReactDOM.render(
      <Plugin />,
      kintone.app.getHeaderSpaceElement()
  );
});
