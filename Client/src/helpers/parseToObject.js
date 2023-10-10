function parseToObject(text, head) {
  if (!head) head = {};
  if (text.length === 0) return head;
  if (Object.keys(head) !== 0 && text[0] !== "[") return text;
  const openTag = /\[[a-zA-Z0-9]*\]/.exec(text)[0];
  const endTag = openTag[0] + "/" + openTag.slice(1);
  const inner = text.slice(openTag.length, text.indexOf(endTag));
  head[openTag.slice(1, openTag.length - 1)] = parseToObject(inner, {});
  return parseToObject(text.slice(openTag.length + endTag.length + inner.length), head);
}

export default parseToObject;