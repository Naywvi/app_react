import React, { useState } from 'react';
const navbar = require('../navbar/index');

function admin_page() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [users, setUsers] = useState([]);
  
  // Gestionnaire pour ajouter un utilisateur
  const handleAddSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:6200/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      alert('Utilisateur ajouté avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      alert('Erreur lors de l\'ajout de l\'utilisateur');
    }
  };

  // Gestionnaire pour modifier un utilisateur
  const handleModifySubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:6200/modify', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      alert('Utilisateur modifié avec succès');
    } catch (error) {
      console.error('Erreur lors de la modification de l\'utilisateur:', error);
      alert('Erreur lors de la modification de l\'utilisateur');
    }
  };

  // Gestionnaire pour supprimer un utilisateur
  const handleDeleteSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:6200/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      alert('Utilisateur supprimé avec succès');
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      alert('Erreur lors de la suppression de l\'utilisateur');
    }
  };

  // Gestionnaire pour lister les utilisateurs
  const handleListSubmit = async () => {
    try {
      const response = await fetch('http://localhost:6200/list', {
        method: 'POST', // Adjusted to GET for fetching data
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log(data);
      setUsers(data);
      alert('Liste des utilisateurs récupérée avec succès');
    } catch (error) {
      console.error('Erreur lors de la récupération de la liste des utilisateurs:', error);
      alert('Erreur lors de la récupération de la liste des utilisateurs');
    }
  };
  
  return (
    <><head>
          <title>q</title>
          <meta name="title" content="{{{meta.title}}}" />

          <meta charset="utf-8" />
          <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
          <link href="/css/index.css" rel="stylesheet" />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </head><div class="demo-page">
      <navbar.default/>
              <div class="demo-page-navigation">
                  <nav>

                          <li>
                              <a href="#intro">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 6H19M9 10H19M5 14H19M9 18H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                  Introduction</a>
                          </li>

                          <li>
                              <a href="#add">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                                   Ajouter</a>
                          </li>

                          <li>
                              <a href="#modify">
                              <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m7.5.5c.35132769 0 .69661025.02588228 1.03404495.07584411l.50785434 1.53911115c.44544792.12730646.86820077.30839026 1.26078721.53578009l1.4600028-.70360861c.5166435.39719686.9762801.86487779 1.3645249 1.388658l-.7293289 1.44720284c.2201691.39604534.3936959.82158734.5131582 1.2692035l1.5298263.5338186c.0390082.29913986.0591302.60421522.0591302.91399032 0 .35132769-.0258823.69661025-.0758441 1.03404495l-1.5391112.50785434c-.1273064.44544792-.3083902.86820077-.5357801 1.26078721l.7036087 1.4600028c-.3971969.5166435-.8648778.9762801-1.388658 1.3645249l-1.4472029-.7293289c-.39604532.2201691-.82158732.3936959-1.26920348.5131582l-.5338186 1.5298263c-.29913986.0390082-.60421522.0591302-.91399032.0591302-.35132769 0-.69661025-.0258823-1.03404495-.0758441l-.50785434-1.5391112c-.44544792-.1273064-.86820077-.3083902-1.26078723-.5357801l-1.46000277.7036087c-.51664349-.3971969-.97628006-.8648778-1.36452491-1.388658l.72932886-1.4472029c-.2203328-.39633993-.39395403-.82222042-.51342462-1.27020241l-1.52968981-.53381682c-.03892294-.29882066-.05900023-.60356226-.05900023-.91299317 0-.35132769.02588228-.69661025.07584411-1.03404495l1.53911115-.50785434c.12730646-.44544792.30839026-.86820077.53578009-1.26078723l-.70360861-1.46000277c.39719686-.51664349.86487779-.97628006 1.388658-1.36452491l1.44720284.72932886c.39633995-.2203328.82222044-.39395403 1.27020243-.51342462l.53381682-1.52968981c.29882066-.03892294.60356226-.05900023.91299317-.05900023z" stroke-width=".933"></path> <circle cx="7.5" cy="7.5" r="3"></circle> </g> </g></svg>
                                 Modifier</a>
                          </li>

                          <li>
                              <a href="#delete">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9.5L12 14.5M12 9.5L7 14.5M19.4922 13.9546L16.5608 17.7546C16.2082 18.2115 16.032 18.44 15.8107 18.6047C15.6146 18.7505 15.3935 18.8592 15.1583 18.9253C14.8928 19 14.6042 19 14.0271 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H14.0271C14.6042 5 14.8928 5 15.1583 5.07467C15.3935 5.14081 15.6146 5.2495 15.8107 5.39534C16.032 5.55998 16.2082 5.78846 16.5608 6.24543L19.4922 10.0454C20.0318 10.7449 20.3016 11.0947 20.4054 11.4804C20.4969 11.8207 20.4969 12.1793 20.4054 12.5196C20.3016 12.9053 20.0318 13.2551 19.4922 13.9546Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                 Supprimer</a>
                          </li>

                          <li>
                              <a href="#list">
                             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                 Lister</a>
                          </li>
                     
                  </nav>
              </div>
              <main class="demo-page-content">
                  <section>
                      <div class="href-target" id="intro"></div>
                      <h1 class="mb-4">👋 Bienvenue sur votre page d'administration 🚀</h1>
                      <p>Cette plateforme est conçue pour vous offrir un contrôle total sur les aspects cruciaux de votre organisation.</p>

                      <div class="mb-3">
                          <h5>🆕 Ajout d'Utilisateurs</h5>
                          <p>Créez de nouveaux comptes d'accès pour votre personnel ou vos clients en quelques clics.</p>
                      </div>

                      <div class="mb-3">
                          <h5>🔄 Redirection vers la Page de Visite Technique</h5>
                          <p>Accédez aux formulaires de "visite technique" pour une gestion précise des opérations.</p>
                      </div>

                      <div class="mb-3">
                          <h5>👀🛠 Visualisation et Gestion des Utilisateurs</h5>
                          <p>Consultez, modifiez ou supprimez des comptes d'utilisateurs directement depuis cette interface.</p>
                      </div>

                      <div class="footer mt-5">
                          <p>Bienvenue dans votre espace d'administration, où efficacité et sécurité se rencontrent pour faciliter votre gestion quotidienne 🌟.</p>
                      </div>
                  </section>

                  <section>
                      <div class="href-target" id="add"></div>
                      <h1>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                      Ajouter un Utilisateur
                      </h1>

                      <div>
                        <form onSubmit={handleAddSubmit}>
                          <div class="form-group">
                            <label for="idadd">Identifiant</label>
                            <input type="text" class="form-control" id="idadd" name="idadd" aria-describedby="idaddHelp" placeholder="Identifiant" required/>
                            <small id="idaddHelp" class="form-text text-muted">Nous ne partagerons jamais votre identifiant avec quelqu'un d'autre.</small>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="firstnameadd">Prenom</label>
                            <input type="text" class="form-control" id="firstnameadd" name="firstnameadd" placeholder="Prenom" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="lastnameadd">Nom</label>
                            <input type="text" class="form-control" id="lastnameadd" name="lastnameadd" placeholder="Nom" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="phoneadd">Numéro de telephone</label>
                            <input type="number" class="form-control" id="phoneadd" name="phoneadd" placeholder="Numéro de telephone" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="passwordadd">Mot de passe</label>
                            <input type="password" class="form-control" id="passwordadd" name="passwordadd" placeholder="Mot de passe" required/>
                          </div>
                          <br></br>
                          <button type="submit" class="btn btn-primary">Ajouter l'utilisateur</button>
                        </form>
                      </div>

                  </section>
                 
                  <section>
                      <div class="href-target" id="modify"></div>
                      <h1>
                      <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 3)"> <path d="m7.5.5c.35132769 0 .69661025.02588228 1.03404495.07584411l.50785434 1.53911115c.44544792.12730646.86820077.30839026 1.26078721.53578009l1.4600028-.70360861c.5166435.39719686.9762801.86487779 1.3645249 1.388658l-.7293289 1.44720284c.2201691.39604534.3936959.82158734.5131582 1.2692035l1.5298263.5338186c.0390082.29913986.0591302.60421522.0591302.91399032 0 .35132769-.0258823.69661025-.0758441 1.03404495l-1.5391112.50785434c-.1273064.44544792-.3083902.86820077-.5357801 1.26078721l.7036087 1.4600028c-.3971969.5166435-.8648778.9762801-1.388658 1.3645249l-1.4472029-.7293289c-.39604532.2201691-.82158732.3936959-1.26920348.5131582l-.5338186 1.5298263c-.29913986.0390082-.60421522.0591302-.91399032.0591302-.35132769 0-.69661025-.0258823-1.03404495-.0758441l-.50785434-1.5391112c-.44544792-.1273064-.86820077-.3083902-1.26078723-.5357801l-1.46000277.7036087c-.51664349-.3971969-.97628006-.8648778-1.36452491-1.388658l.72932886-1.4472029c-.2203328-.39633993-.39395403-.82222042-.51342462-1.27020241l-1.52968981-.53381682c-.03892294-.29882066-.05900023-.60356226-.05900023-.91299317 0-.35132769.02588228-.69661025.07584411-1.03404495l1.53911115-.50785434c.12730646-.44544792.30839026-.86820077.53578009-1.26078723l-.70360861-1.46000277c.39719686-.51664349.86487779-.97628006 1.388658-1.36452491l1.44720284.72932886c.39633995-.2203328.82222044-.39395403 1.27020243-.51342462l.53381682-1.52968981c.29882066-.03892294.60356226-.05900023.91299317-.05900023z" stroke-width=".933"></path> <circle cx="7.5" cy="7.5" r="3"></circle> </g> </g></svg>
                      Modifier un Utilisateur
                      </h1> 
                      <small  class="form-text text-muted">Si vous ne désirez pas modifier un champ merci de le laisser vide.</small>
                      <br></br><br></br>
                      <div>
                        <form onSubmit={handleModifySubmit}>
                          <div class="form-group">
                            <label for="idmodify">Identifiant de l'utilisateur à modifier afin de le reconnaitre dans la base de donnée</label>
                            <input type="text" class="form-control" id="idmodify" name="idmodify" placeholder="Identifiant" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="firstnamemodify">Prenom de l'utilisateur qui sera modifié</label>
                            <input type="text" class="form-control" id="firstnamemodify" name="firstnamemodify" placeholder="Prenom" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="lastnamemodify">Nom de l'utilisateur qui sera modifié</label>
                            <input type="text" class="form-control" id="lastnamemodify" name="lastnamemodify" placeholder="Nom" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="phonemodify">Numéro de telephone de l'utilisateur qui sera modifié</label>
                            <input type="number" class="form-control" id="phonemodify" name="phonemodify" placeholder="Numéro de telephone" required/>
                          </div>
                          <br></br>
                          <div class="form-group">
                            <label for="passwordmodify">Mot de passe de l'utilisateur qui sera modifié</label>
                            <input type="password" class="form-control" id="passwordmodify" name="passwordmodify" placeholder="Mot de passe" required/>
                          </div>
                          <br></br>
                          <button type="submit" class="btn btn-primary">Modifier l'utilisateur</button>
                        </form>
                      </div>

                  </section>

                  <section>
                      <div class="href-target" id="delete"></div>
                      <h1>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9.5L12 14.5M12 9.5L7 14.5M19.4922 13.9546L16.5608 17.7546C16.2082 18.2115 16.032 18.44 15.8107 18.6047C15.6146 18.7505 15.3935 18.8592 15.1583 18.9253C14.8928 19 14.6042 19 14.0271 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H14.0271C14.6042 5 14.8928 5 15.1583 5.07467C15.3935 5.14081 15.6146 5.2495 15.8107 5.39534C16.032 5.55998 16.2082 5.78846 16.5608 6.24543L19.4922 10.0454C20.0318 10.7449 20.3016 11.0947 20.4054 11.4804C20.4969 11.8207 20.4969 12.1793 20.4054 12.5196C20.3016 12.9053 20.0318 13.2551 19.4922 13.9546Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      Supprimer un Utilisateur
                      </h1>

                      <div>
                        <form onSubmit={handleDeleteSubmit}>
                          <div class="form-group">
                            <label for="iddelete">Identifiant de l'utilisateur à supprimer</label>
                            <input type="text" class="form-control" id="iddelete" name="iddelete" placeholder="Identifiant" required/>
                          </div>
                          <br></br>
                          <button type="submit" class="btn btn-primary">Supprimer l'utilisateur</button>
                        </form>
                      </div>

                  </section>

                  <section>
                    <h1>Liste des Utilisateurs</h1>
                    <button onClick={handleListSubmit} className="btn btn-primary">Lister les utilisateurs</button>
                    <ul>
                    {users.map((user, index) => (
                      <li key={index}>
                         Identifiant: {user.identifiant}, Nom: {user.lastName}, Prénom: {user.firstName}, Téléphone: {user.phone}, IdentifiantDB: {user.id}
                      </li>
                    ))}
                    </ul>
                  </section>
                
              </main>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
              crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-jR3m315KQ1s5e5G5s3BL4drD3DwIAnOaSOuL7Ny0e3EfeC/8aZLXrA2F1LHbO5O5" crossorigin="anonymous"></script></>
            
  );
}

export default admin_page;
