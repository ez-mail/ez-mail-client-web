import React, { useRef, useState } from 'react';

export default function MyComponent() {
  const contentEditableRef = useRef(null);
  const [html, setHtml] = useState('<div>Hello</div>');

  const handleChange = e => {
    setHtml(e.target.value);
  };

  return (
    <ContentEditable
      innerRef={contentEditableRef}
      html={html}
      disabled={false}
      onChange={handleChange}
      tagName="div"
    />
  );
}

function ContentEditable(props) {
  const lastHtml = props.html;
  const el =
    typeof props.innerRef === 'function'
      ? { current: null }
      : React.createRef();

  const getEl = () =>
    (props.innerRef && typeof props.innerRef !== 'function'
      ? props.innerRef
      : el
    ).current;
}
