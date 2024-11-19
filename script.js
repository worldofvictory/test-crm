// Отримання елементів
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');

// Перевірка розміру екрана для початкового стану
if (window.innerWidth <= 768) {
    sidebar.classList.add('collapsed');
}

// Додавання обробника кліку для кнопки
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Автоматична адаптація при зміні розміру вікна
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('collapsed');
    } else {
        sidebar.classList.add('collapsed');
    }
});


