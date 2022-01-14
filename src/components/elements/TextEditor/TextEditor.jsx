import React, { useCallback, useEffect, useRef } from 'react';
import { convertToRaw, RichUtils } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import { EditorContainer, ToolbarInnerContainer } from '../../views/Message/DetailView/Typing/TextEditorTest/style';
import { inlineEditorButtons,
  renderInlineStyleButton,
} from '../../views/Message/DetailView/Typing/TextEditorTest/Toolbar/helper';
import useDraftComponents from '../../views/Message/DetailView/Typing/TextEditorTest/Mention/useDraftComponents';
import draftToHtml from 'draftjs-to-html';

export default function CustomTextEditor({ editorPlaceholder, setMeetingObj, meetingObj, inlineButtons }) {
  const {
    plugins,
    Toolbar,
    editorState,
    setEditorState,
  } = useDraftComponents();

  const ref = useRef(null);

  const onChange = useCallback(_editorState => {
    setEditorState(_editorState);
  }, []);
  useEffect(() => {
    setMeetingObj({ ...meetingObj, description: draftToHtml(convertToRaw(editorState.getCurrentContent())) });
  }, [editorState]);

  function toggleInlineStyle(event) {
    event.preventDefault();
    let style = event.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  return (
    <EditorContainer
      onClick={() => {
        //focus on text editor by default
        ref.current.focus();
      }}
    >
      <Editor
        editorKey='editor'
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={ref}
        placeholder={editorPlaceholder}
      />

      <Toolbar>
        {externalProps => (
          <ToolbarInnerContainer>
            <div style={{ display: 'flex' }}>
              {inlineEditorButtons.map((button, idx) =>
                inlineButtons &&
                inlineButtons.includes(button.id) &&
                renderInlineStyleButton(
                  button.value,
                  button.style,
                  toggleInlineStyle,
                  idx,
                ))}
            </div>
          </ToolbarInnerContainer>
        )}
      </Toolbar>

    </EditorContainer>
  );
}
