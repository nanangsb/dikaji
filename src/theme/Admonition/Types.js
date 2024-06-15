import React from 'react';
import AdmonitionTypeNote from '@theme/Admonition/Type/Note';
import AdmonitionTypeTip from '@theme/Admonition/Type/Tip';
import AdmonitionTypeInfo from '@theme/Admonition/Type/Info';
import AdmonitionTypeWarning from '@theme/Admonition/Type/Warning';
import AdmonitionTypeDanger from '@theme/Admonition/Type/Danger';
import AdmonitionTypeCaution from '@theme/Admonition/Type/Caution';

function Box1(props) {
  return (
    <div style={{margin: '20px', backgroundColor: '#e5f6e6', borderLeft: 'solid green 5px', padding: 15, borderRadius: '10px'}}>
      <h5 style={{fontSize: 20}}>{props.title}</h5>
      <div>{props.children}</div>
    </div>
  );
}
function Box2(props) {
  return (
    <div style={{margin: '20px', backgroundColor: '#e5f6e6', padding: 15, borderRadius: '10px'}}>
      <div style={{fontSize: 20}}>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
}
const admonitionTypes = {
  note: AdmonitionTypeNote,
  tip: AdmonitionTypeTip,
  info: AdmonitionTypeInfo,
  warning: AdmonitionTypeWarning,
  danger: AdmonitionTypeDanger,
  'box1': Box1,
  'box2': Box2,
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
  secondary: (props) => <AdmonitionTypeNote title="secondary" {...props} />,
  important: (props) => <AdmonitionTypeInfo title="important" {...props} />,
  success: (props) => <AdmonitionTypeTip title="success" {...props} />,
  caution: AdmonitionTypeCaution,
};
export default {
  ...admonitionTypes,
  ...admonitionAliases,
};
