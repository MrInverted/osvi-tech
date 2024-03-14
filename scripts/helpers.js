export const userInfo = {
  name: "",
  tel: "",
  course: "",
  question: ""
}

export const addActiveClass = (item, activeClass, disabledClass) => {
  item.classList.add(activeClass);
  item.classList.remove(disabledClass);
}

export const removeActiveClass = (item, activeClass, disabledClass) => {
  item.classList.remove(activeClass);
  item.classList.add(disabledClass);
}

export const openAndCloseChooser = (chooserNodeList) => {
  chooserNodeList.forEach(item => {
    const title = item.querySelector(".chooser__title");

    title.onclick = () => {
      if (item.classList.contains("closed")) {
        for (let item of chooserNodeList) {
          addActiveClass(item, "opened", "closed");
        }
      } else {
        for (let item of chooserNodeList) {
          removeActiveClass(item, "opened", "closed");
        }
      }
    }
  })
}

export const switchTabs = (tabsNodeList, chooserNodeList) => {
  tabsNodeList.forEach((item, index) => {
    item.onclick = () => {
      for (let i = 0; i < tabsNodeList.length; i++) {
        removeActiveClass(tabsNodeList[i], "active", "disabled");
        removeActiveClass(chooserNodeList[i], "shown", "hidden");
      }

      addActiveClass(item, "active", "disabled");
      addActiveClass(chooserNodeList[index], "shown", "hidden");
    }
  })
}

export const setMainTitle = (titleNodeList, badgeNodeList, chooserNodeList) => {
  badgeNodeList.forEach(badge => {
    badge.onclick = () => {
      for (let title of titleNodeList) {
        title.textContent = badge.textContent;
      }

      for (let item of chooserNodeList) {
        removeActiveClass(item, "opened", "closed");
      }

      userInfo.course = badge.textContent;
    }
  })
}

export const closePopup = (popupBlock, popupContent, popupCloseButton) => {
  popupBlock.onclick = (e) => {
    if (!e.composedPath().includes(popupContent)) {
      popupBlock.classList.remove("opened");
    }
  }

  popupCloseButton.onclick = () => {
    popupBlock.classList.remove("opened");
  }
}