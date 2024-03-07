import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import logo from '../../assets/img/logo.png';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://192.168.1.224:6200/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Échec de la connexion.');

      const data = await response.json();
      if (data.cookie) {
        const maxAge = 2 * 60 * 60;
        document.cookie = `auth=${data.cookie}; path=/; max-age=${maxAge}; Secure`;

        const generateToken = () => {
          return Math.random().toString(36).substring(2, 15) + 
                 Math.random().toString(36).substring(2, 15);
        };
    
        // Création du cookie avec le token
        const token = generateToken();
        document.cookie = `SESSION_TOKEN=${token}; path=/; max-age=${maxAge}; Secure`;
        navigate('/vt'); // Assurez-vous que ce chemin est correct
      }
    } catch (error) {
      setErrorMessage('Échec de la connexion. Veuillez réessayer.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <sectionLogin className="h-100">
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"></link>
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              {/* Mettez le chemin de votre logo ici */}
              <img src={logo} alt="logo" width="350" />
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">S'identifier</h1>
                <form className="needs-validation" noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">Identifiant</label>
                    <input id="email" type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} required autoFocus />
                    <div className="invalid-feedback">
                      Identifiant requis
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="text-muted" htmlFor="password">Mot de passe</label>
                    <input id="password" type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                    <div className="invalid-feedback">
                      Mot de passe requis
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto">
                      S'identifier
                    </button>
                  </div>
                  {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                </form>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright &copy; 2023-2024 &mdash; Helios Green
            </div>
          </div>
        </div>
      </div>
    </sectionLogin>
  );
}

export default LoginPage;
