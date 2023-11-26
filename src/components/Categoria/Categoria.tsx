import { useEffect, useState } from "react"
import { Task } from "../../types/Task"
import CategoriasSelector from "../CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import { TaskService } from "../../services/TaskService";


const Categoria = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoria
    
    useEffect(() => {
        const fetchTasks = async () => {
            const taskData = await TaskService.getAllTasks();
            setTasks(taskData);
        };

        fetchTasks();
    }, []);
    
    //Filtra las tareas por la categoria seleccionada
    const filteredTasks = selectedCategory
    ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toLocaleUpperCase())
    : tasks;


    return (
        <div className="container mt-5">
            <CategoriasSelector onSelectedCategory={setSelectedCategory}/> {/*Pasa la funcion para manejar la seleccion de categoria */}
            <CategoriasTareas tasks={filteredTasks}/> {/* Pasa las tareas filtradas al componente CategoriasTareas*/}
        </div>
    )
}

export default Categoria