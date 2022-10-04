import './search.css'
import Suggection from '../../Suggection/suggection'

const DesktopSeacrh = () => {
    return (
        <div className='pc-search'>
            <div className="desktop_seacrh flex hide-for-small-mobile">
                <input id='pc_search' type="text" placeholder="Search.." />
                <button type="">Search</button>
                <div className="suggsation">
                    <Suggection
                        movieName="Avatar (2008)"
                        language="Hindi,English,Tamil,Telagu"
                        subtitle="English"
                    />
                    <Suggection
                        movieName="Avatar (2008)"
                        language="Hindi,English,Tamil,Telagu"
                        subtitle="English"
                    />
                </div>
            </div>
        </div>
    )
}
export default DesktopSeacrh;