import React from 'react';

class File extends React.Component {
  uploadedFiles = () => {
    return [...this.fileReader.files];
  };

  render() {
    return (
      <input
        type='file'
        multiple
        onChange={this.props.changed}
        ref={(element) => (this.fileReader = element)}
      />
    );
  }
}

export default File;
