// const domNode = {
//   tagName: 'ul',
//   props: { class: 'list' },
//   children: [{
//     tagName: 'li',
//     children: ['toutiao']
//   }, {
//     tagName: 'li',
//     children: ['douyin']
//   }]
// };


(function(window) {

  function render(virtualDom) {
    // 不是对象，创建文本节点
    if(typeof virtualDom !== 'object') {
      return document.createTextNode(virtualDom);
    }
    // 根据tagName创建节点
    const node = document.createElement(virtualDom.tagName);
    // 设置属性
    for (let key in virtualDom.props) {
      if (virtualDom.props.hasOwnProperty(key)) {
        node.setAttribute(key, virtualDom.props[key])
      }
    }
    // 递归插入子节点
    virtualDom.children.forEach((item) => {
      node.appendChild(render(item));
    })

    return node;
  }

  window.render = render;

})(window)