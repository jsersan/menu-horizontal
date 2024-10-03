document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu li');

    function toggleSubmenu(item, event) {
        var submenu = item.querySelector('.submenu');
        if (submenu) {
            event.preventDefault();
            event.stopPropagation();
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    }

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            toggleSubmenu(this, e);
        });

        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 600) {
                var submenu = this.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = 'block';
                }
            }
        });

        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 600) {
                var submenu = this.querySelector('.submenu');
                if (submenu) {
                    submenu.style.display = 'none';
                }
            }
        });
    });

    // Cerrar submenús al hacer clic fuera del menú
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.menu')) {
            document.querySelectorAll('.submenu').forEach(function(submenu) {
                submenu.style.display = 'none';
            });
        }
    });
});