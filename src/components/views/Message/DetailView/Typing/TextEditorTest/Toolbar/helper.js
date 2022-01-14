import React from 'react';

import { CustomInlineStylesButton } from '../style';

import TextEditorIcon from '../../../../../../../assets/images/TextEditorIcon';

export const inlineStyleButtons = [
  {
    id: 'B',
    value: <TextEditorIcon.Bold />,
    style: 'BOLD',
  },
  {
    id: 'I',
    value: <TextEditorIcon.Italics />,
    style: 'ITALIC',
  },

  {
    id: 'U',
    value: <TextEditorIcon.UnderLine />,
    style: 'UNDERLINE',
  },
  {
    id: 'S',
    value: <TextEditorIcon.StrikeThrough />,
    style: 'STRIKETHROUGH',
  },
  {
    id: 'C',
    value: <TextEditorIcon.Code />,
    style: 'CODE',
  },
];

export const inlineEditorButtons = [
  {
    id: 'B',
    value: <TextEditorIcon.Bold />,
    style: 'BOLD',
  },

  {
    id: 'I',
    value: <TextEditorIcon.Italics />,
    style: 'ITALIC',
  },

  {
    id: 'U',
    value: <TextEditorIcon.UnderLine />,
    style: 'UNDERLINE',
  },
  {
    id: 'C',
    value: <TextEditorIcon.FormatText />,
    style: 'CODE',
  },
  {
    id: 'Numbering',
    value: <TextEditorIcon.Numbering />,
    style: '',
  },
  {
    id: 'Bulleting',
    value: <TextEditorIcon.Bulleting />,
    style: '',
  },
];

export function renderInlineStyleButton(
  value,
  style,
  toggleInlineStyle,
  idx,
  forwhom = 'chat',
  setSelectedStyleButton,
  selectedStyleButton,
  button,
) {
  return (
    <div
      style={{
        height: '36px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomInlineStylesButton
        type="button"
        key={idx}
        data-style={style}
        onMouseDown={toggleInlineStyle}
        forwhom={forwhom}
        selectedStyleButton={selectedStyleButton && selectedStyleButton.includes(button.id)}
        onClick={() => {
          if (!selectedStyleButton.includes(button.id)) {
            setSelectedStyleButton([...selectedStyleButton, button.id]);
          } else {
            setSelectedStyleButton(
              selectedStyleButton.filter(id => id !== button.id),
            );
          }
        }}
      >
        {value}
      </CustomInlineStylesButton>
    </div>
  );
}
