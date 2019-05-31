<?php
defined('BASEPATH') or exit('No se permite acceso directo');

/**
 * Home controller
 */
class homeController extends Controller
{
  /**
   * string 
   */
  public $nombre;

  /**
   * object 
   */
  public $model;

  /**
   * Inicializa valores 
   */
  public function __construct()
  {
    //$this->model = new conversacionModel();
    
  }

  /**
  * Método estándar
  */
  public function index($params)
  {

    $this->show($params);
  }

  public function show($params)
  {
    header("location: ".BASE_URL."acerca");
     
  }

  public function test($params){
    $this->render(__CLASS__,null, $params);
  }



}