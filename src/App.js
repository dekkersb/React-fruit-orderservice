import './App.css';
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {

    const [banana, setBananas] = useState(0);
    const [strawberry, setStrawberries] = useState(0);
    const [apple, setApples] = useState(0);
    const [kiwi, setKiwis] = useState(0);

    const [checkedTerms, toggleCheckedTerms] = React.useState(false);
    const { handleSubmit, formState: {errors}, register} = useForm();

    function resetNumbers () {
        setBananas (0)
        setStrawberries(0)
        setApples (0)
        setKiwis (0)
    }

    function onFormSubmit(data) {
        console.log(data);
    }

  return (
    <>
        <div className={"container"}>
            <div className={"product"}>
                <h2>🍌 Bananen</h2>
                <button
                    onClick={() => setBananas (banana > 0 ? banana - 1 : 0)}
                > - </button>
                <p> {banana} </p>
                <button
                    onClick={() => setBananas (banana + 1)}
                > + </button>
            </div>

            <div className={"product"}>
                <h2>🍓 Aardbeien</h2>
                <button
                    onClick={() => setStrawberries (strawberry > 0 ? strawberry -1 : 0)}
                > - </button>
                <p> {strawberry} </p>
                <button
                    onClick={() => setStrawberries (strawberry + 1)}
                > + </button>
            </div>

            <div className={"product"}>
                <h2>🍏 Appels</h2>
                <button
                    onClick={() => setApples (apple > 0 ? apple - 1 : 0)}
                > - </button>
                <p> {apple} </p>
                <button
                    onClick={() => setApples (apple + 1)}
                > + </button>
            </div>

            <div className={"product"}>
                <h2>🥝 Kiwi's</h2>
                <button
                    onClick={() => setKiwis (kiwi > 0 ? kiwi -1 : 0)}
                > - </button>
                <p> {kiwi} </p>
                <button
                    onClick={() => setKiwis (kiwi + 1)}
                > + </button>
            </div>

            <button className={"resetbutton"}
            onClick={()=>{resetNumbers()}}
            >
                Reset
            </button>
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="forname">Voornaam</label>
            <input className={"inputfields"}
                   type="text"
                   id="forname"
                   name="forname"
                   {...register("voornaam",
                       {
                           required: {
                               value: true,
                               message: 'Dit veld mag niet leeg zijn'}
                       }
                       )}
            />
            {errors.voornaam && <p className={"errorMessage"}>{errors.voornaam.message}</p>}

                <label htmlFor="surname">Achternaam</label>
                <input className={"inputfields"}
                       type="text"
                       id="surname"
                       name="surname"
                       {...register("achternaam",
                           {
                               required: {
                                   value: true,
                                   message: 'Dit veld mag niet leeg zijn'}
                           }
                           )}
                />
            {errors.achternaam && <p className={"errorMessage"}>{errors.achternaam.message}</p>}

                <label htmlFor="age">Leeftijd</label>
                <input className={"inputfields"}
                       type="number"
                       id="age"
                       name="age"
                       {...register("age",
                           {
                               required: {
                                   value: true,
                                   message: 'Dit veld mag niet leeg zijn'},
                           min: {
                                   value: 18,
                                   message: "Je moet minimaal 18 jaar of ouder zijn"}
                           }
                           )}
                />
            {errors.age && <p className={"errorMessage"}>{errors.age.message}</p>}

                <label htmlFor="postal">Postcode</label>
                <input className={"inputfields"}
                       type="text"
                       id="postal"
                       name="postal code"
                       {...register("postal",
                           {
                               required: {
                                   value: true,
                                   message: 'Dit veld mag niet leeg zijn'}
                           }
                           )}
                />
            {errors.postal && <p className={"errorMessage"}>{errors.postal.message}</p>}

                <label htmlFor="housenumber">Huisnummer</label>
                <input className={"inputfields"}
                       type="number"
                       id="housenumber"
                       name="housenumber"
                       {...register("huisnummer",
                           {
                               required: {
                                   value: true,
                                   message: 'Dit veld mag niet leeg zijn'}
                           }
                           )}
                />
            {errors.huisnummer && <p className={"errorMessage"}>{errors.huisnummer.message}</p>}

                <h2>Bezorgfrequentie</h2>

                <label htmlFor="everyWeek">
                    <input {...register("frequentie", { required: {
                            value: true,
                            message: 'Dit veld is verplicht'}
                    })} type="radio" value="Iedere week" /> Iedere week
                </label>

                <label htmlFor="everyOtherWeek">
                    <input {...register("frequentie", { required: {
                            value: true,
                            message: 'Dit veld is verplicht'}
                    })} type="radio" value="Om de week" /> Om de week
                </label>

                <label htmlFor="everyMonth">
                    <input {...register("frequentie", { required: {
                            value: true,
                            message: 'Dit veld is verplicht'}
                    })} type="radio" value="Iedere maand" /> Iedere maand
                </label>

                <label htmlFor="other">
                    <input {...register("frequentie", { required: {
                            value: true,
                            message: 'Dit veld is verplicht'}
                    })} type="radio" value="Anders" /> Anders
                </label>

            {errors.frequentie && <p className={"errorMessage"}>{errors.frequentie.message}</p>}

            <label htmlFor="comments">
                Opmerking
            <textarea
            name="comments"
            id="comments"
                   rows="4"
                   cols="40"
            {...register("comments")}
            >
            </textarea>
            </label>

                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        name="terms-and-conditions"
                        id="terms-and-conditions"
                        checked={checkedTerms}
                        onChange={() => toggleCheckedTerms(!checkedTerms)}
                    />
                    Ik ga akkoord met de algemene voorwaarden
                </label>

                <button
                    type="submit"
                    disabled={!checkedTerms}
                    onClick={()=> console.log("Bestelling: ", {"Kiwi's": kiwi}, {"Appels": apple}, {"Aardbeien": strawberry}, {"Bananen": banana})}
                >
                    Verstuur
                </button>

        </form>
    </>
  )
};

export default App;
