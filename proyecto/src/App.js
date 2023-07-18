import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App(){
    return (
            <div>
                <NavBar/>
                <ItemListContainer greeting={"Tienda de Articulos de Limpieza"}/>
            </div>
    )
}


export default App;