import { useNavigate } from "react-router-dom"

export const Aggiungitodo = () => {
    const navigate = useNavigate()


    return (
        <div className="container">
            <div className="card shadow mt-4">
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-dark btn-sm mt-3 ms-2" onClick={() => navigate('/')}>torna alla lista</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center"><h5>Inserisci Todo</h5></div>
                    <div className="col-12"><hr /></div>
                    <div className="col-md-6 col-12 mt-3 ps-4 pe-4 mb-2">
                        <label htmlFor="titolo" className="pb-2">Titolo:</label>
                        <input id="titolo" type="text" className="form-control" placeholder="Inserisci..." />
                    </div>

                    <div className="col-md-6 col-12 mt-3 ps-4 pe-4 mb-2">
                        <label htmlFor="Prorità" className="pb-2">Prorità:</label>
                        <select id="Prorità" className="form-control">
                            <option>Scegli...</option>
                            <option>Critica</option>
                            <option>Importante</option>
                            <option>Minore</option>
                            <option>Normale</option>
                        </select>
                    </div>
                    <div className="col-md-12 col-12 mt-3 ps-4 pe-4 mb-2">
                        <label htmlFor="descrizione" className="pb-2">Descrizione:</label>
                        <textarea id="descrizione" className="form-control" placeholder="Inserisci..." />
                    </div>
                    <div className="col-12 text-center mt-4">
                        <button onClick={() => {
                            navigate('/')
                        }} className="btn btn-dark btn-sm mb-2">Aggiungi task</button>
                    </div>
                </div>
            </div>
        </div>)
}