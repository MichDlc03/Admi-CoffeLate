import 'bootstrap/dist/css/bootstrap.min.css';

function ModalButton() {
    return (
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

        <main id="main" className="main">
        <div className="pagetitle">
      <h1>Tabla de empleados</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
          <li className="breadcrumb-item active">Tabla de Empleados</li>
        </ol>
      </nav>
    </div>
          <section  className="section dashboard">
            <div className="col-lg-12">
                <div className="row">
                    
          <div className="col-12">
          <div className="d-flex justify-content-end p-3"> </div>
          <button type="button" className="button-colors" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa fa-plus"></i> Crear
          </button>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-bold" id="exampleModalLabel">Crear empleado</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="d-flex">
                    <div className="mb-3 mx-3">
                      <label  className="form-label ">Nombre:</label>
                      <input type="nombre" className="form-control" />
                    </div>
                    <div className="mb-3 mx-3">
                      <label className="form-label ">Apellidos:</label>
                      <input type="apellidos" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3 mx-3">
                    <label  className="form-label "  >Télefono:</label>
                    <input type="telefono" className="form-control" maxlength="10" />
                  </div>
                  <div className="mb-3 mx-3">
                    <label for="exampleFormControlInput1" className="form-label ">Correo electrónico:</label>
                    <input type="correo" className="form-control" id="exampleFormControlInput1"/>
                  </div>
                  <div className="mb-3 mx-3">
                    <label  className="form-label ">Rol:</label>
                    <select className="form-control form-select" aria-label="Default select example">
                      <option selected>Selecciona un rol</option>
                      <option value="1">Encargado</option>
                      <option value="2">Mesero</option>
                      <option value="3">Administrador</option>
                      <option value="4">Cocinero</option>
                      <option value="5">Contador</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-primary">Guardar</button>
                </div>
              </div>
            </div>
          </div>
          </div>
                    

                </div>

            </div>

          </section>
          
          </ main>
        
              
        </>
    )

    
}

export default ModalButton; 