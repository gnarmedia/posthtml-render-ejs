const processCoreTag = require("./core-tags.js");

module.exports = ({ tag, attrs, content }) => {
  const namespace = tag.slice(0, tag.indexOf(":"));

  // console.log(`${tag}: ${namespace}`);

  switch (namespace) {
    case "c":
      return processCoreTag({ tag, attrs, content });

    default:
      break;
  }
};
