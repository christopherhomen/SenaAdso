function LoginView(props) {
    return (
        <div className="w-75 mx-auto">
            <div
                class="text-center"
                data-new-gr-c-s-check-loaded="14.1085.0"
                data-gr-ext-installed=""
            >
                <main class="form-signin w-100 m-auto">
                    <form>
                        <br />
                        <img
                            class="mb-4"
                            src={require("../../assets/img/logo/user4.png")}
                            alt=""
                            width="250"
                            height="250"
                        />
                        <h1 class="h3 mb-3 fw-normal">Por favor, incie sesión</h1>

                        <div class="form-floating my-3">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Usuario</label>
                        </div>
                        <div class="form-floating my-3">
                            <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label for="floatingPassword">Contraseña</label>
                        </div>
                        <button
                            class="w-100 btn btn-lg btn-primary my-3"
                            type="button"
                        >
                            Ingresar
                        </button>
                        <p class="mt-5 mb-3 text-muted">© 2022</p>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default LoginView;
