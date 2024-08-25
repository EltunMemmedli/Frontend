// HTML məzmununu bir string kimi saxlayırsınız
let html = `<div></div>`;

// Bu string-i DOM-a əlavə edirsiniz
document.body.insertAdjacentHTML('beforeend', html);

// Yeni əlavə etdiyiniz elementi seçirsiniz
let addedElement = document.body.lastElementChild;

// Stil tətbiq edirsiniz
addedElement.style.cssText = "padding: 30px;";
