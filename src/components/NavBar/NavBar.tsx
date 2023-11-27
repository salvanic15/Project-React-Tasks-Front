import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { Basket, Calendar2Check, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { Task } from "../../types/Task";
import { TaskService } from "../../services/TaskService";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";

const NavBar = () => {

   const navigate = useNavigate();
   const [showModal, setShowModal] = useState(false);
   

   const handleShowModal = () => {
    setShowModal(true);
   }

   const handleCloseModal = () => {
    setShowModal(false);
   }

   // Agregar nueva tarea
   const createTask = async (newTask: Task) => {
    try {
      const result = await TaskService.createTask(newTask);
      console.log('Nueva tarea agregada:', result.id);
      navigate(`/detalle/${result.id}`); // Ir al detalle de la tarea creada
      
      // Muestra una notificacion de exito utilizando react-toastify
      toast.success('Tarea creada correctamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Cerrar automaticamente despues de 2 segundos
      });
    } catch (error) {
      // Muestra una notificacion de error si la creacion de la tarea falla
      toast.error('Error al crear la tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error('Error al crear la tarea:', error);
    }
   };


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>My tasks<Calendar2Check className="m-2"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>

            
          

            {/* ________AGREGAR TAREA________ */}
            <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>

          </Nav>

          <nav className="d-none d-md-flex ms-auto">
              <Nav.Link className="me-4" href='#carrito'>
                <Basket/>
              </Nav.Link>

              <Nav.Link className="ms-3" href='#usuario'>
                <Person/>
              </Nav.Link>
          </nav>

          <div className="d-md-none">
              <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                  <li className="nav-item">
                      <a className="nav-link"  href="#ticket">Ticket</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#perfil">Perfil</a>
                  </li>
              </ul>
          </div>



        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask} />
    </>

  )
}

export default NavBar