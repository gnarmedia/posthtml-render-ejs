module.exports = ({ tag, attrs, content }) => {
  switch (tag) {
    case "c:if":
      return `<% if (${attrs.test}) { %>${content}<% } %>`;

    case "c:choose":
      return `<% if (${attrs}) { %>${content}<% } %>`;

    default:
      break;
  }
};
