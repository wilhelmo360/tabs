function asTabs(node) {
  	var tabs = [];
	
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE)
        tabs.push(child);
    }

    var tabList = document.createElement("div");
    tabList.setAttribute("id", "tabList");
  
    tabs.forEach(function(tab, i) {
      var button = document.createElement("button");
      button.textContent = tab.getAttribute("data-tabname");
      button.addEventListener("click", function() { selectTab(i); });
      tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);

    function selectTab(n) {
      tabs.forEach(function(tab, i) {
        if (i == n)
          tab.style.display = "";
        else
          tab.style.display = "none";
      });
      for (var i = 0; i < tabList.childNodes.length; i++) {
        tabList.childNodes[i].style.marginRight = "3px";
        if (i == n)
          tabList.childNodes[i].style.background = "violet";
        else
          tabList.childNodes[i].style.background = "";
      }
    }
    selectTab(0);
}
asTabs(document.querySelector("#wrapper"));