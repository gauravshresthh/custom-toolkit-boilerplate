import React, { useState, useMemo } from 'react';
import { EditorState, ContentState } from 'draft-js';
import createMentionPlugin from '@draft-js-plugins/mention';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createLinkifyPlugin from '@draft-js-plugins/linkify';

import TextEditorIcon from '../../../../../../../assets/images/TextEditorIcon';

import { MentionLink } from './style';

function Index() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const {
    MentionSuggestions,
    plugins,
    Toolbar,
    EmojiSuggestions,
    EmojiSelect,
  } = useMemo(() => {
    const staticToolbarPlugin = createToolbarPlugin();
    const linkifyPlugin = createLinkifyPlugin();
    const { Toolbar } = staticToolbarPlugin;

    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      // theme: mentionsStyles,
      mentionPrefix: '@',
      supportWhitespace: true,
      mentionComponent: ({ children, mention }) => {
        return <MentionLink>{children}</MentionLink>;
      },
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const emojiPlugin = createEmojiPlugin({
      useNativeArt: true,
      selectButtonContent: <TextEditorIcon.Emoji />,
      positionSuggestions: settings => {
        return {};
      },
    });
    const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

    const plugins = [
      mentionPlugin,
      staticToolbarPlugin,
      emojiPlugin,
      linkifyPlugin,
    ];

    return {
      plugins,
      MentionSuggestions,
      Toolbar,
      EmojiSuggestions,
      EmojiSelect,
    };
  }, []);
  return {
    MentionSuggestions,
    Toolbar,
    EditorState,
    editorState,
    setEditorState,
    plugins,
    EmojiSuggestions,
    EmojiSelect,
    ContentState,
  };
}

export default Index;
