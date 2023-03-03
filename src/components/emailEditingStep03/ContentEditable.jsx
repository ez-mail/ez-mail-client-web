import React, { memo, useEffect, useRef } from 'react';
import deepEqual from 'fast-deep-equal';

import { moveCaretToEnd, normalizeHtml } from '../../utils/contentEditable';

const ContentEditable = memo(
  function ContentEditable({
    tagName,
    innerRef,
    contentHTML,
    onChange,
    isContentEditable,
    onBlur,
    onKeyDown,
    style,
    link,
    onClick,
  }) {
    const ContentEditableTag = `${tagName}`;
    const $editorRef = useRef();
    let lastHTML = contentHTML;

    const get$Editor = () => (innerRef || $editorRef).current;

    const emitChange = originalEvent => {
      const $editor = get$Editor();

      if (!$editor) {
        return console.log('$editor 가 할당 안됨!');
      }

      if ($editor.innerHTML !== lastHTML) {
        const customEvent = {
          ...originalEvent,
          target: {
            value: $editor.innerHTML,
          },
        };

        onChange(customEvent);
      }

      lastHTML = $editor.innerHTML;
    };

    useEffect(() => {
      const $editor = get$Editor();

      if (!$editor) {
        return console.log('$editor 가 할당 안됨!');
      }

      if (contentHTML !== $editor.innerHTML) {
        $editor.innerHTML = contentHTML;
      }

      lastHTML = contentHTML;

      moveCaretToEnd($editor);
    });

    return (
      <ContentEditableTag
        contentEditable={isContentEditable}
        ref={innerRef || $editorRef}
        dangerouslySetInnerHTML={{ __html: contentHTML }}
        onInput={emitChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        style={style}
        href={link}
        onClick={onClick}
      />
    );
  },
  (prevProps, nextProps) => {
    if (
      normalizeHtml(nextProps.contentHTML) !==
      normalizeHtml(prevProps.innerRef.current.innerHTML)
    ) {
      return false;
    }

    return (
      prevProps.isContentEditable === nextProps.isContentEditable &&
      deepEqual(prevProps.style, nextProps.style)
    );
  },
);

export default ContentEditable;
