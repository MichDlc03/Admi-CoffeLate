import 'bootstrap/dist/css/bootstrap.min.css';

 function TableEnployee() {

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

          <div className="card">
              <div className="card-body">
              <h5 className="card-title ">Empleados</h5>
              <div id="reportsChart"></div>
              <table className="table">
                <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre Completo</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col">Editar</th>
                <th scope="col">Inhabilitar</th>
              </tr>
                </thead>
                <tbody>
                <tr>
                          <th scope="row">1</th>
                          <td>Paulina May</td>
                          <td>feripau@gmail.com</td>
                          <td>Empleado</td>
                          
                          <td>
                              <button type="button" className="button-colors"><i className="fas fa-edit"></i> Editar</button>
                          </td>
                          <td>
                            <label className="switch-container ">
                              <input type="checkbox" className="switch-input"/>
                              <span className="switch-label">
                                  <span className="switch-indicator"></span>
                              </span>
                          </label>
                          </td>
                          
                      </tr>
                      <tr>
                                <th scope="row">2</th>
                                <td>Argel Cano</td>
                                <td>ArgelCano@gmail.com</td>
                                <td>Empleado</td>
                                <td>
                                    <button type="button" className="button-colors"><i className="fas fa-edit"></i> Editar</button>
                                </td>
                                <td>
                                                <label className="switch-container">
                                <input type="checkbox" className="switch-input"/>
                                <span className="switch-label">
                                    <span className="switch-indicator"></span>
                                </span>
                            </label>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                                            <td>Mich Jimenez</td>
                                            <td>michJimenez@gmail.com</td>
                                            <td>Empleado</td>
                                            <td>
                                                <button type="button" className="button-colors"><i className="fas fa-edit"></i> Editar</button>
                                            </td>
                                            <td>
                                                <label className="switch-container ">
                                <input type="checkbox" className="switch-input"/>
                                <span className="switch-label">
                                    <span className="switch-indicator "></span>
                                </span>
                            </label>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                          <td>Lucas Naal</td>
                          <td>lucasnaals495@gmail.com</td>
                          <td>Empleado</td>
                          <td>
                            <button type="button" className="button-colors"><i className="fas fa-edit"></i> Editar</button>
                        </td>
                        <td>
                                        <label className="switch-container ">
                        <input type="checkbox" className="switch-input"/>
                        <span className="switch-label">
                            <span className="switch-indicator"></span>
                        </span>
                    </label>
                        </td>
                        </tr>
                </tbody>
              </table>

              </div>

        </div>


      </>
    )
    
 }

 export default TableEnployee;
