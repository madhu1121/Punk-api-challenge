import React, {useState} from 'react'
import './FiltersList.scss'

import Main from '../../containers/Main/Main'
import BeerCardList from '../BeerCardList/BeerCardList'
import BeerCard from '../BeerCard/BeerCard'
import MainContainer from '../../containers/MainContainer/MainContainer'

const FiltersList = (props) => {

    console.log("filterlist props: ", props);
    const {handleOnChangeABV,handleOnChangeAcidic,handleOnChangeClassic} = props;



    // let filterBeers = [];

    // // const [isChecked,setIsChecked] = useState([false,false,false]);

    // const [isChecked,setIsChecked] = useState(false);

    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    // };

    // console.log("isChecked is" , isChecked);


    // // const MultiselectCheckbox = ({ options, onChange }) => {
    // //     const [data, setData] = useState(options);
      
    // //     const toggle = index => {
    // //       const newData = [...data];
    // //       newData.splice(index, 1, {
    // //         label: data[index].label,
    // //         checked: !data[index].checked
    // //       });
    // //       setData(newData);
    // //       onChange(newData.filter(x => x.checked));
    // // };



    const handleSubmit = event => {
        event.preventDefault();

        // isChecked ? props.data.

        // if (isChecked) {
        //     console.log("if if if");
        //     filterBeers = props.data.filter((beer) => {
        //         console.log("ischecked if statement" , beer.abv);
        //         return beer.abv > 6.0  && beer;

        //     });
        }

        
    //     // if (hasClassic) {
    //     //     filterBeersArr = props.data.filter((beer) => {
    //     //         console.log("here is my beer" , beer);
    //     //         const beerBrewed = beer.first_brewed.split("/")[1];
    //     //         console.log("beerBrewed" , beerBrewed);
    //     //         return beerBrewed < 2010 && beer;

    //     //     });
    //     // }

    //     // if (isChecked) {
    //     //     filterBeersArr = props.data.filter((beer) => {
    //     //         console.log("here is my beer" , beer);
    //     //         return beer.ph < 4.0 && beer;

    //     //     });
    //     // }

    //     console.log("handleevent is checked",filterBeers );


    // }


    // console.log("filterBeersArr after checkboxes", filterBeers);



    return (
        <>
            <form className="FiltersListForm" onSubmit={handleSubmit}>
                <label className="FiltersListForm__label" id="hignABV" htmlFor="">High ABV(&gt;6.0%)
                    <input className="FiltersListForm__input" for="hignABV" type="checkbox" name="abv" value="abv" onChange={handleOnChangeABV} />
                </label>
                
          
                <label className="FiltersListForm__label" id="classic" htmlFor="">Classic Range
                    <input className="FiltersListForm__input" for="classic" type="checkbox" onChange={handleOnChangeClassic} />
                </label>
                
         
                <label className="FiltersListForm__label" id="acidic" htmlFor="">Acidic(ph &lt; 4)
                    <input className="FiltersListForm__input" for="acidic" type="checkbox" onChange={handleOnChangeAcidic} />
                </label>
                
                <button type="submit">search</button>

            </form>
            
        </>
    )
}

export default FiltersList
