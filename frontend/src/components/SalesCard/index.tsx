import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="dsmeta-data-apartir-width-992px">ID</th>
                                <th className="dsmeta-data-apartir-width-576px">Data</th>
                                <th>Vendedor</th>
                                <th className="dsmeta-data-apartir-width-992px">Visitas</th>
                                <th className="dsmeta-data-apartir-width-992px">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="dsmeta-data-apartir-width-992px">#341</td>
                                <td className="dsmeta-data-apartir-width-576px">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="dsmeta-data-apartir-width-992px">15</td>
                                <td className="dsmeta-data-apartir-width-992px">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="dsmeta-data-apartir-width-992px">#341</td>
                                <td className="dsmeta-data-apartir-width-576px">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="dsmeta-data-apartir-width-992px">15</td>
                                <td className="dsmeta-data-apartir-width-992px">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="dsmeta-data-apartir-width-992px">#341</td>
                                <td className="dsmeta-data-apartir-width-576px">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="dsmeta-data-apartir-width-992px">15</td>
                                <td className="dsmeta-data-apartir-width-992px">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesCard