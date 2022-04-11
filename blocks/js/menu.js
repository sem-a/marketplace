document.getElementById('headerBurger').onclick = function () {
    document.getElementById('mobileCategory').classList.add('mobile_category-active');
};
document.getElementById('categoryClose').onclick = function () {
    document.getElementById('mobileCategory').classList.remove('mobile_category-active');
};