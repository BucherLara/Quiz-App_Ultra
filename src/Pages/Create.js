import "./Create.css";
export default function CreateCards() {
  return (
    <fieldset>
      <form>
        <label htmlFor="inputQuestion" aria-labelledby="inputForQuestion">
          <input id="inputQuestion" type="text" placeholder="Question"></input>
        </label>
        <label htmlFor="inputAnswer" aria-labelledby="inputForAnswer">
          <input id="inputAnswer" type="text" placeholder="Answer"></input>
        </label>
        <label htmlFor="inputTags" aria-labelledby="inputFortags">
          <input id="inputTags" type="text" placeholder="Tags"></input>
        </label>
        <button className="submitButton" type="Submit">
          Create New Card
        </button>
      </form>
    </fieldset>
  );
}
