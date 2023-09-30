import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
    return(
        <>
              <head>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link  href="assets/img/favicon.png" rel="icon"/>
        <link   href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>


        <link href="https://fonts.gstatic.com" rel="preconnect"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
        <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet"/>
        <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet"/>
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
        <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet"/>
        <link href="assets/css/style.css" rel="stylesheet"/>


        </head>
         <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img src="assets/img/logo.png" alt=""/>
                    <span className="d-none d-lg-block">Cafeteria</span>
                </a>

                </div>

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Buscar" title="Enter search keyword"/>
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item d-block d-lg-none">
                    <a className="nav-link nav-icon search-bar-toggle " href="#">
                        <i className="bi bi-search"></i>
                    </a>
                    </li>
                    <li className="nav-item dropdown">

                    <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                        <i className="bi bi-bell"></i>
                        <span className="badge bg-primary badge-number">4</span>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                        <li className="dropdown-header">
                        Tienes 4 notificaciones pendientes
                        <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">Ver todo</span></a>
                        </li>
                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li className="notification-item">
                        <i className="bi bi-exclamation-circle text-warning"></i>
                        <div>
                            <h4>Lorem Ipsum</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>hace 30 min.</p>
                        </div>
                        </li>

                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li className="notification-item">
                        <i className="bi bi-x-circle text-danger"></i>
                        <div>
                            <h4>Atque rerum nesciunt</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>hace 30 min.</p>
                        </div>
                        </li>

                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li className="notification-item">
                        <i className="bi bi-check-circle text-success"></i>
                        <div>
                            <h4>Sit rerum fuga</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>hace 30 min.</p>
                        </div>
                        </li>

                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li className="notification-item">
                        <i className="bi bi-info-circle text-primary"></i>
                        <div>
                            <h4>Dicta reprehenderit</h4>
                            <p>Quae dolorem earum veritatis oditseno</p>
                            <p>hace 30 min.</p>
                        </div>
                        </li>

                        <li>
                        <hr className="dropdown-divider"/>
                        </li>
                        <li className="dropdown-footer">
                        <a href="#">Mostrar todas las notificaciones</a>
                        </li>

                    </ul>

                    </li>

                    <li className="nav-item dropdown">

                

                    

                    </li>

                    <li className="nav-item dropdown pe-3">

                    <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                        <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                        <span className="d-none d-md-block dropdown-toggle ps-2">Arturo</span>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                        <li className="dropdown-header">
                        <h6>Arturo</h6>
                        <span>Dueño de Cafeteria</span>
                        </li>
                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li>
                        <a className="dropdown-item d-flex align-items-center" href="perfil_de_usuario.html">
                            <i className="bi bi-person"></i>
                            <span>Mi Perfil</span>
                        </a>
                        </li>
                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                            <i className="bi bi-gear"></i>
                            <span>Ajustes de Cuenta</span>
                        </a>
                        </li>
                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                    
                        <li>
                        <hr className="dropdown-divider"/>
                        </li>

                        <li>
                        <a className="dropdown-item d-flex align-items-center" href="Login.html">
                            <i className="bi bi-box-arrow-right"></i>
                            <span>Cerrar Sesión</span>
                        </a>
                        </li>

                    </ul>
                    </li>

                </ul>
                </nav>

    </header>
        </>
    )
    
}

export default SearchBar;