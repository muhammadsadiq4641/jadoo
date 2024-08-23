import { id } from "date-fns/locale";
import Europe from "../public/assets/full-europe.png";
import LonDon from "../public/assets/london-uk.png";
import Rome from "../public/assets/rome-italy.png";
import Calculator from "../public/assets/calculator.png";
import Customization from "../public/assets/customization.png";
import Flight from "../public/assets/flight.png";
import LocalEvent from "../public/assets/local-event.png";
export const destanitionData = [
    {
        id:1,
        image:Rome,
        name:`Rome, Italty`,
        price:`$5,42k`,
        trip:`10 Days Trip`
    },
    {
        id:2,
        image:LonDon,
        name:`London, UK`,
        price:`$4.2k`,
        trip:`12 Days Trip`
    },
    {
        id:3,
        image:Europe,
        name:`Full Europe`,
        price:`$15k`,
        trip:`28 Days Trip`
    }
]


export const CategoryData =[
    {
        id:1,
        image:Calculator ,
        header:"Calculated Weather",
        text:"Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        id:2,
        image:Flight ,
        header:"Best Flights",
        text:"Engrossed listening. Park gate sell they west hard for the."
    },
    {
        id:1,
        image:LocalEvent ,
        header:"Local Events",
        text:"Barton vanity itself do in it. Preferd to men it engrossed listening. "
    },
    {
        id:1,
        image:Customization ,
        header:"Customization",
        text:"We deliver outsourced aviation services for military customers"
    },
]