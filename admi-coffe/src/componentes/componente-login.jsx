import 'bootstrap/dist/css/bootstrap.min.css';

function Login () {
    return (
        <>
        <div className="container m-0">
        <div className="row justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="col-md-6 ">
                <div className="shadow " style={{width: '800px'}}>
                        <div className="row">
                            <div className="border-img col-6 p-0 "> 
                                <img className='border-img' src="https://img.freepik.com/premium-vector/coffee-shop-logo-design-template_228967-1028.jpg?w=360" alt="Imagen" style={{width: '100%', height: '100%'}}/>
                            </div>
                            <div className="col-6 d-flex flex-column color-card">
                                <div className="h3 d-flex justify-content-center p-2 fw-bold mt-5  color" >Bienvenidos</div>
                                <form className="h-100" action="index.html" method="get">
                                    <div className="form-group mx-3 mb-3 mt-3">
                                        <label for="correo" className='mb-2'>Correo electrónico:</label>
                                        <input type="email" className="form-control rounded-5" id="correo" name="correo" placeholder="Ingrese su correo"/>
                                    </div>
                                    <div className="form-group mb-4 mx-3 ">
                                        <label for="contrasena" className='mb-2'>Contraseña:</label>
                                        <input type="password" className="form-control rounded-5" id="contrasena" name="contrasena" placeholder="Ingrese su contraseña"/>
                                    </div>
                                    <div className='col-12'>
                                    <div className="p-3 mx-5 mb-5 mt-4  d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary rounded-5 w-100">Enviar</button>
                                    </div>
                                    </div>
                                   
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Login;


