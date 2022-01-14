import { ContentState, convertFromRaw, convertToRaw } from 'draft-js';

const getIndicesOf = (searchStr, str, caseSensitive) => {
  let tempStr = str;
  let tempSearchStr = searchStr;
  const searchStrLen = tempSearchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  let startIndex = 0;
  let index;
  const indices = [];
  if (!caseSensitive) {
    tempStr = tempStr.toLowerCase();
    tempSearchStr = tempSearchStr.toLowerCase();
  }

  while ((index = tempStr.indexOf(tempSearchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
};

const getEntityRanges = (text, mentionName, mentionKey) => {
  const indices = getIndicesOf(mentionName, text);

  if (indices.length > 0) {
    return indices.map(offset => ({
      key: mentionKey,
      length: mentionName.length,
      offset,
    }));
  }

  return null;
};

const funcToMapMentionIdToName = (mentionArray, textMessage) => {
  let str = textMessage;
  // TODO the string i get is not correctly parsed
  // solution is to store the draft js block and entity map in database then render in draft js

  mentionArray &&
  mentionArray.map(data => {
    if (str && str.includes(data.userid)) {
      str = str.replaceAll(`@${data.userid}`, `@${data.fullname}`);
    }
  });
  const RemoveSpace = str.replaceAll('&nbsp;', ' ');
  var regex = /(<([^>]+)>)/gi;

  return RemoveSpace.replace(regex, '');
};

const createMentionEntities = (text, tags) => {
  const modifiedStr = funcToMapMentionIdToName(tags, text);
  const rawContent = convertToRaw(ContentState.createFromText(modifiedStr));
  const rawState = tags && tags.map(tag => ({
    type: 'mention',
    mutability: 'IMMUTABLE',
    data: {
      mention: {
        id: tag.userid || tag.userId,
        name: tag.fullname || tag.name,
        userId: tag.userid || tag.userId,
      },
    },
  }));

  rawContent.entityMap = [...rawState];

  rawContent.blocks = rawContent.blocks.map(block => {
    const ranges = [];
    tags.forEach((tag, index) => {
      // console.log('what is tag', block, tag, index);
      const entityRanges = getEntityRanges(
        block.text,
        `@${tag.fullname || tag.name}`,
        index,
      );

      if (entityRanges) {
        ranges.push(...entityRanges);
      }
    });

    return { ...block, entityRanges: ranges };
  });

  return convertFromRaw(rawContent);
};

export default createMentionEntities;
