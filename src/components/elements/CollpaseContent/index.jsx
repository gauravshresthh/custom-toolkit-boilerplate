import React from 'react';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';

import { StyledCollapseContent } from './style';

const { Panel } = Collapse;

const CollapseContent = ({
  key,
  label,
  expandIcon,
  arrowPosition,
  arrowColor,
  margin,
  children,
  defaultActiveKey,
}) => {
  return (
    <StyledCollapseContent arrowColor={arrowColor} margin={margin} key={key}>
      <Collapse
        defaultActiveKey={defaultActiveKey}
        expandIconPosition={arrowPosition || 'left'}
        expandIcon={expandIcon}
        ghost
        accordion
      >
        <Panel header={label} key={defaultActiveKey}>
          {children}
        </Panel>
      </Collapse>
    </StyledCollapseContent>
  );
};

CollapseContent.propTypes = {
  label: PropTypes.object,
  children: PropTypes.any,
  key: PropTypes.any,
  expandIcon: PropTypes.element,
  arrowPosition: PropTypes.any,
  arrowColor: PropTypes.string,
  margin: PropTypes.string,
  defaultActiveKey: PropTypes.any,
};

export default CollapseContent;
