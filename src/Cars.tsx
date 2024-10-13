type Car = {
    manufacturer: string
    model: string
}
export const Cars = () => {

    const topCars: Car[] = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Производитель</th>
                    <th>Модель</th>
                </tr>
                </thead>
                <tbody>
                {
                    topCars.map((el, index) => {
                        return (
                            <tr>
                                <th>{index + 1}</th>
                                <th>{el.manufacturer}</th>
                                <th>{el.model}</th>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>

        </div>
    );
};