import axios from "axios";

export default function findAll({users}) {
    return (
        <>
            <h1><b> Vietnam's COVID-19 Information</b></h1>
            <table className={"table caption-top"}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr>
                            <td>{user.Date}</td>
                            <td>{user.Confirmed}</td>
                            <td>{user.Active}</td>
                            <td>{user.Recovered}</td>
                            <td>{user.Deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export const getStaticProps = async () => {
    const reponse = await axios.get('https://api.covid19api.com/total/country/vietnam')
    return {
        props: {
            users: reponse.data
        }
    }
}