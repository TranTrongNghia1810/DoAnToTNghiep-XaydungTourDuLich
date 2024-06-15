const TableTour = () => {
    return(
        <>
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Tour</th>
                        <th scope="col">Loại Tour</th>
                        <th scope="col">Giá thành</th>
                        <th scope="col">Ngày khởi hành</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Phương tiện</th>
                        <th scope="col">Mô tả chuyến đi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Đà nẵng </td>
                        <td>Du lịch biển</td>
                        <td>3.500.000</td>
                        <td>20-6-2024</td>
                        <td>3</td>
                        <td>Ô tô</td>
                        <td>Mát</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableTour;