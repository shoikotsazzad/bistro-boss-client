
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>
    //         {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // }, [])

    return (
        <section className="md:m-12 md:pb-10 ">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to="/menu">
                    <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;