<?php 
$has_permiso=false;
$has_sesion_valida=false;
if ($has_sesion_valida=Session::valid_session()) {
  $has_permiso=Session::tiene_permiso($_SESSION['id']);
}

 ?>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand p-0 m-0" href="<?php echo BASE_URL ?>"><img src="img/logo1.png" width="" height="50" class="d-inline-block align-top p-0 mr-5" alt="Neuropediatria" min-width="175px" id="hlogoi"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSVA" aria-controls="navbarSVA" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSVA">
    
    
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="<?php echo BASE_URL ?>">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo BASE_URL ?>enfermedades/">Enfermedades</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo BASE_URL ?>acerca/">Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="<?php echo BASE_URL ?>manual/">Manual de Usuario</a>
      </li>
    </ul>
      
    </ul>
    
  </div>
</nav>
<span class="d-block bg-sv divu"></span>

<?php  
    
 ?>


