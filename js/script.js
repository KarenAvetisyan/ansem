document.addEventListener('DOMContentLoaded', function(){
        /*Easy selector helper function */
        const select = (el, all = false) => {
                if (!el || typeof el !== 'string') return null;
                el = el.trim();
                if (all) {
                        return [...document.querySelectorAll(el)];
                } else {
                        return document.querySelector(el);
                }
        }

        // lang dropdown 
        const langSelector = document.querySelector(".header-lang");
        const selected = langSelector.querySelector(".header-lang__selected");
        const selectedItem = langSelector.querySelector(".header-lang__selected-item");
        const langList = langSelector.querySelector(".header-lang__list");
        const langItems = langSelector.querySelectorAll(".header-lang__list-item");
        
        selected.addEventListener("click", function () {
                langList.classList.toggle("_opened");
        });
        langItems.forEach(item => {
                item.addEventListener("click", function () {
                langItems.forEach(i => i.classList.remove("_active"));
                item.classList.add("_active");
                selectedItem.textContent = item.textContent;
                langList.classList.remove("_opened");
                });
        });
        document.addEventListener("click", function (e) {
                if (!langSelector.contains(e.target)) {
                langList.classList.remove("_opened");
                }
        });

       
})
