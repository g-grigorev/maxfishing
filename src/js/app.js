
const headerSticky = document.querySelector('.header-main__sticky'),
      headerStickyOffset = headerSticky.getBoundingClientRect().top;

window.addEventListener('scroll', function () {
  if (window.scrollY > headerStickyOffset) {
    headerSticky.classList.add("_fixed");
  } else {
    headerSticky.classList.remove("_fixed");
  }
});


const headerSearch = document.querySelector('.header-main__search'),
      headerSearchInput = document.querySelector('input[name="q"]'),
      headerSearchAutocomplete = document.querySelector('.header-search-autocomplete');

headerSearchInput.addEventListener("focusin", (event) => {
  headerSearch.classList.add("header-main__search_overlay");
  headerSearchAutocomplete.style.display = "block";
});
headerSearchInput.addEventListener("focusout", (event) => {
  headerSearch.classList.remove("header-main__search_overlay");
  headerSearchAutocomplete.style.display = "none";
});


//каталог

const catalogNavBtnList = document.querySelectorAll('[data-catnav-btn]'),
      catalogNavPanel = document.querySelector('[data-catnav-panel]'),
      catalogNavCloseList = document.querySelectorAll('[data-catnav-close]');

for (let catalogNavBtn of catalogNavBtnList) {
  catalogNavBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const stickyRect = document.querySelector('.header-main__sticky').getBoundingClientRect(),
          stickyRectTop = stickyRect.top,
          stickyRectHeight = stickyRect.height;
    
    if(!catalogNavPanel.classList.contains("_visible")) {
      document.querySelector('html').style.overflow = "hidden";
      catalogNavPanel.classList.add('_visible');
      for (let catalogNavBtn of catalogNavBtnList) {
        catalogNavBtn.classList.add('_active');
      }

      //вычисляем position:top для .catalog-navigation
      catalogNavPanel.style.top = (stickyRectTop < 0 ? stickyRectHeight : (stickyRectTop + stickyRectHeight)) + 'px';
    } else {
      document.querySelector('html').style.overflow = "auto";
      catalogNavPanel.classList.remove('_visible');
      for (let catalogNavBtn of catalogNavBtnList) {
        catalogNavBtn.classList.remove('_active');
      }
    }

  });
}
for (let catalogNavClose of catalogNavCloseList) {
  catalogNavClose.addEventListener("click", function (e) {
    document.querySelector('html').style.overflow = "auto";
    catalogNavPanel.classList.remove('_visible');
    for (let catalogNavBtn of catalogNavBtnList) {
      catalogNavBtn.classList.remove('_active');
    }
  });
}


//гамбургер
/*
const burgers = document.querySelectorAll('[data-burger]'),
      panel = document.querySelector('[data-panel]');

for (let burger of burgers) {
  burger.addEventListener("click", function (e) {
    panel.classList.toggle('_visible');
  });
}
*/


//фильтр
/*
const filter_btn = document.querySelector('[data-filter-btn]'),
      filter_dropdown = document.querySelector('[data-filter-modal]');

filter_btn.addEventListener("click", function (e) {
  e.stopPropagation();
  filter_dropdown.classList.add('_visible');
});
document.addEventListener("click", function (e) {
  if (
    filter_dropdown.classList.contains("_visible") 
    && !filter_dropdown.contains(e.target)
  )
    filter_dropdown.classList.remove('_visible');
});
*/
