import React from 'react';

import { Container } from '../Styles/mentionStyle';

import Image from '../../../../../../elements/Image/Image.jsx';

function EntryComponent(props) {
  const { mention, theme, searchValue, isFocused, ...parentProps } = props;

  return (
    <Container>
      <div {...parentProps}>
        <div className="mentionSuggestionsEntryContainer">
          <div className="mentionSuggestionsEntryContainerLeft">
            <Image src={mention.profilePic} width={22} height={22} />
          </div>

          <div className="mentionSuggestionsEntryContainerRight">
            <div className="mentionSuggestionsEntryText">{mention.name}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default EntryComponent;
