function changeHeartColor(element) {
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.style.color = 'red'; // يغير لون القلب إلى الأحمر
}
function changeHeartColor(element) {
    element.classList.toggle('fas');
    element.classList.toggle('far');
    element.classList.toggle('red-heart'); // إضافة/إزالة الفئة red-heart
    if (element.classList.contains('red-heart')) {
        element.style.color = 'red'; // يغير لون القلب إلى الأحمر
    } else {
        element.style.color = ''; // يعيد لون القلب إلى الافتراضي
    }
}