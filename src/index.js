const React = {
  createElement: (tag, attr, content) => {
    let tagElem = document.createElement(tag);

    if (attr) {
      Object.keys(attr).forEach(key => {
        if (key === "textContent") {
          tagElem.textContent = attr[key];
        } else if (key === "style") {
          let tagStyles = Object.entries(attr[key]);
          tagStyles.forEach(item => {
            tagElem.style[item[0]] = item[1]; //item[0] = key, item[1] = value
          });
        } else {
          tagElem[key] = attr[key];
        }
      });
    }

    if (content && Array.isArray(content)) {
      content.forEach(item => {
        if (typeof item === "string") {
          return tagElem.appendChild(document.createTextNode(item));
        } else {
          return tagElem.appendChild(item);
        }
      });
    } else if (content) {
      tagElem.appendChild(document.createTextNode(content));
    }
    return tagElem;
  },

  render: (app, element) => {
    console.log(app);
    return element.appendChild(app);
  }
};

const app = React.createElement("div", { style: { backgroundColor: "red" } }, [
  React.createElement("span", undefined, "Hello world"),
  React.createElement("br"),
  "This is just a text node",
  React.createElement("div", { textContent: "Text content" })
]);

React.render(app, document.getElementById("root"));
