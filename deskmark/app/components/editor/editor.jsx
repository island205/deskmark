/* eslint react/no-danger: 0 */
import React, {PropTypes} from 'react';

import './editor.scss';

const propTypes = {
  item: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

class Editor extends React.Component {

  render() {

    let { item, onSave, onCancel } = this.props;

    item = item || {
      title: '',
      content: ''
    };

    let saveText = item.id ? '保存' : '创建';

    let save = () => onSave({
      ...item,
      title: this.refs.title.value,
      content: this.refs.content.value
    });

    return (
      <div className="col-md-8 editor-component">
        <div className="control-area">
          <button onClick={save} className="btn btn-success">{saveText}</button>
          <button onClick={onCancel} className="btn secondary">取消</button>
        </div>
        <div className="edit-area">
          <input ref="title" placeholder="请填写标题" defaultValue={item.title} />
          <textarea ref="content" placeholder="请填写内容" defaultValue={item.content} />
        </div>
      </div>
    );
  }
}

Editor.propTypes = propTypes;

export default Editor;
